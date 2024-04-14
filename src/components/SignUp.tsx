export default function SignUp() {
  return (
    <main className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col shadow-2xl bg-white rounded-3xl w-[40vw] items-center py-5 gap-4">
        <h1 className="text-3xl font-bold mb-5">Register</h1>
        <input
          type="text"
          className=" rounded-lg bg-slate-200 h-8 w-80 px-5 placeholder:text-black"
          placeholder="First Name"
        />
        <input
          type="text"
          className=" rounded-lg bg-slate-200 h-8 w-80 px-5 placeholder:text-black"
          placeholder="Last Name"
        />
        <input
          type="email"
          className=" rounded-lg bg-slate-200 h-8 w-80 px-5 placeholder:text-black"
          placeholder="Email"
        />
        <input
          type="password"
          className=" rounded-lg bg-slate-200 h-8 w-80 px-5 placeholder:text-black"
          placeholder="Password"
        />
        <button className="w-40 mt-4 mb-6 rounded-xl bg-black text-white font-semibold py-1">
          Register
        </button>
      </div>
    </main>
  );
}
