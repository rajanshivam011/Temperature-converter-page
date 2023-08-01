
let btn=document.getElementById('convert');
let sh=document.getElementById('show');
btn.addEventListener('click',clk);
function clk(){
    
    let val=sh.value;
    let ftem=((val*9)/5)+32;
    console.log(val);
    console.log(ftem);
    sh.value=ftem+"°F";
}
let btn1=document.getElementById('convertc');
let sh1=document.getElementById('showc');
btn1.addEventListener('click',clk1);
function clk1(){
    
    let val1=sh1.value;
    let ftem1=((val1-32)*5)/9;
    console.log(val1);
    console.log(ftem1);
    sh1.value=ftem1+"°C";
}
