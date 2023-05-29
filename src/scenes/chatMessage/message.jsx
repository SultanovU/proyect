import React, { useState } from "react";
import "../chat/chat.css";
import Input from "../chat/Input";
import { GoKebabVertical } from "react-icons/go";
import { MdOutlineBlock, MdDeleteOutline } from "react-icons/md";
import Chatting from "../chat/Chatting";
import { Button, Popover, Typography } from "@mui/material";

const ChatMessage = () => {
  const [isOpen, setIsOpen] = useState(true);

  let messages = [
    {
      name: "Xasanboy",
      id: 1,
      text: "WoW, very sample!",
      createdDate: "2022-01-15T11:02:17Z",
    },
    {
      name: "Xasanboy",
      id: 1,
      text: "WoW, very sample!",
      createdDate: "2022-01-15T11:02:17Z",
    },
    {
      name: "Xusinboy",
      id: 2,
      text: "Next",
      createdDate: "2022-01-15T13:02:17Z",
    },
  ];

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <div className="section">
        <div className="wrapper-chatting">
          <div className="chatting-message">
            {messages.map((message) => {
              return (
                <>
                  <Button
                    sx={{
                      color: "white",
                      width: "120px",
                      height: "100px",
                      padding: "0",
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px",
                      borderBottomLeftRadius: "20px",
                    }}
                  >
                    <Chatting
                      currentUser={{
                        id: 1,
                        lastname: "Abdurasulov",
                        name: "Xaanboy",
                      }}
                      createdDte={message.createdDate}
                      owner={message.name}
                      text={message.text}
                      id={1}
                    />
                  </Button>
                </>
              );
            })}
          </div>
        </div>
        <div className="" style={{ marginTop: "20px" }}>
          <Input />
        </div>
        <div className="chatSettting">
          <button
            style={{ background: "transparent", border: "none" }}
            onClick={() =>
              isOpen == true ? setIsOpen(false) : setIsOpen(true)
            }
          >
            <GoKebabVertical size={"28px"} color="white" />
          </button>
          <div className={isOpen == true ? "none" : "chatSet"}>
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <MdOutlineBlock size={"24px"} />
              <span>Block user</span>
            </button>
            <br />
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <MdDeleteOutline size={"24px"} />
              <span>Delete user</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatMessage;
