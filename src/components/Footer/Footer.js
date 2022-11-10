import { Link } from 'react-router-dom';

const Footer = () => {
    return(
        <footer className="footerSection">
            <div className="footerContainer">
                <div className="footerContainerFirstColumn">
                    <div className="logo">
                        <Link to="/">
                            <img src="images/logo2.png" alt="" />
                        </Link>
                    </div>
                    <div className="socialMediaContainer">
                        <a href="#">
                            <img src="images/icons/icons8-facebook-48.png" alt="" />
                        </a>
                        <a href="#">
                            <img src="images/icons/icons8-instagram-48.png" alt="" />
                        </a>
                        <a href="#">
                            <img src="images/icons/icons8-linkedin-48.png" alt="" />
                        </a>
                    </div>
                    <div className="copyright">
                        ©2022 dreamhouzz.bg - Всички права запазени.
                    </div>
                </div>
                <div className="footerContainerSecondColumn">
                    <h4>Категории:</h4>
                    <a href="#">
                        <div>Архитектура &amp; проектиране на сгради</div>
                    </a>
                    <a href="#">
                        <div>Интериорен дизайн</div>
                    </a>
                    <a href="#">
                        <div>Ландшафтна архитектура</div>
                    </a>
                    <a href="#">
                        <div>Строителство и ремонтни дейности</div>
                    </a>
                </div>
                <div className="footerContainerThirdColumn">
                    <h4>За платформата:</h4>
                </div>
            </div>
        </footer>
    );
};

export default Footer;