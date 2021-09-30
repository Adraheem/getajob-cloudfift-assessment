import Categories from "./categories";
import Companies from "./companies";
import Hero from "./hero";
import RecommendedJobs from "./recommended-jobs";

const Home = () => {
  return (
    <div>
      <Hero />
      <RecommendedJobs />
      <Categories />
      <Companies />
    </div>
  );
};

export default Home;
