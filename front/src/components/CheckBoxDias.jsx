import css from "./CheckBoxDias.module.css"

function CheckBoxDias(props){
    return(
        <div >
            <div>
                <h1 className={css.titulo}>{props.titulo}</h1>
            </div>
            <div className={css.grid}>
                <div>
                    <input type="checkbox"/>Segunda
                </div>
                <div>
                    <input type="checkbox"/>Terça
                </div>
                <div>
                    <input type="checkbox"/>Quarta
                </div>
                <div>
                    <input type="checkbox"/>Quinta
                </div>
                <div>
                    <input type="checkbox"/>Sexta
                </div>
                <div>
                    <input type="checkbox"/>Sabado
                </div>
            </div>
        </div>
    )
}

export default CheckBoxDias