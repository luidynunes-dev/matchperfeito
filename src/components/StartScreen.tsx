import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface Props {
  key?: React.Key;
  onNext: () => void;
}

export function StartScreen({ onNext }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center min-h-[100dvh] px-6 py-12 text-center"
    >
      <div className="max-w-md w-full space-y-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          <p className="text-sl-beige text-sm tracking-[0.2em] font-medium uppercase mb-4">
            Match Perfeito
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-sl-black leading-tight">
            Qual é o seu<br />
            <span className="italic bg-sl-primary text-sl-black px-2 inline-block -rotate-2">mood</span> fashion?
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="flex flex-col items-center justify-center py-12"
        >
          <div className="w-16 h-1 bg-sl-black mb-8"></div>
          <h2 className="text-2xl md:text-3xl uppercase tracking-[0.3em] font-medium text-sl-black">
            Santa Lolla
          </h2>
          <div className="w-16 h-1 bg-sl-black mt-8"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <p className="text-sl-black/70 mb-8 max-w-sm mx-auto">
            Descubra o estilo que mais combina com a sua rotina e receba recomendações exclusivas.
          </p>
          
          <button
            onClick={onNext}
            className="group relative inline-flex items-center justify-center gap-3 bg-sl-primary text-sl-black px-8 py-4 w-full md:w-auto rounded-none overflow-hidden transition-all hover:bg-sl-primary/90 active:scale-95 shadow-lg"
          >
            <span className="font-medium tracking-wide">Descobrir meu Match</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
}
