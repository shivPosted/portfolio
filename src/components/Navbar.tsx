function Navbar() {
  return (
    <nav className="flex gap-1  bg-white/10 backdrop-blur-md border rounded-full border-white/15 p-0.5">
      <a href="#" className="nav-item">
        Home
      </a>
      <a href="#" className="nav-item">
        Projects
      </a>
      <a href="#" className="nav-item">
        About
      </a>
      <a
        href="#"
        className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
      >
        Contact
      </a>
    </nav>
  );
}
export default Navbar;
