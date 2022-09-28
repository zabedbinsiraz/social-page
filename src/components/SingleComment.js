
import {
  Button, Dropdown, Menu
} from "antd";
import TextArea from "antd/lib/input/TextArea";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCommentReaction } from "../redux/CommentReactionSlice";
import { addReply } from "../redux/ReplySlice";
import SingleReply from "./SingleReply";

const SingleComment = ({postId,commentId, comment, deleteComment , edit, update}) => {
  const [like, setLike] = useState("");
  const [love, setLove] = useState("d-none");
  const [wow, setWow] = useState("d-none");
  const [sad, setSad] = useState("d-none");

  const dispatch = useDispatch();

  const allReaction = useSelector((state) => state.commentReactionsReducer.reacts);

    const commentReaction = allReaction?.filter(
        (reaction) => reaction.postId === postId && reaction.commentId===commentId
      );
      const commentReactionLength = commentReaction[0]?.reacts?.length;
      const commentLastReaction =
        commentReaction[0]?.reacts[commentReactionLength - 1];

  const handleReaction = (reaction) => {
    const newReaction = { postId: postId ,commentId:commentId,reaction: reaction };
    dispatch(addCommentReaction(newReaction));
  };

  useEffect(() => {
    if (commentLastReaction === "like") {
      setLike("");
      setLove("d-none");
      setSad("d-none");
      setWow("d-none");
    } else if (commentLastReaction === "love") {
      setLike("d-none");
      setLove("");
      setSad("d-none");
      setWow("d-none");
    } else if (commentLastReaction === "wow") {
      setLike("d-none");
      setLove("d-none");
      setSad("d-none");
      setWow("");
    } else if (commentLastReaction === "sad") {
      setLike("d-none");
      setLove("d-none");
      setSad("");
      setWow("d-none");
    }
  }, [commentLastReaction]);

    const menu2 = (
        <Menu className="_courseporium_social_more_drop2 _drpdwn1">
          <Menu.Item className="_drpdwn1_li ">
            <button
              className="_courseporium_social_more_drop_link"
              onClick={() => deleteComment(comment.commentId)}
            >
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
                className="feather feather-trash-2"
              >
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                <line x1={10} y1={11} x2={10} y2={17} />
                <line x1={14} y1={11} x2={14} y2={17} />
              </svg>
              <span>Delete</span>
            </button>
          </Menu.Item>
          <Menu.Item className="_drpdwn1_li">
            <button
              type="submit"
              className="_courseporium_social_more_drop_link"
              onClick={() => edit()}
            >
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
                className="feather feather-edit"
              >
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
              </svg>
              <span>Edit</span>
            </button>
          </Menu.Item>
        </Menu>
      );

      const allReplies = useSelector((state)=>state.repliesReducer.replies);
      const replies = allReplies.filter((reply) => reply.postId === postId && reply.commentId === commentId);

      const [isReply,setIsReply] = useState(false);
      const [replyTxt,setReplyTxt] = useState();

      const replyHandler=()=>{
        setIsReply(true);
      }

      const submitReplyHandler = (e) => {
        e.preventDefault();
        const newReply = {
          postId:postId,
          commentId:commentId,
          replyId:allReplies?.length + 1000,
          reply:replyTxt,
          createdAt:new Date(),
        }
        dispatch(addReply(newReply));
        setIsReply(false);
        setReplyTxt('');

      }

      const postTime =Math.round((new Date() - comment.createdAt)/1000);

  return (
    <div className="_comment_main">
          <div className="_comment_image">
            <a className="_comment_image_link" href="/profile">
              <img
                alt="img"
                src="../../img/comment_img.png"
                className="_comment_img1"
              />
            </a>
          </div>

          <div className="_comment_area">
            <div className="_comment_details">
              <div className="_comment_details_top _dis_flex _dis_flex_cntr1">
                <div className="_comment_info">
                  <div className="_comment_name">
                    <div className="_comment_name_info  _mar_b8 _dis_flex _dis_flex_cntr1">
                      <Link to="">
                        <h4 className="_comment_name_title">
                          Radovan SkillArena
                        </h4>
                      </Link>
                      <p className="_comment_name_info_para">
                      {
                          postTime >1 ? postTime<59? <p>{postTime} seconds ago</p>:<p>{Math.round(postTime/60)} minutes ago</p> :'just now'
                        }
                      </p>
                    </div>
                    <p className="_comment_name_para">
                      UI Designer
                    </p>
                  </div>
                </div>
                <div className="_comment_drop">
                  <div className="_comment_drop_dropdown">
                    <Dropdown
                      trigger={["click"]}
                      overlay={menu2}
                      placement="bottomLeft"
                      arrow
                    >
                      <Button
                        className="_comment_drop_btn"
                        onClick={() =>
                          update(
                            comment.commentId,
                            comment.comment
                          )
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={4}
                          height={17}
                          fill="none"
                          viewBox="0 0 4 17"
                        >
                          <circle
                            cx={2}
                            cy={2}
                            r={2}
                            fill="#C4C4C4"
                          />
                          <circle
                            cx={2}
                            cy={8}
                            r={2}
                            fill="#C4C4C4"
                          />
                          <circle
                            cx={2}
                            cy={15}
                            r={2}
                            fill="#C4C4C4"
                          />
                        </svg>
                      </Button>
                    </Dropdown>
                  </div>
                </div>
              </div>
              <div className="_comment_status">
                <p className="_comment_status_text">
                  <span>{comment.comment}</span>
                </p>
              </div>
            </div>

            <div className="_feed_comment_reaction">
              <ul className="_feed_comment_reaction_list _dis_flex _dis_flex_cntr1">
                <li className="_feed_comment_reaction_item">
                  <button className="_feed_comment_reaction_link">
                    <span className="_like_btn _like_btn-post unselectable">
                      <div className="_status_reaction _active_like">
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
                        <span>{commentReactionLength}</span> {commentLastReaction}
                        </p>
                      </div>
                    </span>
                    <ul className="_reactions_box">
                      <li className="_reaction _reaction_1" onClick={() => handleReaction("like")}>
                        <div className="_emoji _emoji_like">
                          <div className="_emoji_hand">
                            <div className="_emoji_thumb" />
                          </div>
                        </div>
                      </li>
                      <li className="_reaction _reaction_2" onClick={() => handleReaction("love")}>
                        <div className="_emoji _emoji_love">
                          <div className="_emoji_heart" />
                        </div>
                      </li>
                      <li className="_reaction _reaction_3" onClick={() => handleReaction("wow")}>
                        <div className="_emoji _emoji_wow">
                          <div className="_emoji_face">
                            <div className="_emoji_eyebrows" />
                            <div className="_emoji_eyes" />
                            <div className="_emoji_mouth" />
                          </div>
                        </div>
                      </li>
                      <li className="_reaction _reaction_4" onClick={() => handleReaction("sad")}>
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
                <li className="_feed_comment_reaction_item">
                  <button className="_feed_comment_reaction_link" 
                  onClick={()=>replyHandler()}
                  >
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
                          
                          <span>{replies?.length || 0}</span> {replies?.length >1 ? 'replies':'reply'}
                        </p>
                      </div>
                    </span>
                  </button>
                </li>
              </ul>
            </div>

            {
              replies.length>0 && replies.slice(0).reverse().map((reply)=><SingleReply postId={postId} commentId={commentId} replyId={reply.replyId} reply={reply.reply} createdAt={reply.createdAt} />)
            }

  
           {
            isReply && <div style={{marginBottom:'10px'}} className="_feed_inner_comment_box">
            <form className="_feed_inner_comment_box_form" onSubmit={submitReplyHandler}>
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
                    value={replyTxt}
                    onChange={(e)=>setReplyTxt(e.target.value)}
                    autoSize={{
                      minRows: 1,
                      maxRows: 10,
                    }}
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
              <button type="submit"
          style={{ color: "blue",padding:'5px',borderRadius:'50px' }}
          
        >
          Submit
        </button>
            </form>
            
          </div>
           }

      {/* reply ends here */}

          </div>
        </div>
  )
}

export default SingleComment