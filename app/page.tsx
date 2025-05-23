"use client";
import Home from "@/components/Home/Home";
import { motion } from "motion/react";

export default function Page() {
  return (
    <motion.div
      initial={{ opacity: 0.5, filter: "blur(10px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col overflow-x-hidden"
    >
      <Home />
    </motion.div>
  );
}
