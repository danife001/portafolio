document.addEventListener('DOMContentLoaded',function(){
    // myf();
    eventListener();

});

function eventListener(){
 
    c.addEventListener('click',myf);
}


const c = document.querySelector('#xp');
const cl = document.querySelectorAll('.cl');
const tx = document.querySelectorAll('.texto');
const img1 = document.querySelector('.imagen-cl1');
const img2 = document.querySelector('.imagen-cl2');
const img3 = document.querySelector('.imagen-cl3');
const img4 = document.querySelector('.imagen-cl4');
const img5 = document.querySelector('.imagen-cl5');


function myf(){
    c.classList.toggle('azulOscuro');
    c.classList.toggle('azulClaro');
    // cl[0].parentNode.removeChild('texto');
    for(i=0;i<cl.length;i++){
        
    cl[i].classList.toggle('azulOscuro');
    cl[i].classList.toggle('azulClaro');
    cl[i].classList.toggle('cambio');
    }
    if(tx[0].innerHTML==="HTML,CSS,JavaScript"){
        tx[0].innerHTML="analisis y desarrollo <br>en sistemas de informacion";
        img1.setAttribute("src","img/sena.png");
    }else{
        tx[0].innerHTML="HTML,CSS,JavaScript";
        img1.setAttribute("src","img/html.png");
    }
    if(tx[1].innerHTML==="PHP"){
        tx[1].innerHTML="desarrollo web";
        img2.setAttribute("src","img/udemy.png");
    }else{
        tx[1].innerHTML="PHP";
        img2.setAttribute("src","img/php.png");
    }
    if(tx[2].innerHTML==="Lenguajes"){
        tx[2].innerHTML="certificaciones";
        img3.setAttribute("src","img/cert.png");
    }else{
        tx[2].innerHTML="Lenguajes";
        img3.setAttribute("src","img/prog.png");
    }
    if(tx[3].innerHTML==="SQL"){
        tx[3].innerHTML="desarrollo software";
        img4.setAttribute("src","img/mintic.png");
    }else{
        tx[3].innerHTML="SQL";
        img4.setAttribute("src","img/sql.png");
    }
    if(tx[4].innerHTML==="proximamente"){
        tx[4].innerHTML="Analista de datos";
        img5.setAttribute("src","img/linkl.png");
    }else{
        tx[4].innerHTML="proximamente";
        img5.setAttribute("src","img/python.png");
    }
    
    
    

   console.log(img1);
    
}

