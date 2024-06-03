import { Link, Outlet } from "react-router-dom";
import sidebarLinks from "../utils/links";
import { TfiAngleDoubleRight } from "react-icons/tfi";

function DashboardLayout() {
  return (
    <div>
      <section className="max-w-7xl mx-auto">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <Outlet />
            <label
              htmlFor="my-drawer-2"
              className="btn  drawer-button lg:hidden">
              <TfiAngleDoubleRight />
            </label>
          </div>
          <div className="drawer-side">
            <label
              htmlFor="my-drawer-2"
              aria-label="close sidebar"
              className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content ">
              {/* Sidebar content here */}
              {sidebarLinks.map(({ text, path, icon }) => (
                <li key={text}>
                  <Link to={path} className="text-lg">
                    <span>{icon}</span>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
export default DashboardLayout;
