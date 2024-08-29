import { FaGithub, FaGlobe, FaLinkedin, FaTwitter } from "react-icons/fa";
import styles from "./Footer.module.scss";
import { FaX } from "react-icons/fa6";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={`${styles.column} ${styles.description}`}>
                    <h3>About</h3>
                    <p>Leisure Plus borns as a technical challenge for <a href="https://platzi.com">Platzi</a> for the role of Frontend Engineer and is also a revisit to a project that I did some years ago based on the countless streaming services out there.</p>
                    <p>This website is imagined as a place where you can find the best movies and TV shows, and save them to watch later, the idea was to create some kind of digital product experience from end-to-end using the possibilities of the TMDB API.</p>
                </div>
                <div className={`${styles.column} ${styles.tech_info}`}>
                    <h3>Technical View</h3>
                    <p>In the technical field, this is a website build with TypeScript and Next.js 14, it uses mostly server components to ensure a good performance, reduce unnecesary requests and also allow the website to be tracked better for SEO engines.</p>
                    <p>It also works with Zustand as state management option, which can give the power of Redux in a more compact and easy way. In what refers to styles, I'm using the CSS pre-processor Sass.</p>
                </div>
                <div className={`${styles.column} ${styles.developer}`}>
                    <h3>Wanna know something about me?</h3>
                    <p>I'm a self-taught Software Engineer with over six years of experience, I have a deep pasion for digital products and innovation in general, I've been a geek since I can remember and become a developer after reading a book named "Salvese quien pueda" writed by Andrés Oppenheimer.</p>
                    <p>As random facts: My undergraduate degree is in Animal Production Engineering, and I also have a huge interest in political science and public administration, currently I'm studying an MPA at the <a href="https://www.iesa.edu.ve/">IESA</a> in Venezuela.</p>
                    <div className={styles.icons}>
                        <a href="https://github.com/LuFernandoMG">
                            <FaGithub />
                        </a>
                        <a href="https://x.com/mgluisfernando">
                            <FaX />
                        </a>
                        <a href="https://linkedin.com/in/mgluisfernando">
                            <FaLinkedin />
                        </a>
                        <a href="https://luisfernando.io">
                            <FaGlobe />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;