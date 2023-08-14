import React from "react";

export default function StaffProfile() {
  return (
    <div className="w-full sm:w-[250px] h-[380px] bg-green-300 border-2 flex flex-col justify-center items-center border-blue-200 rounded-md shadow-md px-4 py-6 cursor-pointer">
      <img src={"images/staffPhoto.png"} alt="image" width={220} height={220} />
      <h2 className="text-[18px] text-center font-medium mt-4 pt-4">
        John Wimbly
      </h2>
      <p className="text-[#000000] text-[13px] font-bold text-center pt-4">
        General Manager
      </p>
    </div>
  );
}
