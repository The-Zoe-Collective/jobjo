import React, { useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import jobjoLogo from '../assets/images/jobjo-logo.png';
import Emoji from '../components/Emoji';

function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/waitlist');
    }, 7000);
  }, [router]);

  return (
    <>
      <Head>
        <title>Jobjo</title>
        <meta
          property="og:image"
          content="https://www.jobjo.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjobjo-banner-1.e71413e3.jpg&w=3840&q=75"
        />
      </Head>
      <main className="main_waitlist_parent h-screen flex justify-center items-center px-4 nunito-sans">
        <div className="w-[500px] text-center mx-auto">
          <Image alt="jobjo-advert-banner" className="mx-auto" width={120} src={jobjoLogo} />
          <div className="pt-6 ">
            <p className="text-gray-400 nunito-sans text-[15px]">
              Hi there
              <span className="text-3xl">
                <Emoji label="wave" symbol="👋" />,
              </span>
              <br /> We&lsquo;re currently at work.
            </p>
            <p className="animate-pulse font-bold poppins text-green-500 text-lg pt-4">
              You&lsquo;re being redirected to the waitlist page...
            </p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
