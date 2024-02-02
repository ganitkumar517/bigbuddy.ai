// components/SaveExport.js
import React from 'react';
import styles from '../styles/saveExport.module.css';

interface SaveExportProps {
    onSave: any;
    onExport: any;
}

const SaveExport: React.FC<SaveExportProps> = ({ onSave, onExport }) => {
    return (
        <div className={styles.saveExport}>
            <button onClick={onSave}>Save</button>
            <button onClick={onExport}>Export</button>
        </div>
    );
}

export default SaveExport;
