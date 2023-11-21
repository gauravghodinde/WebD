levelNo = 1;
colorMatch = ["red", "green", "blue", "yellow"];
notLoss = 1;
seqArr = []
inputSeq = []
var red = document.querySelector("#redBtn");
green = document.querySelector("#greenBtn");
blue = document.querySelector("#blueBtn");
yellow = document.querySelector("#yellowBtn");
startBtn = document.querySelector("#StartBtn");
setLevel = (levelNo) => {
  let level = (document.querySelector(".level").textContent =
    "Level " + levelNo);
};

genRandom = () => {
  return Math.floor(Math.random() * 4);
};

show = (color) =>{
    btn = document.querySelector("#"+ color+"Btn");
    btn.classList.add("show");
    setTimeout(()=>{
        btn.classList.remove("show")
    },200);

}

// while(notLoss==1){
//     console.log("in while");
//     notLoss= 0;
// }


addInputSeq = (x) =>{
    console.log(colorMatch[x])
    inputSeq.push(x)
    console.log(inputSeq)
}

// console.log(seqArr)
// console.log(colorMatch[seqArr[levelNo-1]]);




checkSeq = ()=>{
    console.log(inputSeq.length + "  " + seqArr.length)
    if(inputSeq.length == seqArr.length){
        console.log("equal hao")
        for(let i =0;i<seqArr.length;i++){
            if(seqArr[i]=!inputSeq[i]){
                levelNo = 1;
                console.log("gameEnded")
                inputSeq = []
                startBtn.disabled = false;
                break;
            }else{
                levelNo++;
                gameOn();
                console.log("gameon level no" + levelNo)
            }
        }
    }
}
gameOn = () => {
    startBtn.disabled = true;
    seqArr.push(genRandom());
    console.log("level 2 check" + colorMatch[seqArr[levelNo-1]])
    show(colorMatch[seqArr[levelNo-1]])
    btnArea = document.querySelectorAll(".buttons");
    
    btnArea[0].addEventListener("click",()=>{
        console.log(btnArea[0].id.slice(0,-3))
        addInputSeq(btnArea[0].id.slice(0,-3))
        console.log("check")
        checkSeq() 
    })
    btnArea[1].addEventListener("click",()=>{
        console.log(btnArea[1].id.slice(0,-3))
        addInputSeq(btnArea[1].id.slice(0,-3))
        console.log("check")
        checkSeq() 
    })
    btnArea[2].addEventListener("click",()=>{
        console.log(btnArea[2].id.slice(0,-3))
        addInputSeq(btnArea[2].id.slice(0,-3))
        console.log("check")
        checkSeq() 
    })
    btnArea[3].addEventListener("click",()=>{
        console.log(btnArea[3].id.slice(0,-3))
        addInputSeq(btnArea[3].id.slice(0,-3))
        console.log("check")
        checkSeq() 
    })
}