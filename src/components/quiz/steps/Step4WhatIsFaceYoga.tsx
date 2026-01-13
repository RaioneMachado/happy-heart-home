import { motion } from 'framer-motion';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { ContinueButton } from '../shared/ContinueButton';
import { Check } from 'lucide-react';

export function Step4WhatIsFaceYoga() {
  const { nextStep } = useQuiz();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <QuizHeader showBack />
      
      <div className="flex-1 flex flex-col items-center px-4 py-8 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <h1 className="text-2xl font-bold text-center text-foreground mb-2">
            O que é <span className="text-primary">yoga facial</span>, afinal?
          </h1>
          
          <p className="text-center text-muted-foreground mb-8">
            Yoga facial é uma forma simples e holística de manter sua pele suave, 
            firme e radiante. Ajuda a melhorar o bem-estar facial geral e retarda os sinais de envelhecimento.
          </p>

          <h2 className="text-xl font-bold text-center text-foreground mb-6">
            Como funciona?
          </h2>

          <div className="space-y-4">
            {/* Targeted techniques */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <p className="text-foreground">
                Usa <span className="font-bold">técnicas direcionadas</span> para seu rosto, pescoço e ombros
              </p>
            </motion.div>

            {/* Massage */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-foreground font-bold">Massagem</p>
                <ul className="text-muted-foreground mt-1 space-y-1">
                  <li>• estimula a circulação</li>
                  <li>• melhora o fluxo linfático</li>
                  <li>• libera a tensão</li>
                </ul>
              </div>
            </motion.div>

            {/* Acupressure */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-foreground">
                  <span className="font-bold">Acupressão</span> alivia o estresse e ajuda com
                </p>
                <ul className="text-muted-foreground mt-1 space-y-1">
                  <li>• alívio de dores de cabeça</li>
                  <li>• liberação dos seios nasais</li>
                  <li>• sono melhor</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <ContinueButton onClick={nextStep} label="Ok, entendi!" />
    </div>
  );
}
