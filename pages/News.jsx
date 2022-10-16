import NewsCard from "../components/NewsCard";
import Wrapper from "../components/Wrapper";

const News = (props) => {
  return (
    <Wrapper {...props}>
      <NewsCard id="1" {...props} />
      <NewsCard id="1" {...props} />
      <NewsCard id="1" {...props} />
      <NewsCard id="1" {...props} />
      <NewsCard id="1" {...props} />
    </Wrapper>
  );
};

export default News;
