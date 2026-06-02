import LegalLayout, { LegalSection } from "@/components/LegalLayout";

export default function Privacy() {
  return (
    <LegalLayout title="Privacy" updated="June 2026">
      <p>
        This Privacy Policy explains how GodIsBig ("we", "us", "our") collects, uses, and protects
        your personal information when you visit godisbig.co (the "Site") or make a purchase. We are
        committed to handling your data responsibly.
      </p>

      <LegalSection heading="Information We Collect">
        <p>We collect information you give us and information collected automatically:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>
            <strong className="font-medium text-ink">You provide:</strong> name, email, shipping and
            billing address, and order details when you buy or subscribe.
          </li>
          <li>
            <strong className="font-medium text-ink">Automatically:</strong> device, browser, and
            usage data via cookies and similar technologies.
          </li>
        </ul>
        <p>
          Payment card details are processed directly by our payment provider — we never see or store
          your full card number.
        </p>
      </LegalSection>

      <LegalSection heading="How We Use Your Information">
        <ul className="list-disc pl-5 space-y-1">
          <li>To process and ship your orders and provide customer support.</li>
          <li>To send order updates and, if you opt in, news about drops and releases.</li>
          <li>To improve the Site, our products, and your experience.</li>
          <li>To prevent fraud and meet our legal obligations.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="Cookies">
        <p>
          We use cookies to keep your cart, remember preferences, and understand how the Site is used.
          You can disable cookies in your browser settings, though some features may not work as
          intended.
        </p>
      </LegalSection>

      <LegalSection heading="Sharing Your Information">
        <p>
          We do not sell your personal information. We share it only with service providers who help
          us operate — such as payment processors, shipping carriers, and analytics tools — and only
          as needed to provide the service, or where required by law.
        </p>
      </LegalSection>

      <LegalSection heading="Data Retention">
        <p>
          We keep your information for as long as your account is active or as needed to fulfil
          orders, comply with legal obligations, resolve disputes, and enforce our agreements.
        </p>
      </LegalSection>

      <LegalSection heading="Your Rights">
        <p>
          Depending on where you live, you may have the right to access, correct, delete, or export
          your personal data, and to object to certain processing. To make a request, contact us using
          the details below.
        </p>
      </LegalSection>

      <LegalSection heading="Security">
        <p>
          We use reasonable technical and organisational measures to protect your data. No method of
          transmission over the internet is completely secure, so we cannot guarantee absolute
          security.
        </p>
      </LegalSection>

      <LegalSection heading="Children's Privacy">
        <p>
          The Site is not intended for children under 13, and we do not knowingly collect their
          personal information.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to This Policy">
        <p>
          We may update this policy from time to time. The version on this page is always the current
          one, and we will revise the "last updated" date when we make changes.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          For privacy questions or requests, email{" "}
          <a className="underline underline-offset-2 hover:text-ink" href="mailto:privacy@godisbig.co">
            privacy@godisbig.co
          </a>
          .
        </p>
      </LegalSection>

      <p className="text-xs text-ink/40">
        This page is a general template provided for convenience and is not legal advice. Please have
        it reviewed by a qualified professional before relying on it.
      </p>
    </LegalLayout>
  );
}
