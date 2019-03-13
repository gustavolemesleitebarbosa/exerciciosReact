const MegaSena = props => {
  const [min, max] = [1, 60]
  const numeros = Array(props.numeros || 6).fill(0)

  for (let i = 0; i < numeros.length; i++) {
    let novo = 0
    while (numeros.includes(novo)) {
      novo = Math.floor(Math.random() * (max - min + 1)) + min
      console.log(novo)
    }
    numeros[i] = novo
  }
  numeros.sort((a, b) => a - b)
  return numeros.join(' ')
}

console.log('la')
let props1 = {numeros: 6}
console.log(MegaSena(props1))
