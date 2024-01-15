import { EventDB } from '@/lib/actions/get_events'
import Image from 'next/image'
import React from 'react'

const EventContainer = (event: EventDB) => {
  return (
    <div>
        <div className="aspect-video">
            <Image src={event.img_url} alt={event.title}/>
        </div>
        <h1>{event.title}</h1>
        <p>{event.content}</p>

    </div>
  )
}

export default EventContainer