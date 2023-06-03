function Footer() {
    return <footer className="page-footer  light-blue darken-2">
        <div className="footer-copyright ">
            <div className="container">
                © {new Date().getFullYear()} Max Faterin
                <a className="grey-text text-lighten-4 right" href="#!">Repository</a>
            </div>
        </div>
    </footer>
}
export { Footer };