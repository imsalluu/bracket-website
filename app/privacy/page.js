import Navbar from "@/components/Navbar";
import MainFooter from "@/components/MainFooter";
import CustomCursor from "@/components/CustomCursor";
import Section from "@/components/Section";

export default function PrivacyPolicy() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <main className="flex-1 pt-32 px-6">
        <Section className="py-20 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-8">
            Privacy <span className="text-primary italic">Policy</span>
          </h1>
          <p className="text-xl text-gray-400 mb-16 leading-relaxed">
            Last updated: April 17, 2026. We take your privacy seriously. This document explains how we collect, use, and protect your data.
          </p>

          <div className="space-y-12 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="leading-relaxed">
                We collect information that you provide directly to us, such as when you create an account, use our services, or communicate with us. This may include your name, email address, and any other information you choose to provide.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Information</h2>
              <p className="leading-relaxed">
                We use the information we collect to provide, maintain, and improve our services, to develop new ones, and to protect Bracket and our users.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
              <p className="leading-relaxed">
                We use reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Sharing of Information</h2>
              <p className="leading-relaxed">
                We do not share your personal information with companies, organizations, or individuals outside of Bracket except in the following cases: with your consent, for external processing, or for legal reasons.
              </p>
            </section>
          </div>
        </Section>
      </main>

      <MainFooter />
    </>
  );
}
