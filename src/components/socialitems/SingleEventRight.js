import { Button, Dropdown, Input, Menu } from 'antd';
import React from 'react';
const { TextArea } = Input;

function SingleEventRight() {
    const onChange = e => {
        console.log('Change:', e.target.value);
    };
    const menu = (
        <Menu className="_courseporium_social_more_drop3">
          <Menu.Item>
            <button type="submit" className="_courseporium_social_more_drop_link">
                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="#707070" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-share-2"><circle cx={18} cy={5} r={3} /><circle cx={6} cy={12} r={3} /><circle cx={18} cy={19} r={3} /><line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" /></svg>
                <span>Share event</span>
            </button>
            </Menu.Item>
            <hr className="_socail_drop_border" />
            <Menu.Item>
              <button type="submit" className="_courseporium_social_more_drop_link">
                <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="#707070" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-globe"><circle cx={12} cy={12} r={10} /><line x1={2} y1={12} x2={22} y2={12} /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
                <span>Browse event</span>
              </button>
            </Menu.Item>
        </Menu>
        );
    return(
        <div className="_custom_col_xl_9 _custom_col_lg_9 _custom_col_md_12 _custom_col_sm_12">
            <div className="_social_event_right_area">
                <div className="_single_event_right_area_top">
                    <div className="_single_event_right_area_top_iamge">
                        <img src="../../img/single-event-top.png" alt="" className="_single_event_top_img" />
                    </div>
                    <div className="_single_event_right_area_top_item">
                        <ul className="_single_event_right_area_list">
                            <li className="_single_event_right_area_item">
                                <button type="submit" className="_single_event_right_area_link _event_right_link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={19} height={19} fill="none" viewBox="0 0 19 19">
                                        <path stroke="#586ED1" strokeWidth="1.4" d="M7.77 3.942C8.555 1.98 8.95 1 9.625 1c.676 0 1.07.98 1.856 2.942l.036.09c.445 1.109.667 1.663 1.12 2 .453.336 1.047.39 2.236.496l.215.019c1.946.174 2.919.261 3.127.88.208.62-.514 1.277-1.96 2.591l-.482.44c-.731.665-1.097.997-1.267 1.434a2.002 2.002 0 00-.08.249c-.112.455-.005.937.21 1.903l.066.3c.394 1.775.59 2.662.247 3.045a1 1 0 01-.48.296c-.497.136-1.201-.438-2.61-1.587-.925-.753-1.388-1.13-1.92-1.215a1.997 1.997 0 00-.63 0c-.53.085-.993.462-1.919 1.215-1.409 1.149-2.113 1.723-2.61 1.587a1 1 0 01-.48-.296c-.344-.383-.147-1.27.247-3.045l.066-.3c.215-.966.322-1.448.21-1.903a2.002 2.002 0 00-.08-.25c-.17-.436-.536-.768-1.267-1.434l-.482-.439C1.55 8.704.827 8.046 1.035 7.428c.208-.62 1.181-.707 3.127-.881l.215-.02c1.189-.106 1.783-.159 2.236-.496.453-.336.675-.89 1.12-1.998l.036-.092z" />
                                    </svg>
                                    <span>Interested</span>
                                </button>
                            </li>
                            <li className="_single_event_right_area_item">
                                <button type="submit" className="_single_event_right_area_link _event_right_link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="none" viewBox="0 0 20 20">
                                        <circle cx={10} cy={10} r={9} stroke="#586ED1" strokeWidth="1.2" />
                                        <path stroke="#586ED1" strokeLinecap="round" strokeWidth="1.2" d="M14 8l-3.598 4.318c-.656.786-.983 1.18-1.424 1.2-.44.02-.803-.343-1.527-1.067L6 11" />
                                    </svg>
                                    <span>Going</span>
                                </button>
                            </li>
                            <li className="_single_event_right_area_item">
                                <Dropdown trigger={['click']} overlay={menu} placement="bottomLeft" arrow>
                                  <Button className="_single_event_right_area_link1 _event_right_link">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={4} height={17} fill="none" viewBox="0 0 4 17">
                                        <circle cx={2} cy={2} r={2} fill="#000" />
                                        <circle cx={2} cy={8} r={2} fill="#000" />
                                        <circle cx={2} cy={15} r={2} fill="#000" />
                                    </svg>
                                  </Button>
                                </Dropdown>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="_single_event_right_area_middle">
                    <div className="_single_event_right_area_middle_box_content">
                        <div className="_layout_midle_title_box_date_info">
                            <p className="_layout_midle_title_box_content_date">19</p>
                            <p className="_layout_midle_title_box_content_txt">Jan</p>
                        </div>
                        <div className="_layout_midle_title_box_txt">
                            <p className="_layout_midle_title_box_txt_para">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16">
                                    <circle cx={8} cy={8} r="7.5" stroke="#586ED1" />
                                    <path stroke="#586ED1" strokeLinecap="round" d="M10.938 9.063H7.25a.25.25 0 01-.25-.25V6" />
                                </svg> 
                                <span>Saturday at 9:15 AM</span>
                            </p>
                            <h4 className="_layout_midle_title_box_txt_title">Event Planning Courses Online Free</h4>
                        </div>
                    </div>
                    <div className="_layout_middle_description  _layout_inner">
                        <h4 className="_layout_middle_description_title _title5 _mar_b20">Description</h4>
                        <div className="_layout_middle_description_info">
                            <ul className="_layout_middle_description_list">
                            <li className="_layout_middle_description_item">
                                <svg xmlns="http://www.w3.org/2000/svg" width={22} height={20} fill="none" viewBox="0 0 22 20">
                                <path fill="#666" d="M21.36 2.578h-5.848v-.644A1.936 1.936 0 0013.578 0H8.422a1.936 1.936 0 00-1.934 1.934v.644H.645A.646.646 0 000 3.223v14.18c0 1.066.867 1.933 1.934 1.933h18.132A1.936 1.936 0 0022 17.402V3.236v-.002c-.025-.424-.285-.653-.64-.656zM7.777 1.934c0-.356.29-.645.645-.645h5.156c.356 0 .645.29.645.645v.644H7.777v-.644zm12.684 1.933L18.46 9.872a.643.643 0 01-.612.44h-3.625v-.644a.645.645 0 00-.645-.645H8.422a.644.644 0 00-.645.645v.645H4.152a.643.643 0 01-.612-.441L1.54 3.867H20.46zm-7.527 6.446v1.289H9.066v-1.29h3.868zm7.777 7.09c0 .355-.29.644-.645.644H1.934a.645.645 0 01-.645-.645V7.194l1.028 3.085c.264.791 1.001 1.323 1.835 1.323h3.625v.644c0 .356.289.645.645.645h5.156a.645.645 0 00.645-.645v-.644h3.625a1.93 1.93 0 001.835-1.323l1.028-3.085v10.208z" />
                                </svg> <span>1 Hour 20 min</span>
                            </li>
                            <li className="_layout_middle_description_item">
                                <svg className="_list_svg" xmlns="http://www.w3.org/2000/svg" width={29} height={19} fill="none" viewBox="0 0 29 19">
                                <path fill="#666" d="M27.3 11.21V6.69l1.309-.47A.622.622 0 0029 5.625c0-.27-.158-.51-.391-.594l-13.934-5a.517.517 0 00-.35 0L.39 5.03A.623.623 0 000 5.625c0 .27.158.51.391.594l5.613 2.014v4.892c0 1.268.947 2.413 2.666 3.226 1.566.741 3.637 1.149 5.83 1.149s4.264-.408 5.83-1.149c1.72-.813 2.666-1.958 2.666-3.226V8.233l3.172-1.138v4.115c-.976.278-1.7 1.258-1.7 2.421v1.362c0 .956-.352 1.893-.966 2.571a.673.673 0 00-.123.681.569.569 0 00.523.386h1.133c2.186 0 3.965-1.963 3.965-4.375v-.625c0-1.163-.723-2.143-1.7-2.42zM14.5 1.282l12.102 4.343L14.5 9.968 2.398 5.625 14.5 1.282zm7.363 11.843c0 1.478-3.024 3.125-7.363 3.125-4.34 0-7.363-1.647-7.363-3.125V8.64l7.188 2.58a.516.516 0 00.35 0l7.188-2.58v4.485z" />
                                </svg> <span>245 People Response</span>
                            </li>
                            <li className="_layout_middle_description_item">
                                <svg className="_list_svg" xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" viewBox="0 0 18 18">
                                <path stroke="#666" strokeWidth="1.2" d="M13.707 11.707l2.648 2.648a.912.912 0 010 1.29 5.471 5.471 0 01-7.151.508l-1.575-1.182a22.997 22.997 0 01-4.6-4.6L1.847 8.796a5.471 5.471 0 01.508-7.151.912.912 0 011.29 0l2.648 2.648a1 1 0 010 1.414L5.272 6.728a.533.533 0 00-.1.616 12.263 12.263 0 005.484 5.484.533.533 0 00.616-.1l1.02-1.02a1 1 0 011.415 0z" />
                                </svg> <span>Free Entry</span>
                            </li>
                            <li className="_layout_middle_description_item">
                                <svg className="_list_svg" xmlns="http://www.w3.org/2000/svg" width={18} height={20} fill="none" viewBox="0 0 18 20">
                                <path fill="#666" d="M9.398 18.82l-.274-.535.274.534zm-.796 0l.274-.535-.274.534zM16.4 8.727c0 2.68-1.381 4.851-3.018 6.484-1.637 1.633-3.476 2.672-4.258 3.073l.548 1.068c.835-.428 2.797-1.535 4.557-3.291 1.76-1.755 3.371-4.215 3.371-7.334h-1.2zM9 1.328a7.4 7.4 0 017.4 7.4h1.2A8.6 8.6 0 009 .128v1.2zm-7.4 7.4a7.4 7.4 0 017.4-7.4v-1.2a8.6 8.6 0 00-8.6 8.6h1.2zm7.276 9.557c-.782-.4-2.621-1.44-4.258-3.073S1.6 11.408 1.6 8.728H.4c0 3.12 1.611 5.579 3.37 7.334 1.761 1.756 3.723 2.863 4.558 3.291l.548-1.068zm.248 0a.262.262 0 01-.248 0l-.548 1.068c.425.218.919.218 1.344 0l-.548-1.068zm2.705-9.557A2.829 2.829 0 019 11.557v1.2a4.029 4.029 0 004.029-4.029h-1.2zM9 5.9a2.829 2.829 0 012.829 2.828h1.2A4.029 4.029 0 009 4.7v1.2zM6.171 8.728A2.829 2.829 0 019 5.9V4.7a4.029 4.029 0 00-4.029 4.028h1.2zM9 11.557a2.829 2.829 0 01-2.829-2.829h-1.2A4.029 4.029 0 009 12.757v-1.2z" />
                                </svg> <span> 14/A City Road, West California, USA</span>
                            </li>
                            </ul>
                            <p className="_layout_middle_description_info_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis at aliquam hac enim sagittis molestie aliquam. Et enim hac fringilla pulvinar. Lectus pellentesque velit convallis at et, ultricies aliquet tellus pretium.</p>
                        </div>
                    </div>
                    <div className="_layout_middle_host _layout_inner">
                        <h4 className="_layout_middle_host_title _title5 _mar_b24">Host</h4>
                        <div className="_layout_middle_host_info">
                            <div className="_layout_middle_host_image">
                                <img alt="" src="/img/friends_img.png" className="_host_img" />
                            </div>
                            <div className="_layout_middle_host_content">
                                <h4 className="_layout_middle_host_txt">Metafan</h4>
                                <p className="_layout_middle_host_para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis at aliquam hac enim.</p>
                            </div>
                        </div>
                    </div>
                    <div className="_social_event_discussion_area">
                        <div className="_social_event_discussion_title">
                            <h4>Discussions</h4>
                        </div>
                        <hr />
                        <div className="_social_discussion">
                            <div className="_social_event_discussion_box">
                                <div className="_social_event_discussion_box_image">
                                <img src="../../img/social-discussion-img.png" alt="" class="_discussion_img" />
                                </div>
                                <div className="_discusion_area">
                                    <div className="_social_event_discussion_box_txt">
                                        <h4>Kathelen Monero</h4>
                                        <span>May 5, 2021 at 6:37 am</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci nulla eu senectus mattis pellentesque interdum integer ut. Sit faucibus enim quis fringilla enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                        <Button className="_discussion_reply_btn">Reply</Button>
                                    </div>
                                    <div className="_social_event_discussion_box _reply_discussion">
                                        <div className="_social_event_discussion_box_image">
                                        <img src="../../img/social-discussion-img.png" alt="" class="_discussion_img_reply" />
                                        </div>
                                        <div className="_discusion_area">
                                            <div className="_social_event_discussion_box_txt">
                                                <h4>Kathelen Monero</h4>
                                                <span>May 5, 2021 at 6:37 am</span>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci nulla eu senectus mattis pellentesque interdum integer ut. Sit faucibus enim quis fringilla enim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                                <Button className="_discussion_reply_btn">Reply</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="_social_event_discussion_area">
                        <div className="_social_event_discussion_title">
                            <h4>Leave a Reply</h4>
                        </div>
                        <hr />
                        <form className="_M_social_event_reply_form">
                            <div className="_M_social_event_inpt_top">
                                <p>Comment*</p>
                                <TextArea className="_M_social_event_inpt_textarea" onChange={onChange} placeholder="Please enter your Comment..." rows={10}/>
                            </div>
                            <div className="_M_social_event_inpt_bottom">
                                <div className="_custom_row">
                                    <div className="_custom_col_xl_6 _custom_col_lg_6 _custom_col_xl_12 _custom_col_sm_12">
                                        <div className="_M_social_event_inpt">
                                            <p>Name*</p>
                                            <Input className="_M_social_event_inpt_link" placeholder="Name" />
                                        </div>
                                    </div>
                                    <div className="_custom_col_xl_6 _custom_col_lg_6 _custom_col_xl_12 _custom_col_sm_12">
                                        <div className="_M_social_event_inpt">
                                            <p>Email*</p>
                                            <Input className="_M_social_event_inpt_link" placeholder="Email address" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleEventRight;