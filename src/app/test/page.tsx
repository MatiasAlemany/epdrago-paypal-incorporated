"use client";
import LeaveTestimonyDialog from "@/components/course/LeaveTestimonyDialog";
import React from "react";

const Test = () => {
  return (
    <div className="h-screen pt-40 flex justify-center items-center">
      <LeaveTestimonyDialog
        course_id="ca025f2c-400a-4cd2-910f-16adb3a302f2"
        onSent={() => {
          console.log("Uploaded");
        }}
      />
    </div>
  );
};

export default Test;
