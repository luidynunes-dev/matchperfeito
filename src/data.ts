export type ProfileType = 'Fashion Essential' | 'Trend Icon' | 'Chic Urbano';

export interface QuizOption {
  id: string;
  text: string;
  scores: Record<ProfileType, number>;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
}

export interface ProductMatch {
  name: string;
  imageUrl: string;
}

export interface ProfileResult {
  title: ProfileType;
  emoji: string;
  description: string;
  products: ProductMatch[];
  imageUrl: string;
}


export const profiles: Record<ProfileType, ProfileResult> = {
  'Trend Icon': {
    title: 'Trend Icon',
    emoji: '💋',
    description: 'Você ama moda, tendências e peças que transformam qualquer produção. Seu estilo chama atenção pelos detalhes, personalidade e atitude fashion.',
    products: [
      { name: 'Scarpin Slingback Bico Quadrado', imageUrl: 'https://i.postimg.cc/DmXBbxGN/Scarpin-Slingback-Bico-Quadrado.jpg' },
      { name: 'Flip Flop Verniz Vermelho Jambo Corrente', imageUrl: 'https://i.postimg.cc/23Z2B0W2/Flip-Flop-Verniz-Vermelho-Jambo-Corrente.jpg' },
      { name: 'Bolsa Baguete Média Soft Preta', imageUrl: 'https://i.postimg.cc/p5zCbdxF/Bolsa-Baguete-Media-Soft-Preta.jpg' },
      { name: 'Sandália Couro Confort Preta', imageUrl: 'https://i.postimg.cc/m1CjfrRM/Sandalia-Couro-Confort-Preta.jpg' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=800&auto=format&fit=crop' // bold, fashion shoes
  },
  'Chic Urbano': {
    title: 'Chic Urbano',
    emoji: '🤍',
    description: 'Seu estilo é sofisticado, contemporâneo e naturalmente elegante. Você prefere peças atemporais com toque moderno e valoriza combinações refinadas.',
    products: [
      { name: 'Scarpin Couro Soft Bico Fino', imageUrl: 'https://i.postimg.cc/3WvnDtGc/Scarpin-Couro-Soft-Bico-Fino.jpg' },
      { name: 'Flip Flop Verniz Bege', imageUrl: 'https://i.postimg.cc/w3m0swNf/Flip-Flop-Verniz-Bege.jpg' },
      { name: 'Rasteira Napa Soft Bege Aveia', imageUrl: 'https://i.postimg.cc/n9B2bLZm/Rasteira-Napa-Soft-Bege-Aveia.jpg' },
      { name: 'Rasteira New Mestiço Creme', imageUrl: 'https://i.postimg.cc/bSkgcv8s/Rasteira-New-Mestico-Creme.jpg' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1560969184-10fe8719e047?q=80&w=800&auto=format&fit=crop' // elegant, minimal
  },
  'Fashion Essential': {
    title: 'Fashion Essential',
    emoji: '✨',
    description: 'Você ama unir estilo e praticidade. Seu guarda-roupa é moderno, versátil e elegante sem esforço. Você gosta de peças que acompanham sua rotina com conforto, sofisticação e informação de moda.',
    products: [
      { name: 'Tênis Floater Lux Preto', imageUrl: 'https://i.postimg.cc/5jCnFszG/Tenis-Floater-Lux-Preto.jpg' },
      { name: 'Tênis Couro Camurça Bege Biscuit', imageUrl: 'https://i.postimg.cc/8s6trZvX/Tenis-Couro-Camurca-Bege-Biscuit.jpg' },
      { name: 'Sandália Napa Soft Bege Palmilha Confort', imageUrl: 'https://i.postimg.cc/hQTsWGgT/Sandalia-Napa-Soft-Bege-Palmilha-Confort.jpg' },
      { name: 'Bolsa Média Floater Estruturada Marfim', imageUrl: 'https://i.postimg.cc/7b2mTKzX/Bolsa-Media-Floater-Estruturada-Marfim.jpg' }
    ],
    imageUrl: 'https://images.unsplash.com/photo-1608248593498-c178bea96eab?q=80&w=800&auto=format&fit=crop' // comfortable yet stylish
  }
};


export const questions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'Qual dessas versões de você aparece mais no dia a dia?',
    options: [
      {
        id: 'q1-a',
        text: 'A prática estilosa — gosto de estar confortável sem perder a elegância',
        scores: { 'Fashion Essential': 2, 'Chic Urbano': 1, 'Trend Icon': 0 }
      },
      {
        id: 'q1-b',
        text: 'A fashionista — adoro tendências e looks que chamam atenção',
        scores: { 'Fashion Essential': 0, 'Chic Urbano': 0, 'Trend Icon': 2 }
      },
      {
        id: 'q1-c',
        text: 'A clássica moderna — prefiro peças versáteis e sofisticadas',
        scores: { 'Fashion Essential': 1, 'Chic Urbano': 2, 'Trend Icon': 0 }
      },
      {
        id: 'q1-d',
        text: 'A urbana descomplicada — amo combinações modernas e fáceis de usar',
        scores: { 'Fashion Essential': 2, 'Chic Urbano': 1, 'Trend Icon': 1 }
      }
    ]
  },
  {
    id: 'q2',
    question: 'Quando um sapato conquista você, normalmente ele tem…',
    options: [
      {
        id: 'q2-a',
        text: 'Conforto e versatilidade pra acompanhar qualquer rotina',
        scores: { 'Fashion Essential': 2, 'Chic Urbano': 0, 'Trend Icon': 0 }
      },
      {
        id: 'q2-b',
        text: 'Design marcante e detalhes fashion',
        scores: { 'Fashion Essential': 0, 'Chic Urbano': 0, 'Trend Icon': 2 }
      },
      {
        id: 'q2-c',
        text: 'Elegância atemporal que combina com tudo',
        scores: { 'Fashion Essential': 0, 'Chic Urbano': 2, 'Trend Icon': 0 }
      },
      {
        id: 'q2-d',
        text: 'Estilo moderno sem esforço',
        scores: { 'Fashion Essential': 1, 'Chic Urbano': 1, 'Trend Icon': 1 }
      }
    ]
  },
  {
    id: 'q3',
    question: 'Seu look ideal faz você se sentir…',
    options: [
      {
        id: 'q3-a',
        text: 'Confiante e confortável ao mesmo tempo',
        scores: { 'Fashion Essential': 2, 'Chic Urbano': 0, 'Trend Icon': 0 }
      },
      {
        id: 'q3-b',
        text: 'Poderosa e cheia de personalidade',
        scores: { 'Fashion Essential': 0, 'Chic Urbano': 0, 'Trend Icon': 2 }
      },
      {
        id: 'q3-c',
        text: 'Elegante de forma natural',
        scores: { 'Fashion Essential': 0, 'Chic Urbano': 2, 'Trend Icon': 0 }
      },
      {
        id: 'q3-d',
        text: 'Moderna, leve e pronta pra qualquer ocasião',
        scores: { 'Fashion Essential': 1, 'Chic Urbano': 1, 'Trend Icon': 1 }
      }
    ]
  }
];

export function calculateResult(answers: Record<string, string>): ProfileResult {
  const totals: Record<ProfileType, number> = {
    'Fashion Essential': 0,
    'Chic Urbano': 0,
    'Trend Icon': 0
  };

  for (const q of questions) {
    const answerId = answers[q.id];
    if (answerId) {
      const option = q.options.find(o => o.id === answerId);
      if (option) {
        totals['Fashion Essential'] += option.scores['Fashion Essential'];
        totals['Chic Urbano'] += option.scores['Chic Urbano'];
        totals['Trend Icon'] += option.scores['Trend Icon'];
      }
    }
  }

  // Tie-breaker: Trend Icon -> Chic Urbano -> Fashion Essential
  let bestProfile: ProfileType = 'Fashion Essential';
  let maxScore = -1;

  const order: ProfileType[] = ['Trend Icon', 'Chic Urbano', 'Fashion Essential'];

  for (const profile of order) {
    if (totals[profile] > maxScore) {
      maxScore = totals[profile];
      bestProfile = profile;
    }
  }

  return profiles[bestProfile];
}
