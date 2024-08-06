import footerStyles from './Footer.module.css'

/**
 * Footer for the entire website
 */
function Footer() {
    return (
        <div className={footerStyles.footerContainer}>
            <footer>
                <h4>&copy; {new Date().getFullYear()}
                    <a className={footerStyles.githubLink} rel="noreferrer   " href="https://github.com/Ang197" target="_blank"> Ang197 </a>
                </h4>
            </footer>
        </div>
    );
}

export default Footer