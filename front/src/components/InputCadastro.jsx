import css from "./InputCadastro.module.css"

function InputCadastro(props){
    return(
        <div>
            <div style={{display: "flex"}}>
                <label>{props.nome}</label>
            </div>
            <div >
                <input type={props.tipo} className={css.inputs} />
            </div>
        </div>
    )
}

export default InputCadastro