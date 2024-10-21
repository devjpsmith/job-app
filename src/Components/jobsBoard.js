import {useEffect, useState} from "react";
import JobCard from "./jobCard";
import './jobsBoard.css';
import PostDetails from "./postDetails";
import SearchBar from "./searchBar";
import {Sorts} from "./searchBar";

export default function JobsBoard(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [selectedJob, setSelectedJob] = useState(null);
    const [sort, setSort] = useState('');
    const [search, setSearch] = useState('');

    const getPosts = () => {
        fetch(`${process.env.REACT_APP_API_HOST}/posts?_sort=${sort}`, {})
            .then(res => res.json())
            .then(data => {
                setIsLoading(false);
                setPosts(data);
            });
    };

    useEffect(() => {
        if (isLoading)
            getPosts();
    });

    const updateSort = (sort) => {
        setIsLoading(true);
        setSelectedJob(null);
        if (sort === Sorts.mostRecent) setSort('-postedDateTime');
        if (sort === Sorts.experienceLevel) setSort('-years');
        if (sort === Sorts.highestPay) setSort('-highPay');
        getPosts();
    }

    const filter = (post, term) => {
        if (term && term.length > 2)
            return post.title.toLowerCase().includes(term.toLowerCase())
                || post.skills.filter(skill => skill.toLowerCase().includes(term.toLowerCase())).length > 0;
        return true;
    }

    return (
        <div className="jobs-board">
            <>
                <SearchBar setSort={updateSort} setSearch={setSearch} searchTerm={search} setSearchTerm={setSearch} />
                { !isLoading && (
                    <>
                        <div className="row">
                            <div className={'col-lg-4 job-board' + (!!selectedJob ? ' selected' : '')}>
                                <div className="row gy-2">
                                    {posts.filter(post => !search || filter(post, search))
                                        .map(post => (
                                        <JobCard
                                            key={post.id}
                                            post={post}
                                            isSelected={selectedJob && selectedJob.id === post.id}
                                            selectPost={setSelectedJob}
                                        />
                                    ))}
                                </div>
                            </div>
                            <div className={'col-lg-8 post-details-main' + (!!selectedJob ? ' selected' : '')}>
                                <PostDetails post={selectedJob} onClick={() => setSelectedJob(null)}/>
                            </div>
                        </div>
                    </>
                )}
            </>
        </div>
    );
}