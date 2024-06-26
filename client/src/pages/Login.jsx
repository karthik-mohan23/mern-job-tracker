import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="hero min-h-[90vh] bg-base-200">
      <div className="hero-content gap-14 lg:gap-4 flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">
            Login to your existing account.
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-[90%] lg:w-[40%] shadow-2xl bg-base-100">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label mt-3 justify-start">
                Not a member yet?
                <Link to="/register" className="label-text-alt link link-hover">
                  register
                </Link>
              </label>
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary">Login</button>
            </div>
            <div className="form-control mt-3">
              <button className="btn btn-primary">Explore the app</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
