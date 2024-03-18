import React, { useState } from 'react';
import './InstallButton.css';

const InstallButton = () => {
  const [downloading, setDownloading] = useState(false);
  const [installed, setInstalled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [installing, setInstalling] = useState(false);
  const [showOpenButton, setShowOpenButton] = useState(false);
  const totalSizeMB = 12.5;

  const handleDownload = async () => {
    setDownloading(true);

    for (let i = 0; i <= 100; i += 10) {
      await new Promise(resolve => setTimeout(resolve, 500));
      setProgress(i);
    }

    setDownloading(false);
    setInstalled(true);
  };

  const handleInstall = async () => {
    setInstalling(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    setInstalling(false);
    setShowOpenButton(true);
  };

  const handleOpen = () => {
    window.open('https://www.youtube.com', '_self');
  };

  return (
    <div className="install-button-container">
      {!downloading && !installed && (
        <button onClick={handleDownload} className="install-button">
          Download
        </button>
      )}
      {downloading && (
        <div className="progress-wrapper">
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      )}
      {downloading && (
        <p className="progress-label">{(progress / 100 * totalSizeMB).toFixed(2)} MB / {totalSizeMB} MB</p>
      )}
      {installing && (
        <button className="install-button installing-button" disabled>
          Installing...
        </button>
      )}
      {!downloading && installed && !showOpenButton && !installing && (
        <button onClick={handleInstall} className="install-button">
          Install
        </button>
      )}
      {showOpenButton && (
        <button onClick={handleOpen} className="open-button">
          Open
        </button>
      )}
    </div>
  );
};

export default InstallButton;
