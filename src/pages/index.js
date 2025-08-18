import Head from "next/head";
import Image from "next/image";
import About from "@/Components/About";
  import Link from 'next/link'
import HeroSection from "@/Components/Home";
import Navbar from "@/Components/Navbar";
import Project  from '@/Components/Project';



export default function Home() {

  return (
    <>
     <Head>
<link rel="icon" type="image/png" href="/Logos.png" />
      
        <title>SynapTek Infotech</title>
      </Head>
      <main>
      
          <Navbar/>
            <HeroSection/>
              <About/>
                       <Project />

      </main>
    </>
  );
}
