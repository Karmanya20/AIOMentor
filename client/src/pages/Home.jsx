import { features } from "../lib/data";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie'
import { useEffect } from "react";
const Home = () => {
  useEffect(() => {
    const access_token = Cookies.get('access_token');
    const refresh_token = Cookies.get('refresh_token');

    console.log(access_token);
    console.log(refresh_token);

    return () => {
      //used for any socket connections or timers
    }
  }, [])
  
  const navigate = useNavigate();
  return(
    <div className="flex flex-col justify-between items-center gap-[2rem] h-[80rem] sm:h-[46rem] w-screen text-start sm:text-center leading-[58.09px] px-3 pt-4">
      <h1 className="text-4xl">THE ALL IN ONE MENTORSHIP PLATFORM</h1>
      <p className="text-3xl">Build long-term professional relationships with mentoring!</p>
      <p className="text-xl">With a centralized dashboard, easy scheduling, a collection of tools and games, progress tracking, and more, AIO Mentoring is an easy all-in-one solution to provide mentors and mentees with a platform for all their mentoring and studying needs.</p>
      <div className="flex flex-col gap-3 w-full sm:w-1/2">
        <h1 className="text-3xl">SIGN UP TODAY!</h1>
        <div className="flex gap-1">
          <button className="w-full h-[4rem] bg-slate-700 rounded-sm text-gray-50 text-xl" onClick={() => {navigate("/sign-up")}}>Get Started</button>
        </div>
      </div>
      <div className="w-full bg-slate-100 text-gray-500 rounded-t-xl rounded-b-xl flex flex-col justify-center items-center gap-[1rem] py-2">
        <h1 className="text-3xl text-gray-950">Features :</h1>
        <ol className="text-start w-3/4 leading-[29px]">
          {
            features.map((feature)=> {
              return <li><span className="font-bold text-gray-950 underline">{feature.title}</span> - <span className="italic">{feature.description}</span></li>
            })
          }
        </ol>
      </div>
    </div>
  ) 
};

export default Home;
