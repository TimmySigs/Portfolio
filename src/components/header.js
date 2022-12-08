function Header() {
    const [currentPage, handlePageChange] = useState("About");

    // The renderPage method uses a switch statement to render the appropriate current page
    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About />;
            case "Portfolio":
                return <Portfolio />;
            case "Contact":
                return <Contact />;
            case "Resume":
                return <Resume />;

            default:
                return <About />;
        }
    };

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-brand">
                    <a
                        className="navbar-item"
                        rel="noreferrer"
                        target="_blank"
                        href="https://github.com/TimmySigs"
                    >
                        <span className="content is-large">Timothy Signore</span>
                    </a>
                </div>
            </nav>

            <Navigation
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            <main>
                <div>{renderPage(currentPage)}</div>
            </main>
        </div>
    );
}

export default Header;