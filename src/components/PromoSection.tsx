import Image from "next/image";

const PromoSection = () => {
  return (
    <section
      className="flex flex-col items-center justify-center px-4 text-center bg-center bg-no-repeat bg-cover py-15 md:py-0 "
      style={{ backgroundImage: "url(/soon.png)" }}
    >
      <div className="w-full mt-4 bg-opacity-50 rounded-lg ">
        <div className="relative w-full aspect-square mx-auto flex items-center justify-between h-[40vh] sm:h-[90vh] sm:pb-16 sm:pt-6">
          <div className="lg:w-[40%] xl:[100%]  sm:w-[70%] md:w-[70%] w-full mx-auto relative">
            <div className="absolute inset-0 top-[5%] mobile375:top-[2%] xs:top-[5%] sm:top-[3%]  md:top-[3%] lg:top-[3%] text-center font-extrabold text-3xl xs:text-[14px] sm:text-4xl md:text-4xl lg:text-4xl  leading-[1.6] xs:leading-[1.1] sm:leading-[1.15] lg:leading-[1.8] md:leading-[190%] xl:leading-[190%] xl:text-4xl  xs:tracking-normal sm:tracking-[-0.01em] lg:tracking-[-0.02em] px-0.5 xs:px-1 sm:px-2 md:px-0 pt-1 xs:pt-2 sm:pt-0 tracking-[1px] sm:tracking-0  z-50">
            Get <span className="text-[#F25B0A] font-extrabold xl:text-6xl  text-3xl sm:text-4xl md:text-5xl  ">FREE FOOD </span> for a
              <br />
             <span className="text-[#F25B0A] font-extrabold text-4xl xl:text-6xl md:text-5xl"> WHOLE YEAR!!!</span> 
            </div>
            <div className="relative mx-auto aspect-square">
              <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="bg-white  text-black rounded-full lg:w-[60%] lg:h-[60%]  w-[55%] h-[55%] p-4 flex flex-col items-center justify-center  xs:p-2 sm:p-4 md:p-6 lg:p-4 xl:p-2 ">
                  <p className="w-full text-center text-black font-poppins font-semibold sm:text-[2rem] xl:text-2xl lg:text-[1.0rem] lg:leading-[150%] xl:leading-[180%]  leading-[150%] text-sm  sm:mt-8 md:text-[1.2rem] sm:text-2xl md:mt-3  xl:mt-2  p-2 xl:p-2">
                  Promo runs from   <br /> <span className="font-extrabold">June 7th - July 6th, 2025</span>
                  </p>
                  <p className="w-full text-center font-poppins font-medium sm:text-[1.5rem] lg:text-[o.5rem] text-sm md:text-[1rem] xl:text-2xl xl:leading-[100%]">
                  </p>
                </div>
              </div>

              {/* Light orange background circles with improved spacing */}
              {/* <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[#F25B0A] rounded-full w-[60%] h-[60%] opacity-70"></div>
        </div> */}

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#FFE8DB] rounded-full w-[73%] h-[73%] opacity-80"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className=" rounded-full w-[85%] h-[85%] border-3 border-dashed border-t-0 border-[#FCCAB0] opacity-90"></div>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-[#FFEADE] rounded-full w-[103%] h-[103%] opacity-60"></div>
              </div>

              {/* Food images positioned around the circle - mobile optimized */}
              {/* <div className="absolute z-20 top-[22%] left-1/2 transform -translate-x-1/2 -translate-y-1/4">
               
                <div className="relative w-20 h-20 sm:w-25 sm:h-25 md:w-20 md:h-20 lg:w-25 lg:h-25 xl:w-35 xl:h-35">
                  <Image
                    src="/grill.svg"
                    alt="Food box"
                    fill
                    className="object-contain"
                  />
                </div>
              </div> */}

              <div className="absolute z-20 top-[50%] right-[10%] xl:right-[2%] sm:right-[8%] transform translate-x-1/9 -translate-y-1/2">
                {/* <div className="absolute right-0 z-20 transform -translate-y-1/2 top-1/3 translate-x-1/9"> */}
                <div className="relative w-20 h-20 sm:w-25 sm:h-25 md:w-30 md:h-30 lg:w-25 lg:h-25 xl:w-37 xl:h-37">
                  <Image
                    src="/vegetable-soup.png"
                    alt="Curry dish"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="absolute z-20 transform translate-x-1/2 bottom-1/5 right-1/4 translate-y-1/4 xl:right-1/5">
                <div className="relative w-20 h-20 sm:w-25 sm:h-25 md:w-30 md:h-30 lg:w-25 lg:h-25 xl:w-37 xl:h-37">
                  <Image
                    src="/uzbek.png"
                    alt="Rice dish"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="absolute z-20 bottom-[6%] left-1/2 transform sm:bottom-[6%]  md:bottom-[7%]  xl:bottom-[2%]  lg:bottom-[4%] -translate-x-1/2 translate-y-1/4">
                {/* <div className="absolute bottom-0 z-20 transform -translate-x-1/2 left-1/2 translate-y-1/4"> */}
                <div className="relative w-20 h-20 sm:w-25 sm:h-25 md:w-30 md:h-30 lg:w-25 lg:h-25 xl:w-37 xl:h-37">
                  <Image
                    src="/fried-rice.png"
                    alt="Rice dish"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="absolute z-20 lg:top-[50%]  lg:right-[0%] xl:left-[2%] top-[50%]  left-[7%] transform -translate-x-1/16  -translate-y-1/2  ">
                {/* <div className="absolute left-0 z-20 transform -translate-y-1/2 top-20 -translate-x-1/16 lg:-translate-y-1/8 "> */}
                <div className="relative w-20 h-20 sm:w-25 sm:h-25 md:w-30 md:h-30 lg:w-25 lg:h-25 xl:w-37 xl:h-37">
                  <Image
                    src="/burger.png"
                    alt="Burger and fries"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="absolute z-20 bottom-1/5 left-[22%] lg:left-[25%] xl:left-[20%] xl:bottom-1/6 transform -translate-x-1/2 translate-y-1/5">
                {/* <div className="absolute z-20 transform -translate-x-1/2 bottom-1/4 left-1/6 translate-y-1/5"> */}
                <div className="relative w-20 h-20 sm:w-25 sm:h-25 md:w-30 md:h-30 lg:w-25 lg:h-25 xl:w-37 xl:h-37">
                  <Image
                    src="/Amala.png"
                    alt="African dish"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      
    </section>
  );
};

export default PromoSection;



