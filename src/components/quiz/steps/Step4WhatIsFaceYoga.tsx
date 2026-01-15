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

      <ContinueButton onClick={nextStep} label="Ok, entendi!" />
    </div>
  );
}