import ExploreBtn from "@/components/ExploreBtn";
import Header from "@/components/Header";
import Image from "next/image";
import events from '@/lib/constants';
import { EventCard } from "@/components/EventCard";

export default function Home() {
  return (
    <section className="mt-2"> 
       {/* <Header /> */}
       <h1 className="text-center">The Hub For Every Dev <br /> Event You Can't Miss</h1>
       <p className="text-center">Hackathons, Meetups, and Conferences</p>

       <ExploreBtn /> 

       <div className="mt-10 space-y-7">
          <h3>Featured Events</h3>
          <ul className="events list-none p-0">
             {
                 events.map((event) => (
                  <li key={event.id} className="event">
                     <EventCard {...event}/>
                  </li>
                ))}
          </ul>
       </div>
    </section>
  );
}
