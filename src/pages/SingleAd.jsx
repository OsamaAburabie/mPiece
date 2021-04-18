import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import SingleAdCard from "../components/SingleAdCard";
import "./SingleAd.css";
import Rate from "../components/Rate";
import NotFound from "./NotFound";
import Moment from "react-moment";
import "moment/locale/ar";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import WorkOutlineIcon from "@material-ui/icons/WorkOutline";
import AuthContext from "../contexts/AuthContext";
function SingleAd() {
  const { adId, taskerId } = useParams();
  const [ad, setAd] = useState();
  const [tasker, setTasker] = useState();
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState("");
  const { myToken, isLoggedIn } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/getSingleAd/${adId}`)
      .then((res) => setAd(res.data));
    axios
      .get(`http://localhost:5000/users/taskerInfo/${taskerId}`)
      .then((res) => {
        setTasker(res.data.tasker);
        setLoading(false);
      })
      .catch((err) => setLoading(false));
  }, []);

  const book = () => {
    if (!isLoggedIn) {
      setError(true);
    } else {
      axios
        .post(`http://localhost:5000/users/addConnection/${taskerId}`, null, {
          headers: { "x-auth-token": myToken },
        })
        .then((res) => setSuccess(res.data.msg))
        .catch(
          (err) => err.response.data.msg && setSuccess(err.response.data.msg)
        );
    }
  };

  if (isLoading) return <div className=" bg-primary h-screen"></div>;

  if (ad && tasker) {
    return (
      <div dir="rtl" className="w-screen h-screen  flex p-3 flex-grow-0">
        {/* <div className="  w-full md:w-9/12 h-0 ">
          <SingleAdCard
            title={ad?.title}
            price={ad?.price}
            location={ad?.location}
            desc={ad?.desc}
            taskerName={ad?.taskerInfo.name}
            avatar="https://scontent.famm10-1.fna.fbcdn.net/v/t31.18172-8/23632407_1481745538541088_4407289845242811931_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=f5pa2FLFEAsAX8jY3yj&_nc_ht=scontent.famm10-1.fna&oh=2675a517602d9067dae43697e59d5af8&oe=609FE6F7"
          />
        </div> */}
        <div className="w-full md:w-9/12 h-0">
          <SingleAdCard
            title={ad?.title}
            price={ad?.price}
            location={ad?.location}
            desc={ad?.desc}
            taskerName={ad?.taskerInfo.name}
            avatar="https://scontent.famm10-1.fna.fbcdn.net/v/t31.18172-8/23632407_1481745538541088_4407289845242811931_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=f5pa2FLFEAsAX8jY3yj&_nc_ht=scontent.famm10-1.fna&oh=2675a517602d9067dae43697e59d5af8&oe=609FE6F7"
          />
          <div className="w-full bg-secondary min-h-0 max-h-screen mt-3 rounded-xl shadow-md">
            <p className="text-md text-secondary p-10 text-center">
              لايوجد تعليقات
            </p>
          </div>
        </div>
        {/* ============================================================================================================ */}
        <div className="md:w-1/4 hidden md:block   mr-3 ">
          <div
            dir="rtl"
            className="con__card max-h-full md:block bg-secondary  rounded-xl shadow-md"
          >
            <div className="con__card__upper">
              <img
                src="https://scontent.famm10-1.fna.fbcdn.net/v/t31.18172-8/23632407_1481745538541088_4407289845242811931_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=f5pa2FLFEAsAX8jY3yj&_nc_ht=scontent.famm10-1.fna&oh=2675a517602d9067dae43697e59d5af8&oe=609FE6F7"
                alt="anything"
                className="w-20 h-20"
              />
            </div>
            <span className="text-center block text-secondary">
              {tasker?.name}
            </span>
            <div className="w-full ">
              <Rate rating={tasker?.rating} />
            </div>
            <div className="w-full mt-2 p-3 ">
              <p className="text-md text-secondary">
                <WorkOutlineIcon className="ml-2" />
                المهام المنجزة : {tasker?.finishedTasks}
              </p>

              <p className="text-md text-secondary">
                <AccessTimeIcon className="ml-2" />
                اَخر ظهور :
                <Moment locale="ar" fromNow>
                  {tasker?.lastLogin}
                </Moment>
              </p>
              <p className="text-md text-secondary">
                <CheckCircleOutlineIcon className="ml-2" />
                عضو مسجل :
                <Moment locale="ar" fromNow>
                  {tasker?.createdAt}
                </Moment>
              </p>
            </div>
            <button
              onClick={() => book()}
              className="w-full bg-btn p-2 text-btn rounded-sm  "
            >
              إحجز
            </button>
            {error && (
              <p className="text-red-600 p-1">
                يجب ان تكون مسجل لكي تستطيع ان تحجز
              </p>
            )}
            {success && <p className="text-red-600 p-1">{success}</p>}
          </div>
        </div>
      </div>
    );
  } else {
    return <NotFound />;
  }
}

export default SingleAd;
