import "./Menubar.css";

export const Menubar = () => {
    return (
        <div className="menubar">
            <div className="logo">Des2G</div>
            <div className="container">
                <div>location</div>
                <div>agency</div>
                <div>calendar</div>
                <div>trip</div>
            </div>
            <div className="preview">preview</div>
        </div>
    );
};
