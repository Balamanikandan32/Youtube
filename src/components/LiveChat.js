import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utility/chatSlice";
import {
  generateRandomName,
  makeRandomMessage,
} from "../utility/liveMessageHelper";

const LiveChat = () => {
  const LiveMessages = useSelector((store) => store?.chat?.message);
  const dispatch = useDispatch();
  const liveRef = useRef(null);
  useEffect(() => {
    const unsubscribe = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(10),
        })
      );
    }, 1000);
    return () => {
      clearInterval(unsubscribe);
    };
  }, []);
  return (
    <div className=" ml-2 border border-black  w-full h-[500px]">
      <div className=" h-[440px] bg-slate-100 p-1 overflow-y-scroll flex flex-col-reverse">
        {LiveMessages.map((message, index) => (
          <ChatMessage
            key={index}
            name={message?.name}
            message={message?.message}
          />
        ))}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(addMessage({name : "Bala", message : liveRef.current.value }))
          liveRef.current.value = ""
        }}
      >
        <input
          className="border border-black m-2 w-2/3 p-1 rounded-md"
          type="text"
          placeholder="chat..."
          name="message-input"
          ref={liveRef}
        />
        <button className="bg-red-700 p-1 text-white rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default LiveChat;
