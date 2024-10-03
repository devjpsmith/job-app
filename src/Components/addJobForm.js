import {useState} from "react";
import { useNavigate } from "react-router-dom";
import './addJobForm.css';
import Button from "./shared/button";

function submit(post, navigate) {
    post.skills = post.skills?.split(',') || [];
    fetch(`${process.env.REACT_APP_API_HOST}/posts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
    })
        .then(() => navigate('/'));
}

export default function AddJobForm() {
    const navigate = useNavigate();
    const [post, setPost] = useState({ id: '', title: '', description: '', years: 0, skills: []});
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [experience, setExperience] = useState(0);
    const [skills, setSkills] = useState('');

    return (
        <div className="add-form-container">
            <div className="add-form-card card">
                <h3>Add Job Posting</h3>
                <div className="job-form">
                    <div className='job-field-input'>
                        <label htmlFor="id">Post Id</label>
                        <input type="text" name="id" id="id" value={id}
                               onChange={(e) => setId(e.target.value)} />
                    </div>
                    <div className='job-field-input'>
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="title" value={title}
                               onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className='job-field-input'>
                        <label htmlFor="description">Description</label>
                        <input type="text" name="description" id="description" value={description}
                               onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div className='job-field-input'>
                        <label htmlFor="years">Years</label>
                        <input type="number" name="years" id="years" value={experience}
                               onChange={(e) => {setExperience(e.target.value)}}/>
                    </div>
                    <div className='job-field-input'>
                        <label htmlFor="skills">Skills</label>
                        <input type="text" name="skills" value={skills}
                               onChange={(e) => {setSkills((e.target.value))}}/>
                    </div>
                </div>
                <Button
                    text={'Add Job'}
                    type={'primary'}
                    onClick={() => submit({ id, title, description, years: experience, skills }, navigate)}
                />
            </div>
        </div>
    );
}