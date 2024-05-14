import style2 from './Banner.module.css'

function Banner({children}) {
    return (
        <div style={{backgroundImage: "url(/bannerC.png)"}} className={style2.size}>
            {children}
        </div>
    )
}

export default Banner