import './NotFound.css'
import {Link} from "react-router-dom";

function NotFound () {

    return (
        <>
            <h3 className="spelfout"> Heb jij net even lekker een spelfout zitten maken. terug naar <Link to="/">home?</Link> </h3>
        </>

    );
}

export default NotFound;