// BlackRazor — Full Next.js Single-Page Site (Using Local Images)

const FIRE_IMG = "/images/hero-fireplace.jpg";
const ABOUT_KITCHEN_IMG = "/images/about-kitchen.jpg";
const FEAT_BATH_IMG = "/images/featured-bath.jpg";
const FEAT_KITCHEN_IMG = "/images/featured-kitchen.jpg";
const CONTACT_ENTRY_IMG = "/images/contact-entry.jpg";

export default function Home() {
  return (
    <div className="bg-black text-white font-sans">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Inter:wght@300;400;500;600;700&display=swap');
        :root {
          --display: 'Cormorant Garamond', serif;
          --text: 'Inter', system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
        }
        body {
          font-family: var(--text);
          margin: 0;
          padding: 0;
        }
        .h-display {
          font-family: var(--display);
          font-weight: 600;
          letter-spacing: -0.03em;
          text-shadow: 0 1px 4px rgba(0,0,0,0.3);
        }
      `}</style>

      {/* HEADER */}
      <header className="pt-10 pb-6 text-center">
        <h1 className="h-display text-5xl md:text-7xl font-bold mb-3">BLACKRAZOR</h1>
        <p className="uppercase tracking-widest text-xs md:text-sm text-gray-300/90">
          construction
        </p>
      </header>

      {/* HERO IMAGE */}
      <section
        className="relative h-[60vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${FIRE_IMG})` }}
      />

      {/* CTA */}
      <div className="py-6 text-center">
        <a
          href="#contact"
          className="inline-flex items-center justify-center rounded-lg px-6 py-3 border border-white/40 text-white hover:bg-white/10"
        >
          Start Your Project
        </a>
      </div>

      {/* ABOUT SECTION */}
      <section className="grid md:grid-cols-2 gap-8 px-8 py-40 max-w-7xl mx-auto" id="about">
        <img
          src={ABOUT_KITCHEN_IMG}
          alt="Custom kitchen cabinetry"
          className="rounded-lg object-cover w-full h-full border border-white/10"
        />

        <div className="flex flex-col justify-center">
          <h2 className="h-display text-4xl font-bold mb-6">Where form meets function.</h2>
          <p className="text-gray-200 leading-relaxed mb-4">
            We build bold, architectural homes along Florida’s 30A—crafted with discipline and a design-first point of view.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Think dark brick, large-scale mantels, tailored lines, and materials that age beautifully. Modern without cold. Coastal without cliché.
          </p>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      <section className="bg-[#0b0b0b] py-32 px-8" id="work">
        <h2 className="h-display text-4xl font-bold text-center mb-12">Featured Projects</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[ 
            { img: FEAT_BATH_IMG },
            { img: FEAT_KITCHEN_IMG },
            { img: CONTACT_ENTRY_IMG },
          ].map((proj, i) => (
            <div key={i} className="bg-[#111] border border-white/5 rounded-lg overflow-hidden">
              <img src={proj.img} className="w-full h-80 object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="relative bg-cover bg-center py-48 flex items-center justify-center"
        style={{ backgroundImage: `url(${CONTACT_ENTRY_IMG})` }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.15) 40%, rgba(0,0,0,0) 70%)",
          }}
        />

        <div className="relative text-center z-10 px-6">
          <h2 className="h-display text-5xl font-bold mb-6">
            Ready to build something extraordinary?
          </h2>
          <p className="text-gray-200 mb-8 text-lg max-w-xl mx-auto">
            Tell us about your site, timeline, and budget. We’ll take it from there.
          </p>

          <a
            href="mailto:contact@blackrazorconstruction.com"
            className="inline-flex items-center justify-center rounded-lg px-6 py-3 bg-white text-black font-medium hover:opacity-90"
          >
            Start Your Project
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-neutral-800 py-12 text-center text-gray-500">
        <p>© {new Date().getFullYear()} BlackRazor Construction. All rights reserved.</p>

        <div className="mt-4 flex justify-center gap-6 flex-wrap">
          <a href="mailto:contact@blackrazorconstruction.com">contact@blackrazorconstruction.com</a>
          <a href="tel:850-273-8240">850-273-8240</a>
          <a
            href="https://www.instagram.com/blackrazorconstruction/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
      </footer>
    </div>
  );
}

