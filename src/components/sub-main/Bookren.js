import '../../css/book.css';
import Bookdb from '../../books/Bookdb';

import React, { useMemo } from 'react';
// import im from '../../Assets/bookcovers/cover.jpg'


const Bookren = () => {
    const MemoizedBookList = useMemo(() => {
        return (
            <>

                <div className="book-container">
                    <div className="book-row">
                        {
                            Bookdb && Bookdb.map((value) => {
                                // const {} = value;
                                return (
                                    <>
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
                                    </>
                                )
                            })
                        },
                        
                    </div>
                </div>

            </>
        )
    }, [Bookdb]);

    return MemoizedBookList;
}

export default Bookren;