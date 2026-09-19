export type FeatureIcon = "building" | "pin" | "grid" | "place";

export type FeatureItem = {
  icon: FeatureIcon;
  title: string;
  body: string;
};

export type Project = {
  slug: string;
  name: string;
  location: string;
  image: string;
  summary: string;
  specs: string;
  tagline: string;
  workplaceTitle: [string, string];
  intro: string;
  highlights: { title: string; body: string }[];
  workplaceImage: string;
  features: FeatureItem[];
  performImage: string;
  performSubtitle: string;
  performOptions: { title: string; body: string }[];
  nextCopy: [string, string];
};

export const FEATURE_ICONS: Record<
  FeatureIcon,
  { src: string; width: number; height: number }
> = {
  building: { src: "/assets/product/icon-building.svg", width: 36, height: 32 },
  pin: { src: "/assets/product/icon-pin.svg", width: 24, height: 32 },
  grid: { src: "/assets/product/icon-grid.svg", width: 50, height: 32 },
  place: { src: "/assets/product/icon-place.svg", width: 34, height: 42 },
};

export function projectHref(slug: string) {
  return `/projects/${slug}`;
}

export const PROJECTS: Project[] = [
  {
    slug: "ecotech",
    name: "Casagrand Ecotech",
    location: "Sholinganallur, Chennai",
    image: "/images/project-1.jpg",
    summary:
      "A next-generation biophilic office campus designed to inspire creativity, productivity and workplace well-being.",
    specs: "5 LAKH SQ. FT.  |  14.03 ACRES  |  7 TOWERS",
    tagline: "Built for Business. Inspired by Nature.",
    workplaceTitle: ["A Better Workplace.", "Naturally."],
    intro:
      "Casagrand Ecotech is a next-generation office campus in Sholinganallur, built to global standards in design and functionality. Its serene, biophilic setting brings nature into the workday to inspire creativity.",
    highlights: [
      {
        title: "Wellness & Fitness",
        body: "Gym, sports amenities and a wellness centre to support healthier workdays.",
      },
      {
        title: "Meet & Collaborate",
        body: "Conference room and outdoor seating for focused discussions and fresh perspectives.",
      },
      {
        title: "Move with Ease",
        body: "E-buggy service and EV charging points for everyday convenience.",
      },
      {
        title: "Care Within Reach",
        body: "24/7 ambulance support for workplace emergencies.",
      },
    ],
    workplaceImage: "/assets/amenities-workspace.jpg",
    features: [
      {
        icon: "building",
        title: "6 Lakh Sq. Ft.",
        body: "Office space across a 14.02-acre campus.",
      },
      {
        icon: "pin",
        title: "7 Towers",
        body: "Includes one tower dedicated to amenities.",
      },
      {
        icon: "grid",
        title: "Over 70% Green & Open",
        body: "Space to pause, connect and find inspiration.",
      },
      {
        icon: "place",
        title: "Sholinganallur, Chennai",
        body: "IT/ITES office space in an established business hub.",
      },
      {
        icon: "building",
        title: "500 m to the Junction",
        body: "Convenient access to Sholinganallur junction.",
      },
      {
        icon: "pin",
        title: "10 km to Taramani",
        body: "Connectivity through Taramani railway station.",
      },
      {
        icon: "grid",
        title: "13.6 km to Tambaram",
        body: "Access to Tambaram railway station.",
      },
      {
        icon: "place",
        title: "17.9 km to the Airport",
        body: "Connected to Chennai International Airport.",
      },
    ],
    performImage: "/assets/ambition-workspace.jpg",
    performSubtitle: "Work better. Breathe easier. Grow together.",
    performOptions: [
      {
        title: "Designed Around Your Business",
        body: "Adaptable office layouts, planned parking and energy-efficient design support evolving business needs.",
      },
      {
        title: "More to Every Workday",
        body: "A food court with indoor and outdoor seating, an outdoor café, auditorium and amphitheatre create places to gather. A crèche and visitor-management system add everyday convenience.",
      },
    ],
    nextCopy: [
      "Discover a workplace that brings business, nature and well-being together in Sholinganallur.",
      "Connect with our team for office-space availability, project details or a guided site visit.",
    ],
  },
  {
    slug: "astute",
    name: "Casagrand Astute",
    location: "Nandambakkam, Mount Poonamallee Road, Chennai",
    image: "/images/project-2.jpg",
    summary:
      "A Grade-A commercial address offering spacious office floors and excellent connectivity to Guindy, Chennai Airport and the city.",
    specs: "3.2 LAKH SQ. FT.  |  36,000 SQ. FT. FLOOR PLATE  |  2B + G + 9 FLOORS",
    tagline: "Grade-A Floors. City-Ready Access.",
    workplaceTitle: ["A Better Workplace.", "Connected."],
    intro:
      "Casagrand Astute is a Grade-A commercial address on Mount Poonamallee Road, planned for spacious office floors and effortless access to Guindy, the airport and the city.",
    highlights: [
      {
        title: "Efficient Floor Plates",
        body: "36,000 sq. ft. plates designed for growing teams and flexible planning.",
      },
      {
        title: "Meet & Collaborate",
        body: "Conference rooms and shared lounges for focused discussions.",
      },
      {
        title: "Move with Ease",
        body: "Organised parking and EV-ready infrastructure for everyday convenience.",
      },
      {
        title: "Care Within Reach",
        body: "24/7 support systems for a confident workplace.",
      },
    ],
    workplaceImage: "/assets/amenities-workspace.jpg",
    features: [
      {
        icon: "building",
        title: "3.2 Lakh Sq. Ft.",
        body: "Grade-A office space across 2B + G + 9 floors.",
      },
      {
        icon: "pin",
        title: "36,000 Sq. Ft. Plates",
        body: "Spacious floors planned for efficient layouts.",
      },
      {
        icon: "grid",
        title: "Nandambakkam, Chennai",
        body: "A commercial address with strong city connectivity.",
      },
      {
        icon: "place",
        title: "Airport Corridor",
        body: "Excellent access to Guindy, the airport and the city.",
      },
      {
        icon: "building",
        title: "Mount Poonamallee Road",
        body: "Frontage on a primary business thoroughfare.",
      },
      {
        icon: "pin",
        title: "Close to Guindy",
        body: "Minutes from a key commercial and transit hub.",
      },
      {
        icon: "grid",
        title: "Flexible Planning",
        body: "Floor plates designed for evolving team sizes.",
      },
      {
        icon: "place",
        title: "Chennai Airport Access",
        body: "Straightforward connectivity for visiting clients.",
      },
    ],
    performImage: "/assets/ambition-workspace.jpg",
    performSubtitle: "Work better. Move faster. Grow together.",
    performOptions: [
      {
        title: "Designed Around Your Business",
        body: "Adaptable office layouts, planned parking and energy-efficient design support evolving business needs.",
      },
      {
        title: "More to Every Workday",
        body: "Shared amenities, dining options and visitor-ready lobbies create a workplace that works beyond the desk.",
      },
    ],
    nextCopy: [
      "Discover a Grade-A address that puts your team closer to Guindy, the airport and the city.",
      "Connect with our team for office-space availability, project details or a guided site visit.",
    ],
  },
  {
    slug: "paragon",
    name: "Casagrand The Paragon",
    location: "Coimbatore",
    image: "/images/project-3.jpg",
    summary:
      "A landmark commercial destination planned for scale, visibility and long-term business presence.",
    specs: "GRADE-A OFFICE  |  RETAIL  |  STRATEGIC CBD ACCESS",
    tagline: "Landmark Presence. Lasting Growth.",
    workplaceTitle: ["A Better Workplace.", "In the City."],
    intro:
      "Casagrand The Paragon is a landmark commercial destination in Coimbatore, planned for scale, visibility and a long-term business presence.",
    highlights: [
      {
        title: "Grade-A Office",
        body: "Premium floors designed for brands that want presence and planning quality.",
      },
      {
        title: "Retail Frontage",
        body: "Street-facing retail planned for visibility and everyday convenience.",
      },
      {
        title: "Meet & Collaborate",
        body: "Conference rooms and shared spaces for meaningful interaction.",
      },
      {
        title: "Everyday Convenience",
        body: "Organised parking and visitor-ready amenities.",
      },
    ],
    workplaceImage: "/assets/amenities-workspace.jpg",
    features: [
      { icon: "building", title: "Grade-A Office", body: "A landmark commercial destination in Coimbatore." },
      { icon: "pin", title: "Retail", body: "Street-facing formats for brands that want visibility." },
      { icon: "grid", title: "Strategic CBD Access", body: "Positioned for long-term business presence." },
      { icon: "place", title: "Coimbatore", body: "A growing commercial hub with strong regional demand." },
      { icon: "building", title: "Landmark Scale", body: "Planned for presence on the city skyline." },
      { icon: "pin", title: "City Connectivity", body: "Access to key arterial roads and business districts." },
      { icon: "grid", title: "Flexible Formats", body: "Office and retail planned for mixed-use energy." },
      { icon: "place", title: "Long-Term Address", body: "Created for businesses looking ahead." },
    ],
    performImage: "/assets/ambition-workspace.jpg",
    performSubtitle: "Work better. Be seen. Grow together.",
    performOptions: [
      {
        title: "Designed Around Your Business",
        body: "Adaptable office layouts, planned parking and energy-efficient design support evolving business needs.",
      },
      {
        title: "More to Every Workday",
        body: "Retail, dining and shared amenities create a destination that works beyond office hours.",
      },
    ],
    nextCopy: [
      "Discover a landmark commercial address planned for scale and visibility in Coimbatore.",
      "Connect with our team for office-space availability, project details or a guided site visit.",
    ],
  },
  {
    slug: "bizpark",
    name: "Casagrand Bizpark",
    location: "OMR, Sholinganallur, Chennai",
    image: "/images/project-4.jpg",
    summary:
      "A future-ready business park on OMR, designed for growing companies that need efficient floors and strong connectivity.",
    specs: "OFFICE  |  RETAIL  |  OMR CORRIDOR",
    tagline: "Built for Business. Ready for OMR.",
    workplaceTitle: ["A Better Workplace.", "On OMR."],
    intro:
      "Casagrand Bizpark is a future-ready business park on OMR, designed for growing companies that need efficient floors and strong corridor connectivity.",
    highlights: [
      { title: "OMR Corridor", body: "A business park address on Chennai’s primary IT artery." },
      { title: "Meet & Collaborate", body: "Conference rooms and shared spaces for growing teams." },
      { title: "Move with Ease", body: "Organised parking and EV-ready infrastructure." },
      { title: "Everyday Convenience", body: "Retail and dining planned for the workday." },
    ],
    workplaceImage: "/assets/amenities-workspace.jpg",
    features: [
      { icon: "building", title: "Office & Retail", body: "A mixed-use business park on the OMR corridor." },
      { icon: "pin", title: "Sholinganallur", body: "In the heart of Chennai’s IT stretch." },
      { icon: "grid", title: "Efficient Floors", body: "Planned for growing companies that need flexibility." },
      { icon: "place", title: "OMR Connectivity", body: "Direct access to Chennai’s technology corridor." },
      { icon: "building", title: "Future-Ready", body: "Infrastructure designed for lasting growth." },
      { icon: "pin", title: "IT Neighbourhood", body: "Surrounded by established technology campuses." },
      { icon: "grid", title: "Flexible Planning", body: "Formats that adapt as teams expand." },
      { icon: "place", title: "Airport Access", body: "Straightforward connectivity along the OMR belt." },
    ],
    performImage: "/assets/ambition-workspace.jpg",
    performSubtitle: "Work better. Stay connected. Grow together.",
    performOptions: [
      {
        title: "Designed Around Your Business",
        body: "Adaptable office layouts, planned parking and energy-efficient design support evolving business needs.",
      },
      {
        title: "More to Every Workday",
        body: "Retail, dining and shared amenities keep the campus useful beyond meeting rooms.",
      },
    ],
    nextCopy: [
      "Discover a future-ready business park on OMR, planned for companies ready to grow.",
      "Connect with our team for office-space availability, project details or a guided site visit.",
    ],
  },
  {
    slug: "skytech",
    name: "Casagrand Skytech",
    location: "Chennai",
    image: "/images/project-5.jpg",
    summary:
      "A contemporary commercial tower planned around flexible floor plates and a distinctive urban silhouette.",
    specs: "HIGH-RISE OFFICE  |  FLEXIBLE FLOOR PLATES",
    tagline: "Vertical Presence. Flexible Floors.",
    workplaceTitle: ["A Better Workplace.", "Above the City."],
    intro:
      "Casagrand Skytech is a contemporary commercial tower planned around flexible floor plates and a distinctive urban silhouette.",
    highlights: [
      { title: "Flexible Floor Plates", body: "Layouts that adapt as teams and functions evolve." },
      { title: "Meet & Collaborate", body: "Shared floors for focused work and client meetings." },
      { title: "Move with Ease", body: "Planned parking and efficient vertical circulation." },
      { title: "Everyday Convenience", body: "Amenities designed for a full workday in the tower." },
    ],
    workplaceImage: "/assets/amenities-workspace.jpg",
    features: [
      { icon: "building", title: "High-Rise Office", body: "A contemporary tower with a distinctive silhouette." },
      { icon: "pin", title: "Flexible Plates", body: "Floors planned for changing team sizes." },
      { icon: "grid", title: "Urban Address", body: "A commercial presence in Chennai’s skyline." },
      { icon: "place", title: "Chennai", body: "Positioned for city-wide business access." },
      { icon: "building", title: "Efficient Cores", body: "Vertical circulation planned for daily movement." },
      { icon: "pin", title: "Client-Ready Lobbies", body: "Arrival spaces designed for first impressions." },
      { icon: "grid", title: "Modern Infrastructure", body: "Systems built for long-term commercial use." },
      { icon: "place", title: "City Connectivity", body: "Access to key Chennai business corridors." },
    ],
    performImage: "/assets/ambition-workspace.jpg",
    performSubtitle: "Work better. Rise higher. Grow together.",
    performOptions: [
      {
        title: "Designed Around Your Business",
        body: "Adaptable office layouts, planned parking and energy-efficient design support evolving business needs.",
      },
      {
        title: "More to Every Workday",
        body: "Shared amenities and visitor-ready floors create a tower that works beyond the desk.",
      },
    ],
    nextCopy: [
      "Discover a contemporary commercial tower planned around flexible floors and urban presence.",
      "Connect with our team for office-space availability, project details or a guided site visit.",
    ],
  },
  {
    slug: "crown",
    name: "Casagrand Crown",
    location: "Chennai",
    image: "/images/project-6.jpg",
    summary:
      "A premium commercial address created for brands that want presence, planning quality and everyday convenience.",
    specs: "PREMIUM OFFICE  |  RETAIL FRONTAGE",
    tagline: "Premium Presence. Everyday Ease.",
    workplaceTitle: ["A Better Workplace.", "With Presence."],
    intro:
      "Casagrand Crown is a premium commercial address created for brands that want presence, planning quality and everyday convenience.",
    highlights: [
      { title: "Premium Office", body: "Floors planned for brands that value first impressions." },
      { title: "Retail Frontage", body: "Street-facing retail for visibility and convenience." },
      { title: "Meet & Collaborate", body: "Conference rooms and shared lounges for client days." },
      { title: "Everyday Convenience", body: "Organised parking and visitor-ready amenities." },
    ],
    workplaceImage: "/assets/amenities-workspace.jpg",
    features: [
      { icon: "building", title: "Premium Office", body: "A commercial address created for brand presence." },
      { icon: "pin", title: "Retail Frontage", body: "Street-level formats for visibility." },
      { icon: "grid", title: "Planning Quality", body: "Layouts designed for lasting everyday use." },
      { icon: "place", title: "Chennai", body: "A premium address in a growing commercial city." },
      { icon: "building", title: "Arrival Experience", body: "Lobbies planned for clients and teams." },
      { icon: "pin", title: "Convenient Access", body: "Positioned for everyday city movement." },
      { icon: "grid", title: "Mixed-Use Energy", body: "Office and retail in one destination." },
      { icon: "place", title: "Long-Term Address", body: "Created for businesses looking ahead." },
    ],
    performImage: "/assets/ambition-workspace.jpg",
    performSubtitle: "Work better. Be present. Grow together.",
    performOptions: [
      {
        title: "Designed Around Your Business",
        body: "Adaptable office layouts, planned parking and energy-efficient design support evolving business needs.",
      },
      {
        title: "More to Every Workday",
        body: "Retail frontage, dining and shared amenities keep the address useful beyond office hours.",
      },
    ],
    nextCopy: [
      "Discover a premium commercial address created for brands that want presence and planning quality.",
      "Connect with our team for office-space availability, project details or a guided site visit.",
    ],
  },
  {
    slug: "connect-ambattur",
    name: "Casagrand Connect – Ambattur",
    location: "Ambattur, Chennai",
    image: "/images/project-7.jpg",
    summary:
      "A connected workplace destination in Ambattur, designed for enterprises that value access, infrastructure and scale.",
    specs: "WORKPLACE CAMPUS  |  AMBATTUR INDUSTRIAL CORRIDOR",
    tagline: "Connected Campus. Industrial Strength.",
    workplaceTitle: ["A Better Workplace.", "In Ambattur."],
    intro:
      "Casagrand Connect – Ambattur is a connected workplace destination designed for enterprises that value access, infrastructure and scale.",
    highlights: [
      { title: "Industrial Corridor", body: "A campus address in Ambattur’s established business belt." },
      { title: "Meet & Collaborate", body: "Shared rooms for teams that move between sites and clients." },
      { title: "Move with Ease", body: "Planned parking and campus circulation." },
      { title: "Everyday Convenience", body: "Amenities designed for a full operational day." },
    ],
    workplaceImage: "/assets/amenities-workspace.jpg",
    features: [
      { icon: "building", title: "Workplace Campus", body: "A connected destination in Ambattur." },
      { icon: "pin", title: "Industrial Corridor", body: "In an established Chennai business belt." },
      { icon: "grid", title: "Scale-Ready", body: "Infrastructure planned for enterprise teams." },
      { icon: "place", title: "Ambattur, Chennai", body: "Access, infrastructure and operational ease." },
      { icon: "building", title: "Campus Planning", body: "Layouts designed for daily movement." },
      { icon: "pin", title: "Corridor Access", body: "Connected to Ambattur’s industrial network." },
      { icon: "grid", title: "Enterprise Floors", body: "Spaces that support growing operations." },
      { icon: "place", title: "City Links", body: "Straightforward access across north-west Chennai." },
    ],
    performImage: "/assets/ambition-workspace.jpg",
    performSubtitle: "Work better. Stay connected. Grow together.",
    performOptions: [
      {
        title: "Designed Around Your Business",
        body: "Adaptable office layouts, planned parking and energy-efficient design support evolving business needs.",
      },
      {
        title: "More to Every Workday",
        body: "Campus amenities and visitor-ready spaces support enterprises through a full operational day.",
      },
    ],
    nextCopy: [
      "Discover a connected workplace destination in Ambattur, planned for access, infrastructure and scale.",
      "Connect with our team for office-space availability, project details or a guided site visit.",
    ],
  },
  {
    slug: "connect-melakottaiyur",
    name: "Casagrand Connect – Melakottaiyur",
    location: "Melakottaiyur, Chennai",
    image: "/images/project-8.jpg",
    summary:
      "A thoughtfully planned commercial environment in Melakottaiyur, built for businesses looking ahead.",
    specs: "EMERGING CORRIDOR  |  OFFICE & RETAIL",
    tagline: "Emerging Corridor. Thoughtful Planning.",
    workplaceTitle: ["A Better Workplace.", "Looking Ahead."],
    intro:
      "Casagrand Connect – Melakottaiyur is a thoughtfully planned commercial environment built for businesses looking ahead on an emerging Chennai corridor.",
    highlights: [
      { title: "Emerging Corridor", body: "An address planned for the next wave of commercial growth." },
      { title: "Office & Retail", body: "Formats designed for mixed everyday use." },
      { title: "Meet & Collaborate", body: "Shared spaces for teams and visiting clients." },
      { title: "Everyday Convenience", body: "Amenities planned for a complete workday." },
    ],
    workplaceImage: "/assets/amenities-workspace.jpg",
    features: [
      { icon: "building", title: "Office & Retail", body: "A mixed commercial environment in Melakottaiyur." },
      { icon: "pin", title: "Emerging Corridor", body: "Planned for businesses looking ahead." },
      { icon: "grid", title: "Thoughtful Planning", body: "Layouts designed for long-term use." },
      { icon: "place", title: "Melakottaiyur, Chennai", body: "A growing southern commercial belt." },
      { icon: "building", title: "Flexible Formats", body: "Spaces that adapt as the corridor matures." },
      { icon: "pin", title: "Corridor Access", body: "Connected to south Chennai’s expanding network." },
      { icon: "grid", title: "Campus Amenities", body: "Everyday convenience planned into the destination." },
      { icon: "place", title: "Future Address", body: "Created for companies ready to grow with the area." },
    ],
    performImage: "/assets/ambition-workspace.jpg",
    performSubtitle: "Work better. Look ahead. Grow together.",
    performOptions: [
      {
        title: "Designed Around Your Business",
        body: "Adaptable office layouts, planned parking and energy-efficient design support evolving business needs.",
      },
      {
        title: "More to Every Workday",
        body: "Office, retail and shared amenities create a destination that works as the corridor grows.",
      },
    ],
    nextCopy: [
      "Discover a thoughtfully planned commercial environment in Melakottaiyur, built for businesses looking ahead.",
      "Connect with our team for office-space availability, project details or a guided site visit.",
    ],
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}
