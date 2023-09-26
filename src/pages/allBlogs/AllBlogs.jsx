import './AllBlogs.css'
import posts from '../../constants/data.json';


function AllBlogs () {

    return (
        <>
            <p>Aantal = {posts.length} Posts</p>
            {posts.map((post) => (
                <p key={post.id}>{post.title}</p>
            ))}
        </>
    );
}

export default AllBlogs;