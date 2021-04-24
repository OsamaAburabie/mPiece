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

      <div className="grid md:grid-cols-4">
        <main className="px-16 py-6 md:col-span-4 ">
          <p className="w-full  text-center text-5xl text-secondary ">
            خدماتنا
          </p>

          <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-4">
            {/* cards go here */}
            <div className="card">
              <img
                src="https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg"
                alt="stew"
                className="h-32 sm:h-48 w-full object-cover"
              />
              <div className="m-4">
                <span className="font-bold">5 Bean Chili Stew</span>
                <span className="block text-gray-500 text-sm">
                  Recipe by Mario
                </span>
              </div>
            </div>
            <div className="card">
              <img
                src="https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg"
                alt="stew"
                className="h-32 sm:h-48 w-full object-cover"
              />
              <div className="m-4">
                <span className="font-bold">5 Bean Chili Stew</span>
                <span className="block text-gray-500 text-sm">
                  Recipe by Mario
                </span>
              </div>
            </div>
            <div className="card">
              <img
                src="https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg"
                alt="stew"
                className="h-32 sm:h-48 w-full object-cover"
              />
              <div className="m-4">
                <span className="font-bold">5 Bean Chili Stew</span>
                <span className="block text-gray-500 text-sm">
                  Recipe by Mario
                </span>
              </div>
            </div>
            <div className="card">
              <img
                src="https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg"
                alt="stew"
                className="h-32 sm:h-48 w-full object-cover"
              />
              <div className="m-4">
                <span className="font-bold">5 Bean Chili Stew</span>
                <span className="block text-gray-500 text-sm">
                  Recipe by Mario
                </span>
              </div>
            </div>
            <div className="card">
              <img
                src="https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg"
                alt="stew"
                className="h-32 sm:h-48 w-full object-cover"
              />
              <div className="m-4">
                <span className="font-bold">5 Bean Chili Stew</span>
                <span className="block text-gray-500 text-sm">
                  Recipe by Mario
                </span>
              </div>
            </div>
            <div className="card">
              <img
                src="https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg"
                alt="stew"
                className="h-32 sm:h-48 w-full object-cover"
              />
              <div className="m-4">
                <span className="font-bold">5 Bean Chili Stew</span>
                <span className="block text-gray-500 text-sm">
                  Recipe by Mario
                </span>
              </div>
            </div>
            <div className="card">
              <img
                src="https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg"
                alt="stew"
                className="h-32 sm:h-48 w-full object-cover"
              />
              <div className="m-4">
                <span className="font-bold">5 Bean Chili Stew</span>
                <span className="block text-gray-500 text-sm">
                  Recipe by Mario
                </span>
              </div>
            </div>
            <div className="card">
              <img
                src="https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg"
                alt="stew"
                className="h-32 sm:h-48 w-full object-cover"
              />
              <div className="m-4">
                <span className="font-bold">5 Bean Chili Stew</span>
                <span className="block text-gray-500 text-sm">
                  Recipe by Mario
                </span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
