import React, { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import jobjoLogo from '../assets/images/jobjo-logo-black-bg.png';

function Home() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/waitlist');
    }, 7000);
  }, [router]);

  return (
    <main className="main_waitlist_parent h-screen flex justify-center items-center">
      <div className="w-[500px] text-center mx-auto">
        <Image alt="jobjo-advert-banner" className="mx-auto" width={150} src={jobjoLogo} />
        <div className="pt-6 ">
          <p className="text-gray-400 nunito-sans text-[20px]">
            Hi there, <br /> We&lsquo;re currently at work.
          </p>
          <p className="animate-pulse font-bold poppins text-green-500 text-xl pt-4 ">
            You&lsquo;re being redirected to the wailist page...
          </p>
        </div>
      </div>
    </main>
  );
}

export default Home;
