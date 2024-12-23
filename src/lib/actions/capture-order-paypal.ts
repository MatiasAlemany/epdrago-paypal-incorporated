import { OnApproveData, OnApproveActions } from "@paypal/paypal-js";

const handleApprove = async (data: OnApproveData, actions: OnApproveActions): Promise<void> => {
  try {
    console.log("Datos recibidos en onApprove:", data);

    // Enviar el orderId al backend para capturar el pago
    const response = await fetch("/api/capture-paypal-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        orderId: data.orderID, // `orderID` viene del objeto `data` proporcionado por PayPal
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Error al capturar el pago en el backend:", errorData);
      throw new Error(errorData.error || "Error desconocido al capturar el pago");
    }

    const result = await response.json();
    console.log("Pago capturado exitosamente:", result);

    // Aquí puedes manejar el éxito (por ejemplo, mostrar un mensaje de éxito o redirigir al usuario)
    alert("¡Pago capturado exitosamente!");
  } catch (error) {
    console.error("Error en onApprove:", error);
    alert("Hubo un problema al procesar el pago. Por favor, intenta nuevamente.");
  }
};

export default handleApprove;
