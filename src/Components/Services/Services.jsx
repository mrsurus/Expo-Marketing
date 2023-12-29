import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'
import { useQuery } from '@tanstack/react-query'
import daisyui from 'daisyui'
import { data } from 'autoprefixer'

function Services() {

    const {data:services=[],refetch} =useQuery({
        queryKey: ['services'],
        queryFn: async()=> {
            const res= await fetch('services.json')
            const data = await res.json()
            return data
        }
    })
  
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 mx-48 my-20'>
            {
                services.map((service, id) => <ServiceCard key={id} service={service}>

                </ServiceCard>)
            }
        </div>
    )
}

export default Services