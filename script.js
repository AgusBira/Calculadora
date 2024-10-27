function sumar(){
    const valorInput1 = Number(document.getElementById("input-1").value)
    const valorInput2 = Number(document.getElementById("input-2").value)
    let display = document.querySelector("#textoDisplay")
    if(!isNaN(valorInput1) && !isNaN(valorInput2)){
        display.innerHTML = valorInput1 + valorInput2
    }else{
        display.innerHTML = "Syntax Error"
    }
}
function restar(){
    const valorInput1 = Number(document.getElementById("input-1").value)
    const valorInput2 = Number(document.getElementById("input-2").value)
    let display = document.querySelector("#textoDisplay")
    if(!isNaN(valorInput1) && !isNaN(valorInput2)){
        
        display.innerHTML = valorInput1 - valorInput2
    }else{
        display.innerHTML = "Syntax Error"
    }
}
function producto(){
    const valorInput1 = Number(document.getElementById("input-1").value)
    const valorInput2 = Number(document.getElementById("input-2").value)
    let display = document.querySelector("#textoDisplay")
    if(!isNaN(valorInput1) && !isNaN(valorInput2)){
        display.innerHTML = valorInput1 * valorInput2
    }else{
        display.innerHTML = "Syntax Error"
    }
    
}
function division(){
    const valorInput1 = Number(document.getElementById("input-1").value)
    const valorInput2 = Number(document.getElementById("input-2").value)
    let display = document.querySelector("#textoDisplay")
    if(!isNaN(valorInput1) && !isNaN(valorInput2)){
        if(valorInput2 === 0){
            display.innerHTML = "Math Error"
        }else{  
        display.innerHTML = valorInput1 / valorInput2
        }
    }else{
        display.innerHTML = "Syntax Error"
    }
}


