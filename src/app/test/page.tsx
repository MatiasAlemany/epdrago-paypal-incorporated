import LeaveTestimonyDialog from "@/components/course/LeaveTestimonyDialog";
import { Button } from "@/components/ui/button";
import { manualBuyCourse } from "@/lib/actions/manual_buy_course";
import { testPaymentAccess } from "@/lib/payments/test_payment_search";
import { useIsAdmin } from "@/utils/useIsAdmin";
import { Input } from "@nextui-org/react";
import { redirect } from "next/navigation";
import React from "react";

const Test = async () => {
  const admin = await useIsAdmin();
  if (process.env.NODE_ENV == "test") {
    return redirect("/");
  }

  if (admin == null) {
    return <div>No tines acceso</div>;
  }
  console.log(admin.id);
  return (
    <div className="h-screen pt-40 flex justify-center items-center">
      {/* <LeaveTestimonyDialog
        course_id="ca025f2c-400a-4cd2-910f-16adb3a302f2"
        onSent={() => {
          console.log("Uploaded");
        }}
      /> */}
      <form
        action={manualBuyCourse}
        className="flex flex-col items-center space-y-2"
      >
        <Input placeholder="USER ID" name="user_id" />
        <Input placeholder="COURSE ID" name="course_id" />
        <Button type="submit">Subir</Button>
      </form>
      <form action={testPaymentAccess}>
        <button>test</button>
      </form>
    </div>
  );
};

export default Test;
