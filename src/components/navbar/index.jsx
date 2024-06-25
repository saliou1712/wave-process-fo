function Navbar() {
    return(
        <div className="navbar">
            <div className="navbar__logo">
            <   i className="fa-solid fa-question"></i> Wave Sénégal | Process FO
            </div>
            <div className="navbar__links">
                <div className="navbar__links__link" onClick={()=>{window.location.reload()}}>
                    <i className="fa-solid fa-book"></i> Accueil
                </div>
                <a className="navbar__links__link" href="https://frontplugin.wave-internal.com/specialpage/no-current-call" target="_blank">
                    <i className="fa-solid fa-square-pen"></i> Front App
                </a>
            </div>
        </div>
    )
}

export default Navbar;