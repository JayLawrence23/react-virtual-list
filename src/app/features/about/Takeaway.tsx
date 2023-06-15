"use client";

import { TypographyP } from "@/components/ui";
import { motion } from "framer-motion";
import React from "react";

type Props = {
  index: number;
  label: string;
  emoji: string;
};
const Takeaway = ({ index, label, emoji }: Props) => (
  <motion.div
    initial={{ opacity: 0, x: 60 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: (index + 1) * 0.35 }}
  >
    <TypographyP>
      <span>{emoji}</span> {` ${label}`}
    </TypographyP>
  </motion.div>
);

export default Takeaway;
