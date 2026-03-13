// Static data — replace with Sanity/Contentful in V2

export type Technique = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  heritage: string;
  applications: string[];
  image: string;
};

export type PortfolioItem = {
  slug: string;
  title: string;
  category: "Bridal" | "Couture" | "Prêt" | "Accessories" | "Editorial";
  technique: string[];
  year: string;
  brief: string;
  solution: string;
  outcome: string;
  role: string;
  materials: string;
  complexity: string;
  client: string;
  image: string;
  gallery: string[];
};

export type JournalPost = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  readTime: string;
};

export type Artisan = {
  name: string;
  title: string;
  years: string;
  speciality: string;
  bio: string;
  image: string;
};

export type Collaboration = {
  slug: string;
  designer: string;
  label: string;
  category: "Runway" | "Bridal" | "Film" | "Export";
  year: string;
  description: string;
  image: string;
  quote?: string;
};

// Techniques
export const techniques: Technique[] = [
  {
    slug: "zari",
    name: "Zari",
    tagline: "Woven from gold and silver threads",
    description:
      "Zari embroidery weaves metallic threads — traditionally pure gold or silver — directly into fabric, creating luminous, structured surfaces that catch and hold light. At Zarguzari, zari work is executed with the discipline of a centuries-old craft, updated for the demands of contemporary couture.",
    heritage:
      "Originating in Persia and perfected across the Mughal courts of India, zari reached its apex in the workshops of Surat and Varanasi. We carry that legacy with intention — honouring the material while working at the speed of modern fashion.",
    applications: [
      "Bridal lehenga borders and bodices",
      "Couture evening gowns",
      "Structured outerwear panels",
      "Veils and dupattas",
    ],
    image: "/images/technique-zari.jpg",
  },
  {
    slug: "zardozi",
    name: "Zardozi",
    tagline: "Hand-stitched metal embroidery of imperial heritage",
    description:
      "Zardozi — literally 'work with gold' — employs a heavy needle and thick metallic threads to build richly textured, dimensional surfaces. Unlike simpler brocade, zardozi is entirely hand-worked, creating organic depth impossible to replicate by machine.",
    heritage:
      "The craft was a royal monopoly for centuries, adorning the robes of emperors and the trappings of war elephants. Today we apply its logic to bridal couture and luxury ready-to-wear, maintaining the hand-work discipline that defines its character.",
    applications: [
      "Statement bridal and couture pieces",
      "Heavily embellished panel work",
      "Luxury accessories and clutches",
      "Film and costume commissions",
    ],
    image: "/images/technique-zardozi.jpg",
  },
  {
    slug: "aari",
    name: "Aari / Frame Embroidery",
    tagline: "The hook-needle craft of continuous stitch",
    description:
      "Aari embroidery uses a fine hooked needle on a stretched frame to create fast, flowing chain-stitch surfaces. Its speed and fluidity make it ideal for large yardage and intricate all-over patterns — the foundation of many export and prêt collections.",
    heritage:
      "Rooted in the embroidery culture of Kashmir and Lucknow, aari translated naturally to the industrial-scale demands of global fashion. Our studio maintains both the artisanal quality and the technical rigour that export buyers require.",
    applications: [
      "All-over embroidered yardage",
      "Prêt and export collections",
      "Lightweight bridal fabrics",
      "Sheer and organza work",
    ],
    image: "/images/technique-aari.jpg",
  },
  {
    slug: "mixed-media",
    name: "Bead, Sequin & Appliqué",
    tagline: "Mixed-media embellishment for contemporary couture",
    description:
      "Beyond metallic threads, Zarguzari's artisans work extensively with beads, sequins, mirror-work, and appliqué — layering materials to build the complex, multi-dimensional surfaces that define modern couture embellishment.",
    heritage:
      "India's embroidery tradition has always incorporated found materials, from shells and beetles to imported crystal. We continue that adaptive spirit, combining traditional frameworks with contemporary materials sourced globally.",
    applications: [
      "Evening and occasion wear",
      "Editorial and costume",
      "Luxury accessories",
      "Textile art commissions",
    ],
    image: "/images/technique-beads.jpg",
  },
];

