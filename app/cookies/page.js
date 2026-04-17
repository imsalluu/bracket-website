import Navbar from "@/components/Navbar";
import MainFooter from "@/components/MainFooter";
import CustomCursor from "@/components/CustomCursor";
import Section from "@/components/Section";

export default function CookiePolicy() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      
      <main className="flex-1 pt-32 px-6">
        <Section className="py-20 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-black mb-8">
            Cookie <span className="text-primary italic">Policy</span>
          </h1>
          <p className="text-xl text-gray-400 mb-16 leading-relaxed">
            Last updated: April 17, 2026. This policy explains how use cookies and similar technologies to recognize you when you visit our website.
          </p>

          <div className="space-y-12 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. What are Cookies?</h2>
              <p className="leading-relaxed">
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Why do we use Cookies?</h2>
              <p className="leading-relaxed">
                We use first party and third party cookies for several reasons. Some cookies are required for technical reasons in order for our website to operate, and we refer to these as "essential" or "strictly necessary" cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. How can I control Cookies?</h2>
              <p className="leading-relaxed">
                You have the right to decide whether to accept or reject cookies. You can set or amend your web browser controls to accept or refuse cookies.
              </p>
            </section>
          </div>
        </Section>
      </main>

      <MainFooter />
    </>
  );
}
