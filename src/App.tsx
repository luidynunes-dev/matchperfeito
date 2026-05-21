import React, { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { ScreenState, AnswersData } from './types';
import { calculateResult, ProfileResult } from './data';
import { StartScreen } from './components/StartScreen';
import { NameScreen } from './components/NameScreen';
import { QuizScreen } from './components/QuizScreen';
import { ProcessingScreen } from './components/ProcessingScreen';
import { ResultScreen } from './components/ResultScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>('START');
  const [name, setName] = useState<string>('');
  const [answers, setAnswers] = useState<AnswersData>({});
  const [result, setResult] = useState<ProfileResult | null>(null);

  const handleStartNext = () => setCurrentScreen('NAME');
  
  const handleNameNext = (enteredName: string) => {
    setName(enteredName);
    setCurrentScreen('QUIZ');
  };

  const handleQuizComplete = (finalAnswers: AnswersData) => {
    setAnswers(finalAnswers);
    setCurrentScreen('PROCESSING');
  };

  const handleProcessingComplete = () => {
    const calcResult = calculateResult(answers);
    setResult(calcResult);
    setCurrentScreen('RESULT');
  };

  const handleRestart = () => {
    setName('');
    setAnswers({});
    setResult(null);
    setCurrentScreen('START');
  };

  return (
    <div className="min-h-[100dvh] w-full overflow-x-hidden bg-sl-offwhite font-sans selection:bg-sl-primary/30">
      <AnimatePresence mode="wait">
        {currentScreen === 'START' && (
          <StartScreen key="start" onNext={handleStartNext} />
        )}
        
        {currentScreen === 'NAME' && (
          <NameScreen key="name" onNext={handleNameNext} />
        )}
        
        {currentScreen === 'QUIZ' && (
          <QuizScreen key="quiz" onComplete={handleQuizComplete} name={name} />
        )}
        
        {currentScreen === 'PROCESSING' && (
          <ProcessingScreen key="processing" onProcessingComplete={handleProcessingComplete} />
        )}
        
        {currentScreen === 'RESULT' && result && (
          <ResultScreen 
            key="result" 
            result={result} 
            name={name} 
            onRestart={handleRestart} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
