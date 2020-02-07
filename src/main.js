let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/* Hello, I'm Tracy
 * I will show the front-end still as below 
 * First,create div on index.html
 **/
 
#div1{
    border: 1px solid red;
    width:200px;
    height:200px;
}
/* next step,change square to Taiji logo
 * pay attention to see carefully
 * First, let div to be a circle
 **/
 #div1{
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,5);
    border:none;
    
 }
 /* Taiji's color is half white and black
 **/

 #div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);

 }
 
/*
add small balls to become Taiji logo
**/
 #div1::before{
    width: 100px;
    height: 100px;
    top:0;
    left:50%;
    transform: translateX(-50%);
    background: #000;
    border-radius:50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 50%);
    
 }
    #div1::after{
    width: 100px;
    height: 100px;
    bottom:0;
    left:50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius:50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%,rgba(0,0,0,1)100%);
    
 }
  
`;
let string2 = "";
//string = string.replace(/\n/g,"<br>")
console.log(string.length);
let n = 0;

let step = () => {
    setTimeout(() => {
        if (string[n] === "\n") {
            string2 += "<br>";      //如果是回车，就不照搬
        } else if (string[n] === " ") {
            string2 += "&nbsp";
        } else {
            string2 += string[n]      //如果不是回车，就照搬
        }

        html.innerHTML = string2;
        style.innerHTML = string.substring(0, n);
        window.scrollTo(0,99999);
        html.scrollTo(0,99999);
        if (n < string.length - 1) {
            n += 1;
            step();
        }
    }, 50);

}

step();

setTimeout(() => {
    style.innerHTML = `
body{
color:red;
}
`;

}, 50);


