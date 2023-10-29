function randomIntFromInterval(min, max) { //
    return Math.floor(Math.random() * (max - min + 1) + min)
}
  

function start (){
    const player11 = randomIntFromInterval(1, 3)
    const player12 = randomIntFromInterval(1, 3)
    const player21 = randomIntFromInterval(1, 3)
    const player22 = randomIntFromInterval(1, 3)
    console.log(player11)
    console.log(player12)
    console.log(player21)
    console.log(player22)
    d11=document.querySelector("#dice11")
    d12=document.querySelector("#dice12")
    d21=document.querySelector("#dice21")
    d22=document.querySelector("#dice22")
    v11= ''
    v12=''
    v21=''
    v22=''
    for( i = 0;i<player11;i++){
        v11 +='<div id="circles"></div>'
    }
    for( i = 0;i<player12;i++){
        v12 +='<div id="circles"></div>'
      }
    for( i = 0;i<player21;i++){
        v21 +='<div id="circles"></div>'
      }
    for( i = 0;i<player22;i++){
        v22+='<div id="circles"></div>'    
    }
    console.log(v11)

    document.querySelectorAll("#dice").forEach(function (e){
        e.classList.add("pressed")
        setTimeout(function (){
            e.classList.remove("pressed")

        }, 100);
    })



    d11.innerHTML = v11
    d12.innerHTML =v12
    d21.innerHTML =v21
    d22.innerHTML=v22
    

    
}

document.addEventListener("keydown",function (event){
    console.log(event)
    if(event.key === "x"){
        console.log("pressed x")
        start()
    }
})
  