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
    <div className="h-screen flex  justify-center flex-wrap ">
      {category &&
        category.map((el) => (
          <HomeCard
            key={el._id}
            title={el.name}
            img={el.picture}
            min="15"
            high="40"
            link={el._id}
          />
        ))}
    </div>
  );
}

export default Services;
