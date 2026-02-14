import Log from '../assets/investment-calculator-logo.png';
export default function Header(){
    return (
        <header id='header'>
            <img src={Log} alt='Investment Log'/>
            <h1>Investment Calculator!</h1>
        </header>
    );
}