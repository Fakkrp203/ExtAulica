import { ParallaxBanner } from "react-scroll-parallax";

const Header = ({ img }) => {
  return (
    <header className="relative">
      <ParallaxBanner
        layers={[{ image: img, speed: -15 }]}
        className="aspect-[2/1] h-80 bg-center bg-cover bg-no-repeat"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </header>
  );
};

export default Header;
