import React from "react";

function HomeCard() {
  return (
    <div
      dir="rtl"
      className="bg-secondary h-44 w-full m-3 overflow-hidden sm:m-3  md:m-3  lg:m-3 md:w-1/5  lg:w-1/5 xl:m-6  xl:w-1/5 flex flex-wrap  "
    >
      <img
        className="h-5/6 w-full object-cover   "
        src="https://scontent.famm7-1.fna.fbcdn.net/v/t31.18172-8/23632407_1481745538541088_4407289845242811931_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=dSLcRgMjUS0AX8gZHI1&_nc_ht=scontent.famm7-1.fna&oh=abc9062c2a58be0deda9343146e25d58&oe=60940977"
        alt="Man looking at item at a store"
      />
      <span className="w-full text-center text-secondary ">تصليح ستالايت</span>
    </div>
  );
}

export default HomeCard;
