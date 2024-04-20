import React, { useState } from 'react'
import Bookdb from '../../books/Bookdb';
import { Maxpage } from '../../books/Bookdb';
// import { getValue } from '@testing-library/user-event/dist/utils';




const Pgnat = () => {
    const maxPg = Maxpage;
    const [pageNo, setPageNo] = useState(1);
    const onNext = () => {
        setPageNo(pageNo + 1);
        console.log(pageNo);
    }
    const onPrev = () => {
        setPageNo(pageNo - 1);
        console.log(pageNo);
    }
    if (pageNo === 1) {
        return (
            <>
                <div className="pg-cny">
                    <button className="page" onClick={onNext}>Next</button>
                </div>
            </>
        )
    }
    if (pageNo === maxPg) {
        return (
            <>
                <div className="pg-cny">
                    <button className="page" onClick={onPrev} >prev</button>
                </div>
            </>
        )
    }
    else {
        return (
            <>
                <div className="pg-cny">
                    <button className="page" onClick={onPrev} >prev</button>
                    <button className="page" onClick={onNext}>Next</button>
                </div>
            </>
        )
    }
}


export default Pgnat;