// Portfolio
export const portfolioItems: PortfolioItem[] = [
  {
    slug: "sculptural-bridal-lehenga",
    title: "Sculptural Bridal Lehenga",
    category: "Bridal",
    technique: ["Zardozi", "Zari"],
    year: "2023",
    brief:
      "A leading Delhi couture house required a signature bridal lehenga with architectural hem embroidery that would read at runway distance while remaining wearable for a 6-hour function.",
    solution:
      "We developed a zardozi lattice structure reinforced with raised padded work, using antique gold threads against ivory silk base. The pattern scales from dense at the hem to sparse at the waist, giving visual lift.",
    outcome:
      "The piece became the centrepiece of the designer's bridal showcase and was featured in Vogue India's bridal edit.",
    role: "Full sampling, approval, and production panels",
    materials: "Antique gold threads, padded cardboard insert, ivory raw silk",
    complexity: "High — 340 karigari hours",
    client: "Couture house (Delhi) — name on request",
    image: "/images/portfolio-bridal-lehenga.jpg",
    gallery: [
      "/images/portfolio-bridal-lehenga-2.jpg",
      "/images/portfolio-bridal-lehenga-3.jpg",
    ],
  },
  {
    slug: "ombre-zari-yardage",
    title: "Ombré Zari Yardage",
    category: "Prêt",
    technique: ["Zari", "Aari"],
    year: "2023",
    brief:
      "A French brand required 400 metres of ombré-effect embroidered fabric for a resort collection, transitioning from dense zari at selvedge to bare silk at centre.",
    solution:
      "We mapped the gradient precisely across the loom width, using progressive thread reduction and tone-shifted threads from deep gold to pale champagne. Aari work anchored the transition zones.",
    outcome:
      "Delivered on time with <0.5% variation across lots. The collection sold out in pre-orders.",
    role: "Full production yardage",
    materials: "Gold, champagne, and silver zari threads on pure silk georgette",
    complexity: "Medium — precision colour calibration",
    client: "French resort label — confidential",
    image: "/images/portfolio-zari-yardage.jpg",
    gallery: ["/images/portfolio-zari-yardage-2.jpg"],
  },
  {
    slug: "couture-evening-bodice",
    title: "Couture Evening Bodice Panels",
    category: "Couture",
    technique: ["Zardozi", "Mixed Media"],
    year: "2024",
    brief:
      "A London-based designer required six bodice panels using three-dimensional embroidery that would read as sculptural in editorial photography.",
    solution:
      "We combined raised zardozi floral forms with hand-stitched crystal beading, working each petal individually to create dimensional shadow play under studio lighting.",
    outcome:
      "Featured in British Vogue and worn at the CFDA awards.",
    role: "Sampling and six final panels",
    materials: "Swarovski crystal, gold bullion, velvet padding",
    complexity: "Very high — 180 hours per panel",
    client: "London couture label",
    image: "/images/portfolio-couture-bodice.jpg",
    gallery: [
      "/images/portfolio-couture-bodice-2.jpg",
      "/images/portfolio-couture-bodice-3.jpg",
    ],
  },
  {
    slug: "accessory-clutch-collection",
    title: "Embroidered Clutch Collection",
    category: "Accessories",
    technique: ["Zardozi", "Beads"],
    year: "2024",
    brief:
      "A luxury accessories house required 12 prototype clutch fronts with varying embroidery styles for client approval, then production of chosen 4 designs.",
    solution:
      "We developed a modular embroidery system that allowed quick recombination of motifs across clutch formats, reducing prototype time by 40%.",
    outcome:
      "All 4 production designs placed for the holiday collection. Reorder within 3 months.",
    role: "Prototyping, sampling, and production",
    materials: "Semi-precious stones, antique gold, seed pearls",
    complexity: "Medium-high",
    client: "Luxury accessories house — Mumbai",
    image: "/images/portfolio-clutch.jpg",
    gallery: ["/images/portfolio-clutch-2.jpg"],
  },
  {
    slug: "runway-embroidered-coat",
    title: "Embroidered Runway Overcoat",
    category: "Couture",
    technique: ["Zari", "Appliqué"],
    year: "2024",
    brief:
      "An avant-garde designer required a full-length coat with bold geometric zari panels that referenced Islamic architectural tilework.",
    solution:
      "We translated the geometric brief into interlocking zari fills, using inlay appliqué to define the tile boundaries with contrast silk.",
    outcome:
      "Opened the SS25 runway show and was acquired by a museum textile collection.",
    role: "Design interpretation, sampling, and production",
    materials: "Pure gold zari, hand-dyed silk appliqué, organdie base",
    complexity: "High — 520 karigari hours",
    client: "Indian avant-garde designer",
    image: "/images/portfolio-coat.jpg",
    gallery: ["/images/portfolio-coat-2.jpg", "/images/portfolio-coat-3.jpg"],
  },
  {
    slug: "bridal-dupatta-veil",
    title: "Sheer Bridal Veil",
    category: "Bridal",
    technique: ["Zari", "Aari"],
    year: "2023",
    brief:
      "A bridal brand required a 3-metre silk net veil with fine border work that would remain weightless while carrying visual significance.",
    solution:
      "Using aari on stretched net, we created a continuous micro-floral zari border that compresses to near-invisible when gathered and expands fully when extended.",
    outcome:
      "Became the brand's signature veil, now in its third season of reorders.",
    role: "Sampling and production",
    materials: "Fine gold zari, silk net, pearl droplets",
    complexity: "Medium — scale precision critical",
    client: "Bridal brand — confidential",
    image: "/images/portfolio-veil.jpg",
    gallery: ["/images/portfolio-veil-2.jpg"],
  },
];

