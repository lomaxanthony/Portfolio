function Header() {
    return (
        <header className="title">
            <div className="header-content">
                <a 
                  href="/"
                  className="logo"
                >
                    <img
                      src="public/favicon/android-chrome-192x192.png"
                      width={40}
                      height={40}
                      alt="terminalLogo"
                      className="terminalLogo"
                    />
                </a>
                <h1>
                    Tony Lomax
                </h1>              
            </div>
        </header>
    )
}

export default Header;