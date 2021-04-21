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
import AdComments from "../components/AdComments";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import Popup from "../components/Popup";

function SingleAd() {
  const { adId, taskerId } = useParams();
  const [ad, setAd] = useState();
  const [tasker, setTasker] = useState();
  // const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState("");
  const { myToken, isLoggedIn, role, connections, pendingCon } = useContext(
    AuthContext
  );
  const [notFound, setNotFound] = useState(false);
  const [show, setShow] = useState(true);
  const [popOpen, setPopOpen] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/users/getSingleAd/${adId}`)
      .then((res) => setAd(res.data))
      .catch(() => setNotFound(true));
    axios
      .get(`http://localhost:5000/users/taskerInfo/${taskerId}`)
      .then((res) => {
        setTasker(res.data.tasker);
      })
      .catch((err) => setNotFound(true));
  }, []);

  const book = () => {
    if (!isLoggedIn) {
      setError(true);
    } else {
      axios
        .post(`http://localhost:5000/users/addConnection/${taskerId}`, null, {
          headers: { "x-auth-token": myToken },
        })
        .then((res) => {
          setSuccess(res.data.msg);
          setShow(false);
        })
        .catch(
          (err) => err.response.data.msg && setSuccess(err.response.data.msg)
        );
    }
  };

  //this is for the popup
  const handlePopup = () => {
    if (!isLoggedIn) {
      setError(true);
    } else {
      setPopOpen(true);
    }
  };
  const handleDisable = () => {
    setShow(false);
  };

  const handleSuccess = () => {
    setSuccess(
      "تم ارسال طلبك بنجاح .. الرحاء انتظار موافقه العامل في اقرب وقت"
    );
  };

  const existing = (id) => {
    if (!connections) return false;
    return connections.some((el) => id === el.uid);
  };
  const pending = (id) => {
    if (!pendingCon) return false;
    return pendingCon.some((el) => id === el.uid);
  };

  if (notFound) {
    return <NotFound />;
  }

  if (ad && tasker) {
    return (
      <div className="min-h-screen grid grid-cols-1 md:grid-cols-12  gap-4 p-5">
        <div className=" md:col-span-4 lg:col-span-3">
          <div>
            <div className="w-full flex justify-center">
              <div className="w-full md:max-w-full md:block  ">
                <div
                  dir="rtl"
                  className="con__card max-h-full md:block bg-secondary  rounded-xl shadow-md"
                >
                  <div className="con__card__upper">
                    <img
                      src={tasker?.img}
                      alt="anything"
                      className="w-20 h-20"
                    />
                  </div>
                  <span className="text-center block text-secondary">
                    {tasker?.name}
                  </span>
                  <div className="w-full ">
                    <Rate
                      rating={tasker?.rating?.sum}
                      numOfVotes={tasker?.rating?.numOfVotes}
                    />
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
                      عضو :
                      <Moment locale="ar" fromNow>
                        {tasker?.createdAt}
                      </Moment>
                    </p>
                  </div>

                  <div>
                    {role !== "tasker" &&
                      !existing(taskerId) &&
                      !pending(taskerId) && (
                        <button
                          // onClick={() => book()}
                          onClick={handlePopup}
                          disabled={!show}
                          className="book__btn bg-btn text-btn rounded-sm"
                        >
                          ارسال طلب
                        </button>
                      )}

                    {pending(taskerId) && (
                      <button
                        onClick={() => book()}
                        disabled={true}
                        className="book__btn bg-btn text-btn rounded-sm"
                      >
                        تم ارسال طلبك
                      </button>
                    )}
                    {existing(taskerId) && (
                      <NavLink
                        to={`/tasker/${taskerId}`}
                        className="book__btn block bg-btn text-btn rounded-sm"
                      >
                        تواصل
                      </NavLink>
                    )}
                  </div>
                  {error && (
                    <p className="text-red-600 p-1">
                      يجب ان تكون مسجل لكي تستطيع ان ترسل طلب
                    </p>
                  )}
                  {success && <p className="text-red-600 p-1">{success}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-8  lg:col-span-9  gap-3  ">
          <SingleAdCard
            title={ad?.title}
            img={ad?.img}
            price={ad?.price}
            location={ad?.location}
            desc={ad?.desc}
            taskerName={ad?.taskerInfo.name}
            avatar="https://scontent.famm10-1.fna.fbcdn.net/v/t31.18172-8/23632407_1481745538541088_4407289845242811931_o.jpg?_nc_cat=106&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=f5pa2FLFEAsAX8jY3yj&_nc_ht=scontent.famm10-1.fna&oh=2675a517602d9067dae43697e59d5af8&oe=609FE6F7"
          />
          <AdComments />
        </div>

        {popOpen && (
          <Popup
            disable={handleDisable}
            success={handleSuccess}
            taskerId={taskerId}
          />
        )}
      </div>
    );
  } else {
    return <div className=" bg-primary h-screen"></div>;
  }
}

export default SingleAd;
