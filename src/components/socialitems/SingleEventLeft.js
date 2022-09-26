import { Button } from 'antd';
import React from 'react';

function SingleEventLeft() {
    return(
        <div className="_custom_col_xl_3 _custom_col_lg_3 _custom_col_md_6 _custom_col_sm_12">
            <div className="_social_event_card_inner">
                <div className="_social_event_btn_link">
                    <div className="_social_event_image">
                        <img src="../../img/social-event.png" alt="img" className="_social_event_img" />
                    </div>
                    <h4 className="_social_event_card_inner_title">Event Planning Courses Online Free</h4>
                </div>
                <hr className="_social_event_border"/>
                <div className="_social_event_status">
                        <div className="_social_event_status_online">
                            <div className="_social_event_status_online_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width={7} height={7} fill="none" viewBox="0 0 7 7">
                                    <path stroke="#3CB733" strokeWidth="1.2" d="M1 3.91l1.94 1.454L6.334 1" />
                                </svg>
                            </div>
                            <div className="_social_event_status_online_txt">
                                <p>Online</p>
                            </div>
                        </div>
                        <div className="_social_event_status_offline d-none">
                            <div className="_social_event_status_online_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width={7} height={7} viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>
                            </div>
                            <div className="_social_event_status_online_txt">
                                <p>Offline</p>
                            </div>
                        </div>
                </div>
                <div className="_social_event_status_going">
                    <p>
                        <span className="_event_interested">17 People Interested. <span className="_event_going">16 Going</span> </span>
                    </p>
                </div>
                <div className="_social_event_bottom_grp">
                    <div className="_social_event_bottom_grp_btn">
                        <Button className="_social_event_bottom_grp_btn_link">Going</Button>
                    </div>
                    <div className="_social_event_bottom_grp_btn">
                        <Button className="_social_event_bottom_grp_btn_link1">
                            <svg xmlns="http://www.w3.org/2000/svg" width={15} height={16} fill="none" viewBox="0 0 15 16">
                                <path stroke="#586ED1" strokeLinecap="round" strokeLinejoin="round" d="M13.6 3.1a2.1 2.1 0 11-4.202 0 2.1 2.1 0 014.201 0zM5.2 8A2.1 2.1 0 111 8a2.1 2.1 0 014.2 0v0zM13.6 12.9a2.1 2.1 0 11-4.202 0 2.1 2.1 0 014.201 0zM4.914 9.056l4.781 2.786M9.69 4.156L4.916 6.943" />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
            <div className="_social_event_card_inner">
                <div className="_social_event_btn_link">
                    <div className="_social_event_image">
                        <img src="../../img/social-event.png" alt="" className="_social_event_img" />
                    </div>
                    <h4 className="_social_event_card_inner_title">Event Planning Courses Online Free</h4>
                </div>
                <hr className="_social_event_border"/>
                <div className="_social_event_status">
                        <div className="_social_event_status_online">
                            <div className="_social_event_status_online_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width={7} height={7} fill="none" viewBox="0 0 7 7">
                                    <path stroke="#3CB733" strokeWidth="1.2" d="M1 3.91l1.94 1.454L6.334 1" />
                                </svg>
                            </div>
                            <div className="_social_event_status_online_txt">
                                <p>Online</p>
                            </div>
                        </div>
                        <div className="_social_event_status_offline d-none">
                            <div className="_social_event_status_online_icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width={7} height={7} viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>
                            </div>
                            <div className="_social_event_status_online_txt">
                                <p>Offline</p>
                            </div>
                        </div>
                </div>
                <div className="_social_event_status_going">
                    <p>
                        <span className="_event_interested">17 People Interested. <span className="_event_going">16 Going</span> </span>
                    </p>
                </div>
                <div className="_social_event_bottom_grp">
                    <div className="_social_event_bottom_grp_btn">
                        <Button className="_social_event_bottom_grp_btn_link">Going</Button>
                    </div>
                    <div className="_social_event_bottom_grp_btn">
                        <Button className="_social_event_bottom_grp_btn_link1">
                            <svg xmlns="http://www.w3.org/2000/svg" width={15} height={16} fill="none" viewBox="0 0 15 16">
                                <path stroke="#586ED1" strokeLinecap="round" strokeLinejoin="round" d="M13.6 3.1a2.1 2.1 0 11-4.202 0 2.1 2.1 0 014.201 0zM5.2 8A2.1 2.1 0 111 8a2.1 2.1 0 014.2 0v0zM13.6 12.9a2.1 2.1 0 11-4.202 0 2.1 2.1 0 014.201 0zM4.914 9.056l4.781 2.786M9.69 4.156L4.916 6.943" />
                            </svg>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SingleEventLeft;