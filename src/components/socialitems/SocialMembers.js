import { Button } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

function SocialMembers() {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return(
        <div className="_social_members_wrapper">
            <div className="_social_members_wrap">
                <div className="_custom_row _dis_flex">
                {items.map(item=>(
                    <div className="_custom_col_xl_3 _custom_col_lg_3 _custom_col_md_6 _custom_col_sm_12">
                    <div className="_social_member_card _social_member_card_inner">
                        <Link to="">
                            <div className="_social_member_card_image">
                                <img src="../../img/social-members1.png" alt="" className="_social_member_card_img" />
                            </div>
                        </Link>
                        <div className="_social_member_card_info">
                            <Link to="">
                                <h4 className="_social_member_card_title">Cooper Carder</h4>
                            </Link>
                            <p className="_social_member_card_para">Founder & CEO at Trophy</p>
                        </div>
                        <div className="_social_member_card_btn">
                            <Button className="_social_member_card_btn_link">Followed</Button>
                            {/* <button type="submit" ></button> */}
                        </div>
                    </div>
                </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default SocialMembers;