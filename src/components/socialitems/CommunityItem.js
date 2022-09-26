import { Button, Dropdown, Input, Menu, Tabs } from 'antd';
import React from 'react';
import Feed from './Feed';
import SocialEvents from './SocialEvents';
import SocialMembers from './SocialMembers';
function CommunityItem() {
    const { TabPane } = Tabs;
    const { Search } = Input;
    const onSearch = value => console.log(value);

    function callback(key) {
        console.log(key);
    }
    const menu = (
        <Menu className="_courseporium_social_more_drop _drpdwn1">
          <Menu.Item className="_drpdwn1_li _courseporium_social_more_drop_link">
            <button type="submit" className="_courseporium_social_more_drop_link">
                <svg className="_mar_r6" xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="none" viewBox="0 0 16 16">
                    <path stroke="#707070" strokeLinecap="round" strokeLinejoin="round" d="M7.262 2.476h-4.87A1.392 1.392 0 001 3.868v9.74A1.392 1.392 0 002.392 15h9.74a1.391 1.391 0 001.392-1.392v-4.87" />
                    <path stroke="#707070" strokeLinecap="round" strokeLinejoin="round" d="M12.482 1.432a1.476 1.476 0 112.087 2.088l-6.61 6.61-2.783.695.696-2.783 6.61-6.61z" />
                </svg>
                <span>Edit</span>
            </button>
          </Menu.Item>
          {/* <hr className="_socail_drop_border" /> */}
          <Menu.Item className="_drpdwn1_li">
            <button type="submit" className="_courseporium_social_more_drop_link">
                <svg className="_mar_r6" xmlns="http://www.w3.org/2000/svg" width={15} height={16} fill="none" viewBox="0 0 15 16">
                    <path stroke="#707070" strokeLinecap="round" d="M5.766 10.882v-2.47M9.059 10.882v-2.47M0 4.294h14.823v0c-.437 0-.655 0-.838.034a2 2 0 00-1.598 1.598c-.034.183-.034.401-.034.839V11c0 1.885 0 2.828-.586 3.414C11.181 15 10.24 15 8.353 15H6.47c-1.886 0-2.829 0-3.415-.586-.585-.586-.585-1.529-.585-3.414V6.765c0-.438 0-.656-.034-.839A2 2 0 00.838 4.328c-.182-.034-.4-.034-.838-.034v0zM5.82 1.305c.094-.087.301-.165.589-.22C6.697 1.03 7.049 1 7.412 1c.362 0 .715.03 1.002.085.288.055.495.133.588.22" />
                </svg>
                <span>Remove</span>
            </button>
          </Menu.Item>
        </Menu>
      );
    return(
        <div className="_courseporium_social_top_inner_content">
            <div className="_courseporium_social_top_inner_item _mar_b8">
                <div className="_courseporium_social_top_inner_left">
                    <div className="_courseporium_social_top_inner_left_btn">
                        <button type="submit" className="_courseporium_social_top_left_link">Web Devlopment</button>
                    </div>
                    <div className="_courseporium_social_top_inner_left_btn">
                        <button type="submit" className="_courseporium_social_top_left_link1">Coding</button>
                    </div>
                </div>
                <div className="_courseporium_social_top_inner_right">
                    <div className="_courseporium_social_top_inner_right_btn">
                        <button type="submit" className="_courseporium_social_top_right_link">
                            <svg className="_mar_r6" xmlns="http://www.w3.org/2000/svg" width={16} height={13} fill="none" viewBox="0 0 16 13">
                                <path stroke="#586ED1" strokeLinecap="round" strokeLinejoin="round" d="M11 12.25V11a2.5 2.5 0 00-2.5-2.5h-5A2.5 2.5 0 001 11v1.25M6 6a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM14.75 12.25V11a2.5 2.5 0 00-1.875-2.419M10.375 1.081a2.5 2.5 0 010 4.844" />
                            </svg>
                            <span className="_mar_r6">Joined</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" fill="none" viewBox="0 0 10 6">
                                <path fill="#312000" d="M5 5l.354.354L5 5.707l-.354-.353L5 5zm4.354-3.646l-4 4-.708-.708 4-4 .708.708zm-4.708 4l-4-4 .708-.708 4 4-.708.708z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="_courseporium_social_top_inner_right_btn">
                        <button type="submit" className="_courseporium_social_top_right_link">
                            <span className="_mar_r6">+ Invite</span>
                        </button>
                    </div>
                    <div className="_courseporium_social_top_inner_right_btn">
                        <Dropdown trigger={['click']} overlay={menu} placement="bottomLeft" arrow>
                            <Button className="_courseporium_social_top_right_more_link">
                                <svg xmlns="http://www.w3.org/2000/svg" width={4} height={16} fill="none" viewBox="0 0 4 16">
                                    <rect width={4} height={4} fill="#586ED1" rx={2} />
                                    <rect width={4} height={4} y={6} fill="#586ED1" rx={2} />
                                    <rect width={4} height={4} y={12} fill="#586ED1" rx={2} />
                                </svg>
                            </Button>
                        </Dropdown>
                    </div>
                </div>
            </div>
            <div className="_courseporium_social_top_txt sticky">
                <h4 className="_courseporium_social_top_txt_title _titl1 _mar_r28">Web Developer Team</h4>
                <p className="_courseporium_social_top_txt_para"><span>Public</span> . Last post 24 minutes ago</p>
            </div>
            <div className="_courseporium_fixed_bar">
                <div className="_courseporium_social_form ms-auto">
                    <form className="_courseporium_social_top_item_btn_form">
                        <Search className="_courseporium_social_top_item_btn_inpt" placeholder="Search item by keyword.." onSearch={onSearch} enterButton />
                    </form>
                </div>
                <div className="_courseporium_social_top_item_btn _mar_b50">
                    <Tabs defaultActiveKey="1" onChange={callback} className="w-100 _social_tab" >
                        <TabPane tab="Feed" key="1">
                            <Feed />
                        </TabPane>
                        <TabPane tab="Members (2k+)" key="2">
                            <SocialMembers />
                        </TabPane>
                        <TabPane tab="Events" key="3">
                            <SocialEvents/>
                        </TabPane>
                        <TabPane tab="Saved Post" key="4">
                            Content of Tab Pane 4
                        </TabPane>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default CommunityItem;