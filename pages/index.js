import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import BlogItem from "../components/blog/BlogItem";
import { motion } from "framer-motion"


const MotionFlex = motion(Flex);

const listEffect = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.2,
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    }
  },
}
const itemEffect = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Richard Annowit - Blog</title>
      </Head>
      <MotionFlex
        initial="hidden"
        animate="visible"
        variants={listEffect}
        direction="column"
        alignItems="center"
        pb={10}
      >
        <BlogItem href="#" variants={itemEffect} />
        <BlogItem href="#" variants={itemEffect} />
        <BlogItem href="#" variants={itemEffect} />
        <BlogItem href="#" variants={itemEffect} />

      </MotionFlex>
    </>
  )
}




