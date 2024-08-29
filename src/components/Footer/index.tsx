const Footer: React.FC = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="column">
                    <h3>About</h3>
                    <p>Short description of the project goes here.</p>
                    <div className="logo-container">
                        {/* Add your project logo here */}
                    </div>
                </div>
                <div className="column">
                    <h3>Technical</h3>
                    <p>Technical information about the project goes here.</p>
                </div>
                <div className="column">
                    <h3>Developer</h3>
                    <p>Information about the developer goes here.</p>
                    <div className="logo-container">
                        {/* Add your developer logo and icons here */}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;