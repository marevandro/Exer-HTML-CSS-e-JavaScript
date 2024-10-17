function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var formularioAno = document.getElementById('txtano')

  var result = document.querySelector('div#res')

  if(formularioAno.value.length == 0 || formularioAno.value > ano){
    window.alert('[ERRO] Verifique os dados e tente novamente!')
  }else{
    var sexo = document.getElementsByName('radsex')
    var idade = ano - Number(formularioAno.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    if(sexo[0].checked){
      genero = 'Homem'
      if(idade >= 0 && idade < 10){
        //Criança
        img.setAttribute('src', 'img/criança-pequena.png')
      }else if(idade < 21){
        img.setAttribute('src', 'img/jovem-h.png')
      }else if(idade < 50){
        //Adulto
        img.setAttribute('src', 'img/adulto-h.png')
      }else{
        //Idoso
        img.setAttribute('src', 'img/idoso.png')
      }
    }else if(sexo[1].checked){
      genero = 'Mulher'
      if(idade >= 0 && idade < 10){
        //Criança
        img.setAttribute('src', 'img/criança-pequena-2.png')
      }else if(idade < 21){
        //Jovem
        img.setAttribute('src', 'img/jovem-m.png')
      }else if(idade < 50){
        //Adulto
        img.setAttribute('src', 'img/adulta-m.png')
      }else{
        //Idosa
        img.setAttribute('src', 'img/idosa.png')
      }
    }
    result.style.textAlign = 'center'
    result.style.display = 'flex'
    result.style.flexDirection = 'column'

    result.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    result.appendChild(img)
  }
}