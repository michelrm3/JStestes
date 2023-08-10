function contar(){
    var i = window.document.getElementById("txtinicio")
    var f = window.document.querySelector("#txtfim")
    var p = window.document.querySelector("#txtpasso")
    var res = document.querySelector("#res")

    if(i>f || p<1){
        window.alert('Valores incorretos')
    }else{
        i = Number(i.value)
        f = Number(f.value)
        p = Number(p.value)

        res.innerHTML = '<p>Contando...</p>'
        for (var j = i; j < f; j=j+p) {
            res.innerHTML += j + `\u{1F341}`
        }
    }

}


