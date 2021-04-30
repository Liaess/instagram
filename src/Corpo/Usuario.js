export default function Usuario(props){
    return(
        <div class="usuario">
        <img src={props.imagem} alt={props.nome} />
        <div class="texto">
            <strong>{props.usuario}</strong>
            {props.nome}
        </div>
        </div>
    )
}