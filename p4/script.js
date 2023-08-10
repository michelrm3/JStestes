function contar(){
    let i = window.document.getElementById("txtinicio")
    let res = document.querySelector("#resultado")

    if(i<=0){
        window.alert('Valor incorreto')
    }else{
        res.innerHTML = ' '
        i = Number(i.value)
        let j = 1
        
        while (j <= 10) {
            //let item = document.createElement('option')
            //item.text = `${i} X ${j} = ${i*j}`
            //item.value = `tab${j}`
            //res.appendChild(item)

            res.innerHTML += `<li>${i} X ${j} = ${i*j}</li>`
            

            j++
        }
    }

}


