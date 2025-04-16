function check(){
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.querySelector("input#txtyear") //formulario ano
    var answer =  document.querySelector("div#answer")
    if(fyear.value.length == 0 || Number(fyear.value) > year || Number(fyear.value) < 1900 ){ 
        //length é para verificar se o comprimento é igual a 0
        alert("verifique os dados e tente novamente")
    } else {
        var fsex = document.getElementsByName('radsex') //fsex formulario sexo
        var age = year - Number(fyear.value)
        var gênero = ""
        var img = document.createElement('img')
        img.setAttribute('id' , 'photo')     
       if (fsex[0].checked){  // usamos get name por id é diferente para diferenciar masculino e feminino mas o name é igual para que apenas um possa ser selecionado por vez [0] é a priemira posicao equivalendo nesse caso ao id masculino e [1] referindo ao id feminino
        gênero = 'Homem'
        if(age >=0 && age < 10) {
           img.setAttribute('src' ,'image/child_man.png')
        } else if (age < 21) {
            img.setAttribute('src', 'image/teenage_man.png')
        }
        else if (age <= 50) {
           img.setAttribute('src' , 'image/man_adult.png')
        } else {
            img.setAttribute('src' , 'image/oldman_elderly.png')
        }

       } else if (fsex[1].checked){
        gênero = 'Mulher'

        if (age >= 0 && age < 10){
            img.setAttribute('src' , 'image/child_woman.png')
        } else if(age < 21) {
            img.setAttribute('src' , 'image/teenage_woman.png')
        } else if (age < 50){
            img.setAttribute('src' , 'image/adult_woman.png')
        } else {
            img.setAttribute('src' , 'image/oldwoman.png')
        }
       }
       answer.innerHTML = `${age} e ${gênero}` 
       answer.appendChild(img)


       /*  answer.innerHTML = `idade calculada: ${age} ano(s)`  teste para ver se a idade da funcionando*/
       /* answer.style.textAlign = 'center' para deixar o texto alinhado atraves do javascript */
      

    }
}