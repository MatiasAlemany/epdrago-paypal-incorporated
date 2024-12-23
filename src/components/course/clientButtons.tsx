// ClientButtons.tsx
"use client";

import React from "react";
import { Button } from "@nextui-org/react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import MercadoPagoIcon from "../MercadoPago_Icon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { buyCourse } from "@/lib/actions/buy_course";
import createOrder from "@/lib/actions/create-order-paypal";
import handleApprove from "@/lib/actions/capture-order-paypal";

interface ClientButtonsProps {
  user: boolean; // Estado del usuario
  id: string; // ID del curso
}

const ClientButtons: React.FC<ClientButtonsProps> = ({ user, id }) => {
  console.log("ID DEL CURSO", id)
  return (
    <div className="flex gap-4 flex-col md:flex-row">
      {/* Botón de MercadoPago */}
      <form action={buyCourse}>
        <input type="hidden" name="course_id" defaultValue={id} />
        <TooltipProvider>
          <Tooltip>
            <div>
              <Button
                type="submit"
                disabled={!user}
                color="primary"
                className="font-bold disabled:bg-gray-800 disabled:text-gray-400 w-full md:w-auto"
              >
                <MercadoPagoIcon /> Comprar
              </Button>
            </div>
            <TooltipContent>
              <p>Para poder comprar debes estar registrado!</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </form>

      {/* Botón de PayPal */}
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            {user ? (
              <PayPalScriptProvider
                options={{
                  clientId:
                    "AXCCukrygC3WNFHTw9hwAi9MhjU9cGVrc7RVPra1xVp_h6p3XTTqn37Q9taKZyIYQSEG9qTXu4DZDiBw",
                }}
              >
                <PayPalButtons
                  style={{
                    layout: "horizontal",
                    color: "gold",
                    height: 40,
                    shape: "sharp",
                    disableMaxWidth: true, // Ajusta el ancho al completo en md y lg
                  }}
                  createOrder={() => {
                    return createOrder(id);
                }}
                onApprove={handleApprove}
                />
              </PayPalScriptProvider>
            ) : (
              <Button
                disabled
                className="font-bold bg-gray-800 text-gray-400 w-full md:w-auto"
              >
                PayPal
              </Button>
            )}
          </TooltipTrigger>
          <TooltipContent>
            <p>Para poder comprar debes estar registrado!</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default ClientButtons;
