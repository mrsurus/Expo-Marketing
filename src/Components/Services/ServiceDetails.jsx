import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

function ServiceDetails() {
    const [services, setServices] = useState([])
    const [singleData, setSingleData] = useState({})
    const getPath = useParams().id
    const id = Number(getPath)

    const { data: servicesk = [], refetch } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await fetch('services.json')
            const data = await res.json()
            return data
        }
    })

    if (servicesk && servicesk.length > 0) {
        const matchingData = servicesk.find((d) => d.service_id === id)
        localStorage.setItem('myservice', JSON.stringify(matchingData))
    }

    useEffect(() => {
        const getData = localStorage.getItem('myservice')
        setServices(JSON.parse(getData))


    }, [])

    return (
        <div>
            <div className='md:flex  mt-10 text-left mx-5 md:mx-10'>
                <div className='md:w-3/5'>
                    <img className='w-full' src={services.photo} alt="" />
                </div>
                <div className='md:w-2/5 px-5 md:px-10'>
                    <p className='text-3xl font-bold text-violet-500'>{services.name}</p>
                    <div className='text-right my-10'>
                        <p className=' font-semibold'>Rating:<span className='text-violet-600 ms-3 text-2xl font-bold'>{services.rating}</span>/5</p>
                        <p className=' font-semibold'>Duration: <span className='font-bold text-violet-600'>{services.duration}</span> </p>
                    </div>
                    <p className='mt-16 font-semibold '>{services.description}</p>
                </div>
            </div>
        </div>
    )
}

export default ServiceDetails