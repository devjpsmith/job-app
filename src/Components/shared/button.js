import './button.css';

export default function Button({onClick, text, type}) {
    const className = ' button' + (type && `-${type}`);
    return (
        <button className={'button' + className} onClick={onClick}>{text}</button>
    );
}