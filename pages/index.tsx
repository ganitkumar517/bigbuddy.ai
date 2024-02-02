// pages/index.js
import React, { useState } from 'react';
import Head from 'next/head';
import Timeline from '../components/Timeline';
import PreviewWindow from '../components/PreviewWindow';
import MediaImport from '../components/MediaImport';
import SaveExport from '../components/SaveExport';

const IndexPage = () => {
  const [videoUrl, setVideoUrl] = useState<string | undefined>(undefined);

  const handleMediaDrop = (files: FileList | null) => {
    if (files && files.length > 0) {
      const file = files[0];
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
    }
  };


  const handleSave = () => {
    console.log('Project data saved');
  };

  const handleExport = () => {
    console.log('Project exported');
  };

  return (
    <div>
      <Head>
        <title>Video Editor</title>
        <meta name="description" content="Web-based video editor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Video Editor</h1>
        <div className="editor-container">
          <Timeline />
          <div className="preview-and-import">
            <PreviewWindow videoUrl={videoUrl} />
            <MediaImport onMediaDrop={handleMediaDrop} />
          </div>
        </div>
        <SaveExport onSave={handleSave} onExport={handleExport} />
      </main>

      <style jsx global>{`
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
            Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default IndexPage;
