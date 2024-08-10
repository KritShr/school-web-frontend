import React from "react";

const FacilityBox = () => {
  const moveTo = () =>{
    //To do: facility detail로 이동 
  }
  return (
    <div className="p-10 m-10 bg-white rounded-xl shadow-2xl">
      <h1 className="text-3xl font-semibold text-center">
        Title
      </h1>

      {/* 이미지 추가: Admin Login 텍스트 바로 아래에 배치 */}
      <div className="flex justify-center mt-4">
        <div className="relative w-96 h-72"> {/* 4:3 비율 (2배 크기) */}
          <img 
            src="/image-1@2x.png"  // public 폴더의 이미지 파일 경로
            alt="Admin" 
            className="absolute inset-0 w-full h-full object-cover" 
          />
        </div>
      </div>

      <div className="mt-6 flex justify-center"> {/* 부모 요소에 중앙 정렬 적용 */}
        <button className="-bg--color-silver test-2xl font-bold w-96 bg-black text-white px-4 py-2 items-center rounded-md hover:-bg--medium duration-200 text-base" onClick={moveTo}>
          more
        </button>
      </div>
    </div>
  );
};

export default FacilityBox;
