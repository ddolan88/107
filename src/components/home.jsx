import {Link} from "react-router-dom";

const Home = () => {
    return <div className="home-page">
        <h1>Fresh food always</h1>
        <Link to="/catalog" className="btn btn-primary">Check out our catalog</Link>
        </div>
};


export default Home;