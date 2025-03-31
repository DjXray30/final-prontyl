import React from 'react';

function About() {
    return (
        <div className='py-40 px-12 [&_p]:text-xl'>
            <section className='flex gap-15'>
                <article className='flex-5/12'>
                    <h1 className='font-bold text-7xl'>We bring democracy closer to everyone</h1>
                    <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, modi.</p>
                </article>
                <article className='flex-7/12 text-neutral-500'>
                    <h1 className='font-bold text-6xl'>
                        Our mission is to bring democracy closer to everyone through{' '}
                        <span className='text-black before:content-[""] before:block'>
                            secure, accessible, and transparent digital voting solutions.
                        </span>
                    </h1>
                    <p className='my-5 max-w-1/2'>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi dolorum distinctio explicabo impedit iste! Error similique consectetur odio quibusdam quo, possimus ullam totam blanditiis vitae earum, veritatis delectus facilis ratione.
                    </p>
                </article>
            </section>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, doloremque earum. Fugit commodi neque nisi magni iste libero cum sed, quaerat tempora quam iusto excepturi temporibus explicabo incidunt at harum dolorem debitis modi illum sequi. Explicabo vero vitae voluptatum nostrum sint consequatur, a aperiam minus possimus molestiae soluta cumque quos.
            </p>

            <div className='relative grid grid-cols-4 gap-10 my-20 *:before:content-[""] *:before:absolute *:before:h-[calc(100%-2*(1.25rem))] *:before:border-3'>
                <article className='flex flex-col justify-between gap-5 py-5 *:ml-5'>
                    <h2 className='text-6xl'>
                        50<span className='text-lg align-middle mx-2'>+</span>
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis natus magnam pariatur adipisci quibusdam.</p>
                </article>
                <article className='flex flex-col justify-between gap-5 py-5 *:ml-5'>
                    <h2 className='text-6xl'>
                        50<span className='text-lg align-middle mx-2'>+</span>
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis natus magnam pariatur adipisci quibusdam.</p>
                </article>
                <article className='flex flex-col justify-between gap-5 py-5 *:ml-5'>
                    <h2 className='text-6xl'>
                        50<span className='text-lg align-middle mx-2'>+</span>
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis natus magnam pariatur adipisci quibusdam.</p>
                </article>
                <article className='flex flex-col justify-between gap-5 py-5 *:ml-5'>
                    <h2 className='text-6xl'>
                        50<span className='text-lg align-middle mx-2'>+</span>
                    </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia reiciendis natus magnam pariatur adipisci quibusdam.</p>
                </article>
            </div>
        </div>
    );
}

export default About;
