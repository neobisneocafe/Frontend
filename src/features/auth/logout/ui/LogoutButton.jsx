import { Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { SignOutBlack, SignOutWhite } from "./Icons/SignOut";

export function LogoutButton() {
const navigate = useNavigate()
const location = useLocation();
const isAdmin = location.pathname.includes('/admin');

  return (
    <Button
      flexDirection={"column"}
      color={isAdmin? "#000":"#fff"}
      background={"inherit"}
      margin={isAdmin? "10px":"15px"}
      p={isAdmin? 0: "inherit"}
      alignItems={isAdmin? "flex-start":"center"}
      transition = ".5s"
      _hover={{ background: "unset" , transform: "scale(0.9)"}}
      onClick={isAdmin? () => navigate('/admin') : () => navigate('/')}
    >
      Выйти
      { isAdmin? <SignOutBlack/> : <SignOutWhite />}
      
    </Button>
  );
}
