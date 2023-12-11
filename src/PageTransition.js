// src/components/PageTransition.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function PageTransition({ children }) {
  const [isExiting, setIsExiting] = useState(true); // Set initial value to true

  useEffect(() => {
    // Use a timeout to delay rendering the entering component
    const timeout = setTimeout(() => {
      setIsExiting(false); // Set isExiting to false after the delay
    }, 500); // Adjust the duration as needed (in milliseconds)

    return () => clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence mode='wait'>
      {isExiting ? null : (
        <motion.div
          key={window.location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PageTransition;
