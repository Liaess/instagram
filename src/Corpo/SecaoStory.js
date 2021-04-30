const story = [
  {nome:"9gag", imagem:"assets/img/9gag.svg", alt:"9gag"},
  {nome:"meowed", imagem:"assets/img/meowed.svg", alt:"meowed"},
  {nome:"barked", imagem:"assets/img/barked.svg", alt:"barked"},
  {nome:"nathanwpylestrangeplanet", imagem:"assets/img/nathanwpylestrangeplanet.svg", alt:"nathanwpylestrangeplanet"},
  {nome:"wawawicomics", imagem:"assets/img/wawawicomics.svg", alt:"wawawicomics"},
  {nome:"respondeai", imagem:"assets/img/respondeai.svg", alt:"respondeai"},
  {nome:"filomoderna", imagem:"assets/img/filomoderna.svg", alt:"filomoderna"},
  {nome:"memeriagourmet", imagem:"assets/img/memeriagourmet.svg", alt:"memeriagourmet"},
]

export default function SecaoStory(){
  return(
    <div class="stories">
      {story.map((story)=>
      <div class="story">
        <div class="imagem">
        <img src={story.imagem} alt={story.nome}/>
        </div>
        <div class="usuario">
        {story.nome}
        </div>
      </div>
      )}
      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  )
}


