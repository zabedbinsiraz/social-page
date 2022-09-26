import {
  Button,
  Checkbox,
  Dropdown,
  Input,
  Menu,
  message,
  Modal,
  Upload
} from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  addComment,
  deleteComment,
  updateComment
} from "../../redux/CommentSlice";
import { addReaction } from "../../redux/ReactionSlice";

function FeedMiddle() {

  const [post1cmnt,setPost1cmnt] = useState();
  const [post2cmnt,setPost2cmnt] = useState();
  const [post3cmnt,setPost3cmnt] = useState();
  const [post4cmnt,setPost4cmnt] = useState();

  const [isReply,setIsReply] = useState(false);
  const [comment, setComment] = useState();
  const [commentId, setCommentId] = useState();
  const [postId, setPostId] = useState();
  const [isEditable1, setIsEditable1] = useState(false);
  const [isEditable2, setIsEditable2] = useState(false);
  const [isEditable3, setIsEditable3] = useState(false);
  const [isEditable4, setIsEditable4] = useState(false);

  const [like1, setLike1] = useState("");
  const [love1, setLove1] = useState("d-none");
  const [wow1, setWow1] = useState("d-none");
  const [sad1, setSad1] = useState("d-none");

  const [like2, setLike2] = useState("");
  const [love2, setLove2] = useState("d-none");
  const [wow2, setWow2] = useState("d-none");
  const [sad2, setSad2] = useState("d-none");

  const [like3, setLike3] = useState("");
  const [love3, setLove3] = useState("d-none");
  const [wow3, setWow3] = useState("d-none");
  const [sad3, setSad3] = useState("d-none");

  const [like4, setLike4] = useState("");
  const [love4, setLove4] = useState("d-none");
  const [wow4, setWow4] = useState("d-none");
  const [sad4, setSad4] = useState("d-none");
  //redux related code
  const dispatch = useDispatch();

  const allComments = useSelector((state) => state.commentsReducer.comments);
  const allReaction = useSelector((state) => state.reactionsReducer.reacts);
  const allReplies = useSelector((state)=>state.repliesReducer.replies);

  const postOneReaction = allReaction?.filter(
    (reaction) => reaction.postId === 1
  );
  const postOneReactionLength = postOneReaction[0]?.reacts?.length;
  const postOneLastReaction =
    postOneReaction[0]?.reacts[postOneReactionLength - 1];

  const postTwoReaction = allReaction?.filter(
    (reaction) => reaction.postId === 2
  );
  const postTwoReactionLength = postTwoReaction[0]?.reacts?.length;
  const postTwoLastReaction =
    postTwoReaction[0]?.reacts[postTwoReactionLength - 1];

  const postThreeReaction = allReaction?.filter(
    (reaction) => reaction.postId === 3
  );
  const postThreeReactionLength = postThreeReaction[0]?.reacts?.length;
  const postThreeLastReaction =
    postThreeReaction[0]?.reacts[postThreeReactionLength - 1];

  const postFourReaction = allReaction?.filter(
    (reaction) => reaction.postId === 4
  );
  const postFourReactionLength = postFourReaction[0]?.reacts?.length;
  const postFourLastReaction =
    postFourReaction[0]?.reacts[postFourReactionLength - 1];

  // console.log(postOneReaction?.reacts[postOneReaction?.reacts?.length - 1])
  const postOneComments = allComments.filter((comment) => comment.postId === 1);

  const postTwoComments = allComments.filter((comment) => comment.postId === 2);

  const postThreeComments = allComments.filter(
    (comment) => comment.postId === 3
  );

  const postFourComments = allComments.filter(
    (comment) => comment.postId === 4
  );

  const postOneCommentOneReplies = allReplies.filter((reply)=>reply.commentId ===postOneComments[0].commentId);
  console.log(postOneCommentOneReplies);

  console.log(allComments);
  console.log( allReaction);
  console.log(allReplies);
  console.log(postOneLastReaction);

  useEffect(() => {
    if (postOneLastReaction === "like") {
      setLike1("");
      setLove1("d-none");
      setSad1("d-none");
      setWow1("d-none");
    } else if (postOneLastReaction === "love") {
      setLike1("d-none");
      setLove1("");
      setSad1("d-none");
      setWow1("d-none");
    } else if (postOneLastReaction === "wow") {
      setLike1("d-none");
      setLove1("d-none");
      setSad1("d-none");
      setWow1("");
    } else if (postOneLastReaction === "sad") {
      setLike1("d-none");
      setLove1("d-none");
      setSad1("");
      setWow1("d-none");
    }
  }, [postOneLastReaction]);

  useEffect(() => {
    if (postTwoLastReaction === "like") {
      setLike2("");
      setLove2("d-none");
      setSad2("d-none");
      setWow2("d-none");
    } else if (postTwoLastReaction === "love") {
      setLike2("d-none");
      setLove2("");
      setSad2("d-none");
      setWow2("d-none");
    } else if (postTwoLastReaction === "wow") {
      setLike2("d-none");
      setLove2("d-none");
      setSad2("d-none");
      setWow2("");
    } else if (postTwoLastReaction === "sad") {
      setLike2("d-none");
      setLove2("d-none");
      setSad2("");
      setWow2("d-none");
    }
  }, [postTwoLastReaction]);

  useEffect(() => {
    if (postThreeLastReaction === "like") {
      setLike3("");
      setLove3("d-none");
      setSad3("d-none");
      setWow3("d-none");
    } else if (postThreeLastReaction === "love") {
      setLike3("d-none");
      setLove3("");
      setSad3("d-none");
      setWow3("d-none");
    } else if (postThreeLastReaction === "wow") {
      setLike3("d-none");
      setLove3("d-none");
      setSad3("d-none");
      setWow3("");
    } else if (postThreeLastReaction === "sad") {
      setLike3("d-none");
      setLove3("d-none");
      setSad3("");
      setWow3("d-none");
    }
  }, [postThreeLastReaction]);

  useEffect(() => {
    if (postFourLastReaction === "like") {
      setLike4("");
      setLove4("d-none");
      setSad4("d-none");
      setWow4("d-none");
    } else if (postFourLastReaction === "love") {
      setLike4("d-none");
      setLove4("");
      setSad4("d-none");
      setWow4("d-none");
    } else if (postFourLastReaction === "wow") {
      setLike4("d-none");
      setLove4("d-none");
      setSad4("d-none");
      setWow4("");
    } else if (postFourLastReaction === "sad") {
      setLike4("d-none");
      setLove4("d-none");
      setSad4("");
      setWow4("d-none");
    }
  }, [postFourLastReaction]);

  const handleComment = (id) => {

    let newComment;
    if (id === 1) {
      newComment=post1cmnt;
    } else if (id === 2) {
      newComment=post2cmnt;
    } else if (id === 3) {
      newComment=post3cmnt;
    } else if (id === 4) {
      newComment=post4cmnt;
    }

    const commentNew = {
      postId: id,
      commentId: allComments.length + 1000,
      comment: newComment,
    };
    dispatch(addComment(commentNew));
    setPost1cmnt('');
    setPost2cmnt('');
    setPost3cmnt('');
    setPost4cmnt('');
  };

  const handleReaction = (id, reaction) => {
    const newReaction = { postId: id, reaction: reaction };
    dispatch(addReaction(newReaction));
  };

  const handleDeleteUpdate = (pId, cId, cmnt) => {
    setPostId(pId);
    setCommentId(cId);
    setComment(cmnt);
  };

  const handleCommentDelete = (id) => {
    dispatch(deleteComment(id));
    setComment("");
  };

  const makeEditable = (id) => {
    if (id === 1) {
      setIsEditable1(true);
    } else if (id === 2) {
      setIsEditable2(true);
    } else if (id === 3) {
      setIsEditable3(true);
    } else if (id === 4) {
      setIsEditable4(true);
    }
  };

  const handleCommentEdit = () => {
    const updtCmnt = {
      postId: postId,
      commentId: commentId,
      comment: comment,
    };
    console.log(updtCmnt);

    dispatch(updateComment(updtCmnt));
    setIsEditable1(false);
    setIsEditable2(false);
    setIsEditable3(false);
    setIsEditable4(false);
    setComment("");
  };

  // function destroyAll() {
  //   Modal.destroyAll();
  // }
 
  const props = {
    headers: {
      authorization: "authorization-text",
    },
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    name: "file",
  };
 
 
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };
 
  const [isModalVisible1, setIsVisible1] = useState(false);
  const showModal1 = () => {
    setIsVisible1(true);
  };
  // const handleOk1 = () => {
  //   setIsVisible1(false);
  // };
  const handleCancel1 = () => {
    console.log("called");
    setIsVisible1(false);
  };
 
  const { TextArea } = Input;
  
  const onChange = (e) => {
    console.log("Change:", e.target.value);
  };
  const onChange2 = (e) => {
    console.log("Change:", e.target.value);
  };
 
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
  const menu2 = (
    <Menu className="_courseporium_social_more_drop2 _drpdwn1">
      <Menu.Item className="_drpdwn1_li ">
        <button
          className="_courseporium_social_more_drop_link"
          onClick={() => handleCommentDelete(commentId)}
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
          onClick={() => makeEditable(postId)}
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
  const menu3 = (
    <Menu className="_courseporium_social_more_drop3 _drpdwn1">
      <Menu.Item className="_drpdwn1_li ">
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

const submitReply=()=>{
  setIsReply(false)
}
  return (
    <div className="_custom_col_xl_6 _custom_col_lg_6 _custom_col_md_12 _custom_col_sm_12">
      <div className="_layout_middle_wrap">
        {/* news feed */}
        <div className="_layout_middle_inner">
          {/* post creation section */}
          <div className="_feed_inner_text_area _feed_middle_inner">
            <div className="_feed_inner_txt_box_area">
              <div className="_feed_inner_txt_box_image">
                <img src="../../img/man1.png" alt="" className="_feed_img" />
              </div>
              <div className="_feed_inner_txt_box_textarea">
                <TextArea
                  onClick={showModal}
                  className="_feed_textarea"
                  rows={2}
                  placeholder="Write Someting..."
                  onChange={onChange}
                  autoSize={{ minRows: 1, maxRows: 10 }}
                />
                <Modal
                  className="_feed_inner_text_area_modal"
                  centered
                  visible={isModalVisible}
                  onOk={handleOk}
                  onCancel={handleCancel}
                >
                  <div className="_feed_status_box_main_top_title">
                    <span className="_feed_status_box_main_top_arrow _dis_flex_all">
                      <svg
                        width="18"
                        height="24"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M17.6945 36.6945C16.6206 37.7685 14.8794 37.7685 13.8055 36.6945L2.80546 25.6945C1.73151 24.6206 1.73151 22.8794 2.80546 21.8055L13.8055 10.8055C14.8794 9.73151 16.6206 9.73151 17.6945 10.8055C18.7685 11.8794 18.7685 13.6206 17.6945 14.6945L11.3891 21L43.25 21C44.7688 21 46 22.2312 46 23.75C46 25.2688 44.7688 26.5 43.25 26.5L11.3891 26.5L17.6945 32.8055C18.7685 33.8794 18.7685 35.6206 17.6945 36.6945Z"
                          fill="#111827"
                        />
                      </svg>
                    </span>
                    <h3 className="_titl3">Create a post</h3>
                  </div>
                  <div className="_feed_status_box_main_top">
                    <div className="_feed_statusBox_main_pic">
                      <a href="#0">
                        <img
                          src="https://ewr1.vultrobjects.com/carevan-course/ckysk9xi8000r4ph2anlg1obu.jpg"
                          alt=""
                          className="_statusBox_main_img _1border_color"
                        />
                      </a>
                    </div>
                    <div className="_statusBox_main_details">
                      <a href="#0">
                        <p className="_statusBox_main_name">Martin Vaccaro</p>
                      </a>
                      <div className="_statusBox_main_drop">
                        <Dropdown
                          trigger={["click"]}
                          overlay={menu3}
                          placement="bottomLeft"
                          arrow
                        >
                          <Button className="_feed_privacy_btn_link">
                            Public
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={14}
                              height={14}
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="feather feather-chevron-down"
                            >
                              <polyline points="6 9 12 15 18 9" />
                            </svg>
                          </Button>
                        </Dropdown>
                      </div>
                    </div>
                  </div>
                  <div className="_statusBox_textarea">
                    <textarea
                      id="status_box"
                      type="text"
                      placeholder="What's on your mind, Martin?"
                      className="_statusBox_textarea_text _statusBox_textarea2"
                      defaultValue={""}
                    />
                  </div>
                  <div className="_statusBox_options">
                    <div className="_custom_row">
                      <div className="_custom_col_12 _custom_col_md_6 _custom_col_lg_6">
                        <div className="_statusBox_options_items">
                          <Upload
                            {...props}
                            onChange={(response) => {
                              if (response.file.status !== "uploading") {
                                console.log(response.file, response.fileList);
                              }
                              if (response.file.status === "done") {
                                message.success(`${response.file.name} 
                                                              file uploaded successfully`);
                              } else if (response.file.status === "error") {
                                message.error(`${response.file.name} 
                                                            file upload failed.`);
                              }
                            }}
                          >
                            <Button className="_statusBox_options_upload_icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#6568dd"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-camera"
                              >
                                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                                <circle cx={12} cy={13} r={4} />
                              </svg>
                              Upload Photo
                            </Button>
                          </Upload>
                          {/* <div className="_statusBox_options_icon">
                                          <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="#6568dd" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-camera"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx={12} cy={13} r={4} /></svg>
                                        </div>
                                        <p className="_statusBox_options_text">Upload Photos</p> */}
                        </div>
                      </div>
                      <div className="_custom_col_12 _custom_col_md_6 _custom_col_lg_6">
                        <div className="_statusBox_options_items">
                          <Upload
                            {...props}
                            onChange={(response) => {
                              if (response.file.status !== "uploading") {
                                console.log(response.file, response.fileList);
                              }
                              if (response.file.status === "done") {
                                message.success(`${response.file.name} 
                                                              file uploaded successfully`);
                              } else if (response.file.status === "error") {
                                message.error(`${response.file.name} 
                                                            file upload failed.`);
                              }
                            }}
                          >
                            <Button className="_statusBox_options_upload_icon">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width={20}
                                height={20}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#6568dd"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="feather feather-camera"
                              >
                                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                                <circle cx={12} cy={13} r={4} />
                              </svg>
                              Upload Video
                            </Button>
                          </Upload>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="_statusBox_bg_sts">
                    <div className="_statusBox_bg_sts_inr d-flex _mar_t10">
                      <div className="_statusBox_bg_sts_main d-flex">
                        <span className="_statusBox_bg_sts_arw _dis_flex_all">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M32.3123 44.3904C32.528 44.2179 32.5629 43.9033 32.3904 43.6876L16.6364 23.9951L31.8952 4.30627C32.0643 4.088 32.0245 3.77393 31.8063 3.60477C31.588 3.43562 31.2739 3.47543 31.1048 3.6937L15.6048 23.6937C15.4633 23.8763 15.4653 24.132 15.6095 24.3123L31.6095 44.3123C31.7821 44.528 32.0967 44.5629 32.3123 44.3904Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                        <ul className="_statusBox_bg_sts_ul d-flex">
                          <li>
                            <span
                              className="_statusBox_bg1"
                              style={{
                                border: "0.5px solid grey",
                                borderRadius: 10,
                                backgroundImage: "none",
                              }}
                            />
                          </li>
                          <li>
                            <span
                              className="_statusBox_bg1"
                              style={{
                                backgroundImage:
                                  "linear-gradient(45deg, rgb(255, 115, 0) 0%, rgb(255, 0, 234) 100%)",
                              }}
                            />
                          </li>
                          <li>
                            <span
                              className="_statusBox_bg2"
                              style={{
                                backgroundImage:
                                  "linear-gradient(135deg, rgb(143, 199, 173), rgb(72, 229, 169))",
                              }}
                            />
                          </li>
                          <li>
                            <span
                              className="_statusBox_bg3"
                              style={{
                                backgroundImage:
                                  "linear-gradient(135deg, rgb(116, 167, 126), rgb(24, 175, 78))",
                              }}
                            />
                          </li>
                          <li>
                            <span
                              className="_statusBox_bg4"
                              style={{
                                backgroundImage:
                                  "linear-gradient(45deg, rgb(255, 127, 17) 0%, rgb(255, 127, 17) 100%)",
                              }}
                            />
                          </li>
                          <li>
                            <span
                              className="_statusBox_bg5"
                              style={{
                                backgroundImage:
                                  "linear-gradient(45deg, rgb(255, 10, 10) 0%, rgb(0, 0, 255) 100%)",
                              }}
                            />
                          </li>
                          <li>
                            <span
                              className="_statusBox_bg6"
                              style={{
                                backgroundImage:
                                  "linear-gradient(45deg, rgb(233, 255, 66) 0%, rgb(0, 255, 225) 100%)",
                              }}
                            />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="_statusBox_bottom_lst d-flex _mar_t15">
                    <p className="_statusBox_btm_lst_txt1">Add to your post</p>
                    <ul className="_statusBox_btm_lst_ul d-flex">
                      <li>
                        <img
                          src="../../img/camera.svg"
                          alt="icon"
                          className="_statusBox_btm_lst_icon"
                        />
                      </li>
                      <li>
                        <img
                          src="../../img/video.svg"
                          alt="icon"
                          className="_statusBox_btm_lst_icon"
                        />
                      </li>
                      <li>
                        <img
                          src="../../img/file.svg"
                          alt="icon"
                          className="_statusBox_btm_lst_icon"
                        />
                      </li>
                      <li>
                        <img
                          src="../../img/poll.svg"
                          alt="icon"
                          className="_statusBox_btm_lst_icon"
                        />
                      </li>
                      <li>
                        <img
                          src="../../img/dots.svg"
                          alt="icon"
                          className="_statusBox_btm_lst_icon"
                        />
                      </li>
                    </ul>
                  </div>

                  <div className="_statusBox_lst_itm _mar_t10">
                    <ul className="_statusBox_lst_itm_ul">
                      <li>
                        <div className="_statusBox_lst_itm_inr d-flex">
                          <img
                            src="../../img/camera.svg"
                            alt="icon"
                            className="_statusBox_lst_itm_icon"
                          />
                          <p className="_statusBox_lst_itm_txt1">Photo</p>
                        </div>
                      </li>
                      <li>
                        <div className="_statusBox_lst_itm_inr d-flex">
                          <img
                            src="../../img/video.svg"
                            alt="icon"
                            className="_statusBox_lst_itm_icon"
                          />
                          <p className="_statusBox_lst_itm_txt1">Video</p>
                        </div>
                      </li>
                      <li>
                        <div className="_statusBox_lst_itm_inr d-flex">
                          <img
                            src="../../img/file.svg"
                            alt="icon"
                            className="_statusBox_lst_itm_icon"
                          />
                          <p className="_statusBox_lst_itm_txt1">File</p>
                        </div>
                      </li>
                      <li>
                        <div className="_statusBox_lst_itm_inr d-flex">
                          <img
                            src="../../img/poll.svg"
                            alt="icon"
                            className="_statusBox_lst_itm_icon"
                          />
                          <p className="_statusBox_lst_itm_txt1">Poll</p>
                        </div>
                      </li>
                      <li>
                        <div className="_statusBox_lst_itm_inr d-flex">
                          <img
                            src="../../img/file.svg"
                            alt="icon"
                            className="_statusBox_lst_itm_icon"
                          />
                          <p className="_statusBox_lst_itm_txt1">Background</p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  {/* poll */}
                  <div className="_grp_pull_popup_crd">
                    <span className="_grp_pull_popup_close _dis_flex_all">
                      <img
                        src="../../img/close.svg"
                        alt="icon"
                        className="_grp_pull_popup_close_icon"
                      />
                    </span>
                    <p className="_grp_pull_popup_titl1 _mar_b15">Add poll</p>
                    <div className="_grp_pull_popup_itm d-flex _mar_b15">
                      <input
                        type="text"
                        placeholder="Option 1"
                        className="_grp_pull_inpt _inpt1"
                      />
                      <span className="_grp_pull_itm_clse _dis_flex_all _mar_l10">
                        <img
                          src="../../img/close.svg"
                          alt="icon"
                          className="_grp_pull_itm_clse_icon"
                        />
                      </span>
                    </div>
                    <div className="_grp_pull_popup_itm d-flex _mar_b15">
                      <input
                        type="text"
                        placeholder="Option 2"
                        className="_grp_pull_inpt _inpt1"
                      />
                      <span className="_grp_pull_itm_clse _dis_flex_all _mar_l10">
                        <img
                          src="../../img/close.svg"
                          alt="icon"
                          className="_grp_pull_itm_clse_icon"
                        />
                      </span>
                    </div>
                    <div className="_grp_pull_popup_btm d-flex">
                      <div className="_grp_pull_popup_btn_all">
                        <button className="_grp_pull_popup_btn">
                          + Add option
                        </button>
                      </div>
                      <div className="_grp_pull_popup_stng">
                        <span className="">
                          <svg
                            width="12"
                            height="12"
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.41422 16.4142C4.15429 15.1543 5.04662 13 6.82843 13H41.1716C42.9534 13 43.8457 15.1543 42.5858 16.4142L25.4142 33.5858C24.6332 34.3668 23.3668 34.3668 22.5858 33.5858L5.41422 16.4142Z"
                              fill="black"
                            />
                          </svg>
                        </span>
                        <div className="_grp_pull_drpdwn1">
                          <Checkbox.Group onChange={onChange}>
                            <ul className="_grp_pull_drpdwn1_ul">
                              <li>
                                <Checkbox value="A">
                                  Allow people to choose multiple answers
                                </Checkbox>
                              </li>
                              <li>
                                <Checkbox value="B">
                                  Allow anyone to add options
                                </Checkbox>
                              </li>
                            </ul>
                          </Checkbox.Group>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* poll */}

                  <div className="_statusBox_main_bottom">
                    <Button className="_statusBox_main_bottom_link">
                      Post
                    </Button>
                  </div>
                </Modal>
              </div>
            </div>
            <div className="_feed_inner_upload_area">
              <div className="_feed_inner_txt_upload">
                <button className="_feed_inner_btn_upload_link _feed_inner_btn_upload_link_change">
                  <span className="_feed_inner_timeline_reaction_link_btn">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={20}
                        height={20}
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fill="#F76B1C"
                          d="M14.329 0C17.732 0 20 2.429 20 5.914v8.17C20 17.57 17.732 20 14.329 20H5.66C2.26 20 0 17.572 0 14.085v-8.17C0 2.43 2.266 0 5.661 0h8.668zm0 1.504H5.66c-2.54 0-4.158 1.735-4.158 4.41v8.17c0 2.68 1.612 4.412 4.158 4.412h8.668c2.549 0 4.168-1.734 4.168-4.411v-8.17c0-2.678-1.619-4.411-4.168-4.411zm.712 8.68l.13.125 2.08 2.147a.752.752 0 01-.996 1.12l-.083-.073-2.08-2.148a.939.939 0 00-1.32-.028l-.08.087-2.233 2.717a2.187 2.187 0 01-3.13.26l-.123-.116-.891-.91a.656.656 0 00-.868-.07l-.082.073-1.532 1.617a.751.751 0 01-1.161-.948l.07-.086 1.532-1.617a2.158 2.158 0 012.994-.137l.125.12.886.905c.26.264.675.271.943.033l.076-.078 2.233-2.718a2.441 2.441 0 013.51-.275zM6.573 4.64a2.51 2.51 0 010 5.021 2.51 2.51 0 010-5.02zm0 1.504a1.006 1.006 0 10.002 2.013 1.006 1.006 0 00-.002-2.013z"
                        />
                      </svg>
                      Photo
                    </span>
                  </span>
                </button>
              </div>
              <div className="_feed_inner_txt_upload">
                <button className="_feed_inner_btn_upload_link _feed_inner_btn_upload_link_change1">
                  <span className="_feed_inner_timeline_reaction_link_btn">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="#3CB733"
                          d="M12.573 4.5c2.422 0 4.108 1.534 4.288 3.784l2.647-1.082a1.808 1.808 0 012.486 1.533l.006.142v6.638a1.808 1.808 0 01-2.36 1.722l-.132-.048-2.647-1.083c-.18 2.25-1.87 3.785-4.288 3.785H6.304C3.739 19.891 2 18.171 2 15.703V8.688C2 6.219 3.739 4.5 6.304 4.5h6.269zm0 1.5H6.304C4.564 6 3.5 7.051 3.5 8.688v7.015c0 1.637 1.064 2.688 2.804 2.688h6.269c1.736 0 2.804-1.054 2.804-2.688v-.686-6.329C15.377 7.052 14.313 6 12.573 6zm7.57 2.572l-.067.019-3.199 1.306v4.596l3.198 1.307a.308.308 0 00.417-.214l.008-.07v-6.64a.309.309 0 00-.357-.304z"
                        />
                      </svg>
                      Video
                    </span>
                  </span>
                </button>
              </div>
              <div className="_feed_inner_txt_upload">
                <button className="_feed_inner_btn_upload_link _feed_inner_btn_upload_link_change2">
                  <span className="_feed_inner_timeline_reaction_link_btn">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={22}
                        height={15}
                        fill="none"
                        viewBox="0 0 22 15"
                      >
                        <rect
                          width={4}
                          height={13}
                          x={17}
                          y={1}
                          stroke="#586ED1"
                          strokeLinejoin="round"
                          rx={1}
                        />
                        <rect
                          width={4}
                          height={7}
                          x={9}
                          y={7}
                          stroke="#586ED1"
                          strokeLinejoin="round"
                          rx={1}
                        />
                        <rect
                          width={4}
                          height={11}
                          x={1}
                          y={3}
                          stroke="#586ED1"
                          strokeLinejoin="round"
                          rx={1}
                        />
                      </svg>
                      Pull
                    </span>
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* first post */}
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
              <h4 className="_feed_inner_timeline_post_title">
                - Photoshop Feedback
              </h4>
              <div className="_hash_btn">
                <button className="_hash_btn_link">#photoshop_Feedback</button>
              </div>
              <p className="_feed_post_description">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <div className="_feed_post">
                <div className="_feed_post_pic_all">
                  <div className="_feed_inner_timeline_image d-none">
                    <img alt="/" src="../../img/timeline.png" className="_time_img" />
                  </div>
                  <div className="_feed_post_multipic_all">
                    <div className="_cardMulti_pic_all">
                      <div className="_cardMulti_pic_main">
                        <div className="_cardMulti_pic">
                          <img alt ="img"
                            src="../../img/timeline.png"
                            className="_cardMulti_img"
                          />
                        </div>
                      </div>
                      <div className="_cardMulti_pic_main">
                        <div className="_cardMulti_pic">
                          <img alt="img"
                            src="../../img/timeline.png"
                            className="_cardMulti_img"
                          />
                        </div>
                      </div>
                      <div className="_cardMulti_pic_main">
                        <div className="_cardMulti_pic">
                          <img alt="img"
                            src="../../img/timeline.png"
                            className="_cardMulti_img"
                          />
                        </div>
                      </div>
                      <div className="_cardMulti_pic_main">
                        <div className="_cardMulti_pic _cardMulti_pic_cover">
                          <img alt="img"
                            src="../../img/timeline.png"
                            className="_cardMulti_img"
                          />
                        </div>
                        <div
                          onClick={showModal1}
                          className="M_cardMulti_pic_main_more"
                        >
                          <p>+2</p>
                        </div>
                        <Modal
                          className="_feed_inner_text_area_modal1"
                          centered
                          visible={isModalVisible1}
                          onCancel={handleCancel1}
                        >
                          <div className="_imageModal_main">
                            <div className="_imageModal_left">
                              <div className="_imageModal_pic">
                                <img
                                  src="https://ewr1.vultrobjects.com/filestore/cl1dg9i570331fvh21deh8fkw.image.webp"
                                  alt="vv"
                                  title
                                  className="_imageModal_img"
                                />
                                <p className="_imageModal_errow _next">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-chevron-right"
                                  >
                                    <polyline points="9 18 15 12 9 6" />
                                  </svg>
                                </p>
                                <p className="_imageModal_errow _pre">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={24}
                                    height={24}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-chevron-left"
                                  >
                                    <polyline points="15 18 9 12 15 6" />
                                  </svg>
                                </p>
                              </div>
                            </div>
                            <div className="_imageModal_right">
                              <div className="_card_top">
                                <Link to="" className="_card_pic">
                                  <img
                                    alt="img"
                                    title
                                    src="https://ewr1.vultrobjects.com/filestore/cl14uz5m800msh9h24g9a4ser.jpg"
                                    className="_card_img"
                                  />
                                </Link>
                                <div className="_card_details">
                                  <div className="_card_name_all">
                                    <span className="_card_name_main">
                                      <Link to="" className="_card_name">
                                        Bijoya Banik
                                      </Link>
                                    </span>
                                  </div>
                                  <p className="_card_time">
                                    58 minutes ago
                                    <span className="_card_time_public">
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={14}
                                        height={14}
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="feather feather-globe"
                                      >
                                        <circle cx={12} cy={12} r={10} />
                                        <line x1={2} y1={12} x2={22} y2={12} />
                                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                      </svg>
                                    </span>
                                  </p>
                                </div>
                              </div>
                              <div className="_num_like_all">
                                <div className="_num_like_left">
                                  <div className="_total_reactions_user">
                                    <div className="_all_react">
                                      <div className="reactions-container">
                                        <ul className="_reactions_box">
                                          <li className="_reaction _reaction_1">
                                            <div className="_emoji _emoji_like">
                                              <div className="_emoji_hand">
                                                <div className="_emoji_thumb" />
                                              </div>
                                            </div>
                                          </li>
                                          {/* <li className="_reaction _reaction_2">
                                                        <div className="_emoji _emoji_love">
                                                          <div className="_emoji_heart" />
                                                        </div>
                                                      </li> */}
                                          {/* <li className="_reaction _reaction_3">
                                                        <div className="_emoji _emoji_wow">
                                                          <div className="_emoji_face">
                                                            <div className="_emoji_eyebrows" />
                                                            <div className="_emoji_eyes" />
                                                            <div className="_emoji_mouth" />
                                                          </div>
                                                        </div>
                                                      </li> */}
                                          {/* <li className="_reaction _reaction_4">
                                                        <div className="_emoji _emoji_sad">
                                                          <div className="_emoji_face">
                                                            <div className="_emoji_eyebrows" />
                                                            <div className="_emoji_eyes" />
                                                            <div className="_emoji_mouth" />
                                                          </div>
                                                        </div>
                                                      </li> */}
                                        </ul>
                                        <p class="_modal_img_txt">You </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="_num_like_right _num_like_right1">
                                  <p className="_num_like_text">0 Comment</p>
                                </div>
                              </div>
                              <div className="_num_like_all_bottom">
                                <div className="_1card_count">
                                  <ul className="_feed_inner_timeline_reaction_list">
                                    <li className="_feed_inner_timeline_reaction_item">
                                      <button className="_feed_inner_timeline_reaction_link">
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
                                              <div className="_emoji _emoji_love ">
                                                <div class="_emoji_heart"></div>
                                              </div>
                                              {/* <div className="_emoji _emoji_like">
                                                          <div class="_emoji_hand">
                                                            <div class="_emoji_thumb">
                                                            </div>
                                                          </div>
                                                        </div> */}
                                              {/* <div className="_emoji _emoji_wow">
                                                          <div class="_emoji_face">
                                                            <div class="_emoji_eyebrows">
                                                            </div>
                                                            <div class="_emoji_eyes">
                                                            </div>
                                                            <div class="_emoji_mouth"></div>
                                                          </div>
                                                        </div> */}
                                              {/* <div className
                                                        ="_emoji _emoji_sad">
                                                          <div className="_emoji_face">
                                                            <div className="_emoji_eyebrows"></div>
                                                            <div className="_emoji_eyes"></div>
                                                            <div className="_emoji_mouth"></div>
                                                          </div>
                                                        </div> */}
                                            </div>
                                            <p className="_feed_inner_timeline_reaction_para">
                                              <span>122</span> Like
                                            </p>
                                          </div>
                                        </span>
                                        <ul className="_reactions_box">
                                          <li className="_reaction _reaction_1">
                                            <div className="_emoji _emoji_like">
                                              <div className="_emoji_hand">
                                                <div className="_emoji_thumb" />
                                              </div>
                                            </div>
                                          </li>
                                          <li className="_reaction _reaction_2">
                                            <div className="_emoji _emoji_love">
                                              <div className="_emoji_heart" />
                                            </div>
                                          </li>
                                          <li className="_reaction _reaction_3">
                                            <div className="_emoji _emoji_wow">
                                              <div className="_emoji_face">
                                                <div className="_emoji_eyebrows" />
                                                <div className="_emoji_eyes" />
                                                <div className="_emoji_mouth" />
                                              </div>
                                            </div>
                                          </li>
                                          <li className="_reaction _reaction_4">
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
                                              <span>12</span> Comment
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
                                  </ul>
                                </div>
                              </div>
                              <div className="_feed_inner_timeline_comment_area">
                                <div className="_feed_inner_comment_box">
                                  <form className="_feed_inner_comment_box_form">
                                    <div className="_feed_inner_comment_box_content">
                                      <div className="_feed_inner_comment_box_content_image">
                                        <img alt="img"
                                          src="../../img/comment_img.png"
                                          className="_comment_img"
                                        />
                                      </div>
                                      <div className="_feed_inner_comment_box_content_txt">
                                        <TextArea
                                          className="_comment_textarea"
                                          rows={2}
                                          placeholder="Write Someting..."
                                          onChange={onChange2}
                                          autoSize={{ minRows: 1, maxRows: 10 }}
                                        />
                                      </div>
                                    </div>
                                    <div className="_feed_inner_comment_box_icon">
                                      <button
                                        type="submit"
                                        className="_feed_inner_comment_box_icon_btn"
                                      >
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
                                      <button
                                        type="submit"
                                        className="_feed_inner_comment_box_icon_btn"
                                      >
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
                                </div>
                              </div>
                              <div className="_timline_comment_main">
                                <div className="_previous_comment">
                                  <button
                                    type="button"
                                    className="_previous_comment_txt"
                                  >
                                    View 4 previous comments
                                  </button>
                                </div>
                                <div className="_comment_main">
                                  <div className="_comment_image">
                                    <a
                                      className="_comment_image_link"
                                      href="/profile"
                                    >
                                      <img alt="img"
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
                                                5 min ago
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
                                              <Button className="_comment_drop_btn">
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
                                          <span>
                                            It is a long established fact that a
                                            reader will be distracted by the
                                            readable content of a page when
                                            looking at its layout.{" "}
                                          </span>
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
                                                  <div className="_emoji _emoji_love ">
                                                    <div class="_emoji_heart"></div>
                                                  </div>
                                                  <div className="_emoji _emoji_like d-none">
                                                    <div class="_emoji_hand">
                                                      <div class="_emoji_thumb"></div>
                                                    </div>
                                                  </div>
                                                  <div className="_emoji _emoji_wow d-none">
                                                    <div class="_emoji_face">
                                                      <div class="_emoji_eyebrows"></div>
                                                      <div class="_emoji_eyes"></div>
                                                      <div class="_emoji_mouth"></div>
                                                    </div>
                                                  </div>
                                                  <div className="_emoji _emoji_sad d-none">
                                                    <div className="_emoji_face">
                                                      <div className="_emoji_eyebrows"></div>
                                                      <div className="_emoji_eyes"></div>
                                                      <div className="_emoji_mouth"></div>
                                                    </div>
                                                  </div>
                                                </div>
                                                <p className="_feed_inner_timeline_reaction_para">
                                                  <span>12</span> Like
                                                </p>
                                              </div>
                                            </span>
                                            <ul className="_reactions_box">
                                              <li className="_reaction _reaction_1">
                                                <div className="_emoji _emoji_like">
                                                  <div className="_emoji_hand">
                                                    <div className="_emoji_thumb" />
                                                  </div>
                                                </div>
                                              </li>
                                              <li className="_reaction _reaction_2">
                                                <div className="_emoji _emoji_love">
                                                  <div className="_emoji_heart" />
                                                </div>
                                              </li>
                                              <li className="_reaction _reaction_3">
                                                <div className="_emoji _emoji_wow">
                                                  <div className="_emoji_face">
                                                    <div className="_emoji_eyebrows" />
                                                    <div className="_emoji_eyes" />
                                                    <div className="_emoji_mouth" />
                                                  </div>
                                                </div>
                                              </li>
                                              <li className="_reaction _reaction_4">
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
                                          <button className="_feed_comment_reaction_link">
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
                                                  <span>1</span> Reply
                                                </p>
                                              </div>
                                            </span>
                                          </button>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="_M_social_comment_reply">
                                      <div className="_M_comment_reply">
                                        <div className="_M_social_comment_reply_main">
                                          <div className="_M_comment_pic">
                                            <Link to="">
                                              <img alt="img"
                                                src="../../img/comment_img.png"
                                                className=""
                                              />
                                            </Link>
                                          </div>
                                          <div className="_comment_details_area">
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
                                                        5 min ago
                                                      </p>
                                                      <div className="_comment_name_info_author">
                                                        <p className="_comment_name_info_author_para">
                                                          Author
                                                        </p>
                                                      </div>
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
                                                      <Button className="_comment_drop_btn">
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
                                                  <span>
                                                    It is a long established
                                                    fact that a reader will be
                                                    distracted by the readable
                                                    content of a page when
                                                    looking at its layout.{" "}
                                                  </span>
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
                                                          <div className="_emoji _emoji_love ">
                                                            <div class="_emoji_heart"></div>
                                                          </div>
                                                          <div className="_emoji _emoji_like d-none">
                                                            <div class="_emoji_hand">
                                                              <div class="_emoji_thumb"></div>
                                                            </div>
                                                          </div>
                                                          <div className="_emoji _emoji_wow d-none">
                                                            <div class="_emoji_face">
                                                              <div class="_emoji_eyebrows"></div>
                                                              <div class="_emoji_eyes"></div>
                                                              <div class="_emoji_mouth"></div>
                                                            </div>
                                                          </div>
                                                          <div className="_emoji _emoji_sad d-none">
                                                            <div className="_emoji_face">
                                                              <div className="_emoji_eyebrows"></div>
                                                              <div className="_emoji_eyes"></div>
                                                              <div className="_emoji_mouth"></div>
                                                            </div>
                                                          </div>
                                                        </div>
                                                        <p className="_feed_inner_timeline_reaction_para">
                                                          <span>12</span> Like
                                                        </p>
                                                      </div>
                                                    </span>
                                                    <ul className="_reactions_box">
                                                      <li className="_reaction _reaction_1">
                                                        <div className="_emoji _emoji_like">
                                                          <div className="_emoji_hand">
                                                            <div className="_emoji_thumb" />
                                                          </div>
                                                        </div>
                                                      </li>
                                                      <li className="_reaction _reaction_2">
                                                        <div className="_emoji _emoji_love">
                                                          <div className="_emoji_heart" />
                                                        </div>
                                                      </li>
                                                      <li className="_reaction _reaction_3">
                                                        <div className="_emoji _emoji_wow">
                                                          <div className="_emoji_face">
                                                            <div className="_emoji_eyebrows" />
                                                            <div className="_emoji_eyes" />
                                                            <div className="_emoji_mouth" />
                                                          </div>
                                                        </div>
                                                      </li>
                                                      <li className="_reaction _reaction_4">
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
                                                  <button className="_feed_comment_reaction_link">
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
                                                          <span>1</span> Reply
                                                        </p>
                                                      </div>
                                                    </span>
                                                  </button>
                                                </li>
                                              </ul>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="_feed_inner_comment_box">
                                        <form className="_feed_inner_comment_box_form">
                                          <div className="_feed_inner_comment_box_content">
                                            <div className="_feed_inner_comment_box_content_image">
                                              <img alt="img"
                                                src="../../img/comment_img.png"
                                                className="_comment_img"
                                              />
                                            </div>
                                            <div className="_feed_inner_comment_box_content_txt">
                                              <TextArea
                                                className="_comment_textarea"
                                                rows={2}
                                                placeholder="Write Someting..."
                                                onChange={onChange2}
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
                                        </form>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Modal>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="_feed_inner_timeline_post d-none">
                  <p className="_feed_inner_post_para">
                    <span>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here',
                    </span>
                  </p>
                </div>
                <div className="_feed_timeline_video d-none">
                  <div className="_cardMulti_pic_all">
                    <div className="_cardMulti_pic_main">
                      <div className="_cardMulti_pic">
                        <video
                          className="_video"
                          controls
                          playsInline
                          data-poster="https://ewr1.vultrobjects.com/carevan-course/cky306t5r001w3sxu3xu53wgo.mp4"
                          controlsList="nodownload"
                        >
                          <source
                            src="https://ewr1.vultrobjects.com/carevan-course/cky306t5r001w3sxu3xu53wgo.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                    <div className="_cardMulti_pic_main">
                      <div className="_cardMulti_pic">
                        <video
                          className="_video"
                          controls
                          playsInline
                          data-poster="https://ewr1.vultrobjects.com/carevan-course/cky306t5r001w3sxu3xu53wgo.mp4"
                          controlsList="nodownload"
                        >
                          <source
                            src="https://ewr1.vultrobjects.com/carevan-course/cky306t5r001w3sxu3xu53wgo.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                    <div className="_cardMulti_pic_main">
                      <div className="_cardMulti_pic">
                        <video
                          className="_video"
                          controls
                          playsInline
                          data-poster="https://ewr1.vultrobjects.com/carevan-course/cky306t5r001w3sxu3xu53wgo.mp4"
                          controlsList="nodownload"
                        >
                          <source
                            src="https://ewr1.vultrobjects.com/carevan-course/cky306t5r001w3sxu3xu53wgo.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                    <div className="_cardMulti_pic_main">
                      <div className="_cardMulti_pic">
                        <video
                          className="_video"
                          controls
                          playsInline
                          data-poster="https://ewr1.vultrobjects.com/carevan-course/cky306t5r001w3sxu3xu53wgo.mp4"
                          controlsList="nodownload"
                        >
                          <source
                            src="https://ewr1.vultrobjects.com/carevan-course/cky306t5r001w3sxu3xu53wgo.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                      <div className="M_cardMulti_pic_main_more">
                        <p>+2</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* reaction area */}

              <div className="_feed_inner_timeline_reaction">
                <ul className="_feed_inner_timeline_reaction_list">
                  <li className="_feed_inner_timeline_reaction_item">
                    <button className="_feed_inner_timeline_reaction_link">
                      <span className="_like_btn _like_btn-post unselectable">
                        <div
                          className="_status_reaction _active_like"
                          onClick={() => handleReaction(1, "like")}
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
                            <div className={`_emoji _emoji_love ${love1}`}>
                              <div class="_emoji_heart"></div>
                            </div>
                            <div className={`_emoji _emoji_like ${like1}`}>
                              <div class="_emoji_hand">
                                <div class="_emoji_thumb"></div>
                              </div>
                            </div>
                            <div className={`_emoji _emoji_wow ${wow1}`}>
                              <div class="_emoji_face">
                                <div class="_emoji_eyebrows"></div>
                                <div class="_emoji_eyes"></div>
                                <div class="_emoji_mouth"></div>
                              </div>
                            </div>
                            <div className={`_emoji _emoji_sad ${sad1}`}>
                              <div className="_emoji_face">
                                <div className="_emoji_eyebrows"></div>
                                <div className="_emoji_eyes"></div>
                                <div className="_emoji_mouth"></div>
                              </div>
                            </div>
                          </div>
                          <p className="_feed_inner_timeline_reaction_para">
                            <span>{postOneReactionLength}</span> {postOneLastReaction}
                          </p>
                        </div>
                      </span>
                      <ul className="_reactions_box">
                        <li
                          className="_reaction _reaction_1"
                          onClick={() => handleReaction(1, "like")}
                        >
                          <div className="_emoji _emoji_like">
                            <div className="_emoji_hand">
                              <div className="_emoji_thumb" />
                            </div>
                          </div>
                        </li>
                        <li
                          className="_reaction _reaction_2"
                          onClick={() => handleReaction(1, "love")}
                        >
                          <div className="_emoji _emoji_love">
                            <div className="_emoji_heart" />
                          </div>
                        </li>
                        <li
                          className="_reaction _reaction_3"
                          onClick={() => handleReaction(1, "wow")}
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
                          onClick={() => handleReaction(1, "sad")}
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
                            <span>{postOneComments.length}</span> Comment
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
                {!isEditable1 && (
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
                            value={post1cmnt}
                            onChange={(e) => setPost1cmnt(e.target.value)}
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
                      onClick={() => handleComment(1)}
                    >
                      Submit
                    </button>
                  </div>
                )}
              </div>
              <div className="_timline_comment_main">
                <div className="_previous_comment">
                  <button type="button" className="_previous_comment_txt">
                    View 4 previous comments
                  </button>
                </div>
                {postOneComments &&
                  postOneComments.map((comment) => (
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
                                    5 min ago
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
                                      handleDeleteUpdate(
                                        comment.postId,
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
                                      <div className="_emoji _emoji_love ">
                                        <div class="_emoji_heart"></div>
                                      </div>
                                      <div className="_emoji _emoji_like d-none">
                                        <div class="_emoji_hand">
                                          <div class="_emoji_thumb"></div>
                                        </div>
                                      </div>
                                      <div className="_emoji _emoji_wow d-none">
                                        <div class="_emoji_face">
                                          <div class="_emoji_eyebrows"></div>
                                          <div class="_emoji_eyes"></div>
                                          <div class="_emoji_mouth"></div>
                                        </div>
                                      </div>
                                      <div className="_emoji _emoji_sad d-none">
                                        <div className="_emoji_face">
                                          <div className="_emoji_eyebrows"></div>
                                          <div className="_emoji_eyes"></div>
                                          <div className="_emoji_mouth"></div>
                                        </div>
                                      </div>
                                    </div>
                                    <p className="_feed_inner_timeline_reaction_para">
                                      <span>12</span> Like
                                    </p>
                                  </div>
                                </span>
                                <ul className="_reactions_box">
                                  <li className="_reaction _reaction_1">
                                    <div className="_emoji _emoji_like">
                                      <div className="_emoji_hand">
                                        <div className="_emoji_thumb" />
                                      </div>
                                    </div>
                                  </li>
                                  <li className="_reaction _reaction_2">
                                    <div className="_emoji _emoji_love">
                                      <div className="_emoji_heart" />
                                    </div>
                                  </li>
                                  <li className="_reaction _reaction_3">
                                    <div className="_emoji _emoji_wow">
                                      <div className="_emoji_face">
                                        <div className="_emoji_eyebrows" />
                                        <div className="_emoji_eyes" />
                                        <div className="_emoji_mouth" />
                                      </div>
                                    </div>
                                  </li>
                                  <li className="_reaction _reaction_4">
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
                              <button className="_feed_comment_reaction_link" onClick={()=>setIsReply(true)}>
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
                                      <span>1</span> Reply
                                    </p>
                                  </div>
                                </span>
                              </button>
                            </li>
                          </ul>
                        </div>


                        {/* reply starts here */}
                        <div className="_M_social_comment_reply">
                      <div className="_M_comment_reply">
                        <div className="_M_social_comment_reply_main">
                          <div className="_M_comment_pic">
                            <Link to="">
                              <img
                                alt="img"
                                src="../../img/comment_img.png"
                                className=""
                              />
                            </Link>
                          </div>
                          {/* <div className="_comment_details_area">
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
                                        5 min ago
                                      </p>
                                      <div className="_comment_name_info_author">
                                        <p className="_comment_name_info_author_para">
                                          Author
                                        </p>
                                      </div>
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
                                      <Button className="_comment_drop_btn">
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
                                  <span>
                                    It is a long established fact that a reader
                                    will be distracted by the readable content
                                    of a page when looking at its layout.{" "}
                                  </span>
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
                                          <div className="_emoji _emoji_love ">
                                            <div class="_emoji_heart"></div>
                                          </div>
                                          <div className="_emoji _emoji_like d-none">
                                            <div class="_emoji_hand">
                                              <div class="_emoji_thumb"></div>
                                            </div>
                                          </div>
                                          <div className="_emoji _emoji_wow d-none">
                                            <div class="_emoji_face">
                                              <div class="_emoji_eyebrows"></div>
                                              <div class="_emoji_eyes"></div>
                                              <div class="_emoji_mouth"></div>
                                            </div>
                                          </div>
                                          <div className="_emoji _emoji_sad d-none">
                                            <div className="_emoji_face">
                                              <div className="_emoji_eyebrows"></div>
                                              <div className="_emoji_eyes"></div>
                                              <div className="_emoji_mouth"></div>
                                            </div>
                                          </div>
                                        </div>
                                        <p className="_feed_inner_timeline_reaction_para">
                                          <span>12</span> Like
                                        </p>
                                      </div>
                                    </span>
                                    <ul className="_reactions_box">
                                      <li className="_reaction _reaction_1">
                                        <div className="_emoji _emoji_like">
                                          <div className="_emoji_hand">
                                            <div className="_emoji_thumb" />
                                          </div>
                                        </div>
                                      </li>
                                      <li className="_reaction _reaction_2">
                                        <div className="_emoji _emoji_love">
                                          <div className="_emoji_heart" />
                                        </div>
                                      </li>
                                      <li className="_reaction _reaction_3">
                                        <div className="_emoji _emoji_wow">
                                          <div className="_emoji_face">
                                            <div className="_emoji_eyebrows" />
                                            <div className="_emoji_eyes" />
                                            <div className="_emoji_mouth" />
                                          </div>
                                        </div>
                                      </li>
                                      <li className="_reaction _reaction_4">
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
                                  <button className="_feed_comment_reaction_link">
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
                                          <span>1</span> Reply
                                        </p>
                                      </div>
                                    </span>
                                  </button>
                                </li>
                              </ul>
                            </div>
                          </div> */}
                        </div>
                      </div>

                    
                      {
                        isReply && <div className="_feed_inner_comment_box">
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
                                onChange={onChange2}
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
                        <button onClick={()=>submitReply()}>Submit reply</button>
                      </div>
                      }
                      
                    </div>
                  {/* reply ends here */}

                      </div>
                    </div>
                  ))}

                {isEditable1 && (
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
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
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

          {/* second post */}
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
              <h4 className="_feed_inner_timeline_post_title">
                - Photoshop Feedback
              </h4>
              <div className="_hash_btn">
                <button className="_hash_btn_link">#photoshop_Feedback</button>
              </div>
              <p className="_feed_post_description">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              <div className="_feed_post">
                <div
                  className="_colrd_post"
                  style={{
                    backgroundImage:
                      "linear-gradient(135deg, rgb(143, 199, 173), rgb(72, 229, 169))",
                  }}
                >
                  <span className="_colrd_post_spn">
                    Don’t stress over what’s happening because the Almighty has
                    promised that what’s coming will be better. Bear beautiful
                    patience. -Mufti Menk
                  </span>
                </div>

                <div className="_feed_inner_timeline_post ">
                  <p className="_feed_inner_post_para">
                    <span>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here',
                    </span>
                  </p>
                </div>
                <div className="_feed_timeline_video ">
                  <div className="_cardMulti_pic_all">
                    <div className="_cardMulti_pic_main">
                      <div className="_cardMulti_pic">
                        <video
                          className="_video"
                          controls
                          playsInline
                          data-poster="https://ewr1.vultrobjects.com/carevan-course/cky306t5r001w3sxu3xu53wgo.mp4"
                          controlsList="nodownload"
                        >
                          <source
                            src="https://ewr1.vultrobjects.com/carevan-course/cky306t5r001w3sxu3xu53wgo.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                    <div className="_cardMulti_pic_main">
                      <div className="_cardMulti_pic">
                        <video
                          className="_video"
                          controls
                          playsInline
                          data-poster="https://ewr1.vultrobjects.com/carevan-course/cky306t5r001w3sxu3xu53wgo.mp4"
                          controlsList="nodownload"
                        >
                          <source
                            src="https://ewr1.vultrobjects.com/carevan-course/cky306t5r001w3sxu3xu53wgo.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                    <div className="_cardMulti_pic_main">
                      <div className="_cardMulti_pic">
                        <video
                          className="_video"
                          controls
                          playsInline
                          data-poster="https://ewr1.vultrobjects.com/carevan-course/cky306t5r001w3sxu3xu53wgo.mp4"
                          controlsList="nodownload"
                        >
                          <source
                            src="https://ewr1.vultrobjects.com/carevan-course/cky306t5r001w3sxu3xu53wgo.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                    </div>
                    <div className="_cardMulti_pic_main">
                      <div className="_cardMulti_pic">
                        <video
                          className="_video"
                          controls
                          playsInline
                          data-poster="https://ewr1.vultrobjects.com/carevan-course/cky306t5r001w3sxu3xu53wgo.mp4"
                          controlsList="nodownload"
                        >
                          <source
                            src="https://ewr1.vultrobjects.com/carevan-course/cky306t5r001w3sxu3xu53wgo.mp4"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                      <div className="M_cardMulti_pic_main_more">
                        <p>+2</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="_feed_inner_timeline_reaction">
                <ul className="_feed_inner_timeline_reaction_list">
                  <li className="_feed_inner_timeline_reaction_item">
                    <button className="_feed_inner_timeline_reaction_link">
                      <span className="_like_btn _like_btn-post unselectable">
                        <div
                          className="_status_reaction _active_like"
                          onClick={() => handleReaction(2, "like")}
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
                            <div className={`_emoji _emoji_love ${love2}`}>
                              <div class="_emoji_heart"></div>
                            </div>
                            <div className={`_emoji _emoji_like ${like2}`}>
                              <div class="_emoji_hand">
                                <div class="_emoji_thumb"></div>
                              </div>
                            </div>
                            <div className={`_emoji _emoji_wow ${wow2}`}>
                              <div class="_emoji_face">
                                <div class="_emoji_eyebrows"></div>
                                <div class="_emoji_eyes"></div>
                                <div class="_emoji_mouth"></div>
                              </div>
                            </div>
                            <div className={`_emoji _emoji_sad ${sad2}`}>
                              <div className="_emoji_face">
                                <div className="_emoji_eyebrows"></div>
                                <div className="_emoji_eyes"></div>
                                <div className="_emoji_mouth"></div>
                              </div>
                            </div>
                          </div>
                          <p className="_feed_inner_timeline_reaction_para">
                            <span>{postTwoReactionLength}</span> {postTwoLastReaction}
                          </p>
                        </div>
                      </span>
                      <ul className="_reactions_box">
                        <li
                          className="_reaction _reaction_1"
                          onClick={() => handleReaction(2, "like")}
                        >
                          <div className="_emoji _emoji_like">
                            <div className="_emoji_hand">
                              <div className="_emoji_thumb" />
                            </div>
                          </div>
                        </li>
                        <li
                          className="_reaction _reaction_2"
                          onClick={() => handleReaction(2, "love")}
                        >
                          <div className="_emoji _emoji_love">
                            <div className="_emoji_heart" />
                          </div>
                        </li>
                        <li
                          className="_reaction _reaction_3"
                          onClick={() => handleReaction(2, "wow")}
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
                          onClick={() => handleReaction(2, "sad")}
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
                            <span>{postTwoComments?.length}</span> Comment
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
                {!isEditable2 && (
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
                            value={post2cmnt}
                            onChange={(e) => setPost2cmnt(e.target.value)}
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
                      onClick={() => handleComment(2)}
                    >
                      Submit
                    </button>
                  </div>
                )}
              </div>
              <div className="_timline_comment_main">
                <div className="_previous_comment">
                  <button type="button" className="_previous_comment_txt">
                    View 4 previous comments
                  </button>
                </div>
                {postTwoComments &&
                  postTwoComments.map((comment) => (
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
                                    5 min ago
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
                                      handleDeleteUpdate(
                                        comment.postId,
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
                                      <div className="_emoji _emoji_love ">
                                        <div class="_emoji_heart"></div>
                                      </div>
                                      <div className="_emoji _emoji_like d-none">
                                        <div class="_emoji_hand">
                                          <div class="_emoji_thumb"></div>
                                        </div>
                                      </div>
                                      <div className="_emoji _emoji_wow d-none">
                                        <div class="_emoji_face">
                                          <div class="_emoji_eyebrows"></div>
                                          <div class="_emoji_eyes"></div>
                                          <div class="_emoji_mouth"></div>
                                        </div>
                                      </div>
                                      <div className="_emoji _emoji_sad d-none">
                                        <div className="_emoji_face">
                                          <div className="_emoji_eyebrows"></div>
                                          <div className="_emoji_eyes"></div>
                                          <div className="_emoji_mouth"></div>
                                        </div>
                                      </div>
                                    </div>
                                    <p className="_feed_inner_timeline_reaction_para">
                                      <span>12</span> Like
                                    </p>
                                  </div>
                                </span>
                                <ul className="_reactions_box">
                                  <li className="_reaction _reaction_1">
                                    <div className="_emoji _emoji_like">
                                      <div className="_emoji_hand">
                                        <div className="_emoji_thumb" />
                                      </div>
                                    </div>
                                  </li>
                                  <li className="_reaction _reaction_2">
                                    <div className="_emoji _emoji_love">
                                      <div className="_emoji_heart" />
                                    </div>
                                  </li>
                                  <li className="_reaction _reaction_3">
                                    <div className="_emoji _emoji_wow">
                                      <div className="_emoji_face">
                                        <div className="_emoji_eyebrows" />
                                        <div className="_emoji_eyes" />
                                        <div className="_emoji_mouth" />
                                      </div>
                                    </div>
                                  </li>
                                  <li className="_reaction _reaction_4">
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
                              <button className="_feed_comment_reaction_link">
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
                                      <span>1</span> Reply
                                    </p>
                                  </div>
                                </span>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}

                {isEditable2 && (
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
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
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
            </div>
          </div>

          {/* third post */}
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
              <h4 className="_feed_inner_timeline_post_title">
                - Photoshop Feedback
              </h4>
              <div className="_hash_btn">
                <Button className="_hash_btn_link">#photoshop_Feedback</Button>
              </div>
              <p className="_feed_post_description">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>
              {/* poll post */}
              <div className="_poll_post_all _mar_t10 _mar_b15">
                <div className="_poll_post_itm _poll_post_base d-flex _active">
                  <div className="_poll_post_itm_lft _poll_post_itm_lft_block">
                    <div className="_poll_post_itm_lft_area">
                      <div className="_poll_post_itm_mark">
                        <Input
                          type="checkbox"
                          className="_poll_post_itm_chck"
                        />
                      </div>
                      <div className="_poll_post_itm_mdl">
                        <p className="_poll_post_itm_txt1">
                          Added by <span> Mahjabin K</span>
                        </p>
                        <p className="_poll_post_itm_txt2">প্রিয়</p>
                      </div>
                    </div>
                    <div className="_poll_post_itm_vote_all">
                      <ul className="_poll_post_itm_vote_ul d-flex">
                        <li className="_poll_post_itm_vote_img _poll_post_itm_vote_li">
                          <img 
                          alt="img"
                            src="https://ewr1.vultrobjects.com/filestore/cl14uz5m800msh9h24g9a4ser.jpg"
                            
                            className="_poll_post_itm_img"
                          />
                        </li>
                        <li className="_poll_post_itm_vote_li">
                          <p className="_poll_post_itm_vote_usr">+ 3</p>
                        </li>
                      </ul>
                      <p className="_poll_post_itm_vote_num">4 vote</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div classname="_poll_post_itm _poll_post_base d-flex ">
                    <div className="_poll_post_itm_lft">
                      <div className="_poll_post_itm_mark" />
                      <div className="_poll_post_itm_mdl">
                        <Input
                          type="text"
                          placeholder=" Add an option"
                          className="_poll_post_itm_mdl_inpt"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* poll post */}

              <div className="_feed_inner_timeline_reaction">
                <ul className="_feed_inner_timeline_reaction_list">
                  <li className="_feed_inner_timeline_reaction_item">
                    <button className="_feed_inner_timeline_reaction_link">
                      <span className="_like_btn _like_btn-post unselectable">
                        <div
                          className="_status_reaction _active_like"
                          onClick={() => handleReaction(3, "like")}
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
                            <div className={`_emoji _emoji_love ${love3}`}>
                              <div class="_emoji_heart"></div>
                            </div>
                            <div className={`_emoji _emoji_like ${like3}`}>
                              <div class="_emoji_hand">
                                <div class="_emoji_thumb"></div>
                              </div>
                            </div>
                            <div className={`_emoji _emoji_wow ${wow3}`}>
                              <div class="_emoji_face">
                                <div class="_emoji_eyebrows"></div>
                                <div class="_emoji_eyes"></div>
                                <div class="_emoji_mouth"></div>
                              </div>
                            </div>
                            <div className={`_emoji _emoji_sad ${sad3}`}>
                              <div className="_emoji_face">
                                <div className="_emoji_eyebrows"></div>
                                <div className="_emoji_eyes"></div>
                                <div className="_emoji_mouth"></div>
                              </div>
                            </div>
                          </div>
                          <p className="_feed_inner_timeline_reaction_para">
                            <span>{postThreeReactionLength}</span> {postThreeLastReaction}
                          </p>
                        </div>
                      </span>
                      <ul className="_reactions_box">
                        <li
                          className="_reaction _reaction_1"
                          onClick={() => handleReaction(3, "like")}
                        >
                          <div className="_emoji _emoji_like">
                            <div className="_emoji_hand">
                              <div className="_emoji_thumb" />
                            </div>
                          </div>
                        </li>
                        <li
                          className="_reaction _reaction_2"
                          onClick={() => handleReaction(3, "love")}
                        >
                          <div className="_emoji _emoji_love">
                            <div className="_emoji_heart" />
                          </div>
                        </li>
                        <li
                          className="_reaction _reaction_3"
                          onClick={() => handleReaction(3, "wow")}
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
                          onClick={() => handleReaction(3, "sad")}
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
                            <span>{postThreeComments?.length ||0}</span> Comment
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
                {!isEditable3 && (
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
                            value={post3cmnt}
                            onChange={(e) => setPost3cmnt(e.target.value)}
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
                      onClick={() => handleComment(3)}
                    >
                      submit
                    </button>
                  </div>
                )}
              </div>
              <div className="_timline_comment_main">
                <div className="_previous_comment">
                  <button type="button" className="_previous_comment_txt">
                    View 4 previous comments
                  </button>
                </div>
                {postThreeComments &&
                  postThreeComments.map((comment) => (
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
                                    5 min ago
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
                                      handleDeleteUpdate(
                                        comment.postId,
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
                                      <div className="_emoji _emoji_love ">
                                        <div class="_emoji_heart"></div>
                                      </div>
                                      <div className="_emoji _emoji_like d-none">
                                        <div class="_emoji_hand">
                                          <div class="_emoji_thumb"></div>
                                        </div>
                                      </div>
                                      <div className="_emoji _emoji_wow d-none">
                                        <div class="_emoji_face">
                                          <div class="_emoji_eyebrows"></div>
                                          <div class="_emoji_eyes"></div>
                                          <div class="_emoji_mouth"></div>
                                        </div>
                                      </div>
                                      <div className="_emoji _emoji_sad d-none">
                                        <div className="_emoji_face">
                                          <div className="_emoji_eyebrows"></div>
                                          <div className="_emoji_eyes"></div>
                                          <div className="_emoji_mouth"></div>
                                        </div>
                                      </div>
                                    </div>
                                    <p className="_feed_inner_timeline_reaction_para">
                                      <span>12</span> Like
                                    </p>
                                  </div>
                                </span>
                                <ul className="_reactions_box">
                                  <li className="_reaction _reaction_1">
                                    <div className="_emoji _emoji_like">
                                      <div className="_emoji_hand">
                                        <div className="_emoji_thumb" />
                                      </div>
                                    </div>
                                  </li>
                                  <li className="_reaction _reaction_2">
                                    <div className="_emoji _emoji_love">
                                      <div className="_emoji_heart" />
                                    </div>
                                  </li>
                                  <li className="_reaction _reaction_3">
                                    <div className="_emoji _emoji_wow">
                                      <div className="_emoji_face">
                                        <div className="_emoji_eyebrows" />
                                        <div className="_emoji_eyes" />
                                        <div className="_emoji_mouth" />
                                      </div>
                                    </div>
                                  </li>
                                  <li className="_reaction _reaction_4">
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
                              <button className="_feed_comment_reaction_link">
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
                                      <span>1</span> Reply
                                    </p>
                                  </div>
                                </span>
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}

                {isEditable3 && (
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
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
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
            </div>
          </div>

          {/* fourth post */}
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
              <h4 className="_feed_inner_timeline_post_title">
                - Photoshop Feedback
              </h4>
              <div className="_hash_btn">
                <Button className="_hash_btn_link">#photoshop_Feedback</Button>
              </div>
              <p className="_feed_post_description">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua.
              </p>

              <div className="_card_file_post_area">
                <ul className="_card_file_post_area_ul  d-flex">
                  <li className="_card_file_post_area_li">
                    <div className="_card_file_post d-flex">
                      <p className="_card_file_post_icon">
                        <img alt="img"
                          src="../../img/file.svg"
                          className="_card_file_post_icon_img"
                        />
                      </p>
                      <a
                        href="https://ewr1.vultrobjects.com/filestore/cl1anr1f0005fv7h2bf527nak.xlsx"
                        target="_blank"
                        className="_card_file_post_lnk"
                        rel="noreferrer"
                      >
                        <div className="_card_file_post_dtls">
                          <p className="_card_file_post_dtls_p">aa.xlsx</p>
                          <p className="_card_file_post_dtls_size">8 kb</p>
                        </div>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              {/* <div className="_feed_inner_timeline_reaction">
                <ul className="_feed_inner_timeline_reaction_list">
                  <li className="_feed_inner_timeline_reaction_item">
                    <button className="_feed_inner_timeline_reaction_link">
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
                            <div className="_emoji _emoji_love ">
                              <div class="_emoji_heart"></div>
                            </div>
                            <div className="_emoji _emoji_like d-none">
                              <div class="_emoji_hand">
                                <div class="_emoji_thumb"></div>
                              </div>
                            </div>
                            <div className="_emoji _emoji_wow d-none">
                              <div class="_emoji_face">
                                <div class="_emoji_eyebrows"></div>
                                <div class="_emoji_eyes"></div>
                                <div class="_emoji_mouth"></div>
                              </div>
                            </div>
                            <div className="_emoji _emoji_sad d-none">
                              <div className="_emoji_face">
                                <div className="_emoji_eyebrows"></div>
                                <div className="_emoji_eyes"></div>
                                <div className="_emoji_mouth"></div>
                              </div>
                            </div>
                          </div>
                          <p className="_feed_inner_timeline_reaction_para">
                            <span>{postFourReactionLength}</span> Like
                          </p>
                        </div>
                      </span>
                      <ul className="_reactions_box">
                        <li className="_reaction _reaction_1">
                          <div className="_emoji _emoji_like">
                            <div className="_emoji_hand">
                              <div className="_emoji_thumb" />
                            </div>
                          </div>
                        </li>
                        <li className="_reaction _reaction_2">
                          <div className="_emoji _emoji_love">
                            <div className="_emoji_heart" />
                          </div>
                        </li>
                        <li className="_reaction _reaction_3">
                          <div className="_emoji _emoji_wow">
                            <div className="_emoji_face">
                              <div className="_emoji_eyebrows" />
                              <div className="_emoji_eyes" />
                              <div className="_emoji_mouth" />
                            </div>
                          </div>
                        </li>
                        <li className="_reaction _reaction_4">
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
                            <span>12</span> Comment
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
              </div> */}
              <div className="_feed_inner_timeline_comment_area">
                <div className="_feed_inner_timeline_reaction">
                  <ul className="_feed_inner_timeline_reaction_list">
                    <li className="_feed_inner_timeline_reaction_item">
                      <button className="_feed_inner_timeline_reaction_link">
                        <span className="_like_btn _like_btn-post unselectable">
                          <div
                            className="_status_reaction _active_like"
                            onClick={() => handleReaction(4, "like")}
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
                              <div className={`_emoji _emoji_love ${love4}`}>
                                <div class="_emoji_heart"></div>
                              </div>
                              <div className={`_emoji _emoji_like ${like4}`}>
                                <div class="_emoji_hand">
                                  <div class="_emoji_thumb"></div>
                                </div>
                              </div>
                              <div className={`_emoji _emoji_wow ${wow4}`}>
                                <div class="_emoji_face">
                                  <div class="_emoji_eyebrows"></div>
                                  <div class="_emoji_eyes"></div>
                                  <div class="_emoji_mouth"></div>
                                </div>
                              </div>
                              <div className={`_emoji _emoji_sad ${sad4}`}>
                                <div className="_emoji_face">
                                  <div className="_emoji_eyebrows"></div>
                                  <div className="_emoji_eyes"></div>
                                  <div className="_emoji_mouth"></div>
                                </div>
                              </div>
                            </div>
                            <p className="_feed_inner_timeline_reaction_para">
                              <span>{postFourReactionLength}</span> {postFourLastReaction}
                            </p>
                          </div>
                        </span>
                        <ul className="_reactions_box">
                          <li
                            className="_reaction _reaction_1"
                            onClick={() => handleReaction(4, "like")}
                          >
                            <div className="_emoji _emoji_like">
                              <div className="_emoji_hand">
                                <div className="_emoji_thumb" />
                              </div>
                            </div>
                          </li>
                          <li
                            className="_reaction _reaction_2"
                            onClick={() => handleReaction(4, "love")}
                          >
                            <div className="_emoji _emoji_love">
                              <div className="_emoji_heart" />
                            </div>
                          </li>
                          <li
                            className="_reaction _reaction_3"
                            onClick={() => handleReaction(4, "wow")}
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
                            onClick={() => handleReaction(4, "sad")}
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
                              <span>{postFourComments?.length || 0}</span> Comment
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
                  {!isEditable4 && (
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
                              value={post4cmnt}
                              onChange={(e) => setPost4cmnt(e.target.value)}
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
                        onClick={() => handleComment(4)}
                      >
                        Submit
                      </button>
                    </div>
                  )}
                </div>
                <div className="_timline_comment_main">
                  <div className="_previous_comment">
                    <button type="button" className="_previous_comment_txt">
                      View 4 previous comments
                    </button>
                  </div>
                  {postFourComments &&
                    postFourComments.map((comment) => (
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
                                      5 min ago
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
                                        handleDeleteUpdate(
                                          comment.postId,
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
                                        <div className="_emoji _emoji_love ">
                                          <div class="_emoji_heart"></div>
                                        </div>
                                        <div className="_emoji _emoji_like d-none">
                                          <div class="_emoji_hand">
                                            <div class="_emoji_thumb"></div>
                                          </div>
                                        </div>
                                        <div className="_emoji _emoji_wow d-none">
                                          <div class="_emoji_face">
                                            <div class="_emoji_eyebrows"></div>
                                            <div class="_emoji_eyes"></div>
                                            <div class="_emoji_mouth"></div>
                                          </div>
                                        </div>
                                        <div className="_emoji _emoji_sad d-none">
                                          <div className="_emoji_face">
                                            <div className="_emoji_eyebrows"></div>
                                            <div className="_emoji_eyes"></div>
                                            <div className="_emoji_mouth"></div>
                                          </div>
                                        </div>
                                      </div>
                                      <p className="_feed_inner_timeline_reaction_para">
                                        <span>12</span> Like
                                      </p>
                                    </div>
                                  </span>
                                  <ul className="_reactions_box">
                                    <li className="_reaction _reaction_1">
                                      <div className="_emoji _emoji_like">
                                        <div className="_emoji_hand">
                                          <div className="_emoji_thumb" />
                                        </div>
                                      </div>
                                    </li>
                                    <li className="_reaction _reaction_2">
                                      <div className="_emoji _emoji_love">
                                        <div className="_emoji_heart" />
                                      </div>
                                    </li>
                                    <li className="_reaction _reaction_3">
                                      <div className="_emoji _emoji_wow">
                                        <div className="_emoji_face">
                                          <div className="_emoji_eyebrows" />
                                          <div className="_emoji_eyes" />
                                          <div className="_emoji_mouth" />
                                        </div>
                                      </div>
                                    </li>
                                    <li className="_reaction _reaction_4">
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
                                <button className="_feed_comment_reaction_link">
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
                                        <span>1</span> Reply
                                      </p>
                                    </div>
                                  </span>
                                </button>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}

                  {isEditable4 && (
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
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                autoSize={{ minRows: 1, maxRows: 10 }}
                              />
                            </div>
                          </div>
                        </form>
                        <button
                          style={{ color: "blue", marginLeft: "200px",padding:'5px',borderRadius:'50px' }}
                          onClick={() => handleCommentEdit()}
                        >
                          update
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* fourth end */}
        </div>
      </div>
    </div>
  );
}

export default FeedMiddle;
