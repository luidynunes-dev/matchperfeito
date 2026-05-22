import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { questions } from '../data';
import { AnswersData } from '../types';

interface Props {
  key?: React.Key;
  onComplete: (answers: AnswersData) => void;
  name: string;
}

export function QuizScreen({ onComplete, name }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswersData>({});
  const [isTransitioning, setIsTransitioning] = useState(false);

  const question = questions[currentIndex];
  // Safeguard against boundary issues during unmount or fast clicks
  if (!question) {
    return null;
  }
  const progress = ((currentIndex) / questions.length) * 100;

  const handleSelect = (optionId: string) => {
    if (isTransitioning) return;
    setIsTransitioning(true);

    const newAnswers = { ...answers, [question.id]: optionId };
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentIndex < questions.length - 1) {
        setCurrentIndex(c => c + 1);
        setIsTransitioning(false);
      } else {
        onComplete(newAnswers);
      }
    }, 400); // short delay to show selection
  };

  return (
    <div className="flex flex-col min-h-[100dvh]">
      {/* Progress Bar */}
      <div className="w-full h-1 bg-sl-black/5">
        <motion.div
          className="h-full bg-sl-primary"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="flex-1 flex flex-col justify-center px-6 py-12 max-w-2xl mx-auto w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col h-full justify-center"
          >
            <p className="text-sl-beige text-xs tracking-[0.2em] font-medium uppercase mb-6 text-center">
              Pergunta {currentIndex + 1} de {questions.length}
            </p>
            
            <h2 className="font-serif text-2xl md:text-3xl text-sl-black leading-snug mb-10 text-center">
              {question.question}
            </h2>

            <div className="grid gap-4">
              {question.options.map((option, idx) => {
                const isSelected = answers[question.id] === option.id;
                
                return (
                  <button
                    key={option.id}
                    onClick={() => handleSelect(option.id)}
                    className={`
                      relative w-full text-left p-6 rounded-none border transition-all duration-300
                      ${isSelected 
                        ? 'border-sl-primary bg-sl-primary/5 shadow-md scale-[1.02]' 
                        : 'border-sl-black/10 hover:border-sl-beige hover:bg-sl-white/50 bg-sl-white'
                      }
                    `}
                  >
                    <div className="flex items-start gap-4">
                      <span className={`
                        flex-shrink-0 w-6 h-6 rounded-full border flex items-center justify-center text-xs mt-0.5 transition-colors
                        ${isSelected ? 'border-sl-primary bg-sl-primary text-sl-black' : 'border-sl-black/20 text-sl-black/50'}
                      `}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className={`text-base md:text-lg transition-colors ${isSelected ? 'text-sl-black font-medium' : 'text-sl-black/80'}`}>
                        {option.text}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
