import { LOGO_URL } from '../../../utils/constants';
import './Logo.css';

export default function Logo(){
    return(
        <div className="logo-container">
            <img className='logo' src={LOGO_URL} />
        </div>
    )
}