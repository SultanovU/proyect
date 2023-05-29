import React, { useState } from "react";
import ChatUser from "./ChatUser";
import { BiMenu } from "react-icons/bi";
import { IoIosSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { BsCameraVideoFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import "./chat.css";
import Slidebar from "../slidebar/slidebar";
import ChatMessage from "../chatMessage/message";

const Chat = () => {
  const [showChatMessage, setShowChatMessage] = useState(false);

  const token = localStorage.getItem("allowed?");
  const navigate = useNavigate();
  if (!token) {
    // navigate("/");
  }
  const [openModal, setOpenModal] = useState(false);
  const handlerChange = (e) => {
    e.preventDefault();
    setOpenModal(!openModal);
  };
  const [inof, setInof] = useState(true);
  const [showSildebar , setShowSlidebar ] = useState(false)
  return (
    <div className="main"> 
        <form className="form">
          <div className="">
            <button onClick={(e) => handlerChange(e)} className="form-btn">
              <BiMenu onClick={()=> setShowSlidebar (!showSildebar)} className="form-btn_icon" style={{color:'white'}}/>
            </button>
          </div>
          <p className="form-title">Chat</p>
          <Link to="/profile">
            <p className="">
              <FaUserCircle size={"28px"} style={{color:'white'}}/>
            </p>
          </Link>
          <Link to="/videocall">
            <p className="">
              <BsCameraVideoFill size={"28px"} style={{color:'white'}} />
            </p>
          </Link>
          <div className="">
            <button
              className="form-btn"
              onClick={() => (inof === true ? setInof(false) : setInof(true))}
            >
              <IoIosSearch className="form-btn_icon" style={{color:'white'}}/>
            </button>
            <div className="search-input">
            <input
              type="text"
              className={inof === true ? "none" : "in"}
              placeholder="search"
              />
              </div>
          </div>
        </form>
        <ChatUser chattingUserId={1} />
        <div className="wrapper">
          <div className="">
            <ChatUser chattingUserId={1} />
            <div className="users">
              <div className="user">
                <div className="userAvatar">
                  <button onClick={() => setShowChatMessage (!showChatMessage)} className="avatar-btn">
                  <img
                    src="https://logos.telegram-plus.com/channels/asl-wayne-reppar/telegram_logo.jpg"
                    alt=""
                    />
                    </button><br />
                  <span>Asl Wayne</span>
                </div>
                <div className="closeTime">
                  <span>23:26</span>
                </div>
              </div><hr />
              <div className="user">
                <div className="userAvatar">
                  <button onClick={() => setShowChatMessage (!showChatMessage)} className="avatar-btn">
                  <img
                    src="https://images.genius.com/85460802e84cde0026f9e4085d7f1aad.640x640x1.jpg"
                    alt=""
                    />
                    </button><br />
                  <span>Ghost</span>
                </div>
                <div className="closeTime">
                  <span>01:00</span>
                </div>
              </div><hr />
            </div>
          </div>
        </div>
      {showSildebar && <Slidebar/>}
      {showChatMessage && <ChatMessage/>}
    </div>
  );
};

export default Chat;
