import { Button } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { SignOutBlack, SignOutWhite } from "./Icons/SignOut";

export function LogoutButton() {
const navigate = useNavigate()
const location = useLocation();
const isAdmin = location.pathname.includes('/admin');
const handleLogout = () => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");

  isAdmin?  navigate('/admin') :  navigate('/')
};

  return (
    <Button
      color={isAdmin? "#000":"#fff"}
      background={"inherit"}
      margin={isAdmin? "10px":"15px"}
      p={isAdmin? 0: "inherit"}
      alignItems={"center"}
      gap="10%"
      transition = ".5s"
      _hover={{ background: "unset" , transform: "scale(0.9)"}}
      onClick={handleLogout}
    >
      Выйти
      { isAdmin? <SignOutBlack w={'25px'}/> : <SignOutWhite w={'25px'}/>}
      
    </Button>
  );
}
