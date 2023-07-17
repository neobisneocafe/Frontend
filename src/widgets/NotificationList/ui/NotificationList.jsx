import { NotificationCard } from "@/entities/notification";
// import { orders } from "@/shared/lib";
import { orderNotifications } from "@/shared/lib/OrdersData";
import {
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Text,
  useDisclosure,
  VisuallyHidden
} from "@chakra-ui/react";
import { BellSimple } from "./BellSimple";

export function NotificationList() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <IconButton
        m="13px auto"
        bg="#FEFEFE"
        borderRadius="50%"
        w="60px"
        h="60px"
        icon={<BellSimple />}
        onClick={onOpen}
      />
      <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
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
      </Drawer>
    </>
  );
}
