"use client";

import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PayPalButton() {

  return (
    <PayPalScriptProvider options={{ clientId: process.env.PAYPAL_CLIENT_ID as string }}>
      <PayPalButtons style={{ layout: "vertical" }} />
    </PayPalScriptProvider>
  );
}
