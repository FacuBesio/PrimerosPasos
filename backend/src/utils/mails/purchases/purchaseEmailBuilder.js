const purchaseEmailBuilder = (purchase) => {
  let totalPrice = 0;
  let purchaseEmail = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Purchase Email</title>
    <style>
          /* Estilos CSS */
          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
            font-size: 16px; /* Tamaño de texto más grande para la tabla */
          }
          th, td {
            border: 1px solid #dddddd;
            text-align: left;
            padding: 12px; /* Aumenta el espacio entre el texto y los bordes */
          }
          th {
            background-color: #d8bfd8; /* Morado más claro para los encabezados */
            color: #000000; /* Texto negro para los encabezados */
          }
          .product-img {
            width: 50px; /* Tamaño original de las imágenes */
            height: auto;
          }
          .total-price {
            font-weight: bold;
            border-top: 2px solid #d8bfd8; /* Línea divisoria morada más clara para el total price */
            padding-top: 12px; /* Añade espacio superior al total price */
          }
          /* Textos centralizados */
          h1, h2, h3 {
            text-align: center;
          }
        </style>
  </head>
  <body>
    <h1>🐾PrimerosPasos🐾</h1>
    <img src="https://res.cloudinary.com/petpalacecloudinary/image/upload/v1713049537/Compra_harhl2.png" alt="PetPalace" style="display: block; margin: auto; max-width: 200px;"> <!-- Ajuste del tamaño de la imagen -->
    <h1>Gracias por tu compra</h1>
    <h2>Aquí te dejamos un resumen:</h2>
    <table>
      <thead>
        <tr>
          <th>Producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>`;
  try {
    // Agrega la fila de la tabla con el nombre, cantidad, precio y la imagen del producto
    for (const order of purchase.orders) {
      for (const product of order.products) {
        let productTotalPrice = product.cantidad * product.price;
        totalPrice += productTotalPrice;
        purchaseEmail += `
              <tr>
                <td>
                    <img src="${product.img}" alt="${product.name}" class="product-img">
                    ${product.name} 
                </td>
                <td>${product.cantidad}</td>
                <td>$${product.price}</td>
                <td>$${productTotalPrice}</td>
              </tr>
            `;
      }
    }

    // Agrega la fila del total price
    purchaseEmail += `
          <tr class="total-price">
            <td colspan="3">Total Price</td>
            <td>$${totalPrice}</td>
          </tr>
        </tbody>
      </table>
      <h2>Esperamos que hayas disfrutado nuestra tienda, te esperamos nuevamente!</h2>
      <img src="https://res.cloudinary.com/petpalacecloudinary/image/upload/v1713049750/Purcharse_tytqml.webp" alt="PetPalace" style="display: block; margin: auto; max-width: 300px;"> <!-- Ajuste del tamaño de la imagen -->
    </body>
  </html>
  `;

    return purchaseEmail;
  } catch (error) {
    console.log(error);
  }
};

module.exports = purchaseEmailBuilder;
