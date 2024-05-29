import '../style/footer.css'

/**
 * Footer for the entire website
 */
function Footer() {
    return (
        <div className="footerContainer">
            <footer>
                <h3>&copy; {new Date().getFullYear()}
                    <a className="githubLink" rel="noreferrer   "href="https://github.com/Ang197" target="_blank"> Ang197 </a>
                </h3>
            </footer>
        </div>
    );
}

export default Footer