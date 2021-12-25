import React, { useEffect, useRef } from "react";
import { ByMoralis } from "react-moralis";
import { EachMsg } from "./EachMsg";
import PoweredBy from "./PoweredBy";
import SendMessage from "./SendMessage";
import { useMoralis, useMoralisQuery } from "react-moralis";

const Message = () => {
  // data[0].attributes.message
  const { user } = useMoralis();
  const endOfMessageRef = useRef();

  const { data, error, isLoading } = useMoralisQuery(
    "Messages",
    (query) => query.ascending("createdAt"),
    [data],

    { live: true }
  );
  console.log(data,endOfMessageRef);

  //   useEffect(() => {
  //       const chatData=data
  //       console.log('changesdddd');
  //   }, [data])

  //   console.log(data);
  // var wholeMessages=[]
  //   const refreshHandler=(data)=>{
  //       console.log("called",data);
  //       wholeMessages=data

  //   }
  return (
    <div className="w-full pb-99  h-3/5 ">
      <div>
        <PoweredBy />
      </div>

      <div  className="  relative h-4/5   overflow-y-auto ">
        {data && data.map((msg) => <EachMsg msg={msg} />)}
        <div
          
          className="flex flex-col justify-center items-center w-full h-1000"
        >
          <p ref={endOfMessageRef} className="text-teal-300 text-lg">You'r up-to-date!🧑🏻‍🚀</p>
        </div>
      </div>

      <div>
        <SendMessage endOfMessageRef={endOfMessageRef} />
      </div>
    </div>
    // <div className="py-4 w-full h-2/5  overflow-auto mb-10">

    //     <PoweredBy />

    //   <div>
    //    {data && data.map((msg)=><EachMsg  msg={msg} />)}
    //   </div>

    //   <div className="flex justify-center">
    //   <SendMessage endOfMessageRef={endOfMessageRef}/>
    //   </div>

    //   <div ref={endOfMessageRef} className="text-center text-gray-400 mt-5">
    //       <p>You'r up-to-date!🧑🏻‍🚀</p>
    //   </div>
    // </div>
  );
};

export default Message;
