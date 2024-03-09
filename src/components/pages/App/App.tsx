import style from "./app.module.css";
import Navbar from "@/components/organisms/Navbar/Navbar.tsx";
import Map from "@/components/templates/Map/Map.tsx";
import ControlPanels from "@/components/pages/ControlPanel/ControlPanels.tsx";


export default function App() {
    return <div className={style.app}>
        <div className={style.content}>
            <Navbar/>
            <div className={style.appContainer}>
                <ControlPanels/>
                <Map/>
            </div>
        </div>
    </div>
}