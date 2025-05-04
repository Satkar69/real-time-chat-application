"use client";

import Sidebar from "@/app/components/sidebar/Sidebar";
import MessageContainer from "@/app/components/messages/MessageContainer";
import { useAuthContext } from "@/contexts/AuthContext";
import useConversation from "@/lib/zustand/useConversation";
import { useEffect } from "react";

const DashboardView = () => {
  const { authUser } = useAuthContext();
  const { setSelectedConversation } = useConversation();
  useEffect(() => {
    // cleanup function (unmounts)
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <>
      <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Sidebar />
        <MessageContainer user={authUser} />
      </div>
    </>
  );
};

export default DashboardView;

// const DashboardView = () => {
//   return (
//     <>
//       <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//         <Sidebar />
//         <MessageContainer />
//       </div>
//     </>
//   );
// };

// export default DashboardView;
