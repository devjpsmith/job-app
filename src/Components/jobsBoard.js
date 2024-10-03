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
            fetch(`${process.env.REACT_APP_API_HOST}/posts`, {})
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
                                <JobCard
                                    key={post.id}
                                    post={post}
                                    isSelected={selectedJob && selectedJob.id === post.id}
                                    selectPost={setSelectedJob}
                                />
                            ))}
                        </div>
                        <PostDetails post={selectedJob}/>
                    </>
                )}
            </>
        </div>
    );
}