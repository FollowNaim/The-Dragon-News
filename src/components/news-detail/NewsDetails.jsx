import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

function NewsDetails() {
  const { data } = useLoaderData();
  const { image_url, title, details, category_id } = data[0] || {};
  return (
    <div>
      <Card className="">
        <CardHeader>
          <div>
            <img
              className="h-96 w-full object-cover rounded-md"
              src={image_url}
              alt=""
            />
          </div>
          <CardTitle>
            <h1 className="text-3xl pt-4 leading-snug">{title}</h1>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{details}</p>
        </CardContent>
        <CardFooter>
          <Link to={`/category/${category_id}`}>
            <Button className="flex items-center gap-2 bg-destructive">
              <FaArrowLeft /> All news in this category
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

export default NewsDetails;
