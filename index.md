<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <title>COELHO EMP</title>
</head>
<body >
    
    <div class="box-load">
        <div class="pre"> </div>
      <div>  </div>
    </div>

   <div class="content">
    <header>
        <section class="header">
            <div id="menu-mobile">
                <img id="abrir" src="./img/icone-menu.png" alt="">
                <img id="fechar" src="./img/icon-fechar.png" alt="">
            </div>

            <div id="menu-mobile-width">
                <nav id="nav">
                    <ul>
                        <a href="#"><li>SOBRE NÓS</li></a>
                        <a href="#"><li>CONTATO</li></a>
                        <a href="#"><li>OBRAS</li></a>
                        <a href="#"><li>BLOG</li></a>
                    </ul>
                </nav>
               <div id="contato-mobile">
                <img class="mobile-icon1" src="./img/whats png.png" alt="">
                <img class="mobile-icon2" src="./img/logo-email.png" alt="">
                <img class="mobile-icon3" src="./img/logo-instagram.png" alt="">
               </div>
            </div>
            <div class = wrapper>

                <div class ="logo">  <img src="./img/logo 1.png" alt="">  </div>

                <div class ="menu">
                    <nav>
                        <ul>
                            <a href="#"><li>SOBRE NÓS</li></a>
                            <a href="#"><li>CONTATO</li></a>
                            <a href="#"><li>OBRAS</li></a>
                            <a href="#"><li>BLOG</li></a>
                        </ul>
                    </nav>
                </div>

            </div>
        </section>
  

        <section id="contato-fixo">
            <div class = center>
                <div id="imagemBotaoFixo"  ><img src="./img/botao-fixo.png" alt=""></div>
                <div id="botaoFixoMobile"></div>
            </div>
        </section>

        <section id="contato-fixo-contatos">
            <div class = center>
                <div class ="info-contatos-fixo">

                        <div class="whats">
                            <a href="https://wa.me/5516992987484">
                                <img class="imagem" src="./img/logo-whats.png" alt="">
                            </a>
                            <h2>WhatsApp</h2>
                        </div>
                
                        
                    <div class="email">
                    <a href="mailto:obras@coelhoemp.com" target="_blank" rel="noopener noreferrer">
                            <img class="imagem" src="./img/logo-email.png" alt="">
                    </a>
                        <h2>Email</h2>
                    </div>

                    <div class="instagram">
                    <a href="http://" target="_blank" rel="noopener noreferrer">
                            <img class="imagem" src="./img/logo-instagram.png" alt="">
                    </a>
                        <h2>Instagram</h2>
                    </div>

                    <div class="fechar">
                        <button id="fecharcontato">x</button>
                    </div>

                </div>
            </div>
        </section>

            <div class="slider">
                <div class="slider-controls">
                    <div class="slider-control" onclick="goPrev()"><img src="./img/arrow-left.png" alt=""> </div>
                    <div class="slider-control" onclick="goNext()"> <img src="./img/arrow-rigth.png" alt=""></div>
                </div>
                
                <div class="slider-width"> 
                        <div class="slider-item"> <img src="./img/img-home/1.png" alt=""> </div>
                        <div class="slider-item"> <img src="./img/img-home/2.png" alt=""> </div>
                        <div class="slider-item"> <img src="./img/img-home/6.png" alt=""> </div>
                        <div class="slider-item"> <img src="./img/img-home/8.png" alt=""> </div>
                        <div class="slider-item"> <img src="./img/img-home/7.png" alt=""> </div>
                </div>
            </div>

            
    
    </header>

    <section class="sessao-obra">
        <div class="titulo">  <h2> OBRAS</h2>  </div>

        <div class="slider-obra">
            <div class="slider-controls-obra">
                <div class="slider-control-obra" onclick="goPrevObra()"><img src="./img/arrow-left.png" alt=""> </div>
                <div class="slider-control-obra" onclick="goNextObra()"> <img src="./img/arrow-rigth.png" alt=""></div>
            </div>
            
            <div class="slider-width-obra"> 
                <div class="slider-item-obra"> <img src="./img/img-home/img-home-obras/2010 - LAZARO.jpg" alt=""> </div>
                <div class="slider-item-obra"> <img src="./img/img-home/img-home-obras/2010 - MONTE SINAI.jpg" alt=""> </div>
                <div class="slider-item-obra"> <img src="./img/img-home/img-home-obras/2010 - RIVIERA.jpg" alt=""> </div>

                <div class="slider-item-obra"> <img src="./img/img-home/img-home-obras/2009 - BAHAMAS.png" alt=""> </div>
                <div class="slider-item-obra"> <img src="./img/img-home/img-home-obras/2009 - BOTANICO.png" alt=""> </div>
                <div class="slider-item-obra"> <img src="./img/img-home/img-home-obras/2009 - VITÓRIA REGIA.png" alt=""> </div>
            </div>

            <div class="ver-todas-as-obras"> <h2>VER TODAS AS OBRAS</h2> </div>
        </div>
     
    </section>


    <section class="sessao-serviço">
        <div class="titulo">  <h2> SERVIÇOS</h2>  </div>
        
        <div class="slider-serviço">
            <div class="slider-controls-serviço">
                <div class="slider-control-serviço" onclick="goPrevServico()"><img src="./img/arrow-left.png" alt=""> </div>
                <div class="slider-control-serviço" onclick="goNextServico()"> <img src="./img/arrow-rigth.png" alt=""></div>
            </div>
            
            <div class="slider-width-serviço"> 
                    <div class="slider-item-serviço"> <img src="./img/img-home/2.png" alt=""> </div>
                    <div class="slider-item-serviço"> <img src="./img/img-home/obras-5.jpg" alt=""> </div>
                    <div class="slider-item-serviço"> <img src="./img/img-home/obras-3.jpg" alt=""> </div>
                    <div class="slider-item-serviço"> <img src="./img/img-home/obras-4.jpg" alt=""> </div>
                    <div class="slider-item-serviço"> <img src="./img/img-home/obras-2.jpg" alt=""> </div>
                    <div class="slider-item-serviço"> <img src="./img/img-home/obras-6.jpg" alt=""> </div>
            </div>
            
            <div class="ver-todas-as-serviço"> <h2>VER NOSSOS SERVIÇOS</h2> </div>
        </div>
      
    </section>


    <section class="sessao-sobrenos" id="sessao-sobrenos">
        <div class="titulo">  <h2> SOBRE NÓS</h2>  </div>
        
        <div id="carrossel-sobrenos">
              <div>
                    <p>
                        Prezado,

                        Gostaríamos de nos apresentar:

                        A Coelho Empreiteira é uma empresa com mais de 15 anos de experiência no mercado da construção civil.

                        Somos especializados em CARPINTARIA E NO SISTEMA DE FORMAS PARA ESTRUTURAS MULTIPAVIMENTADAS.

                        Ao longo dos anos já entregamos mais de 500.000 m² de forma em mais de 70 torres na região de Ribeirão Preto.

                        Com uma equipe altamente capacitada e preços competitivos, garantimos um serviço de qualidade e comprometimento com nossos clientes.

                        Nosso lema é:
                            
                            “O melhor seguro para o amanhã é o trabalho bem-feito hoje”
                                                                                                                                            Dr. Jonas Savimbi

                        Trabalhamos com gabarito, fabricação e execução de formas em madeira ou metálica, escoramento, cimbramento e tudo mais que envolva caixaria e o ofício da carpintaria, sempre visando a eficiência, responsabilidade e o desperdício zero.


                        Ao escolher a Coelho Empreiteira, você pode esperar prazos de entrega confiáveis, garantias de qualidade e um atendimento personalizado para atender às suas necessidades específicas, além do conhecimento aprofundado na profissão, oferecendo soluções inteligentes nos serviços mais inusitados.
                        Estamos à disposição e prontos para atender suas necessidades e ajudá-lo a realizar seus projetos com segurança e tranquilidade.

                        Entre em contato conosco e solicite um orçamento sem compromisso, a COELHO EMPREITEIRA pode agregar valor ao seu negócio, garantindo um serviço com tradição em qualidade.



                        Confira nosso portfólio de apresentação em anexo.


                        Portfolio - Coelho Empreiteira.pdf



                        Esperamos poder fazer parte do seu próximo quadro de concorrência e contar com sua preferência.

                    </p>
              </div>
        </div>

    </section>
    
    <div id="ver-mais"><h2>VER MAIS . . .</h2></div>
    <div id="ver-menos"><h2>VER MENOS</h2></div>


    <footer>
       <div class= "footer-wrapper">
            <div class ="menu">
                <nav>
                    <ul>
                        <a href="#"><li>SOBRE NÓS</li></a>
                        <a href="#"><li>CONTATO</li></a>
                        <a href="#"><li>OBRAS</li></a>
                    </ul>
                </nav>
            </div>


            <div id="rede-sociais">
            <div class="rede-sociais-wrapper">
                <div><h2> Redes Sociais </h2></div>
                <div class="img-footer-redes-sociais">
                    <img src="./img/logo-whats.png" alt="">
                    <img src="./img/logo-instagram.png" alt="">
                </div>
            </div>
            </div>
       </div>

        <div><h2> COPYRIGHT © 2023 COELHO.EMP TODOS OS DIREITOS RESERVADOS. </h2></div>
    </footer>

   </div>

    <script src="./script.js"></script>
</body>
</html>