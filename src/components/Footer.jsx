import '../style/footer.css'

function Footer() {
    return (
        <footer className="footerContainer">
            <p>&copy; {new Date().getFullYear()} Ang197</p>
        </footer>
    );
}

export default Footer