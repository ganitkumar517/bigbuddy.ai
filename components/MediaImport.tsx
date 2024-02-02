// components/MediaImport.tsx
import React, { useState } from 'react';
import styles from '../styles/mediaImport.module.css';

interface MediaImportProps {
    onMediaDrop: (files: FileList | null) => void;
}

const MediaImport: React.FC<MediaImportProps> = ({ onMediaDrop }) => {
    const [dragging, setDragging] = useState(false);

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = () => {
        setDragging(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        onMediaDrop(files);
        setDragging(false);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        onMediaDrop(files);
    };

    return (
        <div
            className={`${styles.mediaImport} ${dragging ? styles.dragging : ''}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
        >
            <p>Drag and drop video files here</p>
            <input
                style={{ margin: "20px" }}
                type='file'
                onChange={handleInputChange}
            />
        </div>
    );
}

export default MediaImport;
