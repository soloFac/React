export function getDifYear (year) {
  return new Date().getFullYear() - year
}

export function calcularMarca (marca) {
  let incremento

  switch (marca) {
  case 'europeo':
    incremento = 1.30
    break
  case 'americano':
    incremento = 1.15
    break
  case 'asiatico':
    incremento = 1.5
    break

  default:
    break
  }
  return incremento
}

export function calcularPlan (plan) {
  return (plan === 'basico') ? 1.20 : 1.50
}

export function capitalize (palabra) {
  return palabra.charAt(0).toUpperCase() + palabra.slice(1)
}
