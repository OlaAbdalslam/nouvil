let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river');
let boat6 = document.getElementById('boat');
let nouvil = document.querySelector('.nouvil');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value *4+'px';
    mountains3.style.top = value *2+'px';
    mountains4.style.top = value *1.5+'px';
    river.style.top = value + 'px';
    boat.style.top= value + 'px';
    boat.style.left= value *3 +'px';
    nouvil.style.fontSize =value + 'px';
    if(scrollY>=70){
        nouvil.style.fontSize =70+ 'px';
        nouvil.style.position = 'fixed';
        if(scrollY >= 428){
            nouvil.style.display = 'none';
        }else{
            nouvil.style.display = 'block';
        }
    }
    if(scrollY >=109){
        document.querySelector('.main').style.background =' linear-gradient(#376281,#10001f)'
    }else{
        document.querySelector('.main').style.background =' linear-gradient(#140114 , #531c51)'
    }
}