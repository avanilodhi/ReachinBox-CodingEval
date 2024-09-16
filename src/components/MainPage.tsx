import { useEffect, useState } from "react";
import axios from "axios";
import AllInbox from "./AllInbox";
import CenterPage from "./CenterPage";
import RightSection from "./RightSection";

function MainPage() {
  const [datas, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedThread, setSelectedThread] = useState(null);
  console.log(selectedThread);
  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "https://hiring.reachinbox.xyz/api/v1/onebox/list",
          {
            headers: {
              Authorization: token,
            },
          }
        );
        setData(res.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }, 2500);
  
    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  
  
  
  if (loading) {
    return (
      <div className="bg-[#ECEFF3] dark:bg-black dark:text-white text-[#5B5F66] flex h-screen w-full justify-center items-center">
        Loading ...
      </div>
    );
  }

  const loadMail = async (threadId: any) => {
    setSelectedThread(threadId);
  };

  return (
    <div className="bg-[#ECEFF3] dark:bg-black text-white pt-16 flex w-full  h-screen">
      <div className="w-1/4 ">
        <AllInbox data={datas} loadMail={loadMail} />
      </div>
      <div className="w-2/4">
        {/* @ts-ignore */}
        <CenterPage selectedThread={selectedThread} />
      </div>
      <div className="w-1/4">
        <RightSection />
      </div>
    </div>
  );
}

export default MainPage;
