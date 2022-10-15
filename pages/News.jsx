import NewsCard from "../components/NewsCard";
import Wrapper from "../components/Wrapper";

const News = (props) => {
  return (
    <Wrapper {...props}>
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
      <NewsCard />
    </Wrapper>
  );
};

export default News;
