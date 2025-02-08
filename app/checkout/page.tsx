import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic"; 

const Header = dynamic(() => import("../Components/Header"));

function page() {
  return (
    <section className="flex flex-col min-h-screen justify-between items-center w-full overflow-hidden">
      <Header />
      <div
        className="w-full h-[316px] bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-shop.png')" }}
      >
        {/* top div */}
        <div className="flex items-center justify-center h-full">
          <div className="text-center p-6">
            <Image
              src="/logo.png"
              alt="Image"
              width={77}
              height={77}
              className="ml-20"
            />
            <h1 className="font-poppins font-medium text-[48px] leading-[72px] text-[#000000] md:mb-4">
              Check Out
            </h1>
            <div className="flex justify-center items-center">
              <p className="font-poppins font-medium text-[16px] leading-6 text-[#000000]">
              Home &gt;{" "}
              </p>
              <p className="font-poppins font-light text-[16px] leading-6 text-[#000000] pl-2">
                Check Out
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* form section */}
      <div className="min-h-screen flex justify-center items-center md:mt-20 px-20">
        <div className="w-full max-w-[1440px]">
          

          <div className="flex flex-col md:flex-row justify-center gap-8 w-full md:h-full">
            {/* billing details */}
            <div className="md:w-[435px] w-[270px] mt-10 order-1">
                <h1 className="text-[36px] font-poppins leading-[54px] font-semibold">Billing Details</h1>
              <form>
                <div className="mb-4 flex flex-col md:flex-row gap-8">
                  <div>
                    <label
                      htmlFor="first name"
                      className="block font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4"
                    >
                      First Name
                    </label>
                    <input
                      id="first name"
                      type="text"
                      name="first name"
                      placeholder=""
                      className="w-[200px] p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="last name"
                      className="block font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4"
                    >
                      Last Name
                    </label>
                    <input
                      id="last name"
                      type="text"
                      name="last name"
                      placeholder=""
                      className="w-[200px] p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6"
                      required
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="company name"
                    className="block font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4"
                  >
                    Company Name (Optional)
                  </label>
                  <input
                    id="company name"
                    type="company name"
                    name="company name"
                    placeholder=""
                    className="w-full p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="region"
                    className="block font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4"
                  >
                    Country / Region
                  </label>
                  <input
                    id="region"
                    type="text"
                    name="region"
                    placeholder="Sri Lanka"
                    className="w-full p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="Street address"
                    className="block font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4"
                  >
                    Street address
                  </label>
                  <input
                    id="Street address"
                    type="text"
                    name="Street address"
                    placeholder=""
                    className="w-full p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="Town / City"
                    className="block font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4"
                  >
                    Town / City
                  </label>
                  <input
                    id="Town / City"
                    type="text"
                    name="Town / City"
                    placeholder=""
                    className="w-full p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="Province"
                    className="block font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4"
                  >
                    Province
                  </label>
                  <input
                    id="Province"
                    type="text"
                    name="Province"
                    placeholder="Western Province"
                    className="w-full p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="ZIP code"
                    className="block font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4"
                  >
                    ZIP code
                  </label>
                  <input
                    id="ZIP code"
                    type="text"
                    name="ZIP code"
                    placeholder=""
                    className="w-full p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="Phone"
                    className="block font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4"
                  >
                    Phone
                  </label>
                  <input
                    id="Phone"
                    type="number"
                    name="Phone"
                    placeholder=""
                    className="w-full p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="Email address"
                    className="block font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4"
                  >
                    Email address
                  </label>
                  <input
                    id="Email address"
                    type="email"
                    name="Email address"
                    placeholder=""
                    className="w-full p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6"
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    id="Additional information"
                    type="text"
                    name="Additional information"
                    placeholder="Additional information"
                    className="w-full p-5 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6"
                    required
                  />
                </div>
              </form>
            </div>

            {/* detail section */}
            <div className="container mx-auto p-6 order-2 mb-5">
              {/* First Section (Product and Subtotal) */}
              <div className="flex justify-between mb-6">
                <div className="w-1/2 flex flex-col gap-4">
                  <h2 className="font-poppins font-medium text-[16px] md:text-[24px] leading-9 text-[#000000]">
                    Product
                  </h2>
                  <h3 className="font-poppins font-normal text-[16px] leading-6 text-[#9f9f9f]">
                    Asgaard sofa
                    <span className="font-poppins font-normal text-[16px] leading-6 text-[#000000]"> x   1</span>
                  </h3>
                  <h3 className="font-poppins font-normal text-[16px] leading-6 text-[#000000]">
                    Subtotal
                  </h3>
                  <h3 className="font-poppins font-normal text-[16px] leading-6 text-[#000000]">
                    Total
                  </h3>
                </div>
                <div className="w-1/2 gap-4 flex flex-col text-right">
                  <h2 className="font-poppins font-medium text-[16px] md:text-[24px] leading-9 text-[#000000">
                    Subtotal
                  </h2>
                  <h3 className="font-poppins font-light text-[16px] leading-6 text-[#000000]">
                    Rs. 250,000.00
                  </h3>
                  <h3 className="font-poppins font-light text-[16px] leading-6 text-[#000000]">
                    Rs. 250,000.00
                  </h3>
                  <h3 className="font-poppins font-bold text-[16px] md:text-[24px] leading-9 text-[#b88e2f]">
                    Rs. 250,000.00
                  </h3>
                </div>
              </div>

              {/* Second Section (Heading, Paragraph, Subheadings, Button) */}
              <div className="py-6 border-t-[0.5px] border-[#d9d9d9] ">
                <div className="flex flex-row items-start gap-4">
                  <button className="rounded-full w-3 h-3 bg-[#000000] mt-3"></button>
                  <h3 className="font-poppins font-normal text-[16px] leading-6 text-[#000000] mb-4 mt-1">
                    Direct Bank Transfer
                  </h3>
                </div>
                <p className="font-poppins font-light text-[16px] leading-6 text-[#9f9f9f] mb-4">
                  Make your payment directly into our bank account. Please use <br />
                  your Order ID as the payment reference. Your order will not be <br />
                  shipped until the funds have cleared in our account.
                </p>
                <div className="flex flex-row items-start gap-4">
                  <button className="rounded-full w-3 h-3 border border-[#9f9f9f] mt-3"></button>
                  <h3 className="font-poppins font-medium text-[16px] leading-6 text-[#9f9f9f] mb-4 mt-1">
                    Direct Bank Transfer
                  </h3>
                </div>
                <div className="flex flex-row items-start gap-4">
                  <button className="rounded-full w-3 h-3 border border-[#9f9f9f] mt-3"></button>
                  <h3 className="font-poppins font-medium text-[16px] leading-6 text-[#9f9f9f] mb-4 mt-1">
                    Cash on Delivery
                  </h3>
                </div>
                <p className="font-poppins font-light text-[16px] leading-6 text-[#000000] mb-4">
                our personal data will be used to support your experience <br /> 
                throughout this website, to manage access to your account, and <br />
                 for other purposes described in our 
                 <span className="font-poppins font-light text-[16px] leading-6 text-[#000000]">privacy policy</span>.
                </p>
                <button
                  type="submit"
                  className="w-[237px] py-3 md:mt-6 border-[1px] border-[#000000] rounded-[15px] font-poppins font-normal text-[20px] leading-[30px]"
                >
                  Place order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* delivery section */}
      <div className="flex flex-col md:flex-row justify-around items-center mt-10 pt-12 mb-6 w-full px-4 bg-[#faf4f4] h-full md:h-[300px]">
        <div className="w-[300px] md:w-[376px] h-[108px] text-center md:text-left mb-10 md:mb-0">
          <h1 className="font-poppins font-medium text-[32px] leading-48px] text-[#000000] mb-4">
            Free Delivery
          </h1>
          <p className="font-poppins font-normal text-[20px] leading-[30px] txet-[#9f9f9f]">
            For all oders over $50, consectetur <br /> adipim scing elit.
          </p>
        </div>

        <div className="w-[300px] md:w-[376px] h-[108px] text-center md:text-left mb-10 md:mb-0">
          <h1 className="font-poppins font-medium text-[32px] leading-48px] text-[#000000] mb-4">
            90 Days Return
          </h1>
          <p className="font-poppins font-normal text-[20px] leading-[30px] txet-[#9f9f9f]">
            If goods have problems, consectetur adipim scing elit.
          </p>
        </div>

        <div className="w-[300px] md:w-[376px] h-[108px] text-center md:text-left mb-10 md:mb-0">
          <h1 className="font-poppins font-medium text-[32px] leading-48px] text-[#000000] mb-4">
            Secure Payment
          </h1>
          <p className="font-poppins font-normal text-[20px] leading-[30px] txet-[#9f9f9f]">
            100% secure payment, consectetur adipim scing elit.
          </p>
        </div>
      </div>
    </section>
  );
}

export default page;