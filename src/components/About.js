import '../css/app.css';
import '../css/c-h-a.css';

import insta from '../Assets/logos/insts.png';
import fb from '../Assets/logos/fb.png';
import lin from '../Assets/logos/li.png';
import yt from '../Assets/logos/yt.png';

const About = () => {
    return (
        <>
            <main>
                <div className="container">
                    <div className="sub-cnt">
                        <div className="so-txt">
                            <h1 className="heading">Get High Quality Books:</h1>
                            <p className="para-sub">ProBook Contains Best Quality free Tech and programming related books.</p>
                            <p className="para-sub">Download Ai and pogrammign related e-books.</p>
                        </div>
                        <div className="about-txt">
                            <div className="abt-tx">
                                <h2 className="about">
                                    About us
                                </h2>
                                <p className="abt-t">
                                    Probook contains links to thousands of free and paid online best quality technical books. The books collection are either downloadable or can be viewed online. Our collections include core Computer Science and many more. You are welcome to follow the following links for the free books tour.
                                </p>
                            </div>

                        </div>
                        <div className="so-txt">
                            <div className="contact-form">
                            <h2 className="about">
                                    Contact us:
                                </h2>
                                <div className="contact-icons">
                                    <img src={insta} alt="Instagram logo png" className="sc-icn" />
                                    <img src={lin} alt="linkeding logo png" className="sc-icn" />
                                    <img src={fb} alt="Facebook logo png" className="sc-icn" />
                                    <img src={yt} alt="youtube logo png" className="sc-icn" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default About;