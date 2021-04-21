import React, { useEffect, useState } from "react";
import HomeCard from "../components/HomeCard";
import axios from "axios";
function Services() {
  const [category, setCategory] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/getallCategories")
      .then((res) => setCategory(res.data));
  }, []);
  return (
    <div className=" h-screen  ">
      <div className="grid grid-cols-2 md:grid-cols-3   place-items ">
        {/* <div className=" flex  justify-center flex-wrap"> */}
        {/* <div className=" gird h-full w-full grid-cols-3 grid-rows-2"> */}
        {category &&
          category.map((el) => (
            <HomeCard
              key={el._id}
              title={el.name}
              img={el.picture}
              min={el.min}
              high={el.high}
              link={el._id}
            />
          ))}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Services;
