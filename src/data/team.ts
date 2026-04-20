export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  yearsExp: number;
  favoriteStyle: string;
  enjoysMost: string;
  funFact: string;
  specialty: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "sophia-laurent",
    name: "Sophia Laurent",
    role: "Creative Director & Founder",
    image:
      "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80",
    bio: "After training at the prestigious Académie de Coiffure in Paris and working in some of the most sought-after salons in London and New York, Sophia returned to Winnipeg with one vision: to create a space where artistry and intention collide. She founded Lumière in 2012 with the belief that a great haircut isn't just a service — it's a transformation. Known for her signature balayage technique and her ability to truly listen to clients, Sophia brings warmth, precision, and unmistakable flair to every appointment.",
    yearsExp: 14,
    favoriteStyle: "Effortless lived-in balayage with a soft, sunlit finish",
    enjoysMost:
      "The quiet moment when a client sees themselves in the mirror and truly lights up",
    funFact:
      "She has an entire room in her home dedicated to her collection of vintage Vogue issues dating back to 1965.",
    specialty: "Balayage & Lived-In Color",
  },
  {
    id: "isabelle-chen",
    name: "Isabelle Chen",
    role: "Senior Color Specialist",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
    bio: "Isabelle discovered her passion for color theory long before she picked up a brush — she spent years studying fine art before channeling that eye into hair. With nine years of experience and a reputation for near-impossible color corrections, she has built a loyal following of clients who trust her with everything from bold transformations to the most delicate dimensional highlights. Her meticulous technique and genuine curiosity for her craft make every session feel like a collaboration.",
    yearsExp: 9,
    favoriteStyle:
      "Soft, multi-tonal dimensional highlights that catch light like a painting",
    enjoysMost:
      "Solving complex color corrections — the more challenging, the better",
    funFact:
      "She competes annually in regional floristry competitions and has won three times.",
    specialty: "Color Correction & Dimensional Highlights",
  },
  {
    id: "marcus-reid",
    name: "Marcus Reid",
    role: "Master Stylist",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&q=80",
    bio: "Marcus has an almost architectural approach to hair. Every line is intentional. Every texture considered. With over eleven years behind the chair, he has become Lumière's go-to for clients who want a cut that grows out beautifully and works with — not against — their natural texture. Whether he's crafting a sculptural short cut or a seamless layered blowout, Marcus brings quiet confidence and an exceptional eye for structure to every appointment.",
    yearsExp: 11,
    favoriteStyle: "A perfectly textured, effortlessly structured short cut",
    enjoysMost:
      "Working with clients who want to try something bold and trust the process",
    funFact:
      "In his spare time, he restores vintage motorcycles — a 1974 BMW R90/6 is his current project.",
    specialty: "Precision Cuts & Textured Styling",
  },
  {
    id: "olivia-park",
    name: "Olivia Park",
    role: "Color Artist",
    image:
      "https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=800&q=80",
    bio: "Olivia is the kind of colorist who becomes a true partner in your hair journey. Since joining the Lumière team six years ago, she has developed a specialty in soft, dreamy balayage and creative pastel transformations that feel fresh without being jarring. She takes her time with every consultation, building a thorough understanding of your hair's history, your lifestyle, and your vision before even touching a brush. Clients come to her from across the city for her gentle touch and remarkable results.",
    yearsExp: 6,
    favoriteStyle:
      "Peachy, buttery blonde balayage — warm, glowy, and effortlessly beautiful",
    enjoysMost:
      "The trust clients place in her when they're ready for a big change",
    funFact:
      "She makes ceramics in her home studio and gifts handmade mugs to clients on milestone appointments.",
    specialty: "Balayage & Pastel Color",
  },
  {
    id: "ethan-moreau",
    name: "Ethan Moreau",
    role: "Men's Grooming Specialist",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    bio: "Ethan built his career on the philosophy that men's grooming deserves the same artistry and attention as any other service. Eight years in, he has refined a signature approach that blends classic barbering techniques with a modern aesthetic sensibility. From skin fades to full beard designs, Ethan creates looks that are sharp without being rigid, and always perfectly suited to each client's face shape and personal style. His chair has become a destination for Winnipeg's most discerning men.",
    yearsExp: 8,
    favoriteStyle:
      "A clean mid-fade with soft texture on top — timeless and always sharp",
    enjoysMost:
      "Building long-term relationships with regular clients who trust him to evolve their look",
    funFact:
      "He is an amateur coffee roaster and brings small-batch roasts from his home setup to share with the team each week.",
    specialty: "Fades, Textured Cuts & Beard Design",
  },
  {
    id: "ava-thornton",
    name: "Ava Thornton",
    role: "Bridal & Events Specialist",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80",
    bio: "Ava has been crafting unforgettable hair moments for over a decade. Specializing in bridal and editorial styling, she approaches every updo, every braid, and every special occasion look with the precision of a sculptor and the soul of an artist. She has worked on weddings across Manitoba and beyond, and her ability to manage nerves, timelines, and the demands of a wedding morning with grace has made her one of the most in-demand bridal stylists in the province. Booking early is strongly advised.",
    yearsExp: 10,
    favoriteStyle: "A romantic, undone chignon with soft face-framing tendrils",
    enjoysMost: "Being part of the most important moments in people's lives",
    funFact:
      "She teaches ballroom dance on weekends and credits it for her exceptional spatial awareness and sense of movement.",
    specialty: "Bridal Updos & Editorial Styling",
  },
];