// Journal
export const journalPosts: JournalPost[] = [
  {
    slug: "from-brief-to-bead",
    title: "From Brief to Bead: Our Process",
    category: "Process",
    date: "February 2025",
    excerpt:
      "A window into how a client's moodboard becomes 500 hours of handwork — and why the translation is where real craft lives.",
    content: `When a designer sends us a reference image — often a photograph of a stone, a fragment of old textile, or a sketch in pencil — the work of interpretation begins long before needle meets fabric.

The first conversation is about understanding what the designer sees in their reference that they want the embroidery to carry. Is it the surface texture? The weight? The way light moves through? This conversation shapes everything.

We then work in three passes. The first is a material sample — small, exploratory, sometimes wrong. This is where we establish thread weights, stitch density, and colour. The second pass is a technical sample — working in context, on the actual ground fabric, at actual scale. This is where adjustments happen. The third pass is sign-off.

The production that follows is disciplined repetition of what the third pass established. Every karigari (artisan) in our studio works from the approved sample, which hangs visible above their frame throughout production.

This process sounds linear, but it rarely is. The best work comes from designers who stay in dialogue through the sample stages — who bring new references, who allow the embroidery to teach them something about what they're making.`,
    image: "/images/journal-process.jpg",
    readTime: "4 min read",
  },
  {
    slug: "heritage-of-zardozi",
    title: "The Heritage of Zardozi",
    category: "Heritage",
    date: "January 2025",
    excerpt:
      "From Mughal courts to Paris ateliers — how a royal craft became the quiet language of couture.",
    content: `Zardozi — the word comes from Persian: zar (gold) and dozi (embroidery). It arrived in India in the Mughal period and was quickly absorbed into the court's visual vocabulary, where it marked rank, wealth, and refinement.

The craft is labour-intensive by definition. A skilled karigari working at their peak can cover perhaps a quarter-metre of dense panel in a day. This is not a craft that scales easily, which is precisely why it has become a marker of couture — something that takes months of human attention cannot be cheap, and that fact is visible in the result.

In the mid-20th century, zardozi found its way into European haute couture houses via the export embroidery trade. The craft had always been outward-looking — Mughal embroideries were themselves synthetic, absorbing Persian, Central Asian, and indigenous Indian motifs into a unified language.

At Zarguzari, we understand ourselves as one link in a very long chain. Our work is continuous with the court workshops of Agra, the export ateliers of Lucknow, and the contemporary couture studios of Mumbai and Paris. We do not romanticise tradition — we practise it.`,
    image: "/images/journal-heritage.jpg",
    readTime: "5 min read",
  },
  {
    slug: "meet-the-artisans",
    title: "The People of the Atelier",
    category: "Artisans",
    date: "December 2024",
    excerpt:
      "Our studio's continuity depends on its people. Here, three master artisans share what the craft means across generations.",
    content: `Ramzan bhai has been working the zardozi frame since 1987. He was 19 when he joined us, and his first assignment was a wedding shawl for a Rajasthani family — a piece that took him three months. He still talks about it.

His son, Arif, joined us in 2018 after training with a Surat embroidery master. The difference in their hands is subtle — Ramzan bhai works with the rhythmic confidence of someone for whom the stitch is reflex; Arif works with the controlled precision of someone who learned technique systematically. Both are necessary. We have always believed that a studio needs to hold its knowledge in many registers.

Sunita ben joined us in 2009 and leads our aari team. She specialises in fine work on sheer fabrics — a specialism that requires particular sensitivity to tension, since a heavy hand on organza distorts the entire panel. Her work is used extensively for bridal veils and lightweight export yardage.

These three represent something the industry does not often name directly: the fact that craft transmission is a form of care. Each piece that leaves our studio carries the specific learning of its makers — their decisions about stitch density, their reading of the brief, their accumulated understanding of what a particular thread will and will not do.`,
    image: "/images/journal-artisans.jpg",
    readTime: "6 min read",
  },
  {
    slug: "working-with-global-designers",
    title: "Working With Global Designers",
    category: "Collaboration",
    date: "November 2024",
    excerpt:
      "What we've learned from 10 years of international collaboration — and what makes the difference between a difficult project and a great one.",
    content: `The most productive international collaborations share a common quality: the designer understands that the embroidery will make demands on the design.

This sounds like common sense but it is frequently overlooked. Embroidery has weight. Embroidery changes how fabric drapes, how it photographs, how it sits on a body. A designer who treats embroidery as a layer applied to a finished design often ends up in conflict with the result. A designer who designs for embroidery — who thinks about the embroidery's logic from the earliest sketch — tends to end up with something extraordinary.

We have worked with studios in Paris, London, New York, Tokyo, and throughout the Gulf. The differences in working style are real but are almost never about geography; they are about how the designer relates to the craft.

The clearest signal of a productive collaboration is brief quality. A brief that includes fabric swatches, reference images, scale indications, and some sense of what the designer wants the piece to feel like is worth ten times a brief that says 'heavy embroidery in gold'. Not because the former has more information, but because the work of thinking that producing it requires almost always produces better design.`,
    image: "/images/journal-international.jpg",
    readTime: "4 min read",
  },
];

