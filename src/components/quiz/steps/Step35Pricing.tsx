import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useQuiz } from '@/contexts/QuizContext';
import { QuizHeader } from '../shared/QuizHeader';
import { Check, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const plans = [
  {
    id: '7-day',
    name: 'PLANO 7 DIAS',
    originalPrice: 49.90,
    salePrice: 5.99,
    perDay: 0.85,
    popular: false,
  },
  {
    id: '1-month',
    name: 'PLANO 1 MÊS',
    originalPrice: 99.90,
    salePrice: 18.99,
    perDay: 0.63,
    popular: true,
  },
  {
    id: '3-month',
    name: 'PLANO 3 MESES',
    originalPrice: 179.90,
    salePrice: 28.99,
    perDay: 0.32,
    popular: false,
  },
];

const features = [
  {
    title: 'Programa personalizado de yoga facial focado nas suas áreas problemáticas',
    bg: 'bg-orange-50',
  },
  {
    title: 'Curso especializado de papada para maximizar seus resultados',
    bg: 'bg-orange-100',
  },
  {
    title: 'Curso de massagem Gua Sha dos especialistas Luvly',
    bg: 'bg-green-50',
  },
  {
    title: 'Cursos de vídeo exclusivos sobre massagem facial, skincare e saúde da pele',
    bg: 'bg-green-100',
  },
];

const howItWorks = [
  {
    icon: '📋',
    title: 'Complete 4 semanas do seu Programa Personalizado',
    description: 'Sabemos que a vida atrapalha, então você terá 2 meses para completar os primeiros 28 dias do seu programa.',
  },
  {
    icon: '📧',
    title: 'Compartilhe seus resultados',
    description: 'Contate-nos aqui usando o mesmo email que você usou para sua compra. Anexe capturas de tela dos "Resultados Semanais dentro do Programa Completo" do seu app Luvly.',
  },
  {
    icon: '💰',
    title: 'Receba seu dinheiro de volta',
    description: 'Assim que processarmos sua solicitação e confirmarmos que você atende aos requisitos, você receberá um reembolso de 100% da sua assinatura.',
  },
];

const appScreenshots = [
  { id: 1, placeholder: 'Tela 1' },
  { id: 2, placeholder: 'Tela 2' },
  { id: 3, placeholder: 'Tela 3' },
];

export function Step35Pricing() {
  const { quizData } = useQuiz();
  const [selectedPlan, setSelectedPlan] = useState('1-month');
  const [timeLeft, setTimeLeft] = useState(9 * 60 + 50); // 9:50
  const [currentScreen, setCurrentScreen] = useState(0);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky header with timer */}
      <div className="sticky top-0 z-50 bg-card shadow-sm">
        <QuizHeader />
        <div className="flex items-center justify-between px-4 py-2 border-b border-border">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">68% desconto reservado por:</span>
            <span className="font-bold text-foreground">{formatTime(timeLeft)}</span>
          </div>
          <button className="quiz-gradient px-4 py-2 rounded-full text-white text-sm font-medium">
            Obter Meu Plano
          </button>
        </div>
      </div>

      <div className="px-4 py-6 max-w-md mx-auto">
        {/* Refund banner */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-600 to-purple-500 rounded-2xl p-4 mb-6 flex items-center gap-3"
        >
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            💰
          </div>
          <div className="text-white">
            <p>Complete <span className="font-bold">4 semanas</span> do seu</p>
            <p>Programa Personalizado e</p>
            <p className="font-bold">RECEBA REEMBOLSO TOTAL</p>
          </div>
        </motion.div>

        {/* Before/After comparison */}
        <div className="bg-card rounded-2xl overflow-hidden mb-6 shadow-lg">
          <div className="aspect-video bg-gradient-to-r from-muted to-muted/50 flex items-center justify-center">
            <div className="text-center">
              <p className="text-muted-foreground">Imagem Antes/Depois</p>
            </div>
          </div>
          <div className="flex">
            <div className="flex-1 text-center py-3 border-r border-border">
              <p className="font-bold text-foreground">Agora</p>
              <p className="text-sm text-muted-foreground">Nível de colágeno</p>
              <div className="h-1 bg-muted mx-4 mt-2 rounded-full">
                <div className="h-full w-1/3 bg-primary rounded-full" />
              </div>
            </div>
            <div className="flex-1 text-center py-3">
              <p className="font-bold text-foreground">Meta</p>
              <p className="text-sm text-muted-foreground">Nível de colágeno</p>
              <div className="h-1 bg-muted mx-4 mt-2 rounded-full">
                <div className="h-full w-2/3 bg-primary rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Social proof */}
        <p className="text-center text-sm text-primary mb-6">
          440 {quizData.gender === 'male' ? 'homens' : 'mulheres'} compraram nosso plano na última hora
        </p>

        {/* Plan ready */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-foreground">
            Seu plano de yoga facial
            <br />
            está pronto!
          </h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                👤
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Idade</p>
                <p className="font-bold text-foreground">{quizData.age || '30-39'}</p>
              </div>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                📊
              </div>
              <div className="text-left">
                <p className="text-xs text-muted-foreground">Nível yoga facial</p>
                <p className="font-bold text-foreground">Intermediário</p>
              </div>
            </div>
          </div>
        </div>

        {/* Offer timer */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl py-3 px-4 text-center mb-6">
          <p className="text-white font-medium">
            A oferta de ANO NOVO termina em <span className="font-bold">{formatTime(timeLeft)}</span> min
          </p>
        </div>

        {/* Plan selection */}
        <div className="space-y-3 mb-6">
          {plans.map((plan) => (
            <button
              key={plan.id}
              onClick={() => setSelectedPlan(plan.id)}
              className={`w-full p-4 rounded-xl border-2 transition-all relative ${
                selectedPlan === plan.id
                  ? 'border-primary bg-primary/5'
                  : 'border-border bg-card'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                  MAIS POPULAR
                </span>
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    selectedPlan === plan.id ? 'border-primary bg-primary' : 'border-muted-foreground'
                  }`}>
                    {selectedPlan === plan.id && <Check className="w-3 h-3 text-white" />}
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-foreground">{plan.name}</p>
                    <p className="text-sm">
                      <span className="text-muted-foreground line-through">R${plan.originalPrice.toFixed(2)}</span>
                      {' '}
                      <span className="text-primary font-medium">R${plan.salePrice.toFixed(2)}</span>
                    </p>
                  </div>
                </div>
                <div className={`text-right ${plan.popular ? 'bg-primary text-white px-3 py-2 rounded-lg' : ''}`}>
                  <p className="text-lg font-bold">R${plan.perDay.toFixed(2)}</p>
                  <p className="text-xs opacity-80">por dia</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* CTA Button */}
        <button className="w-full py-4 rounded-full quiz-gradient text-white font-semibold mb-6">
          Obter Meu Plano
        </button>

        {/* Refund guarantee */}
        <div className="bg-gradient-to-r from-purple-600 to-purple-500 rounded-xl p-4 mb-8 flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl">
            💰
          </div>
          <p className="text-white text-sm">
            Complete <span className="font-bold">4 semanas</span> do seu Programa Personalizado e{' '}
            <span className="font-bold">RECEBA REEMBOLSO TOTAL</span>
          </p>
          <span className="text-white text-xl">✨</span>
        </div>

        {/* How it works section */}
        <div className="bg-purple-50 rounded-2xl p-6 mb-8">
          <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
            PROGRAMA LUVLY DE 4 SEMANAS
          </span>
          <h3 className="text-xl font-bold text-foreground mt-4 mb-2">Como funciona</h3>
          <p className="text-sm text-muted-foreground mb-6">
            <span className="text-primary">Complete</span> 28 dias do seu <span className="font-bold">Programa Personalizado</span>, 
            veja seus <span className="text-primary">primeiros</span> resultados, e receba seu dinheiro de volta.
          </p>

          <div className="space-y-4">
            {howItWorks.map((step, index) => (
              <div key={index} className="bg-card rounded-xl p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-xl flex-shrink-0">
                    {step.icon}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{index + 1}. {step.title}</p>
                    <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground text-center mt-4">
            Se quiser saber mais sobre o Programa Personalizado Luvly ou a promoção "Complete seu Programa de 4 Semanas e Receba Reembolso Total", 
            consulte nossos <span className="underline">Termos de Uso</span>.
          </p>

          <button className="w-full py-4 rounded-full quiz-gradient text-white font-semibold mt-6">
            Obter Meu Plano
          </button>
        </div>

        {/* The only skincare app section */}
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold text-foreground mb-6">
            O único app de skincare
            <br />
            que você precisa
          </h3>

          {/* App carousel */}
          <div className="relative">
            <div className="flex items-center justify-center gap-4">
              <button 
                onClick={() => setCurrentScreen((prev) => (prev - 1 + 3) % 3)}
                className="p-2 rounded-full bg-muted hover:bg-muted/80"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-2">
                {appScreenshots.map((screen, index) => (
                  <div
                    key={screen.id}
                    className={`transition-all ${
                      index === currentScreen 
                        ? 'w-40 h-72 opacity-100' 
                        : 'w-24 h-48 opacity-50'
                    } bg-card rounded-2xl shadow-lg flex items-center justify-center border border-border`}
                  >
                    <span className="text-muted-foreground text-sm">{screen.placeholder}</span>
                  </div>
                ))}
              </div>
              
              <button 
                onClick={() => setCurrentScreen((prev) => (prev + 1) % 3)}
                className="p-2 rounded-full bg-muted hover:bg-muted/80"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {appScreenshots.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    index === currentScreen ? 'bg-primary' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* #1 Face Yoga App badge */}
          <div className="flex items-center justify-center gap-2 my-6">
            <span className="text-2xl">🏆</span>
            <div className="text-center">
              <p className="text-2xl font-bold text-foreground">#1</p>
              <p className="text-sm text-muted-foreground">Face Yoga App</p>
            </div>
            <span className="text-2xl">🏆</span>
          </div>

          <button className="w-full py-4 rounded-full quiz-gradient text-white font-semibold">
            Obter Meu Plano
          </button>
        </div>

        {/* What you get section */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-foreground text-center mb-6">
            O que você recebe
          </h3>
          
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${feature.bg} rounded-xl p-4 flex items-center gap-4`}
              >
                <div className="w-16 h-16 rounded-xl bg-card shadow-sm flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🧘</span>
                </div>
                <p className="text-sm font-medium text-foreground">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
