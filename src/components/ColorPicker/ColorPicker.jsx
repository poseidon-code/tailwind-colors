import './ColorPicker.scss';
import Clipboard from 'clipboard';

const ColorPicker = (props) => {
    const hex_rgb = (hex) => {
        const bigint = parseInt(hex, 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return r + ', ' + g + ', ' + b;
    };

    const copy = (color) => {
        new Clipboard('.shade', {
            text: () => {
                if (props.hex) return color;
                else return `rgb(${hex_rgb(color.replace('#', ''))})`;
            },
        });
        props.copied();
    };

    return (
        <section className='color-picker'>
            {props.variants.map((variant, i) => {
                return (
                    <div key={i} className='variants'>
                        {variant.shades.map((shade, j) => (
                            <div
                                key={j}
                                className='shade'
                                onClick={() => copy(shade)}
                                style={{
                                    backgroundColor: shade,
                                    transformOrigin:
                                        j === 0 ? 'center left' : j === variant.shades.length - 1 ? 'center right' : 'center center',
                                }}>
                                <span style={{ color: j / 5 < 1 ? 'var(--text)' : 'var(--accent)' }}>
                                    {props.hex ? shade : `rgb(${hex_rgb(shade.replace('#', ''))})`}
                                </span>
                            </div>
                        ))}
                    </div>
                );
            })}
        </section>
    );
};

export default ColorPicker;
