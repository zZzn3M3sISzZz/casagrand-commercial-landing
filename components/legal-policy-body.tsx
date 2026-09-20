import { LegalSection } from "@/components/legal-page";

type LegalPolicyBodyProps = {
  variant?: "terms" | "privacy";
};

export function LegalPolicyBody({ variant = "terms" }: LegalPolicyBodyProps) {
  const isPrivacy = variant === "privacy";

  return (
    <>
      <div className="flex flex-col gap-6">
        {isPrivacy ? (
          <p>
            A curated portfolio of commercial developments created for ambitious
            businesses, progressive brands.
          </p>
        ) : null}
        <p>
          Thank you for visiting Casagrand Builder Private Limited. We want you to
          know that your privacy is important to us. Our customers are at the
          heart of everything we do, and we strive to ensure your experience with
          Casagrand Builder Private Limited is one that you will want to repeat
          and share with your friends. Part of our commitment to you is to
          respect and protect the privacy of the personal information you provide
          to us.
        </p>
        <p>
          This document is designed to apprise you about the kind of information
          we collect, why we collect such information, and how we use the
          information we collect. This Privacy Policy is incorporated into our
          Terms of Service. We will share your personal information with third
          parties only in the ways that are described in this privacy statement.
          We do not sell your personal information to third parties.
        </p>
        <p>
          When you submit your personal information to us, you are giving us your
          consent to the collection, use, and disclosure of your information as
          set forth in this Privacy Policy. We are always available to discuss
          your questions or concerns regarding this Privacy Policy and our
          privacy practices. If you would like to speak to a customer service
          representative, please contact us via telephone at{" "}
          <a href="tel:+919962944444">9962944444</a> or email at{" "}
          <a href="mailto:sales@casagrand.co.in">sales@casagrand.co.in</a>.
        </p>
        <p>
          Your use of our Website constitutes your consent to this Privacy
          Policy, including any changes or updates. We may make additional
          features, functionality, offers, activities, or events
          (“opportunities”) available to you subject to additional or different
          privacy rules that we disclose in connection with those opportunities.
        </p>
        <p>Collection and Use of Information</p>
      </div>

      <LegalSection title="General">
        <p>
          In general, you can browse our Website without telling us who you are
          or revealing any personal information about yourself. At various times,
          you may decide to provide us with your personal information. You should
          know that we receive and may store all personal information (whether
          written or oral) that you provide to us through whatever means you
          provide such information (through our Website, via email, over the
          telephone{isPrivacy ? ", WhatsApp" : ""}, etc.). Personal information
          means any information that may
          be used to identify an individual, including, but not limited to, a
          first and last name, home, billing or other physical address or email
          address as well as any information associated with the foregoing. In
          addition to your contact information, we may collect information about
          your purchases, billing address, shipping address, gender, occupation,
          marital status, anniversary, interests, phone number or other contact
          information, and credit card information.
        </p>
      </LegalSection>

      <LegalSection title="Use of Your Personal Information">
        <p>We may use the information we collect about you to:</p>
        <ul>
          <li>Facilitate your purchases and provide the services you request,</li>
          <li>Confirm and track your order,</li>
          <li>Respond to your inquiries and requests,</li>
          <li>Compare and review your personal information for errors, omissions and accuracy,</li>
          <li>Prevent and detect fraud or abuse,</li>
          <li>
            Improve our Website, service, product offerings, marketing and
            promotional efforts, and overall customer experience,
          </li>
          <li>Identify your product and service preferences,</li>
          <li>
            Understand our customer demographics, preferences, interests,
            purchasing behavior and affordability,
          </li>
          <li>
            Contact you (via email, postal mail, or telephone) regarding products
            and services (of Casagrand Premier Builder Limited or our partners)
            that we believe may be of interest to you.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Personal Information that we May Share with Others">
        <p>
          In certain circumstances, we may share your personal information with
          trusted partners.
        </p>
      </LegalSection>

      <LegalSection title="Service Providers:">
        <p>
          We use trusted third-party service providers to perform certain
          services on our behalf, including:
        </p>
        <p>
          shipping, payment processing, data storage/management, webhosting, web
          analytics, fulfillment, assembly, marketing, mailing, emailing etc.
          These service providers only receive personal information if such
          information is needed to perform their function(s), and they are not
          authorized to use any personal information for any other purpose(s)
          other than the purpose(s) set forth by Casagrand Builder Private
          Limited.
        </p>
      </LegalSection>

      <LegalSection title="Compliance with Law and Fraud Protection:">
        <p>
          We may, and you authorize us to use and disclose any information,
          including personal information:
        </p>
        <ul>
          <li>
            We deem necessary, in our sole discretion, to comply with any
            applicable law, regulation, legal process, or governmental request;
          </li>
          <li>
            In order to investigate, prevent or take action regarding illegal
            activities, suspected fraud, situations involving potential threats
            to the physical safety of any personal or as otherwise required by
            law;
          </li>
          <li>To other companies and organizations for credit fraud protection and risk reduction; and</li>
          <li>To enforce any agreement we have with you.</li>
        </ul>
      </LegalSection>

      <LegalSection title="Business Transfer:">
        <p>
          Your personal information may be disclosed as part of any merger, sale
          of company assets or acquisition, as well as in the event of
          insolvency, bankruptcy or receivership, in which personal information
          would be transferred as one of the business assets of the Company.
        </p>
      </LegalSection>

      <LegalSection title="Anonymous Information:">
        <p>
          We may create anonymous records from personal information by excluding
          information (such as your name) that makes the information personally
          identifiable to you. We may use these records for internal purposes,
          such as analyzing usage patterns so that we may enhance our services,
          and we also reserve the right to use and disclose any information in
          such records at our discretion.
        </p>
      </LegalSection>

      <LegalSection title="Comments:">
        <p>
          We value your comments, feedback, testimonials, etc., which help us
          improve our website, products, and services. By making such submissions
          to us, you assign your rights in the submissions to us, as described in
          the “Submissions” section of our Terms of Service page.
        </p>
        <p>Other Uses of Your Information</p>
      </LegalSection>

      <LegalSection title="IP Address:">
        <p>
          When you visit our Website, Casagrand Builder Private Limited collects
          your IP address to, among other things, help diagnose problems with its
          server, administer and tune the operation of its Website, analyze
          trends, track traffic patterns, gather demographic information for
          aggregate use, and track the date and duration of each session within
          our Website. Your IP address may also be used in combination with your
          personal information to prevent fraud or abuse, customize your shopping
          experience, improve our website, customer service, products, and
          promotional efforts, and to understand your preferences, patterns and
          interests.
        </p>
      </LegalSection>

      <LegalSection title="Data Collection Devices, such as Cookies and Web Beacons:">
        <p>
          Casagrand Builder Private Limited collects data through cookies, web
          logs, web beacons (also known as pixel gifs or action tags) and other
          monitoring technologies to enhance your browsing and shopping
          experience on our website. “Cookies” are small pieces of information
          that are stored by your browser on your computer’s hard drive to
          collect information about your activities on our website. Clear gifs
          are tiny graphics with a unique identifier, similar in function to
          cookies, and are used to track the online movements of Web users or
          within an email for the purpose of transferring information and are not
          stored on your computer.
        </p>
        <p>
          We use cookies and web beacons to deliver our ads, improve and measure
          the usability, track visits from our affiliates and partners,
          performance and effectiveness of our Website, improve and measure the
          effectiveness of our marketing programs, learn how customers use our
          website, estimate our audience size, and to customize your shopping
          experience. Examples of the type of information that we collect through
          these collection devices, includes: total visitors to the website,
          pages viewed, unique visitors, time spent on our Website and on certain
          web pages, etc.
        </p>
        <p>
          We may authorize third parties to use cookies, web beacons and other
          monitoring technologies to compile information about the use of the
          Website or interaction with advertisements that appear on the Website.
          We do have access or control over these cookies. We do not link the
          information we store in cookies or collect from web beacons to any
          personally identifiable information you submit while on our site.
        </p>
        <p>
          We use session ID cookies and persistent cookies. A session ID cookie
          expires when you close your browser. A persistent cookie remains on
          your hard drive for an extended period of time.
        </p>
        <p>
          You are always free to decline cookies if your browser permits (You can
          remove persistent cookies by following directions provided in your
          Internet browser’s “help” file); although, by declining the use of
          cookies you may not be able to use certain features on the Website.
        </p>
        <p>
          As you browse Casagrand Builder Private Limited, advertising cookies
          will be placed on your computer so that we can understand what you are
          interested in. Our display advertising partner, AdRoll, then enables us
          to present you with retargeting advertising on other sites based on
          your previous interaction with Casagrand websites. The techniques our
          partners employ do not collect personal information such as your name,
          email address, postal address or telephone number. You can visit{" "}
          <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer">
            this page
          </a>{" "}
          to opt out of AdRoll and their partners’ targeted advertising.
        </p>
      </LegalSection>

      <LegalSection title="Third Party Personal information:">
        <p>
          If you choose to use our referral service to tell a friend about our
          site, we will ask you for your friend’s email address. We will
          automatically send your friend a one-time email inviting him or her to
          visit the site. Casagrand Builder Private Limited stores this
          information for the sole purpose of sending this one-time email and
          tracking the success of our referral program.
        </p>
        <p>
          Your friend may contact us at{" "}
          <a href="mailto:sales@casagrand.co.in">sales@casagrand.co.in</a> to
          request that we remove any of this information from our database.
        </p>
      </LegalSection>

      <LegalSection title="Customer Stories">
        <p>
          We post customer stories on our web site which may contain personally
          identifiable information. We do obtain the customer’s consent via email
          prior to posting the testimonial to post their name along with their
          testimonial. If you wish to request the removal of your customer story
          you may contact us at{" "}
          <a href="mailto:sales@casagrand.co.in">sales@casagrand.co.in</a>.
        </p>
      </LegalSection>

      <LegalSection title="Public Forums:">
        <p>
          Our Web site offers publicly accessible blogs or community forums. You
          should be aware that any information you provide in these areas may be
          read, collected, and used by others who access them. To request
          removal of your personal information from our blog or community forum,
          contact us at{" "}
          <a href="mailto:sales@casagrand.co.in">sales@casagrand.co.in</a>. In
          some cases, we may not be able to remove your personal information, in
          which case we will let you know if we are unable to do so and why.
        </p>
      </LegalSection>

      <LegalSection title="Children under 13">
        <p>
          Casagrand Builder Private Limited does not knowingly collect personal
          information from children under the age of 13. If we learn that we have
          collected personally identifiable information from a child under the
          age of 13, we will delete that data from our systems. Please visit the
          FTC’s website at{" "}
          <a href="https://www.ftc.gov/" target="_blank" rel="noopener noreferrer">
            www.ftc.gov
          </a>{" "}
          for tips on protecting children’s privacy online.
        </p>
      </LegalSection>

      <LegalSection title="Links">
        <p>
          Our Website may provide links to other third-party Websites which are
          outside our control and not covered by this privacy policy. We
          encourage you to review the privacy policies posted on these (and all)
          Websites.
        </p>
      </LegalSection>

      <LegalSection title="Security">
        <p>
          Casagrand Builder Private Limited is committed to the protection of the
          personally identifiable information that you share with us. We utilize
          a combination of physical and electronic security technologies,
          procedures, and organizational measures to help protect your personally
          identifiable information from unauthorized access, use or disclosure.
          When we transfer sensitive personal information (for example, credit
          card information) over the Internet, we protect it using Secure Sockets
          Layer (SSL) encryption technology. While we strive to safeguard your
          personal information once we receive it, no transmission of data over
          the Internet or any other public network can be guaranteed to be 100%
          secure and, accordingly, we cannot guarantee or warrant the security of
          any information you disclose or transmit to us.
        </p>
      </LegalSection>

      <LegalSection title="Accessing and Updating Your Information">
        <p>
          If the personally identifiable information Casagrand Builder Private
          Limited has gathered from you changes or you would like to access,
          correct, or delete such information, we will gladly provide you access
          to, correct, or delete (to the extent allowed by law) any personal
          information we have collected about you. To request access to, a
          correction to, or deletion of your personal information, please send an
          e-mail to{" "}
          <a href="mailto:sales@casagrand.co.in">sales@casagrand.co.in</a>. If
          you have registered for an account on our site you may update or remove
          your personally identifiable information by logging into your account
          and going to your account management page. We will retain your
          information for as long as your account is active or as needed to
          provide you services. We will retain and use your information as
          necessary to comply with our legal obligations, resolve disputes, and
          enforce our agreements.
        </p>
      </LegalSection>

      <LegalSection title="Choice/Opt-Out">
        <p>We want to communicate with you only if you want to continue to hear from us.</p>
        <p>To opt out of receiving email promotions that we send you:</p>
        <ul>
          <li>Select “unsubscribe” in emails that we send you</li>
        </ul>
        <p>
          Opting out of communication with us does not affect our communications
          with you via telephone or email related to your orders with us. It also
          does not affect our use of your non-personally identifiable
          information.
        </p>
        <p>
          We will send you strictly service-related announcements on rare
          occasions when it is necessary to do so. For instance, if our service
          is temporarily suspended for maintenance, we might send you an email.
        </p>
        <p>
          Generally, you may not opt-out of these communications, which are not
          promotional in nature. If you do not wish to receive them, you have the
          option to deactivate your account.
        </p>
      </LegalSection>

      <LegalSection title="Competition Information">
        <p>
          Information about competitor projects is based on market sources and
          might not be updated and accurate. Casagrand will not be liable for any
          outdated/inaccurate content.
        </p>
      </LegalSection>

      <LegalSection title="Pricing and Information">
        <p>
          Information about Casagrand projects might vary time to time and may
          not be updated and accurate. Casagrand will not be liable for
          outdated/inaccurate content.
        </p>
      </LegalSection>

      {isPrivacy ? null : (
        <LegalSection id="disclaimer" title="Disclaimer">
          <p>
            This website is intended solely for conceptual purposes and does not
            constitute a legally binding offer. The promoters retain the right to
            modify the elevations, specifications, plans and other details as
            deemed appropriate.
          </p>
        </LegalSection>
      )}
    </>
  );
}
