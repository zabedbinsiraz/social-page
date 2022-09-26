import React from 'react';
import FeedLeft from './FeedLeft';
import FeedMiddle from './FeedMiddle';
import FeedRight from './FeedRight';

function Feed() {
    return(
        <div className="_courseporium_social_layout_inner_wrap_area">
            <div className="_custom_row _dis_flex">
               <FeedLeft />
               <FeedMiddle />
               <FeedRight />
            </div>
        </div>
    )
}

export default Feed;