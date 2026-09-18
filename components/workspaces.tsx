import {
  Buildings,
  MapPin,
  SquaresFour,
  Cpu,
} from "@phosphor-icons/react/dist/ssr";
import { ParallaxFrame } from "@/components/parallax-frame";
import { Reveal } from "@/components/reveal";

const AMENITIES = [
  {
    title: "Wellness & Fitness",
    body: "Gyms, yoga areas, sports amenities and dedicated wellness spaces.",
  },
  {
    title: "Food & Social Spaces",
    body: "Modern cafés, multi-cuisine food courts and common dining areas.",
  },
  {
    title: "Meet & Collaborate",
    body: "Conference rooms, outdoor seating and shared spaces created for meaningful interaction.",
  },
  {
    title: "Everyday Convenience",
    body: "EV charging, organised parking, valet services and 24/7 ambulance support.",
  },
];

const FOOTER = [
  {
    icon: Buildings,
    title: "8 Commercial Projects",
    body: "A growing portfolio of thoughtfully planned business destinations",
  },
  {
    icon: MapPin,
    title: "Strategic Locations",
    body: "Positioned across established and emerging business corridors",
  },
  {
    icon: SquaresFour,
    title: "Flexible Spaces",
    body: "Office and retail formats designed for diverse business needs",
  },
  {
    icon: Cpu,
    title: "Future-Ready Infrastructure",
    body: "Modern commercial environments designed for lasting growth",
  },
];

export function Workspaces() {
  return (
    <section className="bg-canvas">
      <div className="mx-auto max-w-page px-gutter py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr_0.9fr] lg:gap-10">
          <Reveal className="flex flex-col gap-6 text-[15px] leading-[1.65] text-muted">
            <p>
              Amenities designed to support productivity, well-being,
              collaboration and everyday convenience.
            </p>
            {AMENITIES.map((item) => (
              <div key={item.title} className="border-t border-line pt-5">
                <p>
                  <strong className="font-normal text-ink">{item.title}</strong>{" "}
                  {item.body}
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal delay={1}>
            <ParallaxFrame
              src="/assets/amenities-workspace.jpg"
              alt="Three colleagues stretching together in a sunlit office"
              width={815}
              height={1024}
              className="aspect-[4/5] w-full"
            />
          </Reveal>

          <Reveal delay={2} className="lg:text-left">
            <h2 className="font-display text-[clamp(32px,3.6vw,52px)] font-medium leading-[1.15] text-ink">
              More Than Workspaces,{" "}
              <span className="text-gold">Thoughtfully Equipped.</span>
            </h2>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-line">
        <Reveal className="mx-auto grid max-w-page gap-10 px-gutter py-12 sm:grid-cols-2 lg:grid-cols-4">
          {FOOTER.map((item) => (
            <div key={item.title} className="flex flex-col gap-3">
              <item.icon size={28} color="#E8B547" weight="regular" aria-hidden />
              <h3 className="text-[16px] font-normal text-ink">{item.title}</h3>
              <p className="text-[14px] leading-relaxed text-muted">{item.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
