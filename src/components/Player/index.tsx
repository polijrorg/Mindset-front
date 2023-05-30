/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/no-unescaped-entities */
import React, { useRef, useEffect } from 'react';

interface VideoPlayerProps {
    videoLink: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoLink }) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.src = videoLink;
        }
    }, [videoLink]);

    return (
        <div>
            <video ref={videoRef} controls width="100%" height="auto">
                Sorry, your browser doesn't support embedded videos.
            </video>
        </div>
    );
};

export default VideoPlayer;
