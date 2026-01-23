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
          transition={{ duration: 0.4 }}
          className="w-full max-w-md"
        >
          <h1 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-4">
            O que é <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">yoga facial</span>, afinal?
          </h1>
          
          <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-5 mb-8 border border-pink-100 shadow-sm">
            <p className="text-center text-gray-700 leading-relaxed">
              Yoga facial é uma forma simples e holística de manter sua pele suave, 
              firme e radiante. Ajuda a melhorar o bem-estar facial geral e retarda os sinais de envelhecimento.
            </p>
          </div>

          <h2 className="text-xl font-bold text-center text-foreground mb-6">
            Como funciona?
          </h2>

          <div className="space-y-4">
            {/* Targeted techniques */}
            <div className="group">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center group-hover:from-pink-200 group-hover:to-rose-200 transition-all duration-300">
                  <Check className="w-5 h-5 text-rose-600" />
                </div>
                <p className="text-gray-800 font-medium leading-relaxed">
                  Usa <span className="font-bold text-rose-600">técnicas direcionadas</span> para seu rosto, pescoço e ombros
                </p>
              </div>
            </div>

            {/* Massage */}
            <div className="group">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center group-hover:from-pink-200 group-hover:to-rose-200 transition-all duration-300">
                  <Check className="w-5 h-5 text-rose-600" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 font-bold text-lg mb-2">Massagem</p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                      <span className="text-gray-600">estimula a circulação</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                      <span className="text-gray-600">melhora o fluxo linfático</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                      <span className="text-gray-600">libera a tensão</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Acupressure */}
            <div className="group">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-pink-100 to-rose-100 flex items-center justify-center group-hover:from-pink-200 group-hover:to-rose-200 transition-all duration-300">
                  <Check className="w-5 h-5 text-rose-600" />
                </div>
                <div className="flex-1">
                  <p className="text-gray-800 font-medium leading-relaxed mb-2">
                    <span className="font-bold text-rose-600">Acupressão</span> alivia o estresse e ajuda com
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                      <span className="text-gray-600">alívio de dores de cabeça</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                      <span className="text-gray-600">liberação dos seios nasais</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-rose-400"></div>
                      <span className="text-gray-600">sono melhor</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Botão com sombra rosa e melhor visibilidade */}
      <div className="fixed bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-white/90 to-transparent">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <button
            onClick={nextStep}
            className="relative w-full max-w-md px-6 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 active:scale-95 group overflow-hidden"
            style={{
              boxShadow: '0 10px 25px -5px rgba(236, 72, 153, 0.4), 0 10px 10px -5px rgba(236, 72, 153, 0.2)'
            }}
          >
            {/* Efeito de brilho no hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            
            {/* Sombra rosa mais intensa */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4/5 h-4 bg-pink-400/30 blur-md rounded-full"></div>
            
            <span className="relative flex items-center justify-center gap-2">
              <span>Ok, entendi!</span>
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
