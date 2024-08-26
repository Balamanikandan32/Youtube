import userIcon from "../Assets/userIcon.png";
const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
        <img className="h-8 w-8" src={userIcon} alt="user-Icon" />
        <span className="px-2 font-bold">{name}</span>
        <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
