window.onload=function(){
    

    function loading(){
        document.getElementsByClassName('box-load')[0].style.display = 'none';
        document.getElementsByClassName('content')[0].style.display = 'block';
    }

    loading()
    
    let botaoFechar = document.getElementById("fecharcontato");
    let contatoFixo =  document.getElementById('contato-fixo-contatos');
    

    botaoFechar.onclick = function () {
        if(contatoFixo.style.display == 'none'){
            contatoFixo.style.display = 'block';
            document.getElementById('imagemBotaoFixo').style.display = 'none'
        }else{
            contatoFixo.style.display = 'none';
            document.getElementById('imagemBotaoFixo').style.display = 'block'
        }
    };


    let BF = document.getElementById('imagemBotaoFixo');
    BF.onclick = function () {
        let imgBotao = document.getElementById('imagemBotaoFixo')

        if(imgBotao.style.display == 'none'){
            imgBotao.style.display = 'block';
            document.getElementById('contato-fixo-contatos').style.display = 'none'
        }else{
            imgBotao.style.display = 'none';
            document.getElementById('contato-fixo-contatos').style.display = 'block'
        }
    };

}


    
let totalSlides = document.querySelectorAll('.slider-item').length;
let currentSlide = 0;

document.querySelector('.slider-width').style.width = `calc(100vw * ${totalSlides})`;
document.querySelector('.slider-controls').style.height = ` ${document.querySelector('.slider').clientHeight}px `;

function goPrev(){
    currentSlide --;
    if(currentSlide < 0){
        currentSlide = totalSlides -1;
    }
    updateMargin();
}

function goNext(){
    currentSlide ++;
    if(currentSlide > (totalSlides-1)){
        currentSlide = 0 ;
    }
    updateMargin();
}

function updateMargin(){
    let sliderItemWidth = document.querySelector('.slider-item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);
    document.querySelector('.slider-width').style.marginLeft = `-${newMargin}px`;  
}

setInterval(goNext, 4000);



/* Sessão Obra */
let totalSlidesObra = document.querySelectorAll('.slider-item-obra').length;
let currentSlideObra = 0;

document.querySelector('.slider-width-obra').style.width = `calc(31vw * ${totalSlidesObra})`;
document.querySelector('.slider-controls-obra').style.height = ` ${document.querySelector('.slider-obra').clientHeight}px `;

window.onresize = function(event) {
    if (window.innerWidth > 1200) {
        document.querySelector('.slider-width-obra').style.width = `calc(30vw * ${totalSlidesObra})`;
      }
    if (window.innerWidth < 1200) {
      document.querySelector('.slider-width-obra').style.width = `calc(44vw * ${totalSlidesObra})`;
    }
    if (window.innerWidth < 768) {
        document.querySelector('.slider-width-obra').style.width = `calc(100vw * ${totalSlidesObra})`;
      }
  };

function goPrevObra(){
    currentSlideObra --;
    if(currentSlideObra < 0){
        currentSlideObra = totalSlidesObra -3;
        console.log('o')
    }
    updateMarginObra();
}

function goNextObra(){
    currentSlideObra ++;
    if(currentSlideObra > (totalSlidesObra-3)){
        currentSlideObra = 0 ;
    }
    updateMarginObra();
}

function updateMarginObra(){
    let sliderItemWidth = document.querySelector('.slider-item-obra').clientWidth;
    let newMargin = (currentSlideObra * sliderItemWidth);
    document.querySelector('.slider-width-obra').style.marginLeft = `-${newMargin}px`;  
}




/* Sessão Serviço */
let totalSlidesServico = document.querySelectorAll('.slider-item-obra').length;
let currentSlideServico = 0;

document.querySelector('.slider-width-serviço').style.width = `calc(31vw * ${totalSlidesServico})`;
document.querySelector('.slider-controls-serviço').style.height = ` ${document.querySelector('.slider-serviço').clientHeight}px `;

window.onresize = function(event) {
    if (window.innerWidth > 1200) {
        document.querySelector('.slider-width-serviço').style.width = `calc(30vw * ${totalSlidesServico})`;
      }
    if (window.innerWidth < 1200) {
      document.querySelector('.slider-width-serviço').style.width = `calc(44vw * ${totalSlidesServico})`;
    }
    if (window.innerWidth < 768) {
        document.querySelector('.slider-width-serviço').style.width = `calc(100vw * ${totalSlidesServico})`;
      }
  };

function goPrevServico(){
    currentSlideServico --;
    if(currentSlideServico < 0){
        currentSlideServico = totalSlidesObra -3;
        console.log('o')
    }
    updateMarginServico();
}

function goNextServico(){
    currentSlideServico ++;
    if(currentSlideServico > (totalSlidesObra-3)){
        currentSlideServico = 0 ;
    }
    updateMarginServico();
}

function updateMarginServico(){
    let sliderItemWidth = document.querySelector('.slider-item-serviço').clientWidth;
    let newMargin = (currentSlideServico * sliderItemWidth);
    document.querySelector('.slider-width-serviço').style.marginLeft = `-${newMargin}px`;  
}




let abrirMenu = document.getElementById('abrir');

abrirMenu.addEventListener('click', function(){
    document.getElementById('abrir').style.display = 'none'
    document.getElementById('fechar').style.display = 'block'
    document.getElementById('menu-mobile-width').style.width = '100%';
    document.getElementById('nav').style.display = 'block';
    document.querySelector('.mobile-icon1').style.display = 'block';
    document.querySelector('.mobile-icon2').style.display = 'block';
    document.querySelector('.mobile-icon3').style.display = 'block';
})


let fecharMenu = document.getElementById('fechar');

fecharMenu.addEventListener('click', function(){
    document.getElementById('abrir').style.display = 'block'
    document.getElementById('fechar').style.display = 'none'
    document.getElementById('menu-mobile-width').style.width = '0%';  
    document.getElementById('nav').style.display = 'none';  
    document.querySelector('.mobile-icon1').style.display = 'none';
    document.querySelector('.mobile-icon2').style.display = 'none';
    document.querySelector('.mobile-icon3').style.display = 'none';
})




let verMais = document.getElementById("ver-mais")
    verMais.addEventListener('click', function(){
            document.getElementById("sessao-sobrenos").style.height = '100%';
            document.getElementById("ver-mais").style.display = 'none';
            document.getElementById("ver-menos").style.display = 'block';

    });

    let verMenos = document.getElementById("ver-menos")
    verMenos.addEventListener('click', function(){
            document.getElementById("sessao-sobrenos").style.height = '200px';
            document.getElementById("sessao-sobrenos").style.overflowY = 'hidden';
            document.getElementById("ver-mais").style.display = 'block';
            document.getElementById("ver-menos").style.display = 'none';

    });

