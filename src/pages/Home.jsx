import axios from "axios";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
function Home() {
  const [category, setCategory] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/getallCategories")
      .then((res) => setCategory(res.data));
  }, []);
  return (
    <>
      <section className="w-full flex justify-center items-center h-96 bg-gray-400 ">
        <div className="w-full  md:w-3/5 h-78 bg-secondary rounded-lg ">
          <Formik
            initialValues={{ input: "" }}
            onSubmit={async (values) => {
              await new Promise((resolve) => setTimeout(resolve, 500));
              alert(JSON.stringify(values, null, 2));
            }}
            validationSchema={Yup.object().shape({
              input: Yup.string().required("Required"),
            })}
          >
            {(props) => {
              const { values, handleChange, handleSubmit } = props;
              return (
                <div dir="rtl">
                  <form
                    dir="rtl"
                    className="flex flex-wrap p-3 justify-center "
                    onSubmit={handleSubmit}
                  >
                    <label className="w-full block text-center p-4 text-3xl text-secondary mb-10">
                      بشو بنقدر نساعدك؟
                    </label>
                    <input
                      id="input"
                      placeholder="اريد مساعدة في.."
                      type="text"
                      value={values.input}
                      onChange={handleChange}
                      className="w-10/12 border  p-2 rounded-md bg-secondary outline-none"
                    />

                    <button
                      className="text-secondary bg-primary px-3 py-2 rounded-md text-sm font-medium mr-2 border  "
                      type="submit"
                    >
                      بحث
                    </button>
                  </form>

                  {/* ==================================================================================== */}
                  {/* <label className="mx-7 ">خدمات رائجة</label> */}
                  <div
                    dir="rtl"
                    className="flex space-x-3 mx-4 my-4 sm:mx-4 md:mx-6"
                  >
                    <NavLink
                      to="/Team"
                      className="bg-btn text-btn px-3 py-2 rounded-md text-sm font-medium ml-3"
                    >
                      التنظيف
                    </NavLink>
                    <NavLink
                      to="/Team"
                      className="bg-btn text-btn px-3 py-2 rounded-md text-sm font-medium "
                    >
                      المنزل
                    </NavLink>
                    <NavLink
                      to="/Team"
                      className="bg-btn text-btn px-3 py-2 rounded-md text-sm font-medium "
                    >
                      النقل
                    </NavLink>
                    <NavLink
                      to="/Team"
                      className="bg-btn text-btn px-3 py-2 rounded-md text-sm font-medium "
                    >
                      النجارة
                    </NavLink>
                    <NavLink
                      to="/Team"
                      className="bg-btn text-btn px-3 py-2 rounded-md text-sm font-medium "
                    >
                      الحدادة
                    </NavLink>
                  </div>
                </div>
              );
            }}
          </Formik>
        </div>
      </section>

      <div className="grid md:grid-cols-4">
        <main className="px-16 py-6 md:col-span-4 ">
          <p className="w-full  text-center text-5xl text-secondary ">
            خدمات رائجة
          </p>

          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4">
            {/* cards go here */}
            {category &&
              category.slice(0, 4).map((el) => (
                <NavLink to={`/services/${el._id}`}>
                  <div key={el._id} className="card">
                    <img
                      src={el.picture}
                      alt="stew"
                      className="h-32 sm:h-48 w-full object-cover"
                    />
                    <div dir="rtl" className="m-4">
                      <span className="font-bold">{el.name}</span>
                      <span className="block  text-sm">
                        <i className="fas fa-tags ml-1"></i>
                        معدل الأجر ({el.min}-{el.high}) دينار
                      </span>
                    </div>
                  </div>
                </NavLink>
              ))}
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
