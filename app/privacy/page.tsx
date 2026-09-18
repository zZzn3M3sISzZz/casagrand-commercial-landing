import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Casagrand Builder Private Limited collects and uses personal information on Casagrand Commercial websites and enquiry channels.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <LegalSection title="Overview">
        <p>
          Casagrand Builder Private Limited (“Casagrand”, “we”, “us”) respects
          your privacy. This Privacy Policy explains how we collect, use and
          share personal information when you visit Casagrand Commercial
          websites, submit an enquiry, schedule a visit, or otherwise interact
          with our leasing and marketing channels.
        </p>
        <p>
          Questions:{" "}
          <a href="mailto:sales@casagrand.co.in">sales@casagrand.co.in</a> or{" "}
          <a href="mailto:leasing@casagrand.co.in">leasing@casagrand.co.in</a>.
        </p>
      </LegalSection>

      <LegalSection title="Information we collect">
        <p>Depending on how you use our sites and services, we may collect:</p>
        <ul>
          <li>
            <strong>Enquiry details</strong> — name, email, phone number, company,
            project interest and any message you send through forms or calls.
          </li>
          <li>
            <strong>Visit and brochure requests</strong> — information needed to
            schedule site visits or share project material.
          </li>
          <li>
            <strong>Technical data</strong> — IP address, browser type, pages
            viewed and similar logs generated when you browse this website.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Cookies">
        <p>
          We use cookies and web beacons to deliver our ads, improve and measure
          the performance and effectiveness of our Website, and to customise
          your experience. Examples of the type of information that we collect
          through these collection devices include unique visitors, time spent
          on our Website and on certain web pages, and site activity.
        </p>
        <p>
          We may authorise third parties to use cookies, web beacons and other
          monitoring technologies on our Website or in connection with
          advertisements that appear on this Website. We do not link the
          information we store in cookies or collect from web beacons on our
          site with personally identifiable information.
        </p>
        <p>
          We use session ID cookies and persistent cookies. A session ID cookie
          expires when you close your browser. A persistent cookie remains on
          your hard drive for an extended period of time.
        </p>
        <p>
          You are always free to decline cookies if your browser permits. You
          can remove persistent cookies by following directions provided in your
          Internet browser’s “help” file, although declining cookies may limit
          certain features of the Website.
        </p>
        <p>
          If you browse Casagrand Builder Private Limited, advertising cookies
          will be placed on your computer so that we can understand whether you
          are interested in our properties. Our display advertising partner,
          AdRoll, then enables us to present you with retargeting advertising
          on other sites based on your previous interaction with Casagrand
          websites. The techniques our partners employ do not collect personal
          information such as your name, email address, postal address or
          telephone number. You can visit this page to opt out of AdRoll and
          their partners’ targeted advertising.
        </p>
      </LegalSection>

      <LegalSection title="Third Party Personal information">
        <p>
          If you choose to use our referral service to tell a friend about our
          site, we will ask you for your friend’s name and email address. We
          will automatically send your friend a one-time email inviting him or
          her to visit the site. Casagrand stores this information for the sole
          purpose of sending this one-time email and tracking the success of our
          referral program.
        </p>
        <p>
          Your friend may contact us at{" "}
          <a href="mailto:sales@casagrand.co.in">sales@casagrand.co.in</a> to
          request that we remove this information from our database.
        </p>
      </LegalSection>

      <LegalSection title="Customer Stories">
        <p>
          We post customer stories on our web site which may contain personally
          identifiable information. We do obtain the customer’s consent via
          email prior to posting the testimonial to post their name along with
          their testimonial. If you wish to update or delete your story you may
          contact us at{" "}
          <a href="mailto:sales@casagrand.co.in">sales@casagrand.co.in</a>.
        </p>
      </LegalSection>

      <LegalSection title="Public Forums">
        <p>
          Our Website offers publicly accessible blogs or community forums. You
          should be aware that any information you provide in these areas may be
          read, collected, and used by others who access them. To request
          removal of your personal information from our blog or community
          forum, contact us at{" "}
          <a href="mailto:sales@casagrand.co.in">sales@casagrand.co.in</a>. In
          some cases, we may not be able to remove your personal information, in
          which case we will let you know if we are unable to do so and why.
        </p>
      </LegalSection>

      <LegalSection title="Children under 13">
        <p>
          Casagrand Builder Private Limited does not knowingly collect personal
          information from children under the age of 13. If we learn that we
          have collected personal identifiable information from a child under
          the age of 13, we will delete that information. If you believe that a
          child under 13 may have provided us personal information, please
          contact us. See the FTC’s website at www.ftc.gov for tips on
          protecting children’s privacy online.
        </p>
      </LegalSection>

      <LegalSection title="Links">
        <p>
          Our Website may provide links to other third-party Websites which are
          outside our control and not covered by this policy. We encourage you
          to review the privacy policies posted on these (and all) third-party
          sites.
        </p>
      </LegalSection>

      <LegalSection title="How we use information">
        <p>
          We use personal information to respond to enquiries, share project
          information, schedule visits, improve this website, measure
          advertising, and meet legal obligations. We do not sell your personal
          information.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Privacy questions:{" "}
          <a href="mailto:sales@casagrand.co.in">sales@casagrand.co.in</a>. See
          also our <a href="/terms">Terms and Conditions</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
