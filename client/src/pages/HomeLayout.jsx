import { Link, Outlet } from "react-router-dom";

function HomeLayout() {
  return (
    <section>
      <nav className="navbar bg-base-100">
        <div className="container mx-auto">
          <Link to="/" className="btn btn-ghost text-xl">
            <img
              src="https://www.pngrepo.com/png/288421/512/job-search.png"
              alt="logo"
              className="w-8"
            />
            <h3 className="text-purple-500 font-bold">Jobify</h3>
          </Link>
        </div>
      </nav>
      <Outlet />
    </section>
  );
}
export default HomeLayout;
