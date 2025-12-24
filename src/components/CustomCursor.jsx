import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      const isClickable = !!e.target.closest(
        'a, button, .clickable, input, textarea, label, [data-clickable="true"]'
      );
      setIsHovering(isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      height: 20,
      width: 20,
      backgroundColor: "#000",
      opacity: 1,
    },
    hover: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      height: 80,
      width: 80,
      backgroundColor: "#CF9EFF",
      opacity: 0.25,
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[99999]"
      variants={variants}
      animate={isHovering ? "hover" : "default"}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  );
};

export default CustomCursor;
