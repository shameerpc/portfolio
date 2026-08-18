import { FiLinkedin, FiGithub } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-left">
            SPC<span className="dot" />
          </div>
          <div className="footer-center">
            © {new Date().getFullYear()} Shamseer PC. All rights reserved. Built with React.js
          </div>
          <div className="footer-right">
            <a href="https://linkedin.com/in/shamseer-tech" className="footer-social" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href="https://github.com/shameerpc" className="footer-social" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
