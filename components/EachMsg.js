import React from "react";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import Message from "./Message";

export const EachMsg = ({ msg }) => {
  const { user } = useMoralis();
  const isUserMsg = msg.get("ethAddress") === user.get("ethAddress");

  return (
    <div
      className={`flex items-end space-y-2  space-x-2  relative ${
        isUserMsg && "justify-end"
      } `}
    >
      <div className={`relative  h-8 w-8 ${isUserMsg && "order-last ml-2"}`}>
        {isUserMsg && <Avatar avatar={user.get("username")} />}
      </div>
      <div
        className={` flex space-x-4 p-3 rounded-lg ${
          isUserMsg
            ? "rounded-br-none bg-pink-300"
            : "rounded-bl-none bg-gray-300"
        }`}
      >
        <p>{msg.get("message")}</p>
      </div>
      <p className={`absolute -bottom-5
       text-xs ${isUserMsg ? "text-pink-300":"text-blue-200"}`}>{msg.get('username')}</p>
    </div>
  );
};
