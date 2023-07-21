import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Button, Flex } from "@chakra-ui/react";

export function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <Flex justify="center" mt={4} align="center">
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        border="none"
        borderRadius={0}
        background="rgba(249, 249, 249, 1)"
      >
        <ChevronLeftIcon />
      </Button>
      {pageNumbers.map((num) => (
        <Button
          key={num}
          onClick={() => onPageChange(num)}
          color={currentPage === num ? "rgba(0, 49, 93, 1)" : "initial"}
          textDecoration={currentPage === num ? "underline" : "initial"}
          border="none"
          borderRadius={0}
          background="rgba(249, 249, 249, 1)"
        >
          {num}
        </Button>
      ))}
      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        border="none"
        borderRadius={0}
        background="rgba(249, 249, 249, 1)"
      >
        <ChevronRightIcon />
      </Button>
    </Flex>
  );
}
