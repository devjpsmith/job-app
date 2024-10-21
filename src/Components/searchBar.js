import './searchBar.css'
import Button from "./shared/button";
import {useState} from "react";

const sorts = {
    mostRecent: 'most_recent',
    experienceLevel: 'experience_level',
    highestPay: 'highest_pay',
}

export { sorts as Sorts };

export default function SearchBar({setSort, setSearchTerm, searchTerm}) {
    const [selected, setSelected] = useState(sorts.mostRecent);
    return (
            <div className="searchbar-row row align-items-center">
                <div className="col p-0">
                    <input placeholder={'Search'} type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                </div>
                <div className="col-auto sort-panel d-flex justify-content-end align-items-center gap-3">
                    <span className={'sort-label'}>Sort by</span>
                    <Button type={selected === sorts.mostRecent ? 'primary' : 'unselected'} text={'Most Recent'}
                            onClick={() => {
                                setSelected(sorts.mostRecent);
                                setSort(sorts.mostRecent);
                            }}/>
                    <Button type={selected === sorts.experienceLevel ? 'primary' : 'unselected'}
                            text={'Experience Level'} onClick={() => {
                        setSelected(sorts.experienceLevel);
                        setSort(sorts.experienceLevel);
                    }}/>
                    <Button type={selected === sorts.highestPay ? 'primary' : 'unselected'} text={'Highest Pay'}
                            onClick={() => {
                                setSelected(sorts.highestPay);
                                setSort(sorts.highestPay);
                            }}/>
                    <div className="dropdown sort-dropdown">
                        <a href="#" className=""
                           data-bs-toggle="dropdown"
                           id="dropdownMenuLink">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 className={'dropdown-toggle'}
                                 data-toggle="dropdown"
                                 id="dropdownMenuLink"
                                 viewBox="0 -960 960 960">
                                <path
                                    d="M202-160v-294h-82v-60h224v60h-82v294h-60Zm0-414v-226h60v226h-60Zm166-41v-60h82v-125h60v125h82v60H368Zm82 455v-395h60v395h-60Zm248 0v-127h-82v-60h224v60h-82v127h-60Zm0-247v-393h60v393h-60Z"/>
                            </svg>
                        </a>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <a href="#"
                               className={'dropdown-item' + (selected === sorts.mostRecent ? ' active' : '')}
                               onClick={() => {
                                   setSelected(sorts.mostRecent);
                                   setSort(sorts.mostRecent);
                               }}>Most Recent</a>
                            <a href="#"
                               className={'dropdown-item' + (selected === sorts.experienceLevel ? ' active' : '')}
                               onClick={() => {
                                   setSelected(sorts.experienceLevel);
                                   setSort(sorts.experienceLevel);
                               }}>Experience Level</a>
                            <a href="#"
                               className={'dropdown-item' + (selected === sorts.highestPay ? ' active' : '')}
                               onClick={() => {
                                   setSelected(sorts.highestPay);
                                   setSort(sorts.highestPay);
                               }}>Highest Pay</a>
                        </div>
                    </div>
                </div>
            </div>
    );
}