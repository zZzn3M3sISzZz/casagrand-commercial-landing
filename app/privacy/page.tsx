import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { LegalPolicyBody } from "@/components/legal-policy-body";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Casagrand Builder Private Limited collects and uses personal information on Casagrand Commercial websites and enquiry channels.",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <LegalPolicyBody variant="privacy" />
    </LegalPage>
  );
}
