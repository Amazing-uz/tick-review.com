import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Use | WatchHub",
  description: "Terms and conditions for using WatchHub website and services.",
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Terms of Use</h1>
        <p className="mb-8 text-sm text-muted-foreground">Last Updated: January 2025</p>

        <div className="prose prose-stone max-w-none">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using tick-review ("the Website"), you accept and agree to be bound by the terms and
            provisions of this agreement. If you do not agree to these terms, please do not use this Website.
          </p>

          <h2>2. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of the materials (information or software) on
            tick-review's Website for personal, non-commercial transitory viewing only. This is the grant of a license, not
            a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>Modify or copy the materials</li>
            <li>Use the materials for any commercial purpose or for any public display</li>
            <li>Attempt to decompile or reverse engineer any software contained on the Website</li>
            <li>Remove any copyright or other proprietary notations from the materials</li>
            <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
          </ul>

          <h2>3. Disclaimer</h2>
          <p>
            The materials on tick-review's Website are provided on an 'as is' basis. tick-review makes no warranties,
            expressed or implied, and hereby disclaims and negates all other warranties including, without limitation,
            implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement
            of intellectual property or other violation of rights.
          </p>

          <h2>4. Affiliate Links</h2>
          <p>
            tick-review participates in the Amazon Services LLC Associates Program and other affiliate advertising
            programs. This means we may earn a commission when you click on certain links and make purchases. These
            commissions come at no additional cost to you and help support our content creation.
          </p>

          <h2>5. Product Reviews and Recommendations</h2>
          <p>
            All product reviews and recommendations on Tick-review represent our honest opinions based on our testing and
            research. We strive to provide accurate and unbiased information, but individual experiences may vary. We
            are not responsible for any purchases made based on our recommendations.
          </p>

          <h2>6. Accuracy of Materials</h2>
          <p>
            The materials appearing on tick-review's Website could include technical, typographical, or photographic
            errors. Tick-review does not warrant that any of the materials on its Website are accurate, complete, or
            current. Tick-review may make changes to the materials contained on its Website at any time without notice.
          </p>

          <h2>7. Links</h2>
          <p>
            Tick-review has not reviewed all of the sites linked to its Website and is not responsible for the contents of
            any such linked site. The inclusion of any link does not imply endorsement by Tick-review of the site. Use of
            any such linked website is at the user's own risk.
          </p>

          <h2>8. User Comments and Content</h2>
          <p>
            Users may post comments, reviews, and other content on the Website. By posting content, you grant tick-review a
            non-exclusive, royalty-free, perpetual license to use, reproduce, modify, and display such content. You are
            responsible for the content you post and must not post content that is illegal, offensive, or infringes on
            others' rights.
          </p>

          <h2>9. Privacy</h2>
          <p>
            Your use of tick-review's Website is also governed by our Privacy Policy. Please review our Privacy Policy,
            which also governs the Website and informs users of our data collection practices.
          </p>

          <h2>10. Modifications</h2>
          <p>
            tick-review may revise these terms of use for its Website at any time without notice. By using this Website,
            you are agreeing to be bound by the then current version of these Terms of Use.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of the United States,
            and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
          </p>

          <h2>12. Contact Information</h2>
          <p>
            If you have any questions about these Terms of Use, please contact us at{" "}
            <a href="mailto:legal@watchhub.com" className="text-primary hover:underline">
              legal@watchhub.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}
