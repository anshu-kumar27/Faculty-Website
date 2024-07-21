import React, { useRef, useState } from 'react'
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Home = () => {

    const inputSearchRef = useRef()
    const searchIconRef = useRef()
    const searchBoxRef = useRef()

    // const toggleSearch = () => {
    //     searchBoxRef.current.style.background = "none"
    //     searchBoxRef.current.style.paddingTop = "initial"
    //     searchBoxRef.current.style.paddingBottom = "initial"
    //     searchBoxRef.current.style.width = "330px"

    //     searchIconRef.current.style.display = "none"

    //     inputSearchRef.current.style.border = "none"
    //     inputSearchRef.current.style.cursor = "initial"
    //     inputSearchRef.current.style.height = "45px"
    // }

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