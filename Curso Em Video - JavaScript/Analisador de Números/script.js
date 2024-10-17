//Authorial resolution
var isValid = [];
let numberAdd = [];
let result = document.querySelector('div#res');

function numberAnalyzer() {
  let arrayNumber = document.getElementById('txtn')
  let select = document.getElementById('seltab');
  let option = document.createElement('option');

  if (arrayNumber.value.length === 0) {
    window.alert('Adicione valores antes de Finalizar!')
  } else {
    if (select.options[0].text === 'Digite um número acima') {
      select.options[0].remove();
    }
    var num = Number(arrayNumber.value)
    if (num > 100 || num == 0) {
      alert('Digite um valor entre 1 e 100')
    } else {
      addNumberToArray(num, select, option)
      arrayNumber.value = ''
      arrayNumber.focus()
    }
  }
}

function finish() {
  if (isValid.length === 0) {
    window.alert('Adicione números antes de finalizar!');
  } else {
    let total = isValid.length;
    let maior = Math.max(...isValid);
    let menor = Math.min(...isValid);
    let soma = isValid.reduce((a, b) => a + b, 0);
    let media = soma / total;

    let result = document.getElementById('res');
    result.innerHTML = '';
    result.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`;
    result.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
    result.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
    result.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
    result.innerHTML += `<p>A média dos valores é ${media.toFixed(2)}.</p>`;
  }
}

function addNumberToArray(num, select, option) {
  if (isValid.indexOf(num) != -1) {
    window.alert(`Valor ${num} já é existente`)
  } else {
    isValid.push(num)
    option.text += `Valor ${num} adicionado`;
    option.value += num;
    select.appendChild(option);
    console.log(isValid, num, 'Estamos aqui')
  }
}


//Course resolution
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}

function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  if (isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado.`
    lista.appendChild(item)
    res.innerHTML = ''
  } else {
    window.alert('Valor inválido ou ja encontrado na lista.')
  }
  num.value = ''
  num.focus()
}

function finalizar() {
  if (valores.length == 0) {
    window.alert('Adicione valores antes de finalizar!')
  } else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0
    for (let pos in valores) {
      soma += valores[pos]
      if (valores[pos] > maior)
        maior = valores[pos]
      if (valores[pos] < menor)
        menor = valores[pos]
    }

    media = soma / tot
    res.innerHTML = ''
    res.innerHTML += `<p> Ao todo, temos ${tot} números cadastrados. </p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media}</p>`

  }
}