import { ModuleVideoType } from "@/lib/db/schema/modules_items";
import React from "react";
import YoutubePlayerCourse from "../course/YoutubePlayer";
import { youtube_parser } from "@/lib/helpers/youtube_parser";
import { Button } from "@nextui-org/react";
import ModuleNavigationTimeline, {
  ModuleNavigationI,
} from "./ModuleNavigation";

const ModuleVideo = ({
  moduleVideo,
}: {
  moduleVideo: ModuleVideoType;
}) => {
  const videoUrl = youtube_parser(moduleVideo.video_url!);

  return (
    <div className="flex justify-center items-center flex-col ">
      <div className="max-w-[1080px]">
        <h1 className="font-bold text-3xl pb-4 ">
          Modulo: {moduleVideo.title}
        </h1>
        {!videoUrl ? (
          <div>Not found</div>
        ) : (
          <YoutubePlayerCourse videoId={videoUrl} />
        )}

        {/* <ModuleNavigationTimeline navigationTimeline={module_navigation} /> */}
      </div>
    </div>
  );
};

export default ModuleVideo;
