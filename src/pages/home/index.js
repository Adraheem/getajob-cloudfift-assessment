import Categories from "./categories";
import Companies from "./companies";
import CustomersSaying from "./customers-saying";
import GetStarted from "./get-started";
import Hero from "./hero";
import HowItWorks from "./how-it-works";
import RecommendedJobs from "./recommended-jobs";

const Home = () => {
  return (
    <div>
      <Hero />
      <RecommendedJobs />
      <HowItWorks />
      <Categories />
      <Companies />
      <CustomersSaying />
      <GetStarted />
    </div>
  );
};

export default Home;
