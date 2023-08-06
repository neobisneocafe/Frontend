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
            colorScheme={currentPage === page ? "blue" : "gray"}
            onClick={() => onPageChange(page)}
          >
            {page}
          </Button>
        ))}
      </HStack>
    );
}