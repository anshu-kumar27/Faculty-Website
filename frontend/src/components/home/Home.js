import React, { useRef, useState } from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

    const inputSearchRef = useRef()
    const searchIconRef = useRef()
    const searchBoxRef = useRef()

    const [keyword, setKeyword] = useState('');

    const handleKeywordChange = (e) => {
        let newKeyword = e.target.value;
        setKeyword(newKeyword);
    };

    return (
        <div className="homeSection">
            <div className="homeBody">
                <h2>faculty</h2>
                <form className="homeForm" >
                    <div className="" ref={searchBoxRef}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} ref={searchIconRef} className='icon' />
                        <input ref={inputSearchRef} type="search" name='search' value={keyword} placeholder='search people...' onChange={handleKeywordChange} />
                        <button type="submit" >search</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Home