const quickLinks = [
  { name: "Email Marketing", href: "#" },
  { name: "Campaigns", href: "#" },
  { name: "Branding", href: "#" },
];
const furniture = ["Beds", "Chair", "All"];
const socials = [
  { name: "Facebook", href: "#", icon: "facebook" },
  { name: "Twitter", href: "#", icon: "twitter" },
  { name: "Instagram", href: "#", icon: "instagram" },
];

export default function Footer() {
  return (
    <footer id="footer" className="bg-secondary-bg text-secondary">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 font-heading text-3xl font-bold">Panto</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              The advantage of hiring a workspace with us is that gives you comfortable service and all-around facilities.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-6 text-base font-semibold text-primary uppercase">
              Services
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-600 transition-colors hover:text-primary"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Furniture */}
          <div>
            <h4 className="mb-6 text-base font-semibold text-primary uppercase">
              Furniture
            </h4>
            <ul className="space-y-3">
              {furniture.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-gray-600 transition-colors hover:text-primary"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="mb-6 text-base font-semibold text-primary uppercase">
              Follow Us
            </h4>
            <ul className="space-y-3">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    className="flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-primary"
                  >
                    {social.icon === "facebook" && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    )}
                    {social.icon === "twitter" && (
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    )}
                    {social.icon === "instagram" && (
                      <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01" /></svg>
                    )}
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 border-t border-gray-300 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <p className="text-sm text-gray-600">
              Copyright © 2021
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-600 transition-colors hover:text-primary">
                Terms & Conditions
              </a>
              <a href="#" className="text-sm text-gray-600 transition-colors hover:text-primary">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
