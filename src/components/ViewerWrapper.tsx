import * as React from 'react';
import { Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import styles from '@react-pdf-viewer/core/lib/styles/index.css?inline';
import viewstyles from '@react-pdf-viewer/default-layout/lib/styles/index.css?inline';

interface ViewerWrapperProps {
    fileUrl: string;
}

const ViewerWrapper: React.FC<ViewerWrapperProps> = ({ fileUrl }) => {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
    <>
    <style>{styles}</style>
    <style>{viewstyles}</style>
    <Viewer fileUrl={fileUrl} plugins={[defaultLayoutPluginInstance]} />
    </>
    );
};

export default ViewerWrapper;