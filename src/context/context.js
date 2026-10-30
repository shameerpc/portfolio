import { createContext } from 'react';

export const ACHIEVEMENTS_LIST = [
  { id: 'explorer', icon: '🏆', title: 'Explorer', desc: 'Explored selected project missions' },
  { id: 'curious', icon: '🪙', title: 'Curious', desc: 'Executed commands in the terminal' },
  { id: 'recruiter', icon: '⭐', title: 'Recruiter-ready', desc: 'Downloaded the CV resume' },
  { id: 'connected', icon: '💬', title: 'Connected', desc: 'Initiated direct WhatsApp conversation' },
  { id: 'bilingual', icon: '🌍', title: 'Bilingual', desc: 'Switched language between English and Arabic' },
  { id: 'director', icon: '🎬', title: "Director's cut", desc: 'Mounted and played the video showreel' },
  { id: 'secret_agent', icon: '🗝️', title: 'Treasure Hunter', desc: 'Discovered all 3 hidden gold coins' },
];

export const GameContext = createContext(null);
