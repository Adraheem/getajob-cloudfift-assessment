import Categories from "./categories";
import Hero from "./hero";
import RecommendedJobs from "./recommended-jobs";

const Home = () => {
  return (
    <div>
      <Hero />
      <RecommendedJobs />
      <Categories />
    </div>
  );
};

export default Home;
