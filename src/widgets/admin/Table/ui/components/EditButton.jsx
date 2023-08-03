import { endpoints } from "@/shared/api/apiConfig";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import {DotsIcon} from "./DotsIcon"

export function EditButton({itemId}){
  const toast = useToast()
  const [productList, setProductList] = useState()

  const handleDelete = async () => {
    try {
      await axios.post(endpoints.productList, productList);
      toast({
        title: "Новый продукт создан",
        description: "Продукт успешно добвален",
        status: "success",
        duration: 2000,
        isClosable: true,
      });
      console.log("Product created successfully");
    } catch (error) {
      toast({
        title: "Ошибка при создании",
        description: "Продукт не добвален",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      console.error("Error creating product:", error.message);
    }
  };
  
  return (
    <Menu>
      <MenuButton
        as={IconButton}
        aria-label="Options"
        icon={<DotsIcon />}
        variant="outline"
        border={"none"}
        _hover={{}}
      />
      <MenuList>
        <MenuItem icon={<EditIcon />}>Редактировать</MenuItem>
        <MenuItem icon={<DeleteIcon />} onClick={handleDelete}>Удалить</MenuItem>
      </MenuList>
    </Menu>
  );
};
