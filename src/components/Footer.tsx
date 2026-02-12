const quickLinks = ["Furniture", "Shop", "About Us", "Contact"];
const customerCare = ["FAQ", "Shipping", "Returns", "Privacy Policy"];
const socials = [
  { name: "Facebook", href: "#" },
  { name: "Instagram", href: "#" },
  { name: "Twitter", href: "#" },
  { name: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-secondary text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 font-heading text-2xl font-normal">Panto</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Making your interior more minimalistic and modern with our curated
              furniture collection. Quality craftsmanship since 2003.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em]">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition-colors hover:text-primary"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em]">
              Customer Care
            </h4>
            <ul className="space-y-3">
              {customerCare.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-gray-400 transition-colors hover:text-primary"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em]">
              Follow Us
            </h4>
            <ul className="space-y-3">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    className="text-sm text-gray-400 transition-colors hover:text-primary"
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Panto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
