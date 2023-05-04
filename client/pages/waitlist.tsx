import React, { useState } from 'react';
import Image from 'next/image';
import jobjobBanner from '../assets/images/jobjo_banner-1.jpg';

function Waitlist() {
  const [waitlistForm, setWaitlistForm] = useState({
    email: ''
  });

  const handleSubmitWaitlistForm = () => {
    console.log(waitlistForm);
  };

  return (
    <main className="main_waitlist_parent min-h-screen flex flex-col lg:flex-row">
      <div className="waitlist_left w-full lg:w-1/2 lg:h-screen lg:bg-cover">
        <Image alt="jobjo-advert-banner" className="w-full lg:hidden" src={jobjobBanner} priority />
      </div>
      <div className="waitlist_right h-[600px] lg:w-1/2 lg:h-screen lg:bg-cover pt-16 text-center px-3 sm:px-16 relative lg:pt-60">
        <section className="justify-center items-center lg:w-[400px] lg:mx-auto xl:w-[500px]">
          <h3 style={{ color: '#0a66c3' }} className="poppins text-2xl font-bold">
            Join the waitlist
          </h3>
          <p className="nunito-sans mt-3 text-gray-400 px-3">
            We&lsquo;re building something amazing - don&lsquo;t get left out. We&lsquo;ll need your
            email to keep you updated
          </p>
          <form className="mt-6">
            <div className="input-group flex flex-col mb-4 text-[12px] sm:text-[14px]">
              <input
                className="mt-2 px-3 py-3 border outline-none rounded"
                type="email"
                required
                placeholder="add your email here"
                value={waitlistForm.email}
                onChange={(e) => {
                  setWaitlistForm({
                    ...waitlistForm,
                    email: e.target.value
                  });
                }}
                id="password"
              />
            </div>
            <button
              type="button"
              onClick={handleSubmitWaitlistForm}
              className="submit text-center bg-green-500 py-3 text-[12px] sm:text-[14px] text-white rounded w-full"
            >
              Join in
            </button>
          </form>
        </section>
        <footer className="text-gray-400 text-[12px] text-center py-6 absolute bottom-6 left-0 right-0">
          &copy; 2023 Jobjo. All rights reserved.
        </footer>
      </div>
    </main>
  );
}

export default Waitlist;
