import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "@/lib/zustand/useConversation";

const NoChatSelected = ({ user }) => {
  return (
    <>
      <div className="flex items-center justify-center w-full h-full">
        <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font semibold flex flex-col items-center gap-2">
          <p>
            Welcome 👋{" "}
            {user ? (
              user.fullname
            ) : (
              <span className="loading loading-spinner"></span>
            )}
          </p>
          <p>
            Select a chat to start messaging or create more accounts to test it
            yourself!!
          </p>
          <TiMessages className="text-3xl md:text-6xl text-center" />
        </div>
      </div>
    </>
  );
};

const MessageContainer = ({ user }) => {
  const { selectedConversation } = useConversation();
  return (
    <>
      <div className="md:min-w-[450px] flex flex-col">
        {!selectedConversation ? (
          <NoChatSelected user={user} />
        ) : (
          <>
            <div className="bg-slate-500 px-4 py-2 mb-2">
              <span className="label-text">To: </span>
              <span className="text-gray-900 font-bold">
                {selectedConversation.fullname}
              </span>
            </div>
            <Messages />
            <MessageInput />
          </>
        )}
        {/* Header */}
      </div>
    </>
  );
};

export default MessageContainer;

// const MessageContainer = () => {
//   return (
//     <>
//       <div className="md:min-w-[450px] flex flex-col">
//         {/* Header */}
//         <div className="bg-slate-500 px-4 py-2 mb-2">
//           <span className="label-text">To:</span>
//           <span className="text-gray-900 font-bold">Satkar Niraula</span>
//         </div>
//         <Messages />
//         <MessageInput />
//       </div>
//     </>
//   );
// };

// export default MessageContainer;
