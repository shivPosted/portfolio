import Arrowup from "../assets/icons/arrow-up-right";

const socialLinks = [
  {
    name: "Github",
    link: "#",
  },
  {
    name: "Twitter",
    link: "#",
  },
  {
    name: "Instagram",
    link: "#",
  },
  {
    name: "LinkedIn",
    link: "#",
  },
];

function Footer() {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      <div className="absolute h-[400px] w-[1800px] bg-emerald-300/30 bottom-0 left-1/2 -translate-x-1/2 -z-10 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className="container px-3 mx-auto lg:max-w-[80%]">
        <div className="flex flex-col md:flex-row md:justify-between items-center border-t  border-t-white/15 gap-8 text-sm py-6">
          <div className="text-white/40">
            &copy; {new Date().getFullYear()} All Rights Reserverd.
          </div>
          <nav className="flex flex-col gap-8 md:flex-row">
            {socialLinks.map((social) => (
              <a
                href={social.link}
                key={social.name}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{social.name}</span>
                <Arrowup width="1.2rem" height="1.2rem" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
