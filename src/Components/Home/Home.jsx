import React from 'react'

function Home() {
    return (
        <div className='px-10'>
            <div className="hero borde my-10 ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="text-center w-1/2  lg:text-left">
                        <h1 className="text-5xl font-bold text-violet-500">Expo Marketing!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card shrink-0 border w-1/2 rounded shadow-2xl bg-base-100">
                        <img className='rounded-lg' src="https://humanativaspa.it/wp-content/uploads/2021/05/HN_machine_learning_ist.jpg" alt="" />
                    </div>
                </div>
            </div>
            {/* All Services */}
            <div>
                <h1 className='border border-green-500 w-40 mx-auto rounded  text-3xl font-serif font-bold mb-3 text-green-500'>Services</h1>
                <div className='grid gap-10 grid-cols-1 lg:grid-cols-4 bg-gray-200 rounded  p-10'>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body text-left">
                            <h2 className="card-title">Search Engine Optimization!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Email Marketing!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Facebook Marketing!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="card  bg-base-100 shadow-xl">
                        <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Lead Genaration!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* one website */}
            <div className='flex my-14 mx-40'>
                <img className=' w-1/2 rounded' src="https://co-offiz.com/wp-content/uploads/2023/05/Digital-Marketing-Channels.png" alt="" />
                <div className='w-full felx justify-center items-center my-auto '>
                    <div className=''>
                        <p className='text-5xl font-bold font-serif'>All of your needs </p>
                        <p className='bg-violet-600 text-white w-10 h-10 rounded-full mx-auto flex justify-center items-center my-5'>In</p>
                        <p className='text-7xl w-5/6 mx-auto py-5 text-green-500 border rounded-full border-green-500 '>One Website</p>
                    </div>
                </div>
            </div>
            {/* Top Services */}
            <div className=' bg-pink-800 text-white p-10 rounded'>
                <h1 className='text-3xl font-bold mb-5'> Our Top Services</h1>
                <div className='grid md:grid-cols-3 gap-5 text-left'>
                    <div>
                        <h1 className='text-2xl font-bold mb-3'>Social Media Marketing</h1>
                        <p>This sector revolves around leveraging various social media platforms like Facebook,
                            Instagram, Twitter, LinkedIn, and TikTok to engage with audiences, build brand awareness,
                            and drive traffic or sales. It involves creating and sharing content, running targeted ad campaigns, and fostering
                            interactions with users. </p>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold mb-3'>Search Engin Optimization</h1>
                        <p>
                            SEO is a fundamental sector focused on optimizing websites to rank higher in search
                            engine results pages (SERPs) organically. It involves improving various aspects of a
                            website, including content quality, keyword optimization, meta tags, site speed,
                            mobile responsiveness, and backlink building.
                        </p>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold mb-3'>Email Marketing:</h1>
                        <p>
                            Email marketing involves sending targeted messages, newsletters, or promotional content
                            to a subscriber list to nurture leads, retain customers, and drive conversions. It includes
                            crafting personalized and engaging emails, segmenting the audience based on demographics or
                            behaviors, and A/B testing to optimize open rates, click-through rates, and conversions.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home