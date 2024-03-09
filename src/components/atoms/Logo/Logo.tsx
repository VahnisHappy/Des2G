import style from "./logo.module.css";
import logo from "@/assets/logo.jpg";

export default function Logo() {
    return <div className={style.logo}>
        <img className={style.img} src={logo} alt=""/>
        <span className={style.pipe}></span>
        <span className={style.logo_text}>Des2G</span>
    </div>;
}