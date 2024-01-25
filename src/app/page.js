import Image from "next/image";
import Logo from "../../public/images/logo.png"
import Left from "../../public/images/left.png"
import Right from "../../public/images/right.png"
import Ph from "../../public/images/ph.png"
export default function Home() {
  return (
   <main className="w-full h-[80vh]">
    <div className="w-full">
      <div className="flex w-full justify-center">
        <Image src={Logo}/>
      </div>
      <div className="w-full flex justify-center items-center h-[80vh] md:h-[80vh] text-center">
        <div>
        <h1 className="w-[361px]md:w-[940px] text-[28px] md:text-[56px] font-[700] text-center text-[#003333]">We’re cooking our Website for you!</h1>
       <div className="flex justify-center">
       <p className=" w-[300px] text-[12px] md:text-[20px] font-[400] md:w-[900px]">Errandboi provides a convenient solution for busy individuals by allowing them to order fresh and raw food items through a user-friendly web application.</p>
       </div>
        </div>
      </div>
      <div>
        <div className="flex justify-between px-8">
          <Image src={Left}/>
          <Image src={Right}/>
        </div>
        <div className="flex justify-center w-full">
          <div>
          <p>Contact Us for more information</p>
          <div className="flex justify-center">
            <Image src={Ph}/>
            <p>+2346797625267</p>
          </div>
          </div>
        </div>
      </div>
    </div>
   </main>
  );
}
