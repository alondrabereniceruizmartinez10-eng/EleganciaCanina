export function quoteRequestTemplate(data:any){

  return `
  <h2>Nueva solicitud de cita</h2>

  <p><b>Cliente:</b> ${data.client.name}</p>
  <p><b>Mascota:</b> ${data.pet.name}</p>
  <p><b>Servicio:</b> ${data.service.name}</p>
  <p><b>Fecha:</b> ${data.date}</p>
  `
}

export function quoteAcceptedTemplate(data:any){

  return `
  <h2>Tu cita fue confirmada</h2>

  <p>Hola ${data.client.name}</p>

  <p>Tu cita para <b>${data.service.name}</b> fue confirmada.</p>

  <p>Mascota: ${data.pet.name}</p>
  <p>Fecha: ${data.date}</p>
  `
}