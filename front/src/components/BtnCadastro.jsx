import css from "./BtnCadastro.module.css"

function BtnCadastro(props){
    return(
        <div>
            <button className={css.btn}>{props.nome}</button>
        </div>
    )
}

export default BtnCadastro