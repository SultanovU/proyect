import React, { useContext } from "react";
import userInfo from "./userData";
import { currentUser } from "./default";

export default function ChatUser({ }) {
  const user = useContext(currentUser);
  let chatsID = user?.connectedChats;
  if (chatsID) {
    return (
      <div className="">
        {userInfo.map((item) => {
          return (
            <div>
              <div className="">
                <img
                  src="public\photo-1501196354995-cbb51c65aaea.avif"
                  alt=""
                  className=""
                />
                <div className="">
                  <h1 className="">{item.Name}</h1>
                  <p className="">{item.Desc}</p>
                </div>
              </div>
              <p className="">
                {item.online}
              </p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div></div>
    )
  }
}