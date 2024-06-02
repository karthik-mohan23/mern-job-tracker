import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="hero min-h-[90vh] bg-base-200">
      <div className="hero-content flex-col  lg:flex-row-reverse">
        <img
          src="https://uploads-ssl.webflow.com/635c591378332f38be25d45f/63dbe3edc05353368be53772_1201.png"
          className="max-w-xl w-[95%] rounded-lg shadow-2xl mb-4 lg:mb-0"
        />
        <div className="max-w-xl w-[90%]">
          <h1 className="text-5xl font-bold">Job Tracking App.</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex gap-3">
            <Link to="/register" className="btn btn-primary">
              Register
            </Link>
            <Link to="/login" className="btn btn-primary">
              Login / Demo user
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Landing;
