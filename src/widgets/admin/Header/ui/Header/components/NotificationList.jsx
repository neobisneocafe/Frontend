import {
  Box,
  Button,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,

} from "@chakra-ui/react";
import { BellSimple } from "./Icons/BellSimple";

export function NotificationList() {
  return (
    <>
      {/* <IconButton
        icon={<BellSimple />}
        onClick={onOpen}
      /> */}
      <Popover>
        <PopoverTrigger>
          <Button
            background={"rgba(0, 49, 93, 1)"}
            borderRadius="50%"
            w="55px"
            h="55px"
            _hover={{}}
          >
            <BellSimple />
          </Button>
        </PopoverTrigger>
        <PopoverContent inset={"10px auto auto -10px;"}>
          <PopoverCloseButton />
          <PopoverHeader>Уведомления</PopoverHeader>
          <PopoverBody>
          <Box>

          </Box>
          </PopoverBody>
        </PopoverContent>
      </Popover>
      {/* <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={"#023462"} color={"#fff"} px={"32px"} maxWidth={"495px"}>
          <DrawerHeader justifyContent={"space-between"} display={"flex"} px={0} alignItems={"center"}>
            <VisuallyHidden position={"unset"}>empty</VisuallyHidden>
            <Text fontSize="26px" fontWeight={600}>Уведомления</Text>
            <CloseButton size={"lg"} onClick={onClose}/>
          </DrawerHeader>
          <DrawerBody px={0}>
            {
              orderNotifications.map((order)=>(
                <NotificationCard key={order.order_id} order={order}/>

              ))
            }
          </DrawerBody>
        </DrawerContent>
      </Drawer> */}
    </>
  );
}
