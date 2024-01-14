"use client";

import useWindowDimensions from "@/lib/hook/useWindowDimensions";
import React from "react";
import YouTube from "react-youtube";

const YoutubePlayerCourse = ({ videoId }: { videoId: string }) => {
  const { width } = useWindowDimensions();

  return (
    <div>
      <YouTube
        opts={{
          width: width > 500 ? width / 2 : width - 40,
          height: width > 500 ? (width * 0.5625) / 2 : 400,
        }}
        videoId={videoId}
      />
    </div>
  );
};

export default YoutubePlayerCourse;
