import './Navi.css'
import {NavLink} from "react-router-dom";

function Navi () {



    return (
        <>
            <nav className="navi">
                <h4 className="logo-name">Blog venture</h4>
                <ul>
                    <li>
                        <NavLink  to="/" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Home</NavLink >
                    </li>
                    <li>
                        <NavLink  to="/post" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Nieuwe post</NavLink >
                    </li>
                    <li>
                        <NavLink  to="/all-blogs" className={({isActive}) => isActive === true ? 'active-link' : 'default-link'}>Alle posts </NavLink >
                    </li>

                </ul>



            </nav>

        </>

    );
}

export default Navi;