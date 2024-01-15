import React from 'react'
import './Contact.css'
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'

const Contact = () => {
    return (
        <section className="c-wrapper">
            <div className="paddings innerWidth flexCenter c-container">
                {/* Left Side */}
                <div className="flexColStart c-left">
                    <span className='orangeText'>Our Contact Us</span>
                    <span className='primaryText'>Easy to contact us</span>
                    <span className='secondaryText'>We always ready to help you by providing the best service for you. We believe a good balance to live can make your life better.</span>

                    <div className="flexColStart contactModes">
                        {/* First Row */}
                        <div className="flexStart row">
                            {/* First Mode */}
                            <div className="flexCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexColStart details">
                                        <span className='primaryText'>Call</span>
                                        <span>+91 1234567890</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Call Now
                                </div>
                            </div>

                            {/* Second Mode */}
                            <div className="flexCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart details">
                                        <span className='primaryText'>Chat</span>
                                        <span>+91 1234567890</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Chat Now
                                </div>
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className="flexStart row">
                            {/* Third Mode */}
                            <div className="flexCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <BsFillChatDotsFill size={25} />
                                    </div>
                                    <div className="flexColStart details">
                                        <span className='primaryText'>Video Call</span>
                                        <span>+91 1234567890</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Video Call Now
                                </div>
                            </div>

                            {/* Fourth Mode */}
                            <div className="flexCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="flexColStart details">
                                        <span className='primaryText'>Message</span>
                                        <span>+91 1234567890</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">
                                    Message Now
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact