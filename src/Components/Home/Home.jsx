import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

    const { data: services = [], refetch } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch('services.json')
            const data = await res.json()
            return data
        }
    })
    return (
        <div className='px-5 md:px-10'>
            <div className="hero my-10 ">
                <div className="hero-content flex-col lg:flex-row ">
                    <div className="text-center md:w-1/2  lg:text-left">
                        <h1 className="font-serif text-5xl font-bold text-violet-500">Expo Marketing!</h1>
                        <p className="mt-10">Accelerate Your Online Presence and Maximize Your Reach with Tailored Digital Strategies. Amplify Your Business Growth through Innovative Marketing Techniques and Proven Results.</p>
                    </div>
                    <div className="card shrink-0  w-full md:w-1/2 rounded shadow-2xl ">
                        <img className='rounded-lg' src="https://humanativaspa.it/wp-content/uploads/2021/05/HN_machine_learning_ist.jpg" alt="" />
                    </div>
                </div>
            </div>
            {/* All Services */}
            <div>
                <h1 className='border border-violet-500 w-80 mx-auto rounded  text-3xl font-serif font-bold mb-10 text-violet-600'>Services</h1>
                <div className='grid gap-10 grid-cols-1 lg:grid-cols-4 bg-gray-200 rounded  p-10'>

                    {
                        services?.slice(0, 4).map((service, id) =>
                            <div key={id} className="card  bg-base-100 shadow-xl">
                                <figure><img src={service.photo} alt="Shoes" /></figure>
                                <div className="card-body text-left">
                                    <h2 className="card-title">{service.name}</h2>
                                    <p>{service.description.slice(0, 50)}...</p>
                                    <div className="card-actions justify-end">
                                        <Link to={`/sevicedetails/${service.service_id}`}><button className="btn btn-primary">more</button></Link>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <Link to='/services'><button className='btn bg-violet-600 text-white w-36 mx-auto mt-10'>See All</button></Link>
            </div>
            {/* one website */}
            <div className='md:flex gap-10 my-10 md:mx-20'>
                <img className=' md:w-1/2 rounded' src="https://co-offiz.com/wp-content/uploads/2023/05/Digital-Marketing-Channels.png" alt="" />
                <div className='w-full felx justify-center items-center my-auto '>
                    <div className='mt-5  md:mt-0'>
                        <p className='text-5xl font-bold font-serif'>All of your needs </p>
                        <p className='bg-violet-600 text-white w-10 h-10 rounded-full mx-auto flex justify-center items-center my-5'>In</p>
                        <p className=' font-serif md:text-7xl w-5/6 mx-auto py-5 text-green-500 border rounded-full border-green-500 '>One Website</p>
                    </div>
                </div>
            </div>
            {/* Top Services */}
            <div className=' '>
    
                <div className='bg-gray-200  p-10 rounded grid grid-cols-1 md:grid-cols-3 gap-5 text-left'>
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
                        <h1 className='text-2xl font-bold mb-3'>Email Marketing</h1>
                        <p>
                            Email marketing involves sending targeted messages, newsletters, or promotional content
                            to a subscriber list to nurture leads, retain customers, and drive conversions. It includes
                            crafting personalized and engaging emails, segmenting the audience based on demographics or
                            behaviors, and A/B testing to optimize open rates, click-through rates, and conversions.
                        </p>
                    </div>
                </div>
            </div>
            <div className='mt-10 w-full'>
                <img className=' w-full rounded' src="https://assets-global.website-files.com/6243c3bb3b5a1852803d0c7f/654aaeded0a01c8c43bc82e8_crafted-ny.jpg" alt="" />
            </div>
        </div>
    )
}

export default Home