import FacilityBox from "../components1/FacilityBox.jsx";

const FacilitiesMain = () => {
  return (
    <div className="w-full h-full"> {/* 전체 화면을 채우도록 수정 */}
      <div className="max-w-screen-2xl mx-auto p-4"> {/* 중간에 정렬 */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4">
          <div className="p-2.5">
            <FacilityBox />
          </div>
          <div className="p-2.5">
            <FacilityBox />
          </div>
          <div className="p-2.5">
            <FacilityBox />
          </div>
          <div className="p-2.5">
            <FacilityBox />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesMain;

