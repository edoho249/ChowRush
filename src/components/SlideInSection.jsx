
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SlideInSection({ children, from = "left" }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, 
    threshold: 0.1,    
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: {
      opacity: 0,
      x: from === "left" ? -80 : 80, 
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1.2,        
        ease: "easeOut",      
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      style={{ overflowX: "hidden" }} 
    >
      {children}
    </motion.div>
  );
}
