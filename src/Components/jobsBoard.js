import {useEffect, useState} from "react";
import JobCard from "./jobCard";
import './jobsBoard.css';
import PostDetails from "./postDetails";

export default function JobsBoard(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);

    useEffect(() => {
        if (isLoading)
            fetch("http://localhost:4000/posts")
                .then(res => res.json())
                .then(data => {
                    setIsLoading(false);
                    setPosts(data);
                });
    });

    return (
        <div className="jobs-board">
            <>
                { !isLoading && (
                    <>
                        <div className="posts-list">
                            {posts.map(post => (
                                <JobCard key={post.id} post={post} selectPost={setSelectedJob} />
                            ))}
                        </div>
                        <PostDetails post={selectedJob}/>
                    </>
                )}
            </>
        </div>
    );
}