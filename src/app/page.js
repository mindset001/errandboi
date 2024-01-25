import Image from "next/image";
import Come from "../../public/images/Coming Soon.png"
export default function Home() {
  return (
   <main className="w-full h-[80vh]">
    <div className="w-full">
      <Image src={Come} className="w-full h-[100vh]"/>
    </div>
   </main>
  );
}
