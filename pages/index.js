import { Flex } from "@chakra-ui/react";
import BlogItem from "../components/blog/BlogItem";


export default function Home() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      pb={10}
    >
      <BlogItem href="#" />
      <BlogItem href="#" />
      <BlogItem href="#" />
      <BlogItem href="#" />

    </Flex>
  )
}




