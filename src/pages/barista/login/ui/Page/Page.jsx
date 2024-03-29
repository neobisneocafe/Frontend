import { MultiStepForm } from "@/features/auth/login";
import { createApp } from "@/index";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import "./Page.scss";

export function LoginPage() {
  return (
    <div className="loginPage">
      <MultiStepForm />
      <Link to="/admin">
        <Button onClick={() => createApp(true)}>Admin Login</Button>
      </Link>
    </div>
  );
}
