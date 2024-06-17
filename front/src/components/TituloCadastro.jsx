import css from "./TituloCadastro.module.css"

function TituloCadastro(props){
    return(
        <div>
            <div>
                <p style={props.css} className={css.titulo}>{props.titulo}</p>
            </div>
            <div>
                <p className={css.titulo2}>{props.titulo2}</p>
            </div>
        </div>
    )
}

export default TituloCadastro