import css from "./CheckBoxDias.module.css"

function CheckBoxDias(props){
    return(
        <div >
            <div>
                <h1 className={css.titulo}>{props.titulo}</h1>
            </div>
            <div className={css.grid}>
                <div>
                    <input type="checkbox"/>Seg
                </div>
                <div>
                    <input type="checkbox"/>Ter
                </div>
                <div>
                    <input type="checkbox"/>Qua
                </div>
                <div>
                    <input type="checkbox"/>Qui
                </div>
                <div>
                    <input type="checkbox"/>Sex
                </div>
                <div>
                    <input type="checkbox"/>Sáb
                </div>
            </div>
        </div>
    )
}

export default CheckBoxDias