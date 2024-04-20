import '../../css/book.css';
import Bookdb from '../../books/Bookdb';

import React, { useMemo } from 'react';
import FilterSys from './FilterSys';
// import im from '../../Assets/bookcovers/cover.jpg'


const Bookrencp = () => {
    const MemoizedBookList = useMemo(() => {
        return (
            <>
                <div className="filt">
                    <FilterSys />
                </div>
                {
                    Bookdb && Bookdb.map((value) => {
                        // Bookdb && Bookdb.filter(()=>{
                        return (
                            <>
                                <div className="book-container">
                                    <div className="book-row">
                                        <div className="book-cnt"  >
                                            <div className="book-ref">
                                                <img className='book-image' src={value.image} alt={value.title} />
                                            </div>
                                            <div className="book-nm">
                                                <h3 className="b-name">
                                                    <span className="title-key">Title: </span>
                                                    <span className="title-value">{value.title}</span>
                                                </h3>
                                                <h3 className="b-name">
                                                    <span className="title-key">Type: </span>
                                                    <span className="title-value">{value.Content}</span>
                                                </h3>
                                                <h3 className="b-name">
                                                    <span className="title-key">Auther: </span>
                                                    <span className="title-value">{value.Auther}</span>
                                                </h3>
                                                <div className="buttons">
                                                    <a href={value.donwn}> <button className="book-d">Download</button></a>
                                                    {/* <a href={value.donwn}> <button className="book-d">More Like</button></a> */}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                        // })
                        // const {} = value;

                    })
                }
            </>
        )
    }, [Bookdb
    ]);

    return MemoizedBookList;
}

export default Bookrencp;