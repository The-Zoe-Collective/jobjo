import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import jobjoBanner from '../assets/images/jobjo-banner-1.jpg';
import { Toaster, toast } from 'react-hot-toast';
import axios from 'axios';

function Waitlist() {
  const [waitlistForm, setWaitlistForm] = useState({
    email: '',
    name: ''
  });

  const handleSubmitWaitlistForm = async (e: any) => {
    e.preventDefault();
    console.log(waitlistForm);

    if (!waitlistForm.email || !waitlistForm.name) {
      toast.error('please fill in all fields');
      return;
    }

    const toastId = toast.loading('processing request...');

    try {
      const response = await axios.post(
        'https://jobjo-project-server.onrender.com/api/v1/join-waitlist',
        waitlistForm
      );

      console.log(response);

      if (response.status === 201 && response.data.requestStatus === 'success') {
        toast.success(
          <span style={{ textAlign: 'center' }}>
            You are in!!! - we just sent you a welcome email.
          </span>,
          {
            id: toastId,
            duration: 4000
          }
        );

        setWaitlistForm({
          email: '',
          name: ''
        });
      } else {
        toast.error('something went wrong - please fill in all fields correctly and try again', {
          id: toastId,
          duration: 4000
        });
      }

      return;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Toaster />
      <Head>
        <title>Jobjo | join our waitlist</title>
        <meta property="og:image" content="../assets/images/jobjo-banner-1.jpg" />
      </Head>
      <main className="main_waitlist_parent min-h-screen flex flex-col lg:flex-row nunito-sans">
        <div className="waitlist_left w-full lg:w-1/2 lg:h-screen lg:bg-cover">
          <Image
            alt="jobjo-advert-banner"
            placeholder="blur"
            className="w-full lg:hidden"
            src={jobjoBanner}
            priority
          />
        </div>
        <div className="waitlist_right h-[850px] lg:w-1/2 lg:h-screen lg:bg-cover pt-16 px-3 sm:px-16 relative lg:pt-60">
          <section className="justify-center items-center lg:w-full lg:mx-auto xl:w-[600px] mb-20">
            <h3 style={{ color: '#0a66c3' }} className="poppins text-xl font-bold text-center">
              We&lsquo;re building a tech community(for talents and recruiters) that will reshape
              the way we think jobs in tech.{' '}
            </h3>
            <p className="mt-3 text-gray-400 text-center">
              Jobjo is an amazing platform that provides a base for tech talents to discover job
              opportunities - and for companies to find the best talents. <br /> We&lsquo;re
              building something different - a job board, and a job-focused community to help
              redefine the way we think jobs in tech.
            </p>
            <p className="mt-3 text-gray-400 text-center">
              Don&lsquo;t get left out - we&lsquo;ll need your email to keep you updated - we
              promise not to spam you.
            </p>
            <form className="mt-10 md:w-[500px] md:mx-auto text-gray-400">
              <div className="full-name input-group flex flex-col mb-6 text-[14px]">
                <label className="px-2" htmlFor="name">
                  Name
                </label>
                <input
                  className="mt-2 px-2 text-[12px] py-3 border-b outline-none rounded"
                  type="text"
                  required
                  placeholder="tell us your name"
                  value={waitlistForm.name}
                  onChange={(e) => {
                    setWaitlistForm({
                      ...waitlistForm,
                      name: e.target.value
                    });
                  }}
                  id="name"
                />
              </div>
              <div className="input-group flex flex-col mb-4 text-[14px]">
                <label className="px-2" htmlFor="full-name">
                  Email
                </label>
                <input
                  className="mt-2 px-2 text-[12px] py-3 border-b outline-none rounded"
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
                className="submit-btn mt-4 text-center bg-green-500 py-3 text-[14px] font-bold sm:text-[14px] text-white rounded w-full"
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
    </>
  );
}

export default Waitlist;
