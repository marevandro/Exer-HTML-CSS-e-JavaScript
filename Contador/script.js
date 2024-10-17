//authorial resolution
function buttonCount() {
  var inputStart = document.getElementById('input-start')
  var inputEnd = document.getElementById('input-end')
  var inputStep = document.getElementById('input-step')
  var result = document.querySelector('div#res')

  if (inputStart.value.length == 0 || inputEnd.value.length == 0) {
    result.innerHTML = 'Impossivel contar!'
  } else {
    if (inputStep.value.length === 0) {
      alert('Passo inválido! Considerando PASSO 1')
      inputStep.value = 1
    }

    var start = parseInt(inputStart.value)
    var end = parseInt(inputEnd.value)
    var step = parseInt(inputStep.value)

    result.innerHTML = 'Contando:<br> '
    if (start < end) {
      do {
        result.innerHTML += `${start} 👉`
        console.log(start, "aqui")
        start = start + step;
      } while (start <= end)

    } else {
      do {
        result.innerHTML += `${start} 👉`
        console.log(start, "aqui")
        start = start - step;
      } while (start >= end)
    }
    result.innerHTML += '🏴'
  }

}


//course resolution
function contar() {
  let ini = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let passo = document.getElementById('txtp')
  let res = document.getElementById('res')

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
    res.innerHTML = 'Impossivel contar!'
    window.alert('[ERRO] Faltam dados!')
  } else {
    res.innerHTML = 'Contando: <br>'
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if(p <= 0){
      window.alert('Passo inválido! Considerando PASSO 1')
      p = 1
    }
    if (i < f) {
      //Contagem crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1F449}`
      }
    } else {
      //Contagem regressiva
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`
      }
    }
    res.innerHTML += `\u{1F3C1}`
  }
}

//Basta usar a função no html