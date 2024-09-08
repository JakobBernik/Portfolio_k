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
import Nav from '../components/Nav'
import Header from '../components/Header'
import TopLeftImg from '../components/TopLeftImg'

const Layout = ({children}) => {
  return (
  <div className= {`page bg-[url("../public/black.webp")] text-white bg-cover bg-no-repeat ${vt323.variable} font-vt323 relative`}>
    <TopLeftImg/>
    <Nav/>
    <Header/>
    {children}
  </div>
  );
};

export default Layout;
