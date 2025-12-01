import { Button } from "@/components/ui/button";
import Header from "./_component/Header";
import Hero from "./_component/Hero";

/* 
* Default Home Page Component of the Application
* @ returns
*/
export default function Home() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <Header />
      <Hero />
     
    </div>
  );
}
