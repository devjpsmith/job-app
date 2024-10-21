import './postDetails.css';
import {getPostedTime, getTimeRemaining} from "../utils";
import Badge from "./shared/badge";

export default function PostDetails({ post, onClick }) {
    return (
        <>
            { post &&
                <div className="post-details-section">
                    <div className="post-details-card card">
                        <svg className="close-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" onClick={onClick}>
                            <path
                                d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
                        </svg>
                        <h5>{post.title}</h5>
                        <div className="row">
                            <div className="col-lg">
                                <div className="d-flex">
                                    <p className="fw-bold ">Post Age:</p>
                                    <p className="px-2">{getPostedTime(post)}</p>
                                </div>
                            </div>
                            <div className="col-lg">
                                <div className="d-flex">
                                    <p className="fw-bold ">Required years experience</p>
                                    <p className="px-2">{post.years}</p>
                                    <Badge years={post.years} />
                                </div>
                            </div>
                        </div>
                        <div className="d-flex">
                            <p className="fw-bold">Post Expiration:</p>
                            <p className="px-2">{post.expirationDateTime}</p>
                        </div>
                        <div className="d-flex">
                            <p className="fw-bold">Pay Range:</p>
                            <p className="px-2">${post.lowPay} - ${post.highPay}</p>
                        </div>
                        <p>{post.description}</p>
                        <p className="fw-bold">Skills:</p>
                        <ul>
                            {post.skills.map(skill => (
                                <li key={`${skill}`}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            }
        </>
    );
}