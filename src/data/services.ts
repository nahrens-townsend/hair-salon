export interface ServiceItem {
  name: string;
  price: string;
  note?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  items: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'womens-cuts',
    title: "Women's Haircuts",
    description: 'A thorough consultation, precision cut, and blowout — tailored to your face shape, texture, and lifestyle.',
    icon: '✂',
    items: [
      { name: 'Cut & Blowout', price: '$85 – $110' },
      { name: 'Cut & Style (no blowout)', price: '$65 – $85' },
      { name: 'Fringe / Bangs Trim', price: '$25' },
      { name: 'Long Hair Surcharge (below shoulder blade)', price: '+$15' },
    ],
  },
  {
    id: 'mens-cuts',
    title: "Men's Haircuts",
    description: 'Sharp, sculpted, and styled. Classic barbering meets a modern approach for a look that holds.',
    icon: '✦',
    items: [
      { name: 'Cut & Style', price: '$55 – $75' },
      { name: 'Beard Trim & Shape', price: '$30 – $45' },
      { name: 'Cut, Beard & Style', price: '$80 – $110' },
      { name: 'Hot Towel Shave', price: '$55' },
    ],
  },
  {
    id: 'kids-cuts',
    title: "Kids' Cuts",
    description: 'Gentle, patient, and fun — because great hair starts young. Ages 12 and under.',
    icon: '◆',
    items: [
      { name: "Kids' Cut (under 6)", price: '$35' },
      { name: "Kids' Cut (ages 6–12)", price: '$45' },
      { name: "Teen Cut & Style (13–17)", price: '$55 – $65' },
    ],
  },
  {
    id: 'hair-color',
    title: 'Hair Colouring',
    description: 'From subtle root touch-ups to full transformations — blended, layered, and painted with care.',
    icon: '◈',
    items: [
      { name: 'Root Touch-Up', price: '$95 – $130' },
      { name: 'Full Color', price: '$130 – $190' },
      { name: 'Balayage', price: '$195 – $310' },
      { name: 'Full Highlights', price: '$170 – $240' },
      { name: 'Partial Highlights', price: '$130 – $180' },
      { name: 'Toner / Gloss', price: '$55 – $75', note: 'Stand-alone or add-on' },
      { name: 'Color Correction', price: 'From $250', note: 'Consultation required' },
    ],
  },
  {
    id: 'chemical',
    title: 'Chemical Services',
    description: 'Transformative texture services performed with the utmost care for your hair\'s integrity.',
    icon: '⬡',
    items: [
      { name: 'Regrowth Relaxer', price: '$110 – $150' },
      { name: 'Partial Keratin', price: '$175 – $225' },
      { name: 'Full Keratin Smoothing', price: '$280 – $380' },
      { name: 'Partial Foils', price: '$150 – $200' },
      { name: 'Full Foils', price: '$210 – $280' },
      { name: 'Perm / Body Wave', price: '$160 – $220' },
    ],
  },
  {
    id: 'styling',
    title: 'Styling Services',
    description: 'Polished, effortless, and ready for anything — from everyday blowouts to showstopping occasion styles.',
    icon: '✿',
    items: [
      { name: 'Blowout & Blowdry', price: '$65 – $85' },
      { name: 'Textured / Curled Style', price: '$70 – $95' },
      { name: 'Bridal Updo', price: '$175 – $250' },
      { name: 'Half Updo', price: '$100 – $145' },
      { name: 'Braided Style', price: '$85 – $160' },
      { name: 'Event & Trial Styling', price: '$95 – $150', note: 'Trial recommended' },
    ],
  },
  {
    id: 'extensions',
    title: 'Hair Extensions',
    description: 'Length, volume, and dimension — installed with precision and customized to blend seamlessly with your natural hair.',
    icon: '◇',
    items: [
      { name: 'Tape-In Extensions', price: 'From $450', note: 'Consultation required' },
      { name: 'Weft Extensions', price: 'From $550', note: 'Consultation required' },
      { name: 'Extension Removal', price: '$75 – $120' },
      { name: 'Extension Maintenance Move-Up', price: 'From $200', note: 'Every 6–8 weeks' },
    ],
  },
];

export const bookingPolicy = {
  cancellation: 'We kindly ask for a minimum of 48 hours notice for all cancellations and reschedules. Cancellations within 24 hours will be subject to a fee of 50% of the scheduled service.',
  newClientDeposit: 'New clients booking color or chemical services are required to provide a $100 non-refundable deposit at the time of booking. This deposit is applied to your service total.',
  lateArrival: 'If you arrive more than 15 minutes past your appointment time, we may need to modify or reschedule your service to avoid impacting other guests.',
  consultations: 'All color correction and extension services begin with a complimentary in-person consultation. We do not begin these services without one.',
};
