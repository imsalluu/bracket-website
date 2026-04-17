import Navbar from "@/components/Navbar";
import MainFooter from "@/components/MainFooter";
import CustomCursor from "@/components/CustomCursor";
import Section from "@/components/Section";

export default function TermsOfService() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <main className="flex-1 pt-32 px-6">
        <Section className="py-20 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-8">
            Terms of <span className="text-primary italic">Service</span>
          </h1>
          <p className="text-xl text-gray-400 mb-16 leading-relaxed">
            Last updated: April 17, 2026. By using Bracket's services, you agree to these terms. Please read them carefully.
          </p>

          <div className="space-y-12 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="leading-relaxed">
                By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to all of these terms, do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Description of Service</h2>
              <p className="leading-relaxed">
                Bracket provides digital agency services, including software development, AI integration, and automation workflows.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. User Conduct</h2>
              <p className="leading-relaxed">
                You agree not to use our services for any illegal or unauthorized purpose. You must not, in the use of the service, violate any laws in your jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
              <p className="leading-relaxed">
                In no event shall Bracket be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues.
              </p>
            </section>
          </div>
        </Section>
      </main>

      <MainFooter />
    </>
  );
}
