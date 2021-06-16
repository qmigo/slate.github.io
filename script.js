let canvas=document.getElementById('canvas');
canvas.width=window.innerWidth/1.5;
canvas.height=window.innerHeight/1.5;
let c=canvas.getContext('2d');
let randomColor;
let paint=false;
var downX;
var downY;
let dog=true;
let path;
let pages=[];
function down(e){
    paint=true;
    downX=e.clientX;
    downY=e.clientY;
    c.beginPath();
    c.moveTo(downX,downY);
    // path=`<svg id="svg" width="${canvas.width}" height="${canvas.height}" viewBox="0 0 ${canvas.width} ${canvas.height}">
    // <path d="M${downX} ${downY} `;

    path=`<path d="M${downX} ${downY} `;
    dumx=downX;
        dumy=downY;
        // console.log(randomColor);
        color();
        // c.strokeStyle=`#${randomColor}`;  
}

function move(e){

    if(paint){
       
        moveX=e.clientX-downX;
        moveY=e.clientY-downY;
        x=e.clientX;
        y=e.clientY;
        
        // color();
        
        c.lineTo(e.clientX,e.clientY);
        path=path+`L${e.clientX} ${e.clientY} `;
        c.strokeStyle=`#${randomColor}`;  
        c.lineWidth="4";
        c.stroke();

        
        c.beginPath();
        c.moveTo(dumx,dumy);
        path=path+`M${dumx} ${dumy} `;

        c.lineTo(downX-moveX,e.clientY); 
        path=path+`L${downX-moveX} ${e.clientY} `;

        c.stroke();
        c.lineWidth="4";
        c.strokeStyle=`#${randomColor}`;  

        c.beginPath();
        c.moveTo(e.clientX,e.clientY);
        path=path+`M${e.clientX} ${e.clientY}`;

        dumx=downX-moveX;
        dumy=e.clientY;

        

    }
}
var final="";
function up(){
    paint=false;
    path=path+`" stroke="#${randomColor}" />`;
    
    final=final+path;
    
    console.log(final);
}
function del()
{
    c.clearRect(0,0,canvas.width,canvas.height);
    final="";
}

canvas.addEventListener('mousedown',down);
canvas.addEventListener('mousemove',move);
canvas.addEventListener('mouseup',up);

function color(){
    randomColor = Math.floor(Math.random()*16777215).toString(16);
  
}
var ankur;

function drawing()
{
    const element=document.createElement('div');
    
    pages.push(final);
//     <?xml version="1.0" encoding="iso-8859-1"?>
// <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
// <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
    
     ankur=`<?xml version="1.0" encoding="iso-8859-1"?>
     <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" id="svg" width="${canvas.width}" height="${canvas.height}" viewBox="0 0 ${canvas.width} ${canvas.height}"> ${final} </svg>`;
    
    element.innerHTML=ankur;
    document.body.appendChild(element);
    
}


    function download(filename, text) {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/svg;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
    
        element.style.display = 'none';
        document.body.appendChild(element);
    
        element.click();
    
        document.body.removeChild(element);
    }
function downlo()
{
    var fileName=prompt("enter file name");
    download(`${fileName}.svg`,ankur);
}




  