import { Link, useLocation, useNavigate } from "react-router-dom";

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
import { FaGithub, FaGoogle } from "react-icons/fa6";
import SmallSpinner from "../spinner/SmallSpinner";

export default function Login() {
  const { handleLogin, handleGoogleLogin, handleGithubLogin } =
    useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { state } = useLocation();
  // console.log("state", state);
  const handlSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const email = form.email.value;
    const pass = form.password.value;
    handleLogin(email, pass)
      .then((result) => {
        // console.log(result.user);
        toast.success("login successfull");
        setLoading(false);
        if (state) {
          navigate(state);
          // console.log("if", state);
        } else {
          navigate("/");
          // console.log("else", state);
        }
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  };
  const handleGoogle = () => {
    handleGoogleLogin().then(() => {
      toast.success("login successfull");
      if (state) {
        navigate(state);
      } else {
        navigate("/");
      }
    });
  };
  const handleGithub = () => {
    handleGithubLogin().then(() => {
      toast.success("login successfull");
      if (state) {
        navigate(state);
      } else {
        navigate("/");
      }
    });
  };
  return (
    <div className="mt-4 mb-10">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <form onSubmit={handlSubmit}>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline"
                  >
                    Forgot your password?
                  </Link>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full">
                {loading ? <SmallSpinner /> : "Login"}
              </Button>
              <div className="flex gap-2">
                <Button
                  onClick={handleGoogle}
                  variant="outline"
                  className="w-full flex items-center"
                >
                  <FaGoogle /> Google
                </Button>
                <Button
                  onClick={handleGithub}
                  variant="outline"
                  className="w-full flex items-center"
                >
                  <FaGithub /> Github
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link to={"/auth/signup"} className="underline">
                Sign up
              </Link>
            </div>
          </CardContent>
        </form>
      </Card>
    </div>
  );
}
