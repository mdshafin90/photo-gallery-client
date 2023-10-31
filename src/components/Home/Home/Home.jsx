import { Helmet } from "react-helmet-async";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Photo Gallery | Home</title>
            </Helmet>
            <h1>This is home component</h1>
        </div>
    );
};

export default Home;