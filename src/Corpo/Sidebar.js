const cadaSugestao = [
    {imagem: "assets/img/bad.vibes.memes.svg", nomeConta: "bad.vibes.memes", seguirInfo: "Segue você"},
    {imagem: "assets/img/chibirdart.svg", nomeConta: "chibirdart", seguirInfo: "Segue você"},
    {imagem: "assets/img/razoesparaacreditar.svg", nomeConta: "razoesparaacreditar", seguirInfo: "Novo no Instagram"},
    {imagem: "assets/img/adorable_animals.svg", nomeConta: "adorable_animals", seguirInfo: "Segue você"},
    {imagem: "assets/img/smallcutecats.svg", nomeConta: "smallcutecats", seguirInfo: "Segue você"},
]

export default function Sidebar(){
    return(
        <div class="sidebar">
            <div class="usuario">
            <img src="assets/img/catanacomics.svg" />
            <div class="texto">
                <strong>catanacomics</strong>
                Catana
            </div>
            </div>

            <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
                {cadaSugestao.map((cadaSugestao)=>
                <div class="sugestao">
                    <div class="usuario">
                        <img src={cadaSugestao.imagem} />
                        <div class="texto">
                            <div class="nome">{cadaSugestao.nomeConta}</div>
                            <div class="razao">{cadaSugestao.seguirInfo} </div>
                        </div>
                    </div>
                    <div class="seguir">Seguir</div>
                </div>
            )} 
        </div>
        <div class="links">
          Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
        <div class="copyright">
          © 2021 INSTAGRAM DO FACEBOOK
        </div>
      </div>
    )
}