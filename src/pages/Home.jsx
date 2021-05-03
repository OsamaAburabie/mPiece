import axios from "axios";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CheckIcon from "@material-ui/icons/Check";
function Home() {
  const [category, setCategory] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/getallCategories")
      .then((res) => setCategory(res.data));
  }, []);
  return (
    <>
      <section
        style={{
          backgroundImage: `url("https://www.hrzone.com/sites/default/files/styles/inline_banner/public/istock-1153675389.jpg?itok=CO0fYOt6")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="w-full flex justify-center items-center h-96 bg-gray-400 
      
      "
      >
        <NavLink
          to="/services"
          className="bg-btn text-btn p-3 rounded-lg text-2xl"
        >
          إحجز عامل الان
        </NavLink>
      </section>

      <div className="grid md:grid-cols-4">
        <main className="px-6 py-7 md:col-span-4 ">
          <p className=" w-full text-center text-4xl text-secondary ">
            خدمات رائجة
          </p>

          <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4">
            {/* cards go here */}
            {category &&
              category.slice(0, 4).map((el) => (
                <NavLink key={el._id} to={`/services/${el._id}`}>
                  <div className="card">
                    <img
                      src={el.picture}
                      alt="stew"
                      className="h-32 sm:h-48 w-full object-cover"
                    />
                    <div dir="rtl" className="m-4">
                      <span className="font-bold">{el.name}</span>
                      <span className="block  text-sm">
                        <i className="fas fa-tags ml-1"></i>
                        معدل الأجر ({el.min}-{el.high}) دينار/س
                      </span>
                    </div>
                  </div>
                </NavLink>
              ))}
          </div>
        </main>
      </div>
      <div className="w-full  bg-secondary grid grid-cols-1 md:grid-cols-2 my-4">
        <div className="col-span-1 md:pl-6">
          <img
            src="https://assets.avenueone.sg/wp-content/uploads/2018/01/common-travel-scams-helpful-local.jpg"
            alt="smiling man"
          />
        </div>
        <div
          dir="rtl"
          className="md:p-24 p-2 text-secondary flex items-center flex-wrap"
        >
          <h6 className="text-3xl font-bold">سهلنا عليك المهمة</h6>
          <p className="text-sm mb-5  ">
            مع <span className=" text-accent font-bold text-lg">مهام</span>{" "}
            ريحناك من تعب انك تلاقي عامل عشان ينجزلك مهامك الي بحتحتاجها كل الي
            عليك انك تدور في الخدمات وتلاقي احسن عامل وتتواصل معاه.
          </p>
          <div>
            <p className="mb-3 text-lg">
              <CheckIcon className="text-green-500 ml-1" />
              اختار العامل حسب تقييمه وحسب مهارته والسعر الي بيقدمه
            </p>
            <p className="mb-3 text-lg">
              <CheckIcon className="text-green-500 ml-1" />
              شوف جدول العامل وشو بيعمل حاليا وكم بده عشان يوصلك
            </p>
            <p className="mb-3 text-lg">
              <CheckIcon className="text-green-500 ml-1" />
              دردش مع العامل من خلال التطبيق
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
