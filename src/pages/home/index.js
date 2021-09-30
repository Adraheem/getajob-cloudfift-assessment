import Categories from "./categories";
import Companies from "./companies";
import GetStarted from "./get-started";
import Hero from "./hero";
import RecommendedJobs from "./recommended-jobs";

const Home = () => {
  return (
    <div>
      <Hero />
      <RecommendedJobs />
      <Categories />
      <Companies />
      <GetStarted />
    </div>
  );
};

export default Home;
