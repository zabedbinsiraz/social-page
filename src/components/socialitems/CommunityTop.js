import React from 'react';

function CommunityTop() {
    return(
        <div className="_courseporium_social_top_bar _mar_b24
        ">
            <div className="_courseporium_social_top_cover">
                <div className="_courseporium_top_cover_image">
                    <img src="../../img/social-top-img.png" alt="" className="_cover_img" />
                </div>
                <div className="_courseporium_social_top_edit_btn">
                    <button type="submit" className="_courseporium_social_top_edit_btn_link">
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} fill="none" viewBox="0 0 18 18">
                            <path fill="#fff" fillRule="evenodd" d="M14.12 6.968l1.797-1.796c.545-.546.818-.818.963-1.112a2 2 0 000-1.776c-.145-.295-.418-.567-.963-1.112-.546-.546-.818-.818-1.112-.964a2 2 0 00-1.776 0c-.294.146-.567.418-1.112.964L10.098 2.99a10.9 10.9 0 004.023 3.978zM8.645 4.445l-6.87 6.87c-.426.425-.638.638-.778.899s-.199.556-.317 1.145l-.615 3.077c-.067.333-.1.5-.005.594.094.094.26.061.593-.006l3.077-.615c.59-.118.884-.177 1.145-.316.262-.14.474-.353.9-.778l6.888-6.89a12.903 12.903 0 01-4.018-3.98z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CommunityTop;