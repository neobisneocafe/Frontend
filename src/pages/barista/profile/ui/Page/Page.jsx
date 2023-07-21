import { Button, Center, HStack, VStack } from "@chakra-ui/react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

export function ProfilePage() {
  const location = useLocation();
  const navigate = useNavigate();

  const renderButton = (to, label) => {
    const isActive = location.pathname === to;
    const bgColor = isActive ? "#FF8B5B" : "#DCEDFF";
    const textColor = isActive ? "#fff" : "#000";

    return (
      <Button
        exact
        w="100%"
        h="full"
        bg={bgColor}
        color={textColor}
        borderRadius={0}
        fontSize="26px"
        _hover={{
          bg: bgColor,
        }}
        onClick={() => navigate(to)}
      >
        {label}
      </Button>
    );
  };

  return (
    <Center className="main-page">
      <VStack w="full">
        <HStack w="full" gap={0} h="87px">
          {renderButton("/profile", "Личные данные")}
          {renderButton("/profile/schedule", "График работы")}
        </HStack>
        <Outlet />
      </VStack>
    </Center>
  );
}
