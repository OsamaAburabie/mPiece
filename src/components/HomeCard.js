import React from "react";

function HomeCard() {
  return (
    <div
      dir="rtl"
      className="bg-gray-100  w-96 h-64 m-4 rounded-md shadow-md "
      style={{
        backgroundImage:
          'url("https://www.mymove.com/wp-content/uploads/2019/12/satellite-dish.jpg")',
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="flex flex-row items-end h-full w-full ">
        <div className="flex flex-col w-full pb-3 pt-10 px-3 bg-gradient-to-t from-black text-gray-200">
          <h3 className="text-base font-bold leading-5 uppercase">
            تركيب ساتالايت
          </h3>
          <div className="inline-flex items-center">
            <span className="capitalize font-base text-xs my-1 m-1">
              معدل الأجر 30$-40$
            </span>
            <i class="fas fa-tags"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
