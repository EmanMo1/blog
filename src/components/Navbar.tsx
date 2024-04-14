export default function Navbar() {
  return (
    <nav className="flex items-center justify-between  w-full shadow-2xl bg-white py-4 px-20">
      <div className=" font-semibold">
        <h1>Logo</h1>
      </div>
      <ul className="flex gap-7 font-semibold">
        <li>Home</li>
        <li>Blog</li>
        <li>Priceing</li>
        <li>About us</li>
      </ul>
      <div className="flex gap-3 font-semibold">
        <button className="rounded-md flex items-center justify-center px-3 text-center pt-1 pb-2">
          Sign in
        </button>
        <button className="rounded-md bg-black text-white flex items-center justify-center px-3 text-center pt-1 pb-2">
          Sign up
        </button>
      </div>
    </nav>
  );
}
