import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const SignUp = () => {
  const [cookies, setCookie] = useCookies();
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(null);

      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const response = await res.json();
      setLoading(false);

      if (response.success === false) {
        return setError(response.message);
      }
      else {
        console.log(response.accessToken);
        console.log(response.refreshToken);
        setCookie("access_token", response.accessToken, {
          path: "/",
          maxAge: 3600, // Expires after 1hr
          sameSite: "strict"
        });
        setCookie("refresh_token", response.refreshToken, {
          path: "/",
          maxAge: 7200, // Expires after 2hr
          sameSite: "strict"
        });
        navigate("/dashboard/main");
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-4">Sign Up</h1>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          id="username"
          required
          className="bg-slate-100 p-3 rounded-lg focus:outline-none"
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Email"
          id="email"
          required
          className="bg-slate-100 p-3 rounded-lg focus:outline-none"
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Phone No."
          id="phone"
          required
          className="bg-slate-100 p-3 rounded-lg focus:outline-none"
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Password"
          id="password"
          required
          className="bg-slate-100 p-3 rounded-lg focus:outline-none"
          onChange={handleChange}
        />

        <textarea
          id="goal"
          placeholder="Goal"
          className="bg-slate-100 p-3 rounded-lg focus:outline-none"
          onChange={handleChange}
        ></textarea>

        <h3 className="text-xl font-semibold">Select Account Type: </h3>

        <div className="flex gap-4 justify-start items-center">
          <label className="flex gap-1">
            <input
              type="radio"
              name="accountType"
              value="mentor"
              onChange={(e) =>
                setFormData({ ...formData, accountType: e.target.value })
              }
            />
            Mentor
          </label>

          <label className="flex gap-1">
            <input
              type="radio"
              name="accountType"
              value="mentee"
              onChange={(e) =>
                setFormData({ ...formData, accountType: e.target.value })
              }
            />
            Mentee
          </label>
        </div>

        <button
          disabled={loading}
          type="submit"
          className="bg-slate-700 p-3 rounded-lg text-white uppercase hover:opacity-90 disabled:opacity-70"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>

      <div className="flex gap-2 mt-5">
        <p>Have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-800 hover:underline">Sign In</span>
        </Link>
      </div>
      {error && (
        <div className="bg-red-300 p-3 rounded-lg mt-5 text-red-500">
          {error}
        </div>
      )}
    </div>
  );
};

export default SignUp;
