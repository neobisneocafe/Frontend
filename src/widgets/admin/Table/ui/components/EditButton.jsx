import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import {DotsIcon} from "./DotsIcon"

export function EditButton(){
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
        <MenuItem icon={<DeleteIcon />}>Удалить</MenuItem>
      </MenuList>
    </Menu>
  );
};
