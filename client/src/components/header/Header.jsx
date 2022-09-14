import { useNavigate } from 'react-router';

import './header.scss';

const Header = () => {
    const navigate = useNavigate();

    const returnHomeHandler = () => navigate('/');

    return (
        <header>
            <h1 onClick={returnHomeHandler}>Poll Demo Application</h1>
        </header>
    );
};

export default Header;