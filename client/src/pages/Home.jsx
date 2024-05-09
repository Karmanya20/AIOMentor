const Home = () => {
  return(
    <div className="flex flex-col justify-evenly items-center h-screen w-screen text-center leading-[58.09px]">
      <h1 className="text-4xl">THE ALL IN ONE MENTORSHIP PLATFORM</h1>
      <p className="text-3xl">Build long-term professional relationships with mentoring!</p>
      <p className="text-xl">With a centralized dashboard, easy scheduling, a collection of tools and games, progress tracking, and more, AIO Mentoring is an easy all-in-one solution to provide mentors and mentees with a platform for all their mentoring and studying needs.</p>
      <div className="flex flex-col gap-2 w-1/2">
        <h1 className="text-3xl">SIGN UP TODAY!</h1>
        <div className="flex gap-1">
          <input className="px-3 placeholder:text-gray-500 focus:outline-none w-3/4 border-2 border-gray-950 rounded-sm" placeholder="Your email"></input>
          <button className="w-1/4 h-full bg-gray-950 text-gray-50">SIGN UP</button>
        </div>
      </div>
    </div>
  ) 
};

export default Home;
