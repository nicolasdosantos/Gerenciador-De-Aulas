import style3 from './Banner.module.css'

function Banner2({children}) {
    return (
        <div style={{background: "url(./banner-3.png)"}} className={style3.size}>
            {children}
        </div>
    )
}

export default Banner2