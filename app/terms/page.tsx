import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { LegalPolicyBody } from "@/components/legal-policy-body";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and conditions and privacy practices for the Casagrand Commercial website.",
};

export default function TermsPage() {
  return (
    <LegalPage title="Terms and Conditions">
      <LegalPolicyBody />
    </LegalPage>
  );
}
