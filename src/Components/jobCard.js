import './jobCard.css';
import Badge from "./shared/badge";
import {getPostedTime, getTimeRemaining} from "../utils";


export default function JobCard({post, isSelected, selectPost}) {
    const selectedClass = isSelected ? 'selected' : '';
    return (
        <div className={`job-card card ` + selectedClass} onClick={() => selectPost(post)}>
            <div className="row">
                <div className="col">
                    <h5 className={'mt-2 mb-2'}>{post.title}</h5>
                    <p className={'m-1'}>${post.lowPay} - ${post.highPay}</p>
                </div>
                <div className="col-2"><Badge years={post.years} /></div>
            </div>
            <div className="row">
                <div className="col d-flex flex-row align-items-center">
                    <svg className={'hourglass-svg'}
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
                        <path
                            d="M308-140h344v-127q0-72-50-121.5T480-438q-72 0-122 49.5T308-267v127ZM160-80v-60h88v-127q0-71 40-129t106-84q-66-27-106-85t-40-129v-126h-88v-60h640v60h-88v126q0 71-40 129t-106 85q66 26 106 84t40 129v127h88v60H160Z"/>
                    </svg>
                    <p className={'m-1'}>{getTimeRemaining(post)}</p>
                </div>
                <div className="col-4 d-flex flex-row justify-content-end align-items-center">
                    <svg
                        className="history-svg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 -960 960 960">
                        <path
                            d="M477-120q-149 0-253-105.5T120-481h60q0 125 86 213t211 88q127 0 215-89t88-216q0-124-89-209.5T477-780q-68 0-127.5 31T246-667h105v60H142v-208h60v106q52-61 123.5-96T477-840q75 0 141 28t115.5 76.5Q783-687 811.5-622T840-482q0 75-28.5 141t-78 115Q684-177 618-148.5T477-120Zm128-197L451-469v-214h60v189l137 134-43 43Z"/>
                    </svg>
                    <p className={'m-1'}>
                        {getPostedTime(post)}
                    </p>
                </div>
            </div>
        </div>
    )
}