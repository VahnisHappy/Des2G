import ButtonInput from "@/components/atoms/ButtonInput";
import style from "./welcome.module.css"
import {Link} from "react-router-dom";
import Logo from "@/components/atoms/Logo";

export default function Welcome() {
    return <div className={style.content}>
        <div className={style.welcome}>
            <div className={style.navbar}><Logo/></div>
            <div className={style.information}>
                <h2>Des2G</h2>
                <p> Web application that facilitates transit system design and transforms the design into GTFS data</p>

            </div>
            <Link to="/app">
                <ButtonInput label="get started"/>
            </Link>
        </div>
    </div>
}