import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface Props {
  key?: React.Key;
  onNext: (name: string) => void;
}

export function NameScreen({ onNext }: Props) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      onNext(name.trim());
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center min-h-[100dvh] px-6 py-12"
    >
      <div className="max-w-md w-full">
        <p className="text-sl-beige text-sm tracking-[0.2em] font-medium uppercase mb-8 text-center text-sl-black/50">
          Passo 1
        </p>
        
        <h2 className="font-serif text-3xl md:text-4xl text-sl-black leading-tight mb-4 text-center">
          Como podemos <br/><span className="italic bg-sl-primary text-sl-black px-2 mt-2 -rotate-1 inline-block">chamar você?</span>
        </h2>
        
        <p className="text-center text-sl-black/60 mb-12">
          Queremos criar uma experiência super personalizada pra você.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-8">
          <div className="relative">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome"
              className="w-full bg-transparent border-b-2 border-sl-beige/50 py-4 px-2 text-xl text-center text-sl-black placeholder:text-sl-black/20 focus:outline-none focus:border-sl-primary transition-colors"
              autoFocus
            />
          </div>

          <button
            type="submit"
            disabled={!name.trim()}
            className="group inline-flex items-center justify-center gap-3 bg-sl-primary text-sl-black px-8 py-4 w-full rounded-none disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95 shadow-lg"
          >
            <span className="font-medium tracking-wide">Começar Quiz</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </form>
      </div>
    </motion.div>
  );
}
