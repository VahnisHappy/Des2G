import "../styles/Menubar.css";
import {PageNumbers} from "./PageNumbers";

export const Menubar = ({setState}:{setState:(_:PageNumbers) => void}) => {

    return(
        <div className="menubar">
            <div className="logo">
                <img className="img" src="logo.jpg" alt="logo"/>
                <span className="pipe"></span>
                <span className="logoText">Des2G</span>
            </div>
            <div className="container">
                <div className="tabs" >
                    <input
                        type="radio"
                        name = "tabs"
                        value="radio-1"
                        id="radio-1"
                    /> <label htmlFor="radio-1" className="tab" onClick={()=>setState(PageNumbers.pageLocation)} >location</label>
                    <input
                        type="radio"
                        name = "tabs"
                        value="radio-2"
                        id="radio-2"
                    /> <label htmlFor="radio-2" className="tab" onClick={()=>setState(PageNumbers.pageAgency)}>agency</label>
                    <input
                        type="radio"
                        name = "tabs"
                        value="radio-3"
                        id="radio-3"
                    /> <label htmlFor="radio-3" className="tab" onClick={()=>setState(PageNumbers.pageCalendar)}>calendar</label>
                    <input
                        type="radio"
                        name = "tabs"
                        value="radio-4"
                        id ="radio-4"
                    /><label htmlFor="radio-4" className="tab" onClick={()=>setState(PageNumbers.pageTrip)}>trip</label>
                    <span className="slider"></span>
                </div>
            </div>
            <div className="preview">export</div>
        </div>
    )
}

/*export const Menubar = () => {
    return (
        <div className="menubar">
            <div className="logo">Des2G</div>
            <div className="container">
                <div>location</div>
                <div>agency</div>
                <div>calendar</div>
                <div>trip</div>
            </div>
            <div className="preview"></div>
        </div>
    );
};*/

