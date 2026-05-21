import React, { useEffect } from 'react';
import { motion } from 'motion/react';

interface Props {
  key?: React.Key;
  onProcessingComplete: () => void;
}

export function ProcessingScreen({ onProcessingComplete }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onProcessingComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onProcessingComplete]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-[100dvh] px-6"
    >
      <div className="relative w-24 h-24 mb-8">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border-t-2 border-r-2 border-sl-primary opacity-50"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute inset-2 rounded-full border-b-2 border-l-2 border-sl-black opacity-20"
        />
        <div className="absolute inset-0 flex items-center justify-center text-3xl">
          ✨
        </div>
      </div>
      
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="font-serif text-2xl text-sl-black text-center"
      >
        Analisando seu <br/><span className="italic bg-sl-primary text-sl-black px-2 mt-2 -rotate-1 inline-block">estilo...</span>
      </motion.p>
    </motion.div>
  );
}
