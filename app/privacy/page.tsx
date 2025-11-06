import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy - WatchHub | How We Protect Your Data",
  description:
    "Learn how WatchHub collects, uses, and protects your personal information. We are committed to transparency and data privacy.",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              At WatchHub, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose,
              and safeguard your information when you visit our website. Please read this privacy policy carefully. If
              you do not agree with the terms of this privacy policy, please do not access the site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <h3 className="text-xl font-semibold mb-3 mt-6">Personal Data</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may collect personally identifiable information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Subscribe to our newsletter</li>
              <li>Contact us through our contact form</li>
              <li>Leave comments on our articles</li>
              <li>Participate in surveys or promotions</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              This information may include your name, email address, and any other information you choose to provide.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Automatically Collected Information</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              When you visit our website, we automatically collect certain information about your device, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Referring website</li>
              <li>Pages viewed and time spent on pages</li>
              <li>Device identifiers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use the information we collect in the following ways:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>To provide, operate, and maintain our website</li>
              <li>To improve, personalize, and expand our website</li>
              <li>To understand and analyze how you use our website</li>
              <li>To develop new products, services, features, and functionality</li>
              <li>To communicate with you, including for customer service and updates</li>
              <li>To send you newsletters and marketing communications (with your consent)</li>
              <li>To process your transactions and manage your requests</li>
              <li>To prevent fraudulent transactions and monitor against theft</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We use cookies and similar tracking technologies to track activity on our website and store certain
              information. Cookies are files with a small amount of data that may include an anonymous unique
              identifier.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">Types of cookies we use:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Essential Cookies:</strong> Required for the website to function properly
              </li>
              <li>
                <strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website
              </li>
              <li>
                <strong>Advertising Cookies:</strong> Used to deliver relevant advertisements
              </li>
              <li>
                <strong>Preference Cookies:</strong> Remember your settings and preferences
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However,
              if you do not accept cookies, you may not be able to use some portions of our website. For more
              information, see our{" "}
              <Link href="/cookies" className="text-primary hover:underline">
                Cookie Policy
              </Link>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
            <h3 className="text-xl font-semibold mb-3 mt-6">Amazon Associates Program</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              WatchHub is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program
              designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com.
              When you click on Amazon links on our site, Amazon may use cookies to track your activity for commission
              purposes.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Analytics Services</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We may use third-party analytics services (such as Google Analytics) to monitor and analyze web traffic.
              These services may use cookies and similar technologies to collect information about your use of our
              website. This information is used to compile reports and help us improve our website.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Social Media</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our website may contain links to social media platforms. When you interact with these features, the social
              media companies may collect information about you. Please refer to their privacy policies for information
              about their data practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Regular security assessments and updates</li>
              <li>Access controls and authentication</li>
              <li>Secure data storage practices</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive
              to use commercially acceptable means to protect your personal information, we cannot guarantee its
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>
                <strong>Access:</strong> Request access to the personal information we hold about you
              </li>
              <li>
                <strong>Correction:</strong> Request correction of inaccurate or incomplete information
              </li>
              <li>
                <strong>Deletion:</strong> Request deletion of your personal information
              </li>
              <li>
                <strong>Objection:</strong> Object to processing of your personal information
              </li>
              <li>
                <strong>Portability:</strong> Request transfer of your information to another service
              </li>
              <li>
                <strong>Withdraw Consent:</strong> Withdraw consent for data processing at any time
              </li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-4">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Children's Privacy</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website is not intended for children under the age of 13. We do not knowingly collect personal
              information from children under 13. If you are a parent or guardian and believe your child has provided us
              with personal information, please contact us so we can delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">International Data Transfers</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your information may be transferred to and maintained on computers located outside of your state,
              province, country, or other governmental jurisdiction where data protection laws may differ. By using our
              website, you consent to such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy
              Policy periodically for any changes. Changes are effective when posted on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-muted p-6 rounded-lg">
              <p className="text-muted-foreground mb-2">
                <strong>Email:</strong> privacy@tick-review.com
              </p>
              <p className="text-muted-foreground mb-2">
                <strong>Contact Form:</strong>{" "}
                <Link href="/contact" className="text-primary hover:underline">
                  Visit our contact page
                </Link>
              </p>
              <p className="text-muted-foreground">
                <strong>Response Time:</strong> We aim to respond to all privacy inquiries within 48 hours
              </p>
            </div>
          </section>

          <section className="border-t pt-8 mt-8">
            <h2 className="text-2xl font-bold mb-4">Additional Resources</h2>
            <div className="grid gap-4">
              <Link
                href="/terms"
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted transition-colors"
              >
                <div>
                  <h3 className="font-semibold mb-1">Terms of Use</h3>
                  <p className="text-sm text-muted-foreground">Read our terms and conditions</p>
                </div>
                <span className="text-muted-foreground">→</span>
              </Link>
              <Link
                href="/cookies"
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted transition-colors"
              >
                <div>
                  <h3 className="font-semibold mb-1">Cookie Policy</h3>
                  <p className="text-sm text-muted-foreground">Learn about our cookie usage</p>
                </div>
                <span className="text-muted-foreground">→</span>
              </Link>
              <Link
                href="/disclaimer"
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted transition-colors"
              >
                <div>
                  <h3 className="font-semibold mb-1">Affiliate Disclosure</h3>
                  <p className="text-sm text-muted-foreground">Our Amazon Associates relationship</p>
                </div>
                <span className="text-muted-foreground">→</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
