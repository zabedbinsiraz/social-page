import React from 'react';
import { Link } from 'react-router-dom';

function FeedLeft() {
    return(
        <div className="_custom_col_xl_3 _custom_col_lg_3 _custom_col_md_12 _custom_col_sm_12">
            <div className="_courseporium_social_layout_left_wrap">
                <div className="_courseporium_social_layout_left_sidebar_inner">
                    <div className="_courseporium_social_layout_left_details _layout_inner_box">
                        <h4 className="_courseporium_social_layout_left_details_title _mar_b8">Desciption</h4>
                        <p className="_courseporium_social_layout_left_details_para _mar_b16">
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
                        </p>
                        <Link to="" className="_courseporium_social_layout_left_details_link">
                            Learn More 
                            <svg xmlns="http://www.w3.org/2000/svg" width={14} height={6} fill="none" viewBox="0 0 14 6">
                                <path fill="#586ED1" d="M11 6l3-3-3-3-.707.707L12.086 2.5H0v1h12.086l-1.793 1.793L11 6z" />
                            </svg>
                        </Link>
                    </div>
                    <div className="_courseporium_social_layout_left_community _layout_inner_box">
                        <div className="_courseporium_social_layout_left_community_txt _mar_b16">
                            <h4 className="_titl3 _courseporium_social_layout_left_community_title">Community Admin</h4>
                        </div>
                        <div className="_courseporium_social_layout_left_community_info _mar_b19">
                            <div className="_courseporium_social_layout_left_community_image _mar_r9">
                               <Link to="">
                                <img src="../../img/man-social1.png" alt="" className="_community_social_img" />
                               </Link>
                            </div>
                            <div className="_courseporium_social_layout_left_community_info_txt">
                                <Link to="">
                                    <h4 className="_mar_b6">Jaydon Korsgaard</h4>
                                </Link>
                                <p>Photoshop Expert</p>
                            </div>
                        </div>
                        <div className="_courseporium_social_layout_left_community_info _mar_b19">
                            <div className="_courseporium_social_layout_left_community_image _mar_r9">
                               <Link to="">
                                <img src="../../img/man-social2.png" alt="" className="_community_social_img" />
                               </Link>
                            </div>
                            <div className="_courseporium_social_layout_left_community_info_txt">
                                <Link to="">
                                    <h4 className="_mar_b6">Tiana Culhane</h4>
                                </Link>
                                <p>Photoshop Expert</p>
                            </div>
                        </div>
                        <div className="_courseporium_social_layout_left_community_info _mar_b19">
                            <div className="_courseporium_social_layout_left_community_image _mar_r9">
                               <Link to="">
                                <img src="../../img/man-social1.png" alt="" className="_community_social_img" />
                               </Link>
                            </div>
                            <div className="_courseporium_social_layout_left_community_info_txt">
                                <Link to="">
                                    <h4 className="_mar_b6">Lydia Passaquindici Arcand</h4>
                                </Link>
                                <p>Photoshop Expert</p>
                            </div>
                        </div>
                        <div className="_courseporium_social_layout_left_community_info _mar_b19">
                            <div className="_courseporium_social_layout_left_community_image _mar_r9">
                                <Link to="">
                                    <img src="../../img/man-social2.png" alt="" className="_community_social_img" />
                                </Link>
                            </div>
                            <div className="_courseporium_social_layout_left_community_info_txt">
                                <Link to="">
                                    <h4 className="_mar_b6">Lincoln Westervelt</h4>
                                </Link>
                                <p>Photoshop Expert</p>
                            </div>
                        </div>
                    </div>
                    <div className="_courseporium_social_layout_left_event _layout_inner_box">
                        <div className="_courseporium_social_layout_left_community_txt _mar_b16">
                            <h4 className="_titl3 _courseporium_social_layout_left_community_title">Upcoming Events</h4>
                        </div>
                        <div className="_courseporium_social_layout_left_event_box _mar_b16">
                            <Link to="">
                                <div className="_courseporium_social_layout_left_event_info">
                                    <div className="_left_inner_card_date _mar_r8">
                                        <p className="_left_inner_card_date_para">10</p>
                                        <p className="_left_inner_card_date_para1">Jul</p>
                                    </div>
                                    <div className="_left_inner_card_txt">
                                        <h4 className="_left_inner_event_card_title">Event Planning Courses Online Free</h4>
                                    </div>
                                </div>
                                <hr className="_socail_drop_border" />
                                <div className="_left_inner_event_bottom">
                                    <Link to="" className="_left_inner_event_card_link">
                                            <p className="_left_iner_event_bottom">17 People Going</p> 
                                    </Link>
                                    <Link to="" className="_left_iner_event_bottom_link">Going</Link>
                                </div>
                            </Link>
                        </div>
                        <div className="_courseporium_social_layout_left_event_box _mar_b16">
                           <Link to="">
                                <div className="_courseporium_social_layout_left_event_info">
                                    <div className="_left_inner_card_date _mar_r8">
                                        <p className="_left_inner_card_date_para">10</p>
                                        <p className="_left_inner_card_date_para1">Jul</p>
                                    </div>
                                    <div className="_left_inner_card_txt">
                                        <h4 className="_left_inner_event_card_title">Event Planning Courses Online Free</h4>
                                    </div>
                                </div>
                                <hr className="_socail_drop_border" />
                                <div className="_left_inner_event_bottom">
                                    <Link to="" className="_left_inner_event_card_link">
                                        <p className="_left_iner_event_bottom">17 People Going</p> 
                                    </Link>
                                    <Link to="" className="_left_iner_event_bottom_link">Going</Link>
                                </div>
                           </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeedLeft;