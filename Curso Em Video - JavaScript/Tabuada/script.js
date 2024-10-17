//Authorial resolution

function buttonCount() {
  var inputStart = document.getElementById('input-start')
  var result = document.querySelector('textarea#res')

  if (inputStart.value.length == 0) {
    alert('Não é possivel calcular, digite um valor.')
  } else {
    var start = parseInt(inputStart.value)
    if(start === 0){
      alert('Não existe multiplicação por zero, vamos considerar o 1.')
      start = 1
    }
    result.innerHTML = ''
    for (var i = 1; i <= 10; i++) {
      var tabuada = i * start
      result.innerHTML += `${start} x ${i} = ${tabuada}\n`
      console.log(tabuada, 'tamo aqui')
    }

  }
}

//Curse resolution
function tabuada () {
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')

  if(num.value.length == 0) {
    window.alert('Por favor, digite um número!')
  } else {
    let n = Number(num.value)
    let c = 1
    while(c <= 10){
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n * c}`
      tab.appendChild(item)
      c++
    }
  }
}