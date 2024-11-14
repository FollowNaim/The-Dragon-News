import { useLoaderData } from "react-router-dom";
import SingleNews from "../news-card/SingleNews";

function MiddleSide() {
  const { data } = useLoaderData();

  return (
    <div>
      <div>
        <h4>Dragon News Home</h4>
        <div className="mt-6 flex flex-col gap-6">
          {data.map((news) => (
            <SingleNews key={news._id} news={news} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default MiddleSide;
