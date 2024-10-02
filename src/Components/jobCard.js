import './jobCard.css';

export default function JobCard({post, selectPost}) {
    return (
        <div className="job-card card" onClick={() => selectPost(post)}>
            <h4>{post.title}</h4>
        </div>
    )
}