// Artisans
export const artisans: Artisan[] = [
  {
    name: "Mohammad Ramzan",
    title: "Master Zardozi Artisan",
    years: "37 years",
    speciality: "Heavy metallic zardozi and three-dimensional raised work",
    bio: "Ramzan bhai began his career as an apprentice in Lucknow before joining Zarguzari in 1987. His technical depth in raised padded work is unmatched in the studio.",
    image: "/images/artisan-ramzan.jpg",
  },
  {
    name: "Arif Mohammad",
    title: "Senior Zardozi Artisan",
    years: "7 years",
    speciality: "Precision geometric and architectural zardozi",
    bio: "Arif brings a systematic approach developed through formal training in Surat, combined with the studio knowledge inherited from his father.",
    image: "/images/artisan-arif.jpg",
  },
  {
    name: "Sunita Devi",
    title: "Head of Aari",
    years: "16 years",
    speciality: "Fine aari on sheer fabrics and lightweight yardage",
    bio: "Sunita leads our aari team with a specialisation in delicate work on organza and silk net — the foundation of our bridal and export yardage work.",
    image: "/images/artisan-sunita.jpg",
  },
  {
    name: "Hussain Ali",
    title: "Senior Zari Artisan",
    years: "22 years",
    speciality: "Zari borders and continuous pattern work",
    bio: "Hussain's mastery of repetitive pattern work at scale makes him indispensable for production yardage. His consistency across large runs defines Zarguzari's export quality.",
    image: "/images/artisan-hussain.jpg",
  },
];

// Collaborations
export const collaborations: Collaboration[] = [
  {
    slug: "manish-malhotra-bridal",
    designer: "Manish Malhotra",
    label: "MM Bridal",
    category: "Bridal",
    year: "2023",
    description:
      "A multi-season collaboration producing signature zardozi and zari bridal pieces for India's most recognised couture house.",
    image: "/images/collab-mm.jpg",
    quote:
      "Zarguzari understands the language of luxury embroidery. They translate a brief with intelligence and deliver with precision.",
  },
  {
    slug: "couture-runway-ss24",
    designer: "Rahul Mishra",
    label: "Runway SS24",
    category: "Runway",
    year: "2024",
    description:
      "A series of sculptural embroidered panels for the SS24 Paris couture presentation, featuring three-dimensional botanical zardozi forms.",
    image: "/images/collab-runway.jpg",
  },
  {
    slug: "export-european-label",
    designer: "European Luxury Label",
    label: "Resort Collection",
    category: "Export",
    year: "2024",
    description:
      "400-metre ombré zari yardage for a French resort label's bestselling collection, produced to EU quality standards.",
    image: "/images/collab-export.jpg",
  },
  {
    slug: "film-period-drama",
    designer: "Period Drama Production",
    label: "Film Costume",
    category: "Film",
    year: "2023",
    description:
      "Court embroidery for a major Indian period drama series, recreating Mughal-era embroidery motifs for 18 principal cast costumes.",
    image: "/images/collab-film.jpg",
  },
];
