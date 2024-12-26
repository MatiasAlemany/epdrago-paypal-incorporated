export default function createOrder(id: string): Promise<string> {
  console.log("Datos enviados al backend:", {
    course_id: id,
  });

  return fetch("/api/create-paypal-order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // use the "body" param to optionally pass additional order information
    // like product ids and quantities
    body: JSON.stringify({
      course_id: id, // Enviando "course_id"
      quantity: "1",
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Error al crear la orden en el backend");
      }
      return response.json();
    })
    .then((order) => {
      console.log("Orden creada en PayPal:", order);
      return order.orderID; // Aquí debes devolver el ID de la orden
    })
    .catch((error) => {
      console.error("Error en createOrder:", error);
      throw error; // Asegúrate de manejar errores correctamente
    });
}
