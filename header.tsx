import Link from 'next/link';


const sideBar = () => {
 return (
   <header className="bg-brown text-soft-brown py-4 sticky top-0  ">
     <nav className="container mx-auto flex justify-between ">
       <Link href="/" className="text-2xl font-bold">
         portofolio
       </Link>
     </nav>
   </header>
 );
};


export default sideBar;
