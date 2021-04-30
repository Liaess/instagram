const posts = [
    {nome:"meowed", imagem:"assets/img/meowed.svg", conteudo:"assets/img/gato-telefone.svg", curtidaImagem:"assets/img/respondeai.svg", curtidausuario: "respondeai", usercontador: "outras 101.523 pessoas"},
    {nome:"meowed", imagem:"assets/img/barked.svg", conteudo:"assets/img/dog.svg", curtidaImagem:"assets/img/adorable_animals.svg", curtidausuario: "adorable_animals", usercontador: "outras 99.159 pessoas"}
]

export default function SecaoPosts(){
    return(
        <div class="posts">
            {posts.map((posts)=>
            <div class="post">
                <div class="topo">
                    <div class="usuario">
                        <img src={posts.imagem} />
                        {posts.nome}
                    </div>
                    <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                    </div>
                </div>
                <div class="conteudo">
                    <img src={posts.conteudo} />
                </div>
                <div class="fundo">
                    <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                    </div>

                    <div class="curtidas">
                    <img src={posts.curtidaImagem} />
                    <div class="texto">
                        Curtido por <strong>{posts.curtidausuario}</strong> e <strong>{posts.usercontador}</strong>
                    </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    )    
}



{/* <div class="post">
<div class="topo">
  <div class="usuario">
    <img src="assets/img/barked.svg" />
    barked
  </div>
  <div class="acoes">
    <ion-icon name="ellipsis-horizontal"></ion-icon>
  </div>
</div>

<div class="conteudo">
  <img src="assets/img/dog.svg" />
</div>

<div class="fundo">
  <div class="acoes">
    <div>
      <ion-icon name="heart-outline"></ion-icon>
      <ion-icon name="chatbubble-outline"></ion-icon>
      <ion-icon name="paper-plane-outline"></ion-icon>
    </div>
    <div>
      <ion-icon name="bookmark-outline"></ion-icon>
    </div>
  </div>

  <div class="curtidas">
    <img src="assets/img/adorable_animals.svg" />
    <div class="texto">
      Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
    </div>
  </div>
</div>
</div> */}