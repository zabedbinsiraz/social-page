
import {
    Button, Dropdown,
    Menu
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addComment, deleteComment, updateComment } from "../redux/CommentSlice";
import { addReaction } from "../redux/ReactionSlice";
import SingleComment from './SingleComment';

export const SinglePost = ({postId,status}) => {
    const [commentId,setCommentId] = useState();
    const [comment,setComment] = useState();
    const [isEditable, setIsEditable] = useState(false);
    const [like, setLike] = useState("");
    const [love, setLove] = useState("d-none");
    const [wow, setWow] = useState("d-none");
    const [sad, setSad] = useState("d-none");
    console.log(postId,status)
    const dispatch = useDispatch();

    const allReaction = useSelector((state) => state.reactionsReducer.reacts);

    const postReaction = allReaction?.filter(
        (reaction) => reaction.postId === postId
      );
      const postReactionLength = postReaction[0]?.reacts?.length;
      const postLastReaction =
        postReaction[0]?.reacts[postReactionLength - 1];




    const allComments = useSelector((state) => state.commentsReducer.comments);

    const comments = allComments.filter((comment) => comment.postId === postId); // akhane props teke post id asbe




    const handleReaction = (reaction) => {
        const newReaction = { postId: postId, reaction: reaction };
        dispatch(addReaction(newReaction));
      };

      const [upCmnt,setUpCmnt] = useState();

 useEffect(() => {
    if (postLastReaction === "like") {
      setLike("");
      setLove("d-none");
      setSad("d-none");
      setWow("d-none");
    } else if (postLastReaction === "love") {
      setLike("d-none");
      setLove("");
      setSad("d-none");
      setWow("d-none");
    } else if (postLastReaction === "wow") {
      setLike("d-none");
      setLove("d-none");
      setSad("d-none");
      setWow("");
    } else if (postLastReaction === "sad") {
      setLike("d-none");
      setLove("d-none");
      setSad("");
      setWow("d-none");
    }
  }, [postLastReaction]);

    // const [isModalVisible1, setIsVisible1] = useState(false);
    // const showModal1 = () => {
    //   setIsVisible1(true);
    // };

    // const handleCancel1 = () => {
    //     console.log("called");
    //     setIsVisible1(false);
    //   };

    //   const onChange2 = (e) => {
    //     console.log("Change:", e.target.value);
    //   };

    const menu = (
        <Menu className="_courseporium_social_more_drop _drpdwn1">
          <Menu.Item className="_drpdwn1_li">
            <button type="submit" className="_courseporium_social_more_drop_link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#707070"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-users"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx={9} cy={7} r={4} />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span>Friends</span>
            </button>
          </Menu.Item>
          <Menu.Item className="_drpdwn1_li">
            <button type="submit" className="_courseporium_social_more_drop_link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#707070"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-globe"
              >
                <circle cx={12} cy={12} r={10} />
                <line x1={2} y1={12} x2={22} y2={12} />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
              <span>Public</span>
            </button>
          </Menu.Item>
          <Menu.Item className="_drpdwn1_li">
            <button type="submit" className="_courseporium_social_more_drop_link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                viewBox="0 0 24 24"
                fill="none"
                stroke="#707070"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-lock"
              >
                <rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <span>Only Me</span>
            </button>
          </Menu.Item>
        </Menu>
      );

      const menu1 = (
        <Menu className="_courseporium_social_more_drop1 _drpdwn1">
          <Menu.Item className="_drpdwn1_li">
            <button type="submit" className="_courseporium_social_more_drop_link">
              <svg
                xmlns="h00ttp://www.w3.org/2000/svg"
                width={14}
                height={14}
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="#707070"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.2"
                  d="M14.25 15.75L9 12l-5.25 3.75v-12a1.5 1.5 0 011.5-1.5h7.5a1.5 1.5 0 011.5 1.5v12z"
                />
              </svg>
              <span>Save post</span>
            </button>
          </Menu.Item>
          <Menu.Item className="_drpdwn1_li">
            <button type="submit" className="_courseporium_social_more_drop_link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                fill="none"
                viewBox="0 0 20 22"
              >
                <path
                  fill="#707070"
                  fillRule="evenodd"
                  d="M7.547 19.55c.533.59 1.218.915 1.93.915.714 0 1.403-.324 1.938-.916a.777.777 0 011.09-.056c.318.284.344.77.058 1.084-.832.917-1.927 1.423-3.086 1.423h-.002c-1.155-.001-2.248-.506-3.077-1.424a.762.762 0 01.057-1.083.774.774 0 011.092.057zM9.527 0c4.58 0 7.657 3.543 7.657 6.85 0 1.702.436 2.424.899 3.19.457.754.976 1.612.976 3.233-.36 4.14-4.713 4.478-9.531 4.478-4.818 0-9.172-.337-9.528-4.413-.003-1.686.515-2.544.973-3.299l.161-.27c.398-.679.737-1.417.737-2.918C1.871 3.543 4.948 0 9.528 0zm0 1.535c-3.6 0-6.11 2.802-6.11 5.316 0 2.127-.595 3.11-1.12 3.978-.422.697-.755 1.247-.755 2.444.173 1.93 1.455 2.944 7.986 2.944 6.494 0 7.817-1.06 7.988-3.01-.003-1.13-.336-1.681-.757-2.378-.526-.868-1.12-1.851-1.12-3.978 0-2.514-2.51-5.316-6.111-5.316z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Turn On Notification</span>
            </button>
          </Menu.Item>
          <Menu.Item className="_drpdwn1_li">
            <button type="submit" className="_courseporium_social_more_drop_link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="#707070"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.2"
                  d="M14.25 2.25H3.75a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V3.75a1.5 1.5 0 00-1.5-1.5zM6.75 6.75l4.5 4.5M11.25 6.75l-4.5 4.5"
                />
              </svg>
              <span>Hide</span>
            </button>
          </Menu.Item>
          <Menu.Item className="_drpdwn1_li">
            <button type="submit" className="_courseporium_social_more_drop_link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="#707070"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.2"
                  d="M8.25 3H3a1.5 1.5 0 00-1.5 1.5V15A1.5 1.5 0 003 16.5h10.5A1.5 1.5 0 0015 15V9.75"
                />
                <path
                  stroke="#707070"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.2"
                  d="M13.875 1.875a1.591 1.591 0 112.25 2.25L9 11.25 6 12l.75-3 7.125-7.125z"
                />
              </svg>
              <span>Edit Post</span>
            </button>
          </Menu.Item>
          <Menu.Item className="_drpdwn1_li">
            <button type="submit" className="_courseporium_social_more_drop_link">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="#707070"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.2"
                  d="M2.25 4.5h13.5M6 4.5V3a1.5 1.5 0 011.5-1.5h3A1.5 1.5 0 0112 3v1.5m2.25 0V15a1.5 1.5 0 01-1.5 1.5h-7.5a1.5 1.5 0 01-1.5-1.5V4.5h10.5zM7.5 8.25v4.5M10.5 8.25v4.5"
                ></path>
              </svg>
              <span>Delete Post</span>
            </button>
          </Menu.Item>
        </Menu>
      );

    //   const menu2 = (
    //     <Menu className="_courseporium_social_more_drop2 _drpdwn1">
    //       <Menu.Item className="_drpdwn1_li ">
    //         <button
    //           className="_courseporium_social_more_drop_link"
    //           onClick={() => handleCommentDelete(commentId)}
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width={14}
    //             height={14}
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="#707070"
    //             strokeWidth={2}
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             className="feather feather-trash-2"
    //           >
    //             <polyline points="3 6 5 6 21 6" />
    //             <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    //             <line x1={10} y1={11} x2={10} y2={17} />
    //             <line x1={14} y1={11} x2={14} y2={17} />
    //           </svg>
    //           <span>Delete</span>
    //         </button>
    //       </Menu.Item>
    //       <Menu.Item className="_drpdwn1_li">
    //         <button
    //           type="submit"
    //           className="_courseporium_social_more_drop_link"
    //           onClick={() => makeEditable(postId)}
    //         >
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             width={14}
    //             height={14}
    //             viewBox="0 0 24 24"
    //             fill="none"
    //             stroke="#707070"
    //             strokeWidth={2}
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             className="feather feather-edit"
    //           >
    //             <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    //             <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    //           </svg>
    //           <span>Edit</span>
    //         </button>
    //       </Menu.Item>
    //     </Menu>
    //   );


    const handleComment = () => {
    
        const commentNew = {
          postId: postId,
          commentId: allComments?.length + 1000,
          comment: comment,
        };
        console.log(commentNew);
        console.log(allComments)
        dispatch(addComment(commentNew))
         setComment('');
      };
      console.log(allComments);
      console.log(comments);
    
     
    
      const handleDeleteUpdate = ( cId, cmnt) => {
        
        setCommentId(cId);
        setUpCmnt(cmnt);
      };
    
      const handleCommentDelete = (id) => {
        dispatch(deleteComment(id));
        setComment("");
      };
    
      const makeEditable = () => {
        setIsEditable(true);
      };
    
      const handleCommentEdit = () => {
        const updtCmnt = {
          postId: postId,
          commentId: commentId,
          comment: upCmnt,
        };
        
    
        dispatch(updateComment(updtCmnt));
        setIsEditable(false);
        setComment("");
      };





  return (
    <div className="_feed_inner_timeline_post_area  _feed_middle_inner">
            <div className="_feed_inner_timeline_content">
              <div className="_feed_inner_timeline_post_top">
                <div className="_feed_inner_timeline_post_box">
                  <div className="_feed_inner_timeline_post_box_image">
                    <Link to="">
                      <img alt="img" src="../../img/post.png" className="_post_img" />
                    </Link>
                  </div>
                  <div className="_feed_inner_timeline_post_box_txt">
                    <a href="/profile">
                      <h4 className="_feed_inner_timeline_post_box_title">
                        Martin Vaccaro
                      </h4>
                    </a>
                    <div className="_feed_inner_timline_area">
                      <p className="_feed_inner_timeline_post_box_para">
                        5 minute ago .
                      </p>
                      <div className="_feed_privacy">
                        <Dropdown
                          trigger={["click"]}
                          overlay={menu}
                          placement="bottomLeft"
                          arrow
                        >
                          <Button className="_feed_privacy_btn_link">
                            Public
                          </Button>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="_feed_inner_timeline_post_box_dropdown">
                  <div className="_feed_timeline_post_dropdown">
                    <Dropdown
                      trigger={["click"]}
                      overlay={menu1}
                      placement="bottomLeft"
                      arrow
                    >
                      <Button className="_feed_timeline_post_dropdown_link">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="4"
                          height="17"
                          fill="none"
                          viewBox="0 0 4 17"
                        >
                          <circle cx="2" cy="2" r="2" fill="#C4C4C4"></circle>
                          <circle cx="2" cy="8" r="2" fill="#C4C4C4"></circle>
                          <circle cx="2" cy="15" r="2" fill="#C4C4C4"></circle>
                        </svg>
                      </Button>
                    </Dropdown>
                  </div>
                </div>
              </div>
             
             
              <p className="_feed_post_description">
                {status}
              </p>
             

              {/* reaction area */}

              <div className="_feed_inner_timeline_reaction">
                <ul className="_feed_inner_timeline_reaction_list">
                  <li className="_feed_inner_timeline_reaction_item">
                    <button className="_feed_inner_timeline_reaction_link">
                      <span className="_like_btn _like_btn-post unselectable">
                        <div
                          className="_status_reaction _active_like"
                          onClick={() => handleReaction("like")}
                        >
                          <svg
                            className="d-none"
                            xmlns="http://www.w3.org/2000/svg"
                            width="{21}"
                            height="{21}"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#586ED1"
                            strokewidth="{2}"
                            strokelinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                          </svg>
                          <div className="_inline_post_emoji  _no_anim">
                            <div className={`_emoji _emoji_love ${love}`}>
                              <div class="_emoji_heart"></div>
                            </div>
                            <div className={`_emoji _emoji_like ${like}`}>
                              <div class="_emoji_hand">
                                <div class="_emoji_thumb"></div>
                              </div>
                            </div>
                            <div className={`_emoji _emoji_wow ${wow}`}>
                              <div class="_emoji_face">
                                <div class="_emoji_eyebrows"></div>
                                <div class="_emoji_eyes"></div>
                                <div class="_emoji_mouth"></div>
                              </div>
                            </div>
                            <div className={`_emoji _emoji_sad ${sad}`}>
                              <div className="_emoji_face">
                                <div className="_emoji_eyebrows"></div>
                                <div className="_emoji_eyes"></div>
                                <div className="_emoji_mouth"></div>
                              </div>
                            </div>
                          </div>
                          <p className="_feed_inner_timeline_reaction_para">
                            <span>{postReactionLength}</span> {postLastReaction}
                          </p>
                        </div>
                      </span>
                      <ul className="_reactions_box">
                        <li
                          className="_reaction _reaction_1"
                          onClick={() => handleReaction("like")}
                        >
                          <div className="_emoji _emoji_like">
                            <div className="_emoji_hand">
                              <div className="_emoji_thumb" />
                            </div>
                          </div>
                        </li>
                        <li
                          className="_reaction _reaction_2"
                          onClick={() => handleReaction("love")}
                        >
                          <div className="_emoji _emoji_love">
                            <div className="_emoji_heart" />
                          </div>
                        </li>
                        <li
                          className="_reaction _reaction_3"
                          onClick={() => handleReaction("wow")}
                        >
                          <div className="_emoji _emoji_wow">
                            <div className="_emoji_face">
                              <div className="_emoji_eyebrows" />
                              <div className="_emoji_eyes" />
                              <div className="_emoji_mouth" />
                            </div>
                          </div>
                        </li>
                        <li
                          className="_reaction _reaction_4"
                          onClick={() => handleReaction("sad")}
                        >
                          <div className="_emoji _emoji_sad">
                            <div className="_emoji_face">
                              <div className="_emoji_eyebrows" />
                              <div className="_emoji_eyes" />
                              <div className="_emoji_mouth" />
                            </div>
                          </div>
                        </li>
                      </ul>
                    </button>
                  </li>
                  <li className="_feed_inner_timeline_reaction_item">
                    <button className="_feed_inner_timeline_reaction_link">
                      <span className="_like_btn _like_btn-post unselectable">
                        <div className="_status_reaction _active_like">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            fill="none"
                            viewBox="0 0 18 18"
                          >
                            <path
                              stroke="#586ED1"
                              d="M1 9a8 8 0 018-8v0a8 8 0 018 8v5.09c0 .848 0 1.27-.126 1.609a2 2 0 01-1.175 1.175C15.36 17 14.938 17 14.09 17H9a8 8 0 01-8-8v0z"
                            />
                            <path
                              stroke="#586ED1"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 8h6M9 12h3"
                            />
                          </svg>
                          <p className="_feed_inner_timeline_reaction_para">
                            <span>{comments.length}</span> Comment
                          </p>
                        </div>
                      </span>
                    </button>
                  </li>
                  <li className="_feed_inner_timeline_reaction_item">
                    <button className="_feed_inner_timeline_reaction_link">
                      <span className="_like_btn _like_btn-post unselectable">
                        <div className="_status_reaction _active_like">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={21}
                            height={18}
                            fill="none"
                            viewBox="0 0 21 18"
                          >
                            <path
                              stroke="#586ED1"
                              strokeLinejoin="round"
                              d="M20 9l-8.708-8v4.571C2.958 5.571 1 11.322 1 17c2.405-2.964 4.532-4.571 10.292-4.571V17L20 9z"
                            />
                          </svg>
                          <p className="_feed_inner_timeline_reaction_para">
                            <span>12</span> Share
                          </p>
                        </div>
                      </span>
                    </button>
                  </li>
                  <li className="_feed_inner_timeline_reaction_item">
                    <button className="_feed_inner_timeline_reaction_link">
                      <span className="_like_btn _like_btn-post unselectable">
                        <div className="_status_reaction _active_like">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={18}
                            fill="none"
                            viewBox="0 0 16 18"
                          >
                            <path
                              stroke="#586ED1"
                              d="M1 6.528c0-2.606 0-3.909.769-4.718C2.538 1 3.775 1 6.25 1h3.5c2.475 0 3.712 0 4.481.81C15 2.62 15 3.922 15 6.528v6.29c0 2.472 0 3.708-.739 4.086-.738.378-1.662-.385-3.508-1.913l-.59-.488c-1.039-.86-1.558-1.289-2.163-1.289-.605 0-1.124.43-2.162 1.289l-.591.488c-1.846 1.528-2.77 2.291-3.508 1.913C1 16.526 1 15.29 1 12.818v-6.29z"
                            />
                          </svg>
                          <p className="_feed_inner_timeline_reaction_para">
                            <span>12</span> Save
                          </p>
                        </div>
                      </span>
                    </button>
                  </li>
                </ul>
              </div>

              {/* reaction area ends here */}

              {/* comment section starts  here */}
              
              <div className="_feed_inner_timeline_comment_area">
    {!isEditable && (
      <div className="_feed_inner_comment_box">
        <form className="_feed_inner_comment_box_form">
          <div className="_feed_inner_comment_box_content">
            <div className="_feed_inner_comment_box_content_image">
              <img
                alt="img"
                src="../../img/comment_img.png"
                className="_comment_img"
              />
            </div>
            <div className="_feed_inner_comment_box_content_txt">
              <TextArea
                className="_comment_textarea"
                rows={2}
                placeholder="Write Someting..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                autoSize={{ minRows: 1, maxRows: 10 }}
              />
            </div>
          </div>
          <div className="_feed_inner_comment_box_icon">
            <button className="_feed_inner_comment_box_icon_btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#000"
                  fillOpacity=".46"
                  fillRule="evenodd"
                  d="M13.167 6.534a.5.5 0 01.5.5c0 3.061-2.35 5.582-5.333 5.837V14.5a.5.5 0 01-1 0v-1.629C4.35 12.616 2 10.096 2 7.034a.5.5 0 011 0c0 2.679 2.168 4.859 4.833 4.859 2.666 0 4.834-2.18 4.834-4.86a.5.5 0 01.5-.5zM7.833.667a3.218 3.218 0 013.208 3.22v3.126c0 1.775-1.439 3.22-3.208 3.22a3.218 3.218 0 01-3.208-3.22V3.887c0-1.776 1.44-3.22 3.208-3.22zm0 1a2.217 2.217 0 00-2.208 2.22v3.126c0 1.223.991 2.22 2.208 2.22a2.217 2.217 0 002.208-2.22V3.887c0-1.224-.99-2.22-2.208-2.22z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button className="_feed_inner_comment_box_icon_btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="none"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#000"
                  fillOpacity=".46"
                  fillRule="evenodd"
                  d="M10.867 1.333c2.257 0 3.774 1.581 3.774 3.933v5.435c0 2.352-1.517 3.932-3.774 3.932H5.101c-2.254 0-3.767-1.58-3.767-3.932V5.266c0-2.352 1.513-3.933 3.767-3.933h5.766zm0 1H5.101c-1.681 0-2.767 1.152-2.767 2.933v5.435c0 1.782 1.086 2.932 2.767 2.932h5.766c1.685 0 2.774-1.15 2.774-2.932V5.266c0-1.781-1.089-2.933-2.774-2.933zm.426 5.733l.017.015.013.013.009.008.037.037c.12.12.453.46 1.443 1.477a.5.5 0 11-.716.697S10.73 8.91 10.633 8.816a.614.614 0 00-.433-.118.622.622 0 00-.421.225c-1.55 1.88-1.568 1.897-1.594 1.922a1.456 1.456 0 01-2.057-.021s-.62-.63-.63-.642c-.155-.143-.43-.134-.594.04l-1.02 1.076a.498.498 0 01-.707.018.499.499 0 01-.018-.706l1.018-1.075c.54-.573 1.45-.6 2.025-.06l.639.647c.178.18.467.184.646.008l1.519-1.843a1.618 1.618 0 011.098-.584c.433-.038.854.088 1.19.363zM5.706 4.42c.921 0 1.67.75 1.67 1.67 0 .92-.75 1.67-1.67 1.67-.92 0-1.67-.75-1.67-1.67 0-.921.75-1.67 1.67-1.67zm0 1a.67.67 0 10.001 1.34.67.67 0 00-.002-1.34z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </form>
        <button
          style={{ color: "blue", marginLeft: "200px",padding:'5px',borderRadius:'50px' }}
          onClick={() => handleComment()}
        >
          Submit
        </button>
      </div>
    )}
  </div>
  <div className="_timline_comment_main">
    {/* <div className="_previous_comment">
      <button type="button" className="_previous_comment_txt">
        View 4 previous comments
      </button>
    </div> */}
    {comments.length>0 &&  
      comments.map((comment) =><SingleComment deleteComment={handleCommentDelete} edit={makeEditable} update={handleDeleteUpdate} comment={comment}/>)}

    {isEditable && (
      <div className="_feed_inner_timeline_comment_area">
        <div className="_feed_inner_comment_box">
          <form className="_feed_inner_comment_box_form">
            <div className="_feed_inner_comment_box_content">
              <div className="_feed_inner_comment_box_content_image">
                <img
                  alt="img"
                  src="../../img/comment_img.png"
                  className="_comment_img"
                />
              </div>
              <div className="_feed_inner_comment_box_content_txt">
                <TextArea
                  className="_comment_textarea"
                  rows={2}
                  placeholder="Write Someting..."
                  value={upCmnt}
                  onChange={(e) => setUpCmnt(e.target.value)}
                  autoSize={{ minRows: 1, maxRows: 10 }}
                />
              </div>
            </div>
          </form>
          <button
            style={{ color: "blue", marginLeft: "200px",padding:'5px',borderRadius:'50px' }}
            onClick={() => handleCommentEdit()}
          >
            Update
          </button>
        </div>
      </div>
    )}
  </div>
              
              {/* comment section ends here */}
            </div>
          </div>
  )
}
