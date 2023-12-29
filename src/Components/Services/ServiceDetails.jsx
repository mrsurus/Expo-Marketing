import { useQuery } from '@tanstack/react-query'
import React, { useEffect, useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

function ServiceDetails() {
const [ services, setServices] = useState([])
const [singleData, setSingleData] = useState({})
const getPath = useParams().id
const id = Number(getPath)

    const {data:servicesk=[],refetch} =useQuery({
        queryKey: ['services'],
        queryFn: async()=> {
            const res= await fetch('services.json')
            const data = await res.json()
            return data
        }
    })

    if(servicesk && servicesk.length > 0) {
            const matchingData = servicesk.find((d) => d.service_id === id)
            localStorage.setItem('myservice', JSON.stringify(matchingData))
    }
   
    useEffect(() => {
        const getData = localStorage.getItem('myservice')
        setServices(JSON.parse(getData))
    
       
    }, [])
    
    return (
        <div>
            <p>{services.name}</p>
            <p></p>
        </div>
    )
}

export default ServiceDetails