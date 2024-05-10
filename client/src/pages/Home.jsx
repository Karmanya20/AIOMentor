import { features } from "../lib/data";
const Home = () => {
  return(
    <div className="flex flex-col justify-between items-center gap-[1rem] h-[80rem] sm:h-[46rem] w-screen text-start sm:text-center leading-[58.09px] px-3 pt-4">
      <h1 className="text-4xl">THE ALL IN ONE MENTORSHIP PLATFORM</h1>
      <p className="text-3xl">Build long-term professional relationships with mentoring!</p>
      <p className="text-xl">With a centralized dashboard, easy scheduling, a collection of tools and games, progress tracking, and more, AIO Mentoring is an easy all-in-one solution to provide mentors and mentees with a platform for all their mentoring and studying needs.</p>
      <div className="flex flex-col gap-2 w-full sm:w-1/2">
        <h1 className="text-3xl">SIGN UP TODAY!</h1>
        <div className="flex gap-1">
          <input className="px-3 text-gray-500 placeholder:text-gray-500 focus:outline-none w-3/4 border-2 border-gray-950 rounded-sm" placeholder="Your email"></input>
          <button className="w-1/4 h-full bg-slate-700 rounded-sm text-gray-50">SIGN UP</button>
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
