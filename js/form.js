document.querySelector("#submit").addEventListener("click", e => {
  e.preventDefault();

  //INGRESE UN NUMERO DE WHATSAPP VALIDO AQUI:
  const telefono = "+584129272908";

  const cliente = document.querySelector("#cliente").value;
  const empresa = document.querySelector("#empresa").value;
  const telef = document.querySelector("#telef").value;
  const email = document.querySelector("#email").value;
  const mensaje = document.querySelector("#mensaje").value;
  const resp = document.querySelector("#respuesta");

  resp.classList.remove("fail");
  resp.classList.remove("send");

  const url = `https://api.whatsapp.com/send?phone=${telefono}&text=
		*_2T LOGISTICS_*%0A
		*Solicitud de Cotización*%0A%0A
		*Nombre completo*%0A
		${cliente}%0A
		*Empresa*%0A
		${empresa}%0A
		*Telefono de contacto*%0A
		${telef}%0A
		*Correo electronico*%0A
		${email}%0A
    *Mensaje*%0A
		${mensaje}%0A
		`;

  if (cliente === "" || telef === "" || email === "") {
    resp.classList.add("fail");
    resp.innerHTML = `Faltan algunos datos, ${cliente}`;
    return false;
  }
  resp.classList.remove("fail");
  resp.classList.add("send");
  resp.innerHTML = `Se ha enviado tu requerimento, ${cliente}`;

  window.open(url);
});
