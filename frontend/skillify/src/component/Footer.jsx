import React from 'react';
import projectLogo from "../assets/projectLogo.jpg"
function Footer() {
    return (
        <div className="footer_section">

            {/* FOOTER TOP SECTION START */}
            <div className="subscriber_head bg-blue-500 grid grid-cols-2 gap-4 p-4 text-white">
                <h1 id="free_daily_updates" className="col-span-1 text-right">Free Daily Updates</h1>
                <form action="" className="subscriber_search_box col-span-1 flex" method="get">
                    <input className="subscriber_search_bar flex-1 bg-gray-200 px-4 py-2 rounded-l-full" type="text" placeholder="Search for datasets, APIs" />
                    <button className="subscriber_button bg-green-500 px-4 py-2 rounded-r-full" type="submit">Subscribe</button>
                </form>
            </div>
            {/* FOOTER TOP SECTION ENDS */}

            {/* FOOTER MID SECTION START */}
            <div className="subscriber_mid bg-blue-200 grid grid-cols-3 gap-4 p-4">
                <div className="first_para col-span-1">
                    <div className="footer_logo">
                    <img src={projectLogo} alt="Website Logo" className="h-8" />
                    </div>
                    <div className="footer_para">
                        <h3 id="footer_first_head" className="font-light">Start Your Journey Now</h3>
                        <br />
                        <h5>dwayzode@gmail.com</h5>
                        <h5>www.skillify.com</h5>
                    </div>
                </div>
                <div className="middle_para col-span-1 grid grid-cols-2 gap-4">
                    <div className="footer_About">
                        <h4 className="footer_About_para"><a className="footer_About_head" href="#">About</a></h4>
                        <h5 className="footer_About_para"><a className="footer_About_links" href="">Terms of use</a></h5>
                        <h5 className="footer_About_para"><a className="footer_About_links" href="">Privacy Policy</a></h5>
                        <h5 className="footer_About_para"><a className="footer_About_links" href="">Risk Of Factor</a></h5>
                        <h5 className="footer_About_para"><a className="footer_About_links" href="">Risk Of Factor</a></h5>
                    </div>

                    <div className="footer_About">
                        <h4 className="footer_About_para"><a className="footer_About_head" href="#">Policies</a></h4>
                        <h5 className="footer_About_para"><a className="footer_About_links" href="">Terms of use</a></h5>
                        <h5 className="footer_About_para"><a className="footer_About_links" href="">Privacy Policy</a></h5>
                        <h5 className="footer_About_para"><a className="footer_About_links" href="">Risk Of Factor</a></h5>
                        <h5 className="footer_About_para"><a className="footer_About_links" href="">Risk Of Factor</a></h5>
                    </div>

                    {/* Add more content here */}
                </div>
                <div className="last_para col-span-1">
                    {/* Your existing HTML content for the last section */}
                </div>
            </div>
            {/* FOOTER MID SECTION ENDS */}

            {/* FOOTER LAST SECTION START */}
            <div className="subscriber_last bg-blue-500 grid grid-cols-3 gap-4 p-4 text-white">
                <div className="footer_logo_last col-span-1 text-right">
                <img src={projectLogo} alt="Website Logo" className="h-8" />
                </div>
                <div className="footer_last_mid_para col-span-2">
                    <p id="unleash" className="font-light">Unleash The Power Of Security And Development</p>
                </div>
                <div className="footer_last_last_para col-span-3 text-center">
                    <p className="copyright2">COPYRIGHT 2022 &copy; All right reserved</p>
                    <p className="copyright2">ALL Trademarks are registered to their respective owners</p>
                </div>
            </div>
            {/* FOOTER LAST SECTION ENDS */}

        </div>
    );
}

export default Footer;

