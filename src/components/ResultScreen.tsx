import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, RotateCcw } from 'lucide-react';
import { ProfileResult } from '../data';

interface Props {
  key?: React.Key;
  result: ProfileResult;
  name: string;
  onRestart: () => void;
}

export function ResultScreen({ result, name, onRestart }: Props) {
  const selectedProduct = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * result.products.length);
    return result.products[randomIndex];
  }, [result]);

  const idealModelName = selectedProduct.name;
  const whatsappNumber = '558192237474';
  
  const messageText = `Olá! Meu nome é ${name} e acabei de fazer o Match Perfeito by Santa Lolla ✨\n\nMeu resultado foi: ${result.title}\n\nO modelo ideal para mim é: ${idealModelName}. Gostaria de mais informações 💕`;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(messageText)}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[100dvh] flex flex-col pt-12 pb-24 px-6 md:px-12 max-w-5xl mx-auto"
    >
      {/* Header Profile Section */}
      <div className="flex flex-col items-center text-center mx-auto max-w-2xl mb-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-col justify-center items-center"
        >
          <p className="text-sl-beige text-xs tracking-[0.2em] font-medium uppercase mb-4">
            Seu Match Perfeito {result.emoji}
          </p>
          
          <h1 className="font-serif text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-sl-black leading-none mb-8">
            {result.title}
          </h1>
          
          <p className="text-sl-black/80 leading-relaxed text-lg">
            <span className="font-medium text-sl-black block mb-2">{name},</span>
            {result.description}
          </p>
        </motion.div>
      </div>

      {/* Styled Products Grid Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center mb-16">
          <p className="text-sl-beige text-sm tracking-[0.2em] font-medium uppercase mb-4 text-sl-black/50">
            A seleção Santa Lolla
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-sl-black italic">
            O modelo que é a sua cara
          </h2>
        </div>

        <div className="grid grid-cols-1 mb-24 max-w-sm mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="group flex flex-col items-center text-center cursor-pointer"
          >
            <div className="w-full aspect-[4/5] overflow-hidden bg-white shadow-sm mb-6 relative">
              <img
                src={selectedProduct.imageUrl}
                alt={selectedProduct.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-sl-black/0 group-hover:bg-sl-black/5 transition-colors duration-500" />
            </div>
            <h3 className="font-serif text-2xl text-sl-black mb-3 px-4">{selectedProduct.name}</h3>
            <div className="h-px w-10 bg-sl-beige mx-auto" />
          </motion.div>
        </div>

        <div className="flex flex-col items-center gap-6 max-w-sm mx-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 bg-sl-primary text-sl-black px-8 py-5 w-full rounded-none overflow-hidden transition-all hover:bg-sl-primary/90 active:scale-95 shadow-xl"
          >
            <MessageCircle className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span className="font-medium tracking-wide">Falar com uma especialista</span>
          </a>
          
          <button
            onClick={onRestart}
            className="inline-flex items-center justify-center gap-2 text-sl-black/40 hover:text-sl-black transition-colors py-2 text-sm font-medium uppercase tracking-wider mt-4"
          >
            <RotateCcw className="w-4 h-4" />
            Refazer Quiz
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}
