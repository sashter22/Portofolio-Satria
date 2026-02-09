"use client";

import { motion } from "framer-motion";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }} // Awalnya transparan
    animate={{ opacity: 1 }} // Muncul pelan
    transition={{ duration: 0.8, ease: "easeInOut" }} // Durasi 0.8 detik biar berasa "Wedding"
  >
    {children}
  </motion.div>
);
