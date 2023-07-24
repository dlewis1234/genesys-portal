import React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import guide from 'assets/pdf/Genesys-Expanded-Players-Guide.pdf';
// Your render function
const DefaultLayoutExample = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div
      style={{
        height: '100%'
      }}
    >
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.8.162/build/pdf.worker.min.js">
        <Viewer fileUrl={guide} plugins={[defaultLayoutPluginInstance]} />
      </Worker>
    </div>
  );
};

export default DefaultLayoutExample;
