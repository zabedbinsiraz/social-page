import React from 'react';
import CommunityItem from './../components/socialitems/CommunityItem';
import CommunityTop from './../components/socialitems/CommunityTop';

function CommunitySingle() {
   
    return(
        <div className="_courseporium_social_wrapper">
            {/* <Menu /> */}
            {/* <LeftSidebar /> */}
            <div className="_courseporium_social_wrap">
                <div className="_main_content _main_content_social">
                    <CommunityTop />
                    <CommunityItem />
                </div>
            </div>
        </div>
    )
}

export default CommunitySingle;