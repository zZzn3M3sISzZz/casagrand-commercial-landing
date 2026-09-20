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
  mapsUrl: string;
  image: string;
  heroImage: string;
  summary: string;
  specs: string;
  tagline: string;
  workplaceTitle: [string, string];
  intro: string;
  highlights: { title: string; body: string }[];
  workplaceImage: string;
  features: FeatureItem[];
  performTitle: [string, string];
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

export const PORTFOLIO_RETURN_KEY = "casagrand-portfolio-return";

export const PROJECTS: Project[] = [
  {
    slug: "ecotech",
    name: "Casagrand Ecotech",
    location: "Sholinganallur, Chennai",
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Wipro+St,+Elcot+Sez,+Sholinganallur,+Chennai,+Tamil+Nadu+600119",
    image: "/images/projects/card-ecotech.png",
    heroImage: "/images/projects/hero-ecotech.png",
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
    workplaceImage: "/images/projects/workplace-ecotech.png",
    features: [
      {
        icon: "building",
        title: "6 Lakh Sq. Ft.",
        body: "Built-up space for contemporary business needs.",
      },
      {
        icon: "pin",
        title: "14.02 Acres",
        body: "An expansive campus in Sholinganallur.",
      },
      {
        icon: "grid",
        title: "7 Towers",
        body: "Includes one tower dedicated to amenities.",
      },
      {
        icon: "place",
        title: "Over 70% Green & Open",
        body: "Nature woven into the workplace.",
      },
      {
        icon: "building",
        title: "Biophilic Design",
        body: "A serene setting designed to inspire creativity.",
      },
      {
        icon: "pin",
        title: "Fitness & Wellness",
        body: "Gym, sports amenities and wellness centre.",
      },
      {
        icon: "grid",
        title: "Convenient Movement",
        body: "E-buggy service and EV charging.",
      },
      {
        icon: "place",
        title: "Spaces to Connect",
        body: "Conference room and outdoor seating.",
      },
    ],
    performTitle: ["Space to Perform.", "Room to Thrive."],
    performImage: "/images/projects/perform-ecotech.png",
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
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Mount+Poonamallee+Rd,+Nandambakkam,+Tamil+Nadu+600089",
    image: "/images/projects/card-astute.png",
    heroImage: "/images/projects/hero-astute.png",
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
    workplaceImage: "/images/projects/workplace-astute.png",
    features: [
      {
        icon: "building",
        title: "Grade A Offices",
        body: "A contemporary setting for your business.",
      },
      {
        icon: "pin",
        title: "3.2 Lakh Sq. Ft.",
        body: "Total built-up area.",
      },
      {
        icon: "grid",
        title: "36,000 Sq. Ft.",
        body: "Spacious floor plates for office planning.",
      },
      {
        icon: "place",
        title: "2B + G + 9",
        body: "Two basements, ground and nine floors.",
      },
      {
        icon: "building",
        title: "IGBC Platinum",
        body: "Sustainability recognised in the building design.",
      },
      {
        icon: "pin",
        title: "WELL Certified",
        body: "Wellness considered within the workplace.",
      },
      {
        icon: "grid",
        title: "Opposite Trade Center",
        body: "Located in Nandambakkam.",
      },
      {
        icon: "place",
        title: "Connected Address",
        body: "Easy access to Guindy, airport and city.",
      },
    ],
    performTitle: ["Room for Ideas.", "Space for Progress."],
    performImage: "/images/projects/perform-astute.png",
    performSubtitle: "Spacious offices. Everyday convenience.",
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
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=2,+200+Feet+Radial+Rd,+Raja+Joseph+Colony,+Pallavaram,+Tambaram,+Tamil+Nadu+600043",
    image: "/images/projects/card-paragon.png",
    heroImage: "/images/projects/hero-paragon.png",
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
    workplaceImage: "/images/projects/workplace-paragon.png",
    features: [
      { icon: "building", title: "3.7 Lakh Sq. Ft.", body: "Total built-up area for business." },
      { icon: "pin", title: "1.91 Acres", body: "A premium commercial development." },
      { icon: "grid", title: "36,000 Sq. Ft.", body: "Generous office floor plates." },
      { icon: "place", title: "2B + G + 10", body: "Two basements, ground and ten floors." },
      { icon: "building", title: "Grade A Building", body: "Contemporary business infrastructure." },
      { icon: "pin", title: "IGBC Platinum", body: "A focus on building sustainability." },
      { icon: "grid", title: "WELL Certified", body: "Wellness within the workplace experience." },
      { icon: "place", title: "Radial Road Location", body: "Pallavaram–Thoraipakkam Road, close to the airport." },
    ],
    performTitle: ["Designed to Perform.", "Equipped to Recharge."],
    performImage: "/images/projects/perform-paragon.png",
    performSubtitle: "A complete setting for the working day.",
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
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=298,+OMR+Service+Rd,+Elcot+Sez,+Sholinganallur,+Chennai,+Tamil+Nadu+600119",
    image: "/images/projects/card-bizpark.png",
    heroImage: "/images/projects/hero-bizpark.png",
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
    workplaceImage: "/images/projects/workplace-bizpark.png",
    features: [
      { icon: "building", title: "1 Million Sq. Ft.", body: "Built-up area designed for business growth." },
      { icon: "pin", title: "5.15 Acres", body: "A substantial commercial development on OMR." },
      { icon: "grid", title: "100,000 Sq. Ft.", body: "Expansive office floor plates." },
      { icon: "place", title: "Grade A Building", body: "A contemporary business environment." },
      { icon: "building", title: "USGBC LEED", body: "Sustainability certification listed for the project." },
      { icon: "pin", title: "WELL Certified", body: "A workplace with wellness credentials." },
      { icon: "grid", title: "OMR, Sholinganallur", body: "A location within the city's business corridor." },
      { icon: "place", title: "Approx. 500 m to Metro*", body: "Upcoming station, as described in the brochure." },
    ],
    performTitle: ["Think Bigger.", "Work Better."],
    performImage: "/images/projects/perform-bizpark.png",
    performSubtitle: "Scale for business. Support for people.",
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
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Venkateswara+Colony,+Nehru+Nagar,+Perungudi,+Chennai,+Tamil+Nadu+600041",
    image: "/images/projects/card-skytech.png",
    heroImage: "/images/projects/hero-skytech.png",
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
    workplaceImage: "/images/projects/workplace-skytech.png",
    features: [
      { icon: "building", title: "About 1 Million Sq. Ft.", body: "Total built-up area." },
      { icon: "pin", title: "5 Acres", body: "A substantial development in Perungudi." },
      { icon: "grid", title: "100,000 Sq. Ft.", body: "Expansive floor plates for business." },
      { icon: "place", title: "12 Floors", body: "Plus two basements, lobby and parking." },
      { icon: "building", title: "Grade A Building", body: "Modern architecture and office infrastructure." },
      { icon: "pin", title: "USGBC LEED", body: "Sustainability certification listed for the project." },
      { icon: "grid", title: "WELL Certified", body: "Wellness credentials for the workplace." },
      { icon: "place", title: "Perungudi Address", body: "Surrounded by leading IT and tech parks." },
    ],
    performTitle: ["Elevate Your Address.", "Expand Your Possibilities."],
    performImage: "/images/projects/perform-skytech.png",
    performSubtitle: "Modern architecture. Substantial workspace.",
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
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=490,+Perundurai+-+Coimbatore+Rd,+near+KFC,+Udayampalayam,+Coimbatore,+Tamil+Nadu+641004",
    image: "/images/projects/card-crown.png",
    heroImage: "/images/projects/hero-crown.png",
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
    workplaceImage: "/images/projects/workplace-crown.png",
    features: [
      { icon: "building", title: "Avinashi Road", body: "A well-connected commercial address in Coimbatore." },
      { icon: "pin", title: "2B + G + 7", body: "Two basements, ground and seven floors." },
      { icon: "grid", title: "12,363 Sq. Ft.", body: "Office floor-plate size." },
      { icon: "place", title: "Airport Connectivity", body: "Convenient connections to the airport and IT firms." },
      { icon: "building", title: "Ample Parking", body: "Space for everyday arrivals." },
      { icon: "pin", title: "Fitness & Yoga", body: "Gym, yoga hall and sports amenities." },
      { icon: "grid", title: "Conference Room", body: "A dedicated setting for meetings." },
      { icon: "place", title: "Food Court", body: "Dining within the development." },
    ],
    performTitle: ["A Better Setting.", "For Every Workday."],
    performImage: "/images/projects/perform-crown.png",
    performSubtitle: "Connect, collaborate and recharge.",
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
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Vanagaram+High+Rd,+Kuppam,+Ambattur,+Chennai,+Tamil+Nadu+600058",
    image: "/images/projects/card-connect-ambattur.png",
    heroImage: "/images/projects/hero-connect-ambattur.png",
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
    workplaceImage: "/images/projects/workplace-connect-ambattur.png",
    features: [
      { icon: "building", title: "Approx. 1.77 Lakh Sq. Ft.", body: "Leasable area for retail and lifestyle experiences." },
      { icon: "pin", title: "1.74 Acres", body: "A retail destination in Ambattur." },
      { icon: "grid", title: "2B + G + 3", body: "Two basements, ground and three floors." },
      { icon: "place", title: "Ambattur Location", body: "Shopping, dining and leisure in one address." },
      { icon: "building", title: "Multiplex & Entertainment", body: "Cinema, fun centre and entertainment zone." },
      { icon: "pin", title: "Brands & Essentials", body: "Multinational brands and a supermarket." },
      { icon: "grid", title: "Modern Food Court", body: "A place to dine, pause and connect." },
      { icon: "place", title: "Easy Access & Parking", body: "Convenience throughout the visit." },
    ],
    performTitle: ["Space for Brands.", "Experiences for People."],
    performImage: "/images/projects/perform-connect-ambattur.png",
    performSubtitle: "Everyday shopping meets a day out.",
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
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Kelambakkam+-+Vandalur+Rd,+Kandigai,+Melakottaiyur,+Tamil+Nadu+600127",
    image: "/images/projects/card-connect-melakottaiyur.png",
    heroImage: "/images/projects/hero-connect-melakottaiyur.png",
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
    workplaceImage: "/images/projects/workplace-connect-melakottaiyur.png",
    features: [
      { icon: "building", title: "Approx. 1.6 Lakh Sq. Ft.", body: "Leasable area for retail and lifestyle experiences." },
      { icon: "pin", title: "2 Acres", body: "A destination for shopping, dining and leisure." },
      { icon: "grid", title: "G + 3 Floors", body: "Ground plus three floors." },
      { icon: "place", title: "Kelambakkam–Vandalur Road", body: "Located in Melakottaiyur." },
      { icon: "building", title: "Multiplex & Fun Centre", body: "Cinema and an entertainment zone." },
      { icon: "pin", title: "Brands & Supermarket", body: "Shopping variety and daily essentials." },
      { icon: "grid", title: "Modern Food Court", body: "More reasons to pause and connect." },
      { icon: "place", title: "Easy Access & Parking", body: "Convenience for everyday visits." },
    ],
    performTitle: ["A Place to Explore.", "A Place to Belong."],
    performImage: "/images/projects/perform-connect-melakottaiyur.png",
    performSubtitle: "Retail, dining and leisure, together.",
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
