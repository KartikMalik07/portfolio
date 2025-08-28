"use client";

import { motion } from "framer-motion";

interface ProgressProps {
  label: string;
  value: number;
  delay?: number;
}

export default function Progress({ label, value, delay = 0 }: ProgressProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between text-sm font-medium mb-1">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
          className="h-full bg-gray-900 rounded-full"
        />
      </div>
    </div>
  );
}
