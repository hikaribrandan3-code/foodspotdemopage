import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      <div className="container mx-auto px-6 h-16 flex items-center justify-center">
        <img
          src={logo}
          alt="FoodSpot"
          className="h-10 w-auto object-contain"
        />
      </div>
    </header>
  );
};

export default Header;
