//next image
import Image from "next/image";

//next link
import Link from "next/link";

//components
import Socials from '../components/Socials';

import logo from '../public/logo_j.png';

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href={'/'}>
            <Image unoptimized src={logo} width={150} height={25} alt="" priority={true}/>
          </Link>
          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>

  );
};

export default Header;
