import './Blog.css'
import { useParams } from "react-router-dom";

function Blog () {

    const {articleNumber} = useParams();

    return (
        <>
            <div>Het Artikel nummer is {articleNumber}</div>

        </>

    );
}

export default Blog;