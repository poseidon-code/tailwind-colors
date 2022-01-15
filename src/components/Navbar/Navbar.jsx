import { BrandLogo, Logo, Github, RGB, Hashtag } from '../Icons/Icons';
import './Navbar.scss';

const Navbar = props => {
    return (
        <nav>
            <div className='brand'>
                <BrandLogo />
                <span>
                    <h1>tailwind</h1>
                    <h1>colors</h1>
                </span>
            </div>
            <div className='links'>
                <button className='btn' onClick={props.toggleColorCode}>
                    {props.hex ? <Hashtag color='#1E293B' /> : <RGB color='#1E293B' />}
                </button>
                <a href='https://www.tailwindcss.com/docs' target='_blank' rel='noopenner noreferrer' className='btn'>
                    <Logo />
                </a>
                <a
                    href='https://www.github.com/poseidon-code/tailwind-colors'
                    target='_blank'
                    rel='noopenner noreferrer'
                    className='btn'>
                    <Github color='#1E293B' />
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
