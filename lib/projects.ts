export type Project = {
  slug: string;
  name: string;
  location: string;
  image: string;
  summary: string;
  specs: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "ecotech",
    name: "Casagrand Ecotech",
    location: "Sholinganallur, Chennai",
    image: "/images/project-1.jpg",
    summary:
      "A next-generation biophilic office campus designed to inspire creativity, productivity and workplace well-being.",
    specs: "5 LAKH SQ. FT.  |  14.03 ACRES  |  7 TOWERS",
  },
  {
    slug: "astute",
    name: "Casagrand Astute",
    location: "Nandambakkam, Mount Poonamallee Road, Chennai",
    image: "/images/project-2.jpg",
    summary:
      "A Grade-A commercial address offering spacious office floors and excellent connectivity to Guindy, Chennai Airport and the city.",
    specs: "3.2 LAKH SQ. FT.  |  36,000 SQ. FT. FLOOR PLATE  |  2B + G + 9 FLOORS",
  },
  {
    slug: "paragon",
    name: "Casagrand The Paragon",
    location: "Coimbatore",
    image: "/images/project-3.jpg",
    summary:
      "A landmark commercial destination planned for scale, visibility and long-term business presence.",
    specs: "GRADE-A OFFICE  |  RETAIL  |  STRATEGIC CBD ACCESS",
  },
  {
    slug: "bizpark",
    name: "Casagrand Bizpark",
    location: "OMR, Sholinganallur, Chennai",
    image: "/images/project-4.jpg",
    summary:
      "A future-ready business park on OMR, designed for growing companies that need efficient floors and strong connectivity.",
    specs: "OFFICE  |  RETAIL  |  OMR CORRIDOR",
  },
  {
    slug: "skytech",
    name: "Casagrand Skytech",
    location: "Chennai",
    image: "/images/project-5.jpg",
    summary:
      "A contemporary commercial tower planned around flexible floor plates and a distinctive urban silhouette.",
    specs: "HIGH-RISE OFFICE  |  FLEXIBLE FLOOR PLATES",
  },
  {
    slug: "crown",
    name: "Casagrand Crown",
    location: "Chennai",
    image: "/images/project-6.jpg",
    summary:
      "A premium commercial address created for brands that want presence, planning quality and everyday convenience.",
    specs: "PREMIUM OFFICE  |  RETAIL FRONTAGE",
  },
  {
    slug: "connect-ambattur",
    name: "Casagrand Connect – Ambattur",
    location: "Ambattur, Chennai",
    image: "/images/project-7.jpg",
    summary:
      "A connected workplace destination in Ambattur, designed for enterprises that value access, infrastructure and scale.",
    specs: "WORKPLACE CAMPUS  |  AMBATTUR INDUSTRIAL CORRIDOR",
  },
  {
    slug: "connect-melakottaiyur",
    name: "Casagrand Connect – Melakottaiyur",
    location: "Melakottaiyur, Chennai",
    image: "/images/project-8.jpg",
    summary:
      "A thoughtfully planned commercial environment in Melakottaiyur, built for businesses looking ahead.",
    specs: "EMERGING CORRIDOR  |  OFFICE & RETAIL",
  },
];
