export interface ProblemItem {
  id: string;
  title: string;
  description: string;
  iconName: 'scale' | 'sparkles' | 'activity' | 'heart' | 'baby' | 'shield';
}

export interface SpecialisationItem {
  id: string;
  title: string;
  shortDescription: string;
  detailedOverview: string;
  nutritionFocus: string[];
  concernOption: string;
  iconName:
    | 'scale'
    | 'flower'
    | 'activity'
    | 'heartPulse'
    | 'baby'
    | 'droplets'
    | 'flame'
    | 'clipboardList';
}

export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  iconName:
    | 'compass'
    | 'utensils'
    | 'bookOpen'
    | 'heartHandshake'
    | 'calendarCheck'
    | 'laptop'
    | 'shoppingBag'
    | 'sprout';
}

export interface StepItem {
  stepNumber: string;
  title: string;
  description: string;
}

export interface ProgramItem {
  id: string;
  name: string;
  pricePlaceholder: string;
  cadenceNote: string;
  tierLabel?: string;
  features: string[];
  ctaLabel: string;
  consultationTypeValue: string;
  featuredBorder?: boolean;
}

export interface ClientReview {
  id: string;
  reviewer: string;
  rating: number;
  review: string;
  highlightedPhrases: string[];
  date?: string;
  verified?: boolean;
  sourceAttribution: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const PROBLEM_ITEMS: ProblemItem[] = [
  {
    id: 'belly-fat',
    title: 'Stubborn Belly Fat',
    description: 'Finding it difficult to manage abdominal weight, especially after pregnancy?',
    iconName: 'scale',
  },
  {
    id: 'pcos-pcod',
    title: 'PCOS / PCOD',
    description: 'Dealing with weight fluctuations and finding nutrition changes difficult to maintain?',
    iconName: 'sparkles',
  },
  {
    id: 'insulin-resistance',
    title: 'Insulin Resistance',
    description: 'Concerned about blood sugar regulation, cravings and metabolic health?',
    iconName: 'activity',
  },
  {
    id: 'thyroid',
    title: 'Thyroid Concerns',
    description: 'Unsure how to plan meals around your thyroid-related dietary needs?',
    iconName: 'heart',
  },
  {
    id: 'postpartum',
    title: 'Postpartum Weight Changes',
    description: 'Finding it difficult to rebuild healthy eating habits after pregnancy?',
    iconName: 'baby',
  },
  {
    id: 'diabetes-metabolic',
    title: 'Diabetes & Metabolic Health',
    description: 'Looking for a structured nutrition approach that supports your health goals?',
    iconName: 'shield',
  },
];

export const SOLUTION_PILLARS: string[] = [
  'Individual nutrition consultations',
  'Personalised diet planning',
  'Women-focused nutrition guidance',
  'Metabolic health support',
  'Structured multi-month nutrition programs',
  'Online follow-up consultations',
];

export const SPECIALISATION_ITEMS: SpecialisationItem[] = [
  {
    id: 'weight-management',
    title: 'Weight Management',
    shortDescription:
      'Sustainable fat and weight management designed around your body, daily routine and realistic food habits.',
    detailedOverview:
      'Rather than short-term calorie restriction, weight management consultations focus on balanced nourishment, satiety, portion awareness and eating patterns that can be maintained comfortably over time.',
    nutritionFocus: [
      'Meal balance with adequate protein, fibre and micronutrients',
      'Practical adjustments tailored to home-cooked and family meals',
      'Gradual, sustainable habit refinement alongside progress reviews',
    ],
    concernOption: 'Weight Management',
    iconName: 'scale',
  },
  {
    id: 'pcos-pcod',
    title: 'PCOS / PCOD Nutrition',
    shortDescription:
      'Empathetic, structured dietary guidance tailored for women navigating PCOS/PCOD alongside clinical care.',
    detailedOverview:
      'Consultations address meal timing, carbohydrate quality and overall dietary balance to support daily energy and nutritional adequacy while complementing advice from your treating doctor.',
    nutritionFocus: [
      'Glycaemic-conscious meal pairing using familiar everyday foods',
      'Sustainable eating routines that reduce decision fatigue',
      'Individualised plans aligned with your lifestyle and medical context',
    ],
    concernOption: 'PCOS / PCOD',
    iconName: 'flower',
  },
  {
    id: 'insulin-resistance',
    title: 'Insulin Resistance',
    shortDescription:
      'Thoughtful nutrition strategies focused on steady energy, balanced meals and blood sugar awareness.',
    detailedOverview:
      'Personalised consultations examine meal composition, food order, fibre intake and practical snacking habits to support metabolic balance in everyday life.',
    nutritionFocus: [
      'Balanced macronutrient distribution across meals',
      'Practical strategies for managing cravings and energy dips',
      'Alignment with any ongoing medical or laboratory guidance',
    ],
    concernOption: 'Insulin Resistance',
    iconName: 'activity',
  },
  {
    id: 'thyroid-support',
    title: 'Thyroid Nutrition Support',
    shortDescription:
      'Practical meal planning designed to support overall nourishment alongside your thyroid care.',
    detailedOverview:
      'Dietary support for thyroid-related concerns focuses on nutrient-dense daily meals, realistic routines around medication timing and steady energy without restrictive food rules.',
    nutritionFocus: [
      'Nutrient-balanced meal structuring for everyday consistency',
      'Thoughtful meal timing mindful of your daily routine',
      'Individualised guidance coordinated with your healthcare plan',
    ],
    concernOption: 'Thyroid',
    iconName: 'heartPulse',
  },
  {
    id: 'postpartum',
    title: 'Postpartum Weight Management',
    shortDescription:
      'Gentle, recovery-mindful nutrition support for mothers rebuilding strength and weight balance after pregnancy.',
    detailedOverview:
      'Postpartum nutrition requires care, patience and practicality. Guidance is tailored to sleep patterns, recovery needs, feeding routines and family schedules—with medical clearance considered where appropriate.',
    nutritionFocus: [
      'Nourishing meals that prioritise maternal energy and recovery',
      'Realistic meal structures suited to busy caregiving schedules',
      'Respectful, non-rushed approach to postpartum weight goals',
    ],
    concernOption: 'Postpartum Weight Management',
    iconName: 'baby',
  },
  {
    id: 'diabetes-nutrition',
    title: 'Diabetes Nutrition',
    shortDescription:
      'Structured, evidence-informed dietary planning to support blood glucose management and daily well-being.',
    detailedOverview:
      'Consultations focus on realistic carbohydrate planning, portion clarity and culturally familiar meals to support your diabetes management alongside your physician’s care.',
    nutritionFocus: [
      'Consistent meal spacing and balanced plate planning',
      'Clear guidance for everyday home meals and eating out',
      'Ongoing dietary review to keep habits practical and sustainable',
    ],
    concernOption: 'Diabetes',
    iconName: 'droplets',
  },
  {
    id: 'metabolic-health',
    title: 'Metabolic Health',
    shortDescription:
      'Holistic nutrition support aimed at strengthening metabolic resilience, vitality and everyday habits.',
    detailedOverview:
      'Metabolic health consultations look at your broader eating rhythm, hydration, protein adequacy and food quality to build a steady foundation for long-term health.',
    nutritionFocus: [
      'Whole-food centred meal structure adapted to your palate',
      'Balanced eating windows suited to work and family life',
      'Structured check-ins for meaningful, lasting habit change',
    ],
    concernOption: 'Metabolic Health',
    iconName: 'flame',
  },
  {
    id: 'clinical-diet',
    title: 'Clinical Diet Planning',
    shortDescription:
      'Individualised clinical nutrition plans crafted around relevant health history, preferences and daily life.',
    detailedOverview:
      'Every clinical diet plan is built from your individual health profile, food preferences and routine—translating clinical dietetics principles into clear, approachable daily meals.',
    nutritionFocus: [
      'Review of relevant health information shared during intake',
      'Clear, structured meal guidance without extreme restrictions',
      'Adaptable recommendations that evolve with your progress',
    ],
    concernOption: 'Other',
    iconName: 'clipboardList',
  },
];

export const BENEFIT_ITEMS: BenefitItem[] = [
  {
    id: 'lifestyle',
    title: 'Nutrition Plans Designed Around Your Lifestyle',
    description: 'Guidance shaped around your work hours, family kitchen and cultural food preferences.',
    iconName: 'compass',
  },
  {
    id: 'sustainable',
    title: 'Practical and Sustainable Eating Habits',
    description: 'Calm, realistic routines designed to last beyond short-term dieting cycles.',
    iconName: 'utensils',
  },
  {
    id: 'meal-guidance',
    title: 'Personalised Food and Meal Guidance',
    description: 'Clear meal combinations and portion guidance tailored to your individual health profile.',
    iconName: 'bookOpen',
  },
  {
    id: 'women-needs',
    title: "Support for Women's Specific Nutrition Needs",
    description: 'Dedicated clinical focus on hormonal transitions, postpartum recovery and metabolic care.',
    iconName: 'heartHandshake',
  },
  {
    id: 'reviews',
    title: 'Structured Progress Reviews',
    description: 'Regular check-ins according to your program to refine meals as your routine evolves.',
    iconName: 'calendarCheck',
  },
  {
    id: 'online',
    title: 'Flexible Online Consultations',
    description: 'Connect from the comfort of home without clinic commutes or disrupting your day.',
    iconName: 'laptop',
  },
  {
    id: 'everyday',
    title: 'Guidance for Everyday Food Choices',
    description: 'Confidence navigating family meals, social gatherings, travel and busy workdays.',
    iconName: 'shoppingBag',
  },
  {
    id: 'long-term',
    title: 'Long-Term Healthy Habit Building',
    description: 'A respectful, nourishment-first relationship with food focused on lasting wellbeing.',
    iconName: 'sprout',
  },
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    stepNumber: '01',
    title: 'Book Your Consultation',
    description: 'Choose your preferred online consultation and share your health goals.',
  },
  {
    stepNumber: '02',
    title: 'Get Your Personalised Plan',
    description: 'Discuss your lifestyle, eating habits, health concerns and nutrition needs.',
  },
  {
    stepNumber: '03',
    title: 'Follow Your Nutrition Journey',
    description:
      'Work towards your goals with structured guidance and follow-up support according to your selected program.',
  },
];

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'initial-consultation',
    name: 'Personalised Diet Consultation',
    pricePlaceholder: '₹999',
    cadenceNote: 'One-time consultation',
    features: [
      'Individual online consultation',
      'Discussion of nutrition and health goals',
      'Review of relevant health information',
      'Initial dietary guidance',
      'Recommended next steps',
    ],
    ctaLabel: 'Book Consultation',
    consultationTypeValue: 'Personalised Diet Consultation',
  },
  {
    id: 'personalised-plan',
    name: '1-Month Transformation Program',
    pricePlaceholder: '₹2,999',
    cadenceNote: '4-week nutrition program',
    tierLabel: 'Most Popular',
    features: [
      'Individual online consultation',
      'Personalised diet plan',
      'Meal planning guidance',
      'Food and lifestyle recommendations',
      'Follow-up support as agreed',
    ],
    ctaLabel: 'Choose This Plan',
    consultationTypeValue: '1-Month Transformation Program',
    featuredBorder: true,
  },
  {
    id: 'structured-wellness',
    name: '3-Month Complete Wellness Program',
    pricePlaceholder: '₹7,999',
    cadenceNote: '12-week guided program',
    tierLabel: 'Premium',
    features: [
      'Multi-month nutrition program',
      'Personalised nutrition strategy',
      'Progress reviews',
      'Ongoing dietary guidance',
      'Structured follow-up consultations',
    ],
    ctaLabel: 'Explore This Program',
    consultationTypeValue: '3-Month Complete Wellness Program',
  },
];

