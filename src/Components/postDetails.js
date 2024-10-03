import './postDetails.css';

export default function PostDetails({ post }) {
    return (
        <>
            { post &&
                <div className="post-details-section">
                    <div className="post-details-card card">
                        <h2>{post.title}</h2>
                        <p>{post.description}</p>
                        <p>Required Years Exp: {post.experience}</p>
                        Required Skills:
                        <ul>
                            {post.skills.map(skill => (
                                <li>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            }
        </>
    );
}