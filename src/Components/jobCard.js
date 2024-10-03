import './jobCard.css';

export default function JobCard({post, isSelected, selectPost}) {
    const selectedClass = isSelected ? 'selected' : '';
    return (
        <div className={`job-card card ` + selectedClass} onClick={() => selectPost(post)}>
            <h4>{post.title}</h4>
        </div>
    )
}