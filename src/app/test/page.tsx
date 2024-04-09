"use client";
import LeaveTestimonyDialog from "@/components/course/LeaveTestimonyDialog";
import { testPaymentAccess } from "@/lib/payments/test_payment_search";
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
      <form action={testPaymentAccess}>
        <button>test</button>
      </form>
    </div>
  );
};

export default Test;
