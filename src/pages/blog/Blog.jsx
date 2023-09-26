import './Blog.css'
import { useParams } from "react-router-dom";
import posts from "../../constants/data.json";
import post from "../post/Post.jsx";

function Blog () {
    const { articleNumber } = useParams();

    function formatDateTime(dateTimeString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = new Date(dateTimeString).toLocaleDateString(undefined, options);
        return formattedDate;
    }

    // Zoek het juiste blogartikel op basis van het articleNumber
    const selectedPost = posts.find((post) => post.id === parseInt(articleNumber));

    return (
        <>
            <div>Het Artikel nummer is {articleNumber}</div>

            {selectedPost && (
                <>
                    <p key={selectedPost.id}>{formatDateTime(selectedPost.created)}</p>
                    <p key={selectedPost.id}>{selectedPost.author}</p>
                    <p key={selectedPost.id}>{selectedPost.title}</p>
                    <p key={selectedPost.id}>{selectedPost.subtitle}</p>
                    <p key={selectedPost.id}>{selectedPost.content}</p>
                    <p key={selectedPost.id}>Aantal reacties: {selectedPost.comments}</p>
                    <p key={selectedPost.id}>Aantal keer gedeeld: {selectedPost.shares}</p>

                </>
            )}
        </>

    );
}

export default Blog;