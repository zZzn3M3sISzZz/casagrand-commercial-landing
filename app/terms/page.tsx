import type { Metadata } from "next";
import { LegalPage, LegalSection } from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and conditions for using the Casagrand Commercial website and related enquiry services.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms and Conditions">
      <LegalSection title="About these terms">
        <p>
          These Terms and Conditions (“Terms”) govern your use of the Casagrand
          Commercial website operated by Casagrand Builder Private Limited
          (“Casagrand”, “we”, “us”). By accessing this website, submitting an
          enquiry, or requesting a visit, you agree to these Terms.
        </p>
        <p>
          If you do not agree, please do not use this website. Related privacy
          practices are described in our <a href="/privacy">Privacy Policy</a>.
        </p>
      </LegalSection>

      <LegalSection title="The website">
        <p>
          This website presents information about Casagrand commercial
          developments for general marketing purposes. Project photographs,
          renders, plans, specifications, amenities and timelines are
          illustrative. Actual product may vary.
        </p>
      </LegalSection>

      <LegalSection title="Enquiries and visits">
        <p>
          Submitting an enquiry or scheduling a visit does not create a
          reservation, allotment, or sale. Any transaction is subject to
          availability, eligibility, applicable law, and a separately executed
          agreement.
        </p>
        <p>
          You agree to provide accurate contact details. We may contact you by
          phone, email or messaging channels you provide.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual property">
        <p>
          The Casagrand name, logos, project names, photographs, designs and
          website content are owned by Casagrand or its licensors. You may not
          copy, republish or commercially exploit this material without written
          permission.
        </p>
      </LegalSection>

      <LegalSection title="Acceptable use">
        <p>You must not:</p>
        <ul>
          <li>use the site for unlawful, misleading or harmful purposes;</li>
          <li>attempt to disrupt, scrape or overload the website;</li>
          <li>misrepresent your identity when submitting an enquiry.</li>
        </ul>
      </LegalSection>

      <LegalSection id="disclaimer" title="Disclaimer">
        <p>
          This website is intended solely for conceptual purposes and does not
          constitute a legally binding offer. The promoters retain the right to
          modify the elevations, specifications, plans and other details as
          deemed appropriate.
        </p>
        <p>
          Nothing on this website is an offer to sell, invitation to invest, or
          a prospectus. Please verify all information independently and obtain
          professional advice before making any decision.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of liability">
        <p>
          To the fullest extent permitted by law, Casagrand is not liable for
          indirect, incidental or consequential losses arising from your use of
          this website or reliance on its contents. The site is provided as-is
          and as-available.
        </p>
      </LegalSection>

      <LegalSection title="Governing law">
        <p>
          These Terms are governed by the laws of India. Courts in Chennai,
          Tamil Nadu shall have exclusive jurisdiction, subject to applicable
          law.
        </p>
      </LegalSection>

      <LegalSection title="Changes">
        <p>
          We may update these Terms from time to time. The “Last updated” date
          at the top of this page will change when we do. Continued use of the
          website after an update means you accept the revised Terms where
          permitted by law.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions:{" "}
          <a href="mailto:leasing@casagrand.co.in">leasing@casagrand.co.in</a> /
          <a href="tel:+919047375555"> 90473 75555</a>.
        </p>
      </LegalSection>
    </LegalPage>
  );
}
