import React from 'react';
import CompetitorBenchmarking from '../components/AboutUsCard.jsx' // Updated path
import Testimonials from '../components/Testimony.jsx'; // Updated path
import Copyright from '../components/Copyright.jsx';
function About() {
    return (
        <>
        <div className='pt-40 pb-10 px-12 [&_p]:text-xl bg-amber-50'>
            <section className='flex gap-15'>
                <article className='flex-5/12'>
                    <h1 className='font-bold text-7xl'>We bring democracy closer to everyone</h1>
                    <p className='my-5'>"Secure, simple, online voting. Your voice, amplified."</p>
                </article>
                <article className='flex-7/12 text-neutral-500'>
                    <h1 className='font-bold text-6xl'>
                        Our mission is to bring democracy closer to everyone through{' '}
                        <span className='text-black before:content-[""] before:block'>
                            secure, accessible, and transparent digital voting solutions.
                        </span>
                    </h1>
                    <p className='my-5 max-w-1/2'>
                    "Secure online voting: empowering participation, ensuring accurate results, and modernizing democratic processes for increased accessibility and civic engagement."
                    </p>
                </article>
            </section>

            <p ><span>
            "Our online voting platform modernizes democracy, providing secure and accessible voting for all. We simplify the process, aiming to boost participation and ensure every voice counts. With robust security and an intuitive design, we prioritize transparency and trust. We're committed to empowering citizens and fostering civic engagement through reliable digital elections."
            </span></p>

            <div className='relative grid grid-cols-4 gap-10 my-20 *:before:content-[""] *:before:absolute *:before:h-[calc(100%-2*(1.25rem))] *:before:border-3'>
                <article className='flex flex-col justify-between gap-5 py-5 *:ml-5'>
                    <h2 className='text-6xl'>
                        50 Lakh<span className='text-lg align-middle mx-2'>+</span>
                    </h2>
                    <p><span className='text-4xl'> Registered Voters</span></p>
                </article>
                <article className='flex flex-col justify-between gap-5 py-5 *:ml-5'>
                    <h2 className='text-6xl'>
                        70 Crores<span className='text-lg align-middle mx-2'>+</span>
                    </h2>
                    <p><span className='text-4xl'>Votes Casted</span></p>
                </article>
                <article className='flex flex-col justify-between gap-5 py-5 *:ml-5'>
                    <h2 className='text-6xl'>
                        2 Weeks<span className='text-lg align-middle mx-2'>+</span>
                    </h2>
                    <p><span className='text-4xl'>Experience</span></p>
                </article>
                <article className='flex flex-col justify-between gap-5 py-5 *:ml-5'>
                    <h2 className='text-6xl'>
                        30<span className='text-lg align-middle mx-2'>+</span>
                    </h2>
                    <p><span className='text-4xl'>Elections Held</span></p>
                </article>
            </div>
            <Testimonials className='mb-20'/>
            <CompetitorBenchmarking/>
            
        </div>
        <Copyright/>
        </>
    );
}

export default About;
