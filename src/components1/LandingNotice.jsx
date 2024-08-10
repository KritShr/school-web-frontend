import React from 'react'
import NoticeItem from "../components1/NoticeItem.jsx";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axios.js"
import { useNavigate } from 'react-router-dom';

const LandingNotice = () => {
  const limit = 3; //가져올 카드 수
  const [notices, setNotices] = useState([]);

  useEffect(() => { //컴포넌트가 어마운트 될 때 한 번만 수행하도록 함
    fetchNotices(limit);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const fetchNotices = async(limit) =>{
    const params = {
      limit
    }
    try{
      const response = await axiosInstance.get('/notices', {params})
      setNotices(response.data.notices);      
    } catch(err){
      console.error(err);
    }
  }
  const navigate = useNavigate();
  const moveTo=()=>{
    navigate('/notice')
  }

  return (
    <div className="px-10 sm:px-4 lg:px-40 -bg-white">
      {/** notice 목록 */}
      <div className="">
        <div className="items-center justify-between py-7 px-10 w-full rounded-md -bg--default-white flex mb-3 shadow-xl hover:-shadow--medium hover:">
          <h3 className="text-2xl font-medium">
            This is Title
          </h3>
          <h4 className="text-xl">
            0000-00-00
          </h4>
        </div>
        {notices.map(notice=>
          <NoticeItem
            notice={notice} key={notice._id}
            propAlignSelf="stretch"
            propFlex="unset"
            rectangle14="/rectangle-14.svg"
          />
        )}
      </div>

      <div className="mt-7 justify-center flex">
        <button
            className="-bg--color-silver text-white px-6 py-4 rounded-md hover:-bg--medium duration-200 text-2xl font-semibold"
            onClick={moveTo}
          >
          More
        </button>
      </div>
    </div>
  );
}

export default LandingNotice