// components/PreviewWindow.js
import React from 'react';
import ReactPlayer from 'react-player';
import styles from '../styles/previewWindow.module.css';

interface PreviewWindow {
    videoUrl: any
}

const PreviewWindow: React.FC<PreviewWindow> = ({ videoUrl }) => {
    return (
        <div className={styles.previewWindow}>
            <ReactPlayer
                url={videoUrl}
                controls
                width="100%"
                height="100%"
            />
        </div>
    );
}

export default PreviewWindow;
