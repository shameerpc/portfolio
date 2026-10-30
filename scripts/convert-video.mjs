import { execFile } from 'node:child_process';
import { promisify } from 'node:util';
import fs from 'node:fs';
import path from 'node:path';
import ffmpegPath from 'ffmpeg-static';

const execFileAsync = promisify(execFile);

async function run() {
  const root = process.cwd();
  const input = path.join(root, 'public', 'videos', 'copy_8F66225F-B2F5-4B63-8D6C-3FE20851FF28.mov');
  const outDir = path.join(root, 'public', 'videos');
  const backupDir = path.join(root, 'assets-source', 'videos');

  if (!fs.existsSync(input)) {
    console.error('Input video not found at:', input);
    process.exit(1);
  }

  const outMp4 = path.join(outDir, 'showreel.mp4');
  const outWebm = path.join(outDir, 'showreel.webm');
  const outPoster = path.join(outDir, 'showreel-poster.jpg');

  console.log('Using ffmpeg binary:', ffmpegPath);
  console.log('Input file size:', (fs.statSync(input).size / (1024 * 1024)).toFixed(2), 'MB');

  // 1. Extract high-res poster frame at 1s mark
  console.log('Extracting poster frame...');
  await execFileAsync(ffmpegPath, [
    '-y',
    '-ss', '00:00:01.000',
    '-i', input,
    '-vframes', '1',
    '-q:v', '2',
    outPoster,
  ]);
  console.log('Poster generated:', outPoster, (fs.statSync(outPoster).size / 1024).toFixed(1), 'KB');

  // 2. Convert to optimized H.264 MP4 (720p, 24-30fps, crf 26, faststart, stereo aac)
  console.log('Encoding H.264 MP4 (target <= 8 MB)...');
  await execFileAsync(ffmpegPath, [
    '-y',
    '-i', input,
    '-vf', 'scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2',
    '-c:v', 'libx264',
    '-crf', '26',
    '-preset', 'slow',
    '-profile:v', 'main',
    '-pix_fmt', 'yuv420p',
    '-movflags', '+faststart',
    '-c:a', 'aac',
    '-b:a', '128k',
    outMp4,
  ]);
  const mp4SizeMB = fs.statSync(outMp4).size / (1024 * 1024);
  console.log(`MP4 generated: ${outMp4} (${mp4SizeMB.toFixed(2)} MB)`);

  // 3. Convert to WebM fallback (VP9, crf 33)
  console.log('Encoding WebM fallback...');
  await execFileAsync(ffmpegPath, [
    '-y',
    '-i', input,
    '-vf', 'scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2',
    '-c:v', 'libvpx-vp9',
    '-crf', '34',
    '-b:v', '0',
    '-c:a', 'libopus',
    '-b:a', '96k',
    outWebm,
  ]);
  const webmSizeMB = fs.statSync(outWebm).size / (1024 * 1024);
  console.log(`WebM generated: ${outWebm} (${webmSizeMB.toFixed(2)} MB)`);

  // 4. Safely move original .mov to assets-source/videos/
  fs.mkdirSync(backupDir, { recursive: true });
  const backupFile = path.join(backupDir, path.basename(input));
  console.log(`Moving original .mov outside public/ to ${backupFile}...`);
  fs.copyFileSync(input, backupFile);
  fs.unlinkSync(input);
  console.log('Original safely archived in assets-source/ and removed from public/ folder.');

  console.log('Video optimization completed successfully!');
}

run().catch((err) => {
  console.error('Error during video optimization:', err);
  process.exit(1);
});
