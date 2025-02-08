import React from 'react'

const Delivery = () => {
  return (
    <div>
        <div className="flex flex-col md:flex-row justify-around items-center mt-10 pt-12 mb-6 w-full px-4 bg-[#faf4f4] h-full md:h-[300px]">
        <div className="w-[300px] md:w-[376px] h-[108px] text-center md:text-left mb-10 md:mb-0">
          <h1 className="font-poppins font-medium text-[32px] leading-[48px] text-[#000000] mb-4">
            Free Delivery
          </h1>
          <p className="font-poppins font-normal text-[20px] leading-[30px] txet-[#9f9f9f]">
            For all oders over $50, consectetur <br />adipim scing elit.
          </p>
        </div>

        <div className="w-[300px] md:w-[376px] h-[108px] text-center md:text-left mb-10 md:mb-0">
          <h1 className="font-poppins font-medium text-[32px] leading-[48px] text-[#000000] mb-4">
            90 Days Return
          </h1>
          <p className="font-poppins font-normal text-[20px] leading-[30px] txet-[#9f9f9f]">
            If goods have problems, consectetur adipim scing elit.
          </p>
        </div>

        <div className="w-[300px] md:w-[376px] h-[108px] text-center md:text-left mb-10 md:mb-0">
          <h1 className="font-poppins font-medium text-[32px] leading-[48px] text-[#000000] mb-4">
            Secure Payment
          </h1>
          <p className="font-poppins font-normal text-[20px] leading-[30px] txet-[#9f9f9f]">
            100% secure payment, consectetur adipim scing elit.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Delivery