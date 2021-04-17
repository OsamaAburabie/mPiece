import { Formik } from "formik";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";
import HomeCard from "../components/HomeCard";
function Home() {
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
      <p className="w-full  text-center py-8 text-4xl text-secondary ">
        خدمات رائجة في منطقتك
      </p>
      {/* <div class="flex flex-wrap justify-center p-8"> */}
      {/* <div class="grid grid-cols-1 md:grid-cols-4 place-items-center gap-4 p-8"> */}
      <div className="flex items-center justify-center flex-wrap  ">
        <>
          <HomeCard />

          <HomeCard />

          <HomeCard />

          <HomeCard />

          <HomeCard />

          <HomeCard />
        </>
      </div>
    </>
  );
}

export default Home;
