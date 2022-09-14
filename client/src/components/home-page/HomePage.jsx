import { NavLink } from 'react-router-dom';

import './home-page.scss';

const HomePage = () => {
    return (
        <section className='home-page'>
            <NavLink to='/polls/1'>Polls</NavLink>
            <NavLink to='/results'>View Results</NavLink>
        </section>
    );
};

export default HomePage;