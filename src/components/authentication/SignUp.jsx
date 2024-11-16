import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthContext } from "@/provider/AuthProvider";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import SmallSpinner from "../spinner/SmallSpinner";

export default function SignUp() {
  const { handleSignUp, userUpdate } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    const name = form.name.value;
    const photo = form.photo.value;
    handleSignUp(email, pass)
      .then((result) => {
        userUpdate({ displayName: name, photoURL: photo });
        toast.success("Signup successfully");
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };
  return (
    <div className="mt-4 mb-10">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>
            Enter your details below to signup to your account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  name="name"
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="photo">Photo URL</Label>
                <Input
                  name="photo"
                  id="photo"
                  type="url"
                  placeholder="https://example.com/image.png"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  name="email"
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Input name="password" id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                {loading ? <SmallSpinner /> : "Sign up"}
              </Button>
              <Button variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link to={"/auth/login"} className="underline">
                Login
              </Link>
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  );
}
