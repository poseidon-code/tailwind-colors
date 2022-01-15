import { useRef, useState } from 'react';

import ColorPicker from './components/ColorPicker/ColorPicker';
import Navbar from './components/Navbar/Navbar';
import Colors from './Colors';

const App = () => {
    const [hex, setHex] = useState(true);
    const [iscopied, setIscopied] = useState(false);
    const toast = useRef();

    const toggleColorCode = () => { setHex((p) => !p) };

    const copied = () => {
        clearTimeout(toast.current);
        setIscopied(true);
        toast.current = setTimeout(()=>{setIscopied(false)}, 3000);
    };

    return (
        <>
            <Navbar hex={hex} toggleColorCode={toggleColorCode} />
            <div className='container'>
                <hr />
                {Colors.map((color, i) => (
                    <ColorPicker key={i} copied={copied} hex={hex} base={color.base} variants={color.variants} />
                ))}
            </div>
            {iscopied && <span className='copied'>Copied !</span>}
        </>
    );
};

export default App;
