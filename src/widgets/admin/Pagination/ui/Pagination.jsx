import { Button, HStack } from "@chakra-ui/react";

export function Paginaiton ({ currentPage, totalPages, onPageChange }){
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  
    return (
      <HStack spacing={2} mt={4}>
        {pages.map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? "solid" : "outline"}
            background={currentPage === page ? "rgba(0, 49, 93, 1)" : "light gray"}
            color={currentPage === page ? "#fff" : "rgba(0, 49, 93, 1)"}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        ))}
      </HStack>
    );
}