export const CLIENT_REVIEWS: ClientReview[] = [
  {
    id: 'review-1',
    reviewer: 'Client Review 1',
    rating: 5,
    review:
      'My experience with NutriPoint has been excellent. I lost around 8 kg in just 3 months by following the diet plan consistently. Dr. Amtaul Kareem Fatima is very friendly, supportive and creates personalized diet plans based on your likes, dislikes.',
    highlightedPhrases: ['personalized diet plans', 'friendly, supportive'],
    sourceAttribution: 'Dr. Amtaul Kareem Fatima',
  },
  {
    id: 'review-2',
    reviewer: 'Swati Joshi',
    rating: 5,
    review:
      'It was a wonderful experience consulting Dr. Amtaul Kareem Fatima. She customized the diet plan so well that it was overall very beneficial for the health. She listens very patiently and guides for lifestyle changes in the most practical way.',
    highlightedPhrases: ['customized the diet plan', 'lifestyle changes'],
    sourceAttribution: 'Dr. Amtaul Kareem Fatima',
  },
  {
    id: 'review-3',
    reviewer: 'Krishna Uppalapati',
    rating: 5,
    review:
      'Dr. Amtaul is very patient and a great listener. She understands your needs and provides healthy, effective diet plans. Her advice is practical and easy to follow. Highly recommended.',
    highlightedPhrases: ['healthy, effective diet plans', 'practical and easy to follow'],
    sourceAttribution: 'Dr. Amtaul Kareem Fatima',
  },
  {
    id: 'review-4',
    reviewer: 'Anmol Srivastava',
    rating: 5,
    review:
      'I had a really good experience with Nutripoint Nutrition Clinic in Hyderabad. The diet plans were personalized, practical, and easy to follow in daily life. Dr. Amtaul was very supportive throughout the journey.',
    highlightedPhrases: ['personalized, practical, and easy to follow', 'very supportive'],
    sourceAttribution: 'Dr. Amtaul Kareem Fatima',
  },
  {
    id: 'review-5',
    reviewer: 'Nikhil Ahuja',
    rating: 5,
    review:
      'I reduced 6 kg in just 2 months without any crash dieting or starving. The best part was that the diet included simple home-made Indian food like roti and rice.',
    highlightedPhrases: ['simple home-made Indian food'],
    sourceAttribution: 'Dr. Amtaul Kareem Fatima',
  },
  {
    id: 'review-6',
    reviewer: 'Shriyans',
    rating: 5,
    review:
      'Very good experience, very helpful and insightful. Dr. Amtaul suggested a custom meal plan and overall lifestyle improvements. Her experience and knowledge reflects in the same.',
    highlightedPhrases: ['custom meal plan', 'overall lifestyle improvements'],
    sourceAttribution: 'Dr. Amtaul Kareem Fatima',
  },
  {
    id: 'review-7',
    reviewer: 'S Ch',
    rating: 5,
    review:
      'Dr. Amtaul helped me bring discipline and focus to my diet. She understands the problem and gives solutions in an empathetic manner. Feels like talking to a friend. I would definitely recommend her.',
    highlightedPhrases: ['empathetic manner'],
    sourceAttribution: 'Dr. Amtaul Kareem Fatima',
  },
  {
    id: 'review-8',
    reviewer: 'Pankaj Agarwal',
    rating: 5,
    review:
      'Personalised nutrition guidance, practical advice and supportive consultation experience.',
    highlightedPhrases: ['Personalised nutrition guidance', 'supportive consultation experience'],
    sourceAttribution: 'Dr. Amtaul Kareem Fatima',
  },
];

