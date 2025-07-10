import { useState } from "react";

const Login = ({handleLogin}) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // console.log("form submitted")

    handleLogin(form.email, form.password)

    setForm({
      email: "",
      password: "",
    });

  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">

      
      <div className="border-2 rounded-xl border-emerald-600 px-5 py-7 sm:px-20 sm:py-11  flex flex-col items-center justify-center">
        <h1 className=" font-bold text-2xl text-emerald-600 p-3">Login Form</h1>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            name="email"
            className="outline-none bg-transparent border-2 border-emerald-600  sm:text-lg py-2 px-6 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            required
            name="password"
            className="outline-none bg-transparent border-2 border-emerald-600  sm:text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
            value={form.password}
            onChange={handleChange}
          />
          <button className="mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-3/4 sm:w-full rounded-full placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
