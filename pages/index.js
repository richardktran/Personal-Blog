import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import BlogItem from "../components/blog/BlogItem";


export default function Home() {
  return (
    <>
      <Head>
        <title>Richard Annowit - Blog</title>
      </Head>
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
    </>
  )
}




