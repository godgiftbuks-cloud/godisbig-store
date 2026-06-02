import LegalLayout, { LegalSection } from "@/components/LegalLayout";

export default function Terms() {
  return (
    <LegalLayout title="Terms" updated="June 2026">
      <p>
        These Terms of Service ("Terms") govern your use of godisbig.co (the "Site") and any purchase
        you make from GodIsBig ("we", "us", "our"). By accessing the Site or placing an order, you
        agree to these Terms. Please read them carefully.
      </p>

      <LegalSection heading="Eligibility & Accounts">
        <p>
          You must be at least 18 years old, or have the consent of a parent or guardian, to place an
          order. If you create an account, you are responsible for keeping your login details
          confidential and for all activity that happens under your account.
        </p>
      </LegalSection>

      <LegalSection heading="Products & Pricing">
        <p>
          We try to display our products and colours as accurately as possible, but we cannot
          guarantee that your screen reflects the exact appearance of an item. All prices are listed
          in US dollars and may change at any time before you place an order.
        </p>
        <p>
          Occasionally an item may be mispriced or out of stock. If this happens, we may cancel or
          refuse the order and will refund any amount already charged.
        </p>
      </LegalSection>

      <LegalSection heading="Orders & Payment">
        <p>
          Submitting an order is an offer to buy. An order is only accepted once we send a
          confirmation and the item ships. Payment is taken at checkout through our payment provider;
          we do not store your full card details.
        </p>
      </LegalSection>

      <LegalSection heading="Shipping & Delivery">
        <p>
          Delivery times are estimates and are not guaranteed. Risk of loss passes to you once an
          order is handed to the carrier. You are responsible for any customs duties or import taxes
          that may apply in your country.
        </p>
      </LegalSection>

      <LegalSection heading="Returns & Exchanges">
        <p>
          Unworn items in their original condition may be returned within 30 days of delivery for a
          refund or exchange. Items must have tags attached. Shipping costs are non-refundable unless
          the item arrived faulty or incorrect.
        </p>
      </LegalSection>

      <LegalSection heading="Intellectual Property">
        <p>
          All content on the Site — including the GodIsBig name, logos, designs, graphics, and copy —
          is owned by GodIsBig and protected by intellectual property laws. You may not reproduce or
          use it without our written permission.
        </p>
      </LegalSection>

      <LegalSection heading="Acceptable Use">
        <p>
          You agree not to misuse the Site, attempt to disrupt it, or use it for any unlawful purpose.
          We may suspend access if these Terms are breached.
        </p>
      </LegalSection>

      <LegalSection heading="Limitation of Liability">
        <p>
          To the fullest extent permitted by law, GodIsBig is not liable for any indirect or
          consequential loss arising from your use of the Site or our products. Nothing in these Terms
          limits liability that cannot be limited by law.
        </p>
      </LegalSection>

      <LegalSection heading="Changes to These Terms">
        <p>
          We may update these Terms from time to time. The version posted on this page is the current
          one, and continued use of the Site means you accept any changes.
        </p>
      </LegalSection>

      <LegalSection heading="Contact">
        <p>
          Questions about these Terms? Email us at{" "}
          <a className="underline underline-offset-2 hover:text-ink" href="mailto:hello@godisbig.co">
            hello@godisbig.co
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
