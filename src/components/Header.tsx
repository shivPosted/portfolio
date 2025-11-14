import Navbar from "./Navbar";

function Header() {
  return (
    <div className="flex items-center justify-center fixed top-3 z-10 w-full px-1">
      <Navbar />
    </div>
  );
}
export default Header;
