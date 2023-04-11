import { React } from "react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-bg_light_primary" id="contact">
      <div className="px-5 md:container pt-14">
        <p className="mb-5 text-2xl font-normal md:text-3xl text-gray">
          Contact me
        </p>
        <h2 className="text-[#06223F] mb-[50px]">
          Get In <span className="text-blue-500">Touch</span>
        </h2>
        <br />

        <div className="flex flex-col-reverse justify-center gap-10 overflow-hidden xl:mt-12 xl:flex-row mb-5">
          <div className="flex-[0.4] bg-[#151031] p-8 rounded-2xl">
            <div className="flex gap-4">
              <p className="sm:text-[18px] text-[14px] uppercase tracking-wide text-gray">
                Please contact me.
              </p>
            </div>
            <form className="flex flex-col gap-8 mt-12">
              <label className="flex flex-col">
                <span className="mb-4 font-medium text-white">Your name</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="px-6 py-4 font-medium border-none rounded-lg text-white outline-none bg-tertiary placeholder:text-white bg-[#303245]"
                />
              </label>

              <label className="flex flex-col">
                <span className="mb-4 font-medium text-white">Your email</span>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="px-6 py-4 font-medium border-none text-white rounded-lg outline-none bg-tertiary placeholder:text-white bg-[#303245]"
                />
              </label>

              <label className="flex flex-col">
                <span className="mb-4 font-medium text-white">
                  Your messenger
                </span>
                <textarea
                  rows={7}
                  name="messenger"
                  placeholder="What do you want to send me?"
                  className="px-6 py-4 font-medium border-none rounded-lg text-white outline-none bg-tertiary placeholder:text-white bg-[#303245]"
                ></textarea>
              </label>
              <button
                type="submit"
                className="bg-[#303245] py-3 px-8 outline-none w-fit text-white btn font-bold shadow-md shadow-inherit rounded-xl r"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
