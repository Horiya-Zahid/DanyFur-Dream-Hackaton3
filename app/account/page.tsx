import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic"; 

const Header = dynamic(() => import("../Components/Header"));

function page() {
  return (
    <section className="flex flex-col min-h-screen justify-between items-center w-full">
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
              My Account
            </h1>
            <div className="flex justify-center items-center">
              <p className="font-poppins font-medium text-[16px] leading-6 text-[#000000]">
              Home &gt;{" "}
              </p>
              <p className="font-poppins font-light text-[16px] leading-6 text-[#000000] pl-2">
                My account
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* form section */}
      <div className="min-h-screen flex justify-center items-center md:mt-20 px-20">

          <div className="flex flex-col md:flex-row justify-between gap-20 w-full md:h-[537px]">
            {/* login section */}
            <div className="md:w-[400px] mt-10 order-2">
            <h1 className="font-poppins font-semibold text-[36px] leading-[54px] text-[#000000] mb-4 mt-1">Log In</h1>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="username or email address"
                    className="block font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4"
                  >
                     Username or email address
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder=""
                    className="w-full p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4"
                  >
                    Password
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder=""
                    className="w-full p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6"
                    required
                  />
                </div>

                <div className="mb-4 mt-8 flex flex-row gap-4">
                  <label
                    htmlFor="remember me"
                    className="block font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4"
                  >
                    Remember me
                  </label>
                  <input
                    id="subject"
                    type="text"
                    name="remember me"
                    placeholder=""
                    className="w-[30px] h-[27px] p-3 border-[1px] border-[#9f9f9f] rounded-[5px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6"
                    required
                  />
                </div>

                <div className="flex flex-row justify-center items-center gap-10">
                <button
                  type="submit"
                  className="w-[200px] py-3 md:mr-2 border-[1px] border-[#000000] rounded-[15px] font-poppins font-normal text-[16px] leading-[24px]"
                >
                  Log In
                </button>
                <button
                  type="submit"
                  className="font-poppins font-light text-[#000000] text-[16px] leading-[24px]"
                >
                  Lost Your Password?
                </button>
                </div>
              </form>
            </div>

            {/* register section */}
            <div className="md:w-[435px] mt-10 order-2">
                <h1 className="font-poppins font-semibold text-[36px] leading-[54px] text-[#000000] mb-4">Register</h1>
              <form>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block font-poppins font-medium text-[16px] leading-6 text-[#000000] pb-4"
                  >
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder=""
                    className="w-full p-3 border-[1px] border-[#9f9f9f] rounded-[10px] text-[#9f9f9f] font-poppins font-medium text-[16px] leading-6 mb-5"
                    required
                  />
                </div>

                <p className="font-poppins tracking-wider font-light text-[14px] leading-6 text-[#000000] mb-8">
                A link to set a new password will be sent to your email address.
                </p>

                <p className="font-poppins tracking-wider font-light text-[14px] leading-6 text-[#000000] mb-7">
                Your personal data will be used to support your
                 experience throughout this website, to manage access 
                to your account, and for other purposes described in our
                <strong className="font-bold"> privacy policy</strong>.
                </p>

                <button
                  type="submit"
                  className="w-[237px] py-3 border-[1px] border-[#000000] rounded-[15px] font-poppins font-normal text-[16px] leading-[24px]"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>

      {/* delivery section */}
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
    </section>
  );
}

export default page;
