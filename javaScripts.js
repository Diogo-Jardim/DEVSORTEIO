const botaoSortear = document.querySelector(".botao-sortear")

function gerarNumero() {
  
    const entre = Math.ceil(document.querySelector(".input-entre").value)
    const e = Math.floor(document.querySelector(".input-e").value)

   
    
    if (entre >= e) {
        alert("O valor Minimo tem que ser MENOR QUE O VALOR MAXIMO!!!")
    }

    else {
        const result = Math.floor(Math.random ()* (e - entre + 1)) + entre;
        
        alert(result)
    }

}


botaoSortear.addEventListener("click", gerarNumero)