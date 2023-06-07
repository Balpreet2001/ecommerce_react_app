import { useParams } from "react-router-dom";

const Categories = () => {

  const {categoryid} = useParams();
  return <div>Categories</div>;
};

export default Categories;
