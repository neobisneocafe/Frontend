import { OneStepForm } from "@/features/auth/login";
import { createApp } from "@/index";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Page.scss";

export function LoginPage() {
  return (
    <div className="loginPageAdmin">
      <OneStepForm/>
      <Link to="/">
        <Button onClick={() => createApp(false)}>Barista Login</Button>
      </Link>
    </div>
  );
}
