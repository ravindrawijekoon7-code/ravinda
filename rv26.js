console.log("js loded")
let markel =document.getElementById("mark1")
let markel1 =document.getElementById("mark2")


function add1(){
    markel.innerText = parseInt(markel.innerText,10) + 1
    console.log("clicked1")
}


function add2(){
    markel.innerText = parseInt(markel.innerText,10) + 2
    console.log("clicked2")
}



function add3(){
    markel.innerText = parseInt(markel.innerText,10) + 3
    console.log("clicked3")
}


function add4(){
    markel1.innerText = parseInt(markel1.innerText,10) + 1
    console.log("clicked4")
}


function add5(){
    markel1.innerText = parseInt(markel1.innerText,10) + 2
    console.log("clicked5")
}


function add6(){
    markel1.innerText = parseInt(markel1.innerText,10) + 3
    console.log("clicked6")
}

function set0h(){
     markel.innerText  = 0
    console.log("0")
}

function set0g() {
     markel1.innerText  = 0
    console.log("01")
}

function reset() {
    markel.innerText  = 0
    markel1.innerText  = 0
}

function dreh(){
   markel.innerText = parseInt(markel.innerText,10) -1
}

function dreg(){
    markel1.innerText = parseInt(markel1.innerText,10) +-1
}

