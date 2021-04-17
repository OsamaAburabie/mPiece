function AdsCard({ title, price, location, avatar, name }) {
  return (
    <div className="flex m-4 ">
      <div
        dir="rtl"
        className="h-full text-left px-4 py-4 bg-secondary shadow-md rounded-md w-full justify-end  "
      >
        <a to="jobdet" className="flex items-center flex-wrap">
          <img
            alt="testimonial"
            className="inline-block object-cover object-center w-16 h-16 mb-4 bg-gray-100 rounded"
            src="https://dummyimage.com/302x302/94a3b8/ffffff"
          />
          <span className="flex flex-col items-start pr-4">
            <span className="font-bold text-lg text-secondary -mt-4">
              {title}
            </span>
            <span className="text-sm text-gray-500 uppercase font-bold">
              الموقع: {location}
            </span>
            <span className="text-sm text-gray-500 uppercase font-bold">
              الأجرة/س: {price} دينار
            </span>
          </span>
        </a>
        <div className="flex items-center justify-between flex-wrap  ">
          <a
            to="jobdet"
            className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0 px-2 py-1 border-2 border-indigo-500 rounded-full text-sm"
          >
            إحجز
          </a>
          <span className="text-gray-800 leading-none text-sm pr-3 py-1 px-2 bg-yellow-500 rounded-full">
            New
          </span>
        </div>
      </div>
    </div>
  );
}

export default AdsCard;
