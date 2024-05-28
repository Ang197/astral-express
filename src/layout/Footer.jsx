import '../style/footer.css'

/**
 * Footer for the entire website
 */
function Footer() {
    return (
        <div className="footerContainer">
            <footer>
                <h3>&copy; {new Date().getFullYear()} Ang197</h3>
            </footer>
        </div>
    );
}

export default Footer