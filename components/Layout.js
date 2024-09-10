//fonts
import {VT323} from '@next/font/google';

//font settings
const vt323 = VT323({
    subsets: ['latin'],
    variable: '--font-vt323',
    weight: ['400'],
    display:'swap',
});

//components
import Nav from '../components/Nav';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Layout = ({children}) => {
  return (
  <div className= {`page bg-[url("../public/black.webp")] text-white  ${vt323.variable} font-vt323 relative overflow-y-scroll`}>
    <Nav/>
    <Header/>
      {children}
    <Footer/>
  </div>
  );
};

export default Layout;
