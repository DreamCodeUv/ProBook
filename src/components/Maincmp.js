import '../css/app.css';

import Bookren from './sub-main/Bookren';
// import Bookrencp from './sub-main/Bookrencp';
// import Pgnat from './sub-main/Pgnat';


const Maincmp = () => {
    return (
        <>
            <main>
                <div className="container">
                    <div className="sub-cnt">
                        <div className="so-txt">
                            <h1 className="heading">Download hingh quality e-books.</h1>
                            <p className="para-sub">get high quality ebook for quality and easy learning.</p>
                            <p className="para-sub">Download Ai and pogrammign related e-books.</p>
                        </div>  
                            <Bookren />
                            {/* <Pgnat /> */}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Maincmp;