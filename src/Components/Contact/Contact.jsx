import React from 'react'

function Contact() {

    const handleSubmit = (e)=> {
        e.preventDefault()
        e.target.reset()
    }
    return (
        <div>
            <div className="hero borde my-10 ">
                <div className="hero-content flex-col gap-16 lg:flex-row">
                    <div className="text-center w-1/2  lg:text-left">
                        <h1 className="text-5xl font-bold text-violet-500 font-serif">Contact Us!</h1>
                        <p className="py-6">Send us your message via email by submitting the form <span className='text-violet-600 font-bold'>OR</span> contact through the contact details.</p>
                        <div>
                            <h1 className='font-bold text-violet-600 text-xl'>Contact Details</h1>
                            <p><span className=' underline font-bold'>Email:</span> example@gmail.com</p>
                            <p><span className=' underline font-bold'>Whatsapp:</span> +918420931289</p>
                            <p><span className=' underline font-bold'>Address:</span> Khilgaon, Dhaka</p>
                        </div>
                    </div>
                    <div className="card shrink-0 border w-96 rounded-xl shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Name</span>
                                </label>
                                <input type="text" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"  className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">What can we do for you?</span>
                                </label>
                                <textarea type="text" className="input min-h-32 input-bordered"  required />
                                
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-violet-600 text-white w-32">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact