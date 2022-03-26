//"STYLE JS"

let body = document.getElementsByTagName("body");
body[0].style.fontFamily= "Arial";
let judul = document.querySelector("thead tr th");
judul.style.fontSize= "50px";
judul.style.backgroundColor= "black";
judul.style.color= "yellow";
judul.style.letterSpacing= "5px";
let label = document.querySelectorAll("tbody tr th");
for(let L =0; L < label.length; L++){
    label[L].style.textAlign="left";
}

let input = document.getElementsByTagName("input");
for(i=0 ; i < input.length; i++){
    input[i].style.height="30px";
    input[i].style.borderRadius="5px";
    input[i].style.border='1px solid rgb(131, 180, 226)';
    input[i].style.fontSize="1.2em";
    input[i].style.width="5em";
    input[i].style.textAlign="right";
}

let button = document.getElementsByTagName("button");
for(let b=0; b < button.length -2; b++){
    button[b].style.width ="40px"
    button[b].style.height ="40px"
    button[b].style.fontSize ="1.5em"
}

for(let b=4; b < button.length; b++){
    button[b].style.width ="100px"
    button[b].style.height ="40px"
    button[b].style.fontSize ="1.2em"
}

let tombol = document.querySelectorAll("tbody tr td");
for(let t=0; t < tombol.length; t++){
    tombol[t].style.textAlign="center";
}

//"FUNCTION OPERASI ARITMATIKA"

//function tambah(){
//    let n1 = document.getElementById("n1").value;
//    let n2 = document.getElementById("n2").value;
//    let hasil = document.getElementById("hasil")
//    return hasil.value = Number(n1) + Number(n2);}

let btntambah = document.getElementById("tambah");
btntambah.oneclick = tambah;
btntambah.addEventListener("click", btnreset);
function tambah(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let hasil = document.getElementById("hasil")
    return hasil.value = Number(n1) + Number(n2);
}

let btnkurang = document.getElementById("kurang");
btnkurang.addEventListener("click", btnreset);
btnkurang.addEventListener("click", function(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let hasil = document.getElementById("hasil")
    return hasil.value = Number(n1) - Number(n2);
})

let btnkali = document.getElementById("kali");
btnkali.addEventListener("click", btnreset);
btnkali.addEventListener("click", function(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let hasil = document.getElementById("hasil")
    hasil.value = Number(n1) * Number(n2);
    return 
})

let btnbagi = document.getElementById("bagi");
btnbagi.addEventListener("click", btnreset);
btnbagi.addEventListener("click", function(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let hasil = document.getElementById("hasil")
    hasil.value = Number(n1) / Number(n2);
            if((isNaN(hasil.value))){
            hasil.value=0;
        }
    return    
})

let btnpangkat = document.getElementById("pangkat");
btnpangkat.addEventListener("click", function(){
    let teksPngkt = document.getElementById("teksNdua")
    let teksNilai = document.getElementById("teksNsatu")
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let hasil = document.getElementById("hasil")
    hasil.value = Number(n1) ** Number(n2);
    teksPngkt.innerText = "Pangkat"
    teksNilai.innerText ="Nilai"
    return 
})

let btnmodulus = document.getElementById("modulus");
btnmodulus.addEventListener("click", function(){
    let teksModulus = document.getElementById("teksNdua");
    let teksNilai = document.getElementById("teksNsatu");
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;
    let hasil = document.getElementById("hasil")
    hasil.value= (Number(n1) % Number(n2));
        if((isNaN(hasil.value))){
            hasil.value=0;
        }
    teksModulus.innerText = "Modulus";
    teksNilai.innerText = "Nilai";
return
})


function btnreset(){
    let btnsatu = document.getElementById("teksNsatu");
    let btndua = document.getElementById("teksNdua");
    if(btnsatu.value != "Nilai 1" || btndua.value != "Nilai 2"){
        btnsatu.innerText = "Nilai 1";
        btndua.innerText = "Nilai 2";
    }
}