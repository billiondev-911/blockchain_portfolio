// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="Andres" />

            <div className='header__content'>
                <h1>Hi, I am Andres</h1>
                <br></br>
                <p>Fullstack web3 Developer</p>
                <br></br>
                <a href="mailto: elitequest72@gmail.com" className='button' >Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;
