export default function Footer() {
  return (
    <footer className="bg-navy text-cream">
      <div className="px-6 py-12 flex flex-col items-center gap-8">

        {/* Centered group: map + stacked text column */}
        <div className="flex flex-col md:flex-row items-start gap-10">

          {/* Google Maps embed */}
          <div className="rounded-lg overflow-hidden opacity-80 hover:opacity-100 transition-opacity duration-200 flex-shrink-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.7383526919!2d-84.32481992357507!3d33.79387177327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f506cd1b0e6441%3A0x92e4e1a5b3a1c7c5!2s36%20Eagle%20Row%2C%20Atlanta%2C%20GA%2030322!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="360"
              height="260"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Language Biomarker Lab location"
              aria-label="Map showing Language Biomarker Lab at 36 Eagle Row, Emory University, Atlanta GA"
            />
          </div>

          {/* Location + Contact stacked */}
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-sm font-semibold text-cream mb-3">Location</p>
              <address className="not-italic text-sm text-baby-blue/70 leading-6">
                <span className="block">Emory University</span>
                <span className="block">36 Eagle Row, Suite 340</span>
                <span className="block">Atlanta, Georgia 30322-2470</span>
              </address>
            </div>
            <div>
              <p className="text-sm font-semibold text-cream mb-3">Contact</p>
              <address className="not-italic text-sm text-baby-blue/70 leading-6">
                <span className="block">
                  <a
                    href="mailto:pwolff@emory.edu"
                    className="hover:text-baby-blue transition-colors duration-150"
                  >
                    pwolff@emory.edu
                  </a>
                </span>
                <span className="block">
                  <a
                    href="tel:+14047277458"
                    className="hover:text-baby-blue transition-colors duration-150"
                  >
                    Tel: 404-727-7458
                  </a>
                </span>
              </address>
            </div>
          </div>

        </div>

        {/* Copyright */}
        <p className="text-xs text-baby-blue/30">
          © {new Date().getFullYear()} Language Biomarker Lab, Emory University
        </p>

      </div>
    </footer>
  );
}