export const ONLINE_FEATURES: string[] = [
  'Convenient online sessions',
  'Personalised consultation',
  'Flexible scheduling',
  'Digital nutrition guidance',
  'Follow-up consultations according to your program',
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Are consultations available online?',
    answer:
      'Yes. All consultations are conducted online, allowing you to connect from wherever you are.',
  },
  {
    id: 'faq-2',
    question: 'Do you provide diet plans for PCOS and PCOD?',
    answer:
      'Personalised nutrition guidance is available for women with PCOS/PCOD, taking individual needs and medical advice into consideration.',
  },
  {
    id: 'faq-3',
    question: 'Can I get nutrition guidance for insulin resistance?',
    answer:
      'Yes. Individual nutrition consultations can address dietary habits and nutrition strategies relevant to insulin resistance.',
  },
  {
    id: 'faq-4',
    question: 'Do you help with postpartum weight management?',
    answer:
      'Yes. Nutrition guidance can be tailored to postpartum routines, food preferences and individual recovery needs. Medical clearance may be important depending on your circumstances.',
  },
  {
    id: 'faq-5',
    question: 'Do you provide thyroid and diabetes diet plans?',
    answer:
      'Personalised dietary guidance can be discussed for thyroid-related concerns and diabetes, alongside appropriate medical care.',
  },
  {
    id: 'faq-6',
    question: 'How do I start?',
    answer:
      'Submit the consultation form or contact the team through WhatsApp to enquire about available consultation options.',
  },
  {
    id: 'faq-7',
    question: 'Will I receive a personalised diet plan?',
    answer:
      'The type of diet plan and support will depend on the consultation or program selected.',
  },
  {
    id: 'faq-8',
    question: 'Is weight loss guaranteed?',
    answer:
      'No. Individual results vary. The focus is on sustainable nutrition habits and appropriate health goals rather than guaranteed results.',
  },
];

export const CONCERN_OPTIONS: string[] = [
  'Weight Management',
  'PCOS / PCOD',
  'Insulin Resistance',
  'Thyroid',
  'Postpartum Weight Management',
  'Diabetes',
  'Metabolic Health',
  'Other',
];

export const CONSULTATION_TYPE_OPTIONS: string[] = [
  'Personalised Diet Consultation',
  '1-Month Transformation Program',
  '3-Month Complete Wellness Program',
];
