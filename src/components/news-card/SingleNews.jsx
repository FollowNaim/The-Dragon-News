import { CiBookmark } from "react-icons/ci";
import { FaStar } from "react-icons/fa6";
import { IoEyeSharp, IoShareSocialOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
function SingleNews({ news }) {
  const { author, thumbnail_url, details, title, rating, total_view } =
    news || {};
  return (
    <div className="border border-border rounded-lg">
      <div>
        <div className="bg-muted p-4 flex justify-between items-center">
          <div className="flex gap-3 items-center">
            <img
              className="w-12 object-cover rounded-full"
              src={author?.img}
              alt=""
            />
            <div>
              <p className="font-medium text-lg">{author?.name}</p>
              <p className="text-muted-foreground">{author?.published_date}</p>
            </div>
          </div>
          <div className="flex items-center justify-end ml-auto gap-4 *:text-xl">
            <CiBookmark />
            <IoShareSocialOutline />
          </div>
          <div></div>
        </div>
        <div
          className="
        m-4"
        >
          <h1 className="text-2xl font-semibold py-5">{title}</h1>
          <Link to={`/news/${news._id}`}>
            <div className="w-full">
              <img
                className="w-full object-cover h-72 rounded-md"
                src={thumbnail_url}
                alt=""
              />
            </div>
          </Link>
          <div className="py-7 border-b border-border">
            <p className="h-24 overflow-clip">{details}</p>
            <Link to={`/news/${news._id}`}>
              <span className="text-orange-500 font-medium mt-2 p-0">
                Read More
              </span>
            </Link>
          </div>
          <div className="flex justify-between items-center pt-4">
            <div className="flex items-center *:text-orange-500">
              <FaStar className="text-lg" />
              <FaStar className="text-lg" />
              <FaStar className="text-lg" />
              <FaStar className="text-lg" />
              <span className="text-base pl-3">{rating.number}</span>
            </div>
            <div className="flex items-center gap-3 text-muted-foreground">
              <IoEyeSharp className="text-xl" /> <span>{total_view}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleNews;
