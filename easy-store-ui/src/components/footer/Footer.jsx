import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons"
import './footer.css'
function Footer() {
    return (
        <footer className="footer">
            Built with <FontAwesomeIcon className="footer-icon" icon={faHeart} />
            by
            <a href="https://github.com/Sib11122" target="_blank" rel="noreferrer">Sehaj deep</a>
        </footer>
    );
}
export default Footer;