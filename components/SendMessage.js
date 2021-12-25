import React, { useRef, useState } from "react";
import { useMoralis ,useMoralisQuery } from "react-moralis";

const SendMessage = ({endOfMessageRef}) => {
  const { user, Moralis } = useMoralis();
//   const [msgSended,isMsgSended]=useState(false)
  const [msgValue, setMsgValue] = useState();
const msgText=useRef()
  const {data,error,isLoading}=useMoralisQuery("Messages",query =>
  query
    .ascending("createdAt"),[],

{live:true},)
console.log(data);
  // creating Message object of Moralis

  const Messages = Moralis.Object.extend("Messages");
  const SendMessageToOtherUserHandler = (e) => {
    e.preventDefault();
    console.log();
    // props.onRefresh(data)
    // instantiating Message object
    const message = new Messages();

    // saving msg in Message table of maralis admin

    message
      .save({
        message: msgValue,
        username: user.getUsername(),
        ethAddress: user.get("ethAddress"),
      })
      .then(
        () => {
          console.log("mesg sent succesfully");
        //   setMsgSended(!msgSended)
        },
        (error) => {}
      );
    //   setMsgSended(false)
      
    endOfMessageRef.current.scrollIntoView({ behavior: 'smooth'});
    setMsgValue("")  
  };

  const msg = useRef("");
  return (
    <form className="fixed bottom-5 w-full" action="">
      <div className="  flex flex-row items-end justify-center   ">
        <input ref={msgText} onChange={()=>{setMsgValue(msgText.current.value)}}
          value={msgValue}
          placeholder={`enter a message ${user.getUsername()} .....`}
          className="w-2/5 focus:bg-white bg-fuchsia-200 outline-none px-2 text-m border-2 border-pink-400 rounded-l-full rounded-r-full"
        />
        <button
          onClick={SendMessageToOtherUserHandler}
          className="px-3 mx-2 border-2 border-pink-400 hover:bg-fuchsia-200 text-emerald-600 bg-fuchsia-300 rounded-l-full rounded-r-full"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
};

export default SendMessage;
