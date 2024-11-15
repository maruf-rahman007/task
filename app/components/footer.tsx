
export default function Footer() {
    return (
        <div className="bg-light-gray">
            <div className="sm:pt-20 sm:pb-20 sm:pl-40 sm:ml-20 p-8">
                <div className="grid sm:flex sm:space-x-24 grid-cols-2 gap-10">
                    <div className="flex flex-col pr-10 sm:w-auto w-full">
                        <h1 className="cursor-pointer font-onest pb-6 text-gray-400">Categories</h1>
                        <p className="cursor-pointer font-onest pt-1.5">Nutrition and diet</p>
                        <p className="cursor-pointer font-onest pt-1.5">Fitness training</p>
                        <p className="cursor-pointer font-onest pt-1.5">Mindfulness</p>
                        <p className="cursor-pointer font-onest pt-1.5">Mental health</p>
                        <p className="cursor-pointer font-onest pt-1.5">Personal growth</p>
                        <p className="cursor-pointer font-onest pt-1.5">Social well-being</p>
                    </div>

                    <div className="flex flex-col pr-10 sm:w-auto w-full">
                        <h1 className="cursor-pointer font-onest pb-6 text-gray-400">About</h1>
                        <p className="cursor-pointer font-onest pt-1.5">About us</p>
                        <p className="cursor-pointer font-onest pt-1.5">Our partners</p>
                        <p className="cursor-pointer font-onest pt-1.5">Investors</p>
                        <p className="cursor-pointer font-onest pt-1.5">Career</p>
                    </div>

                    <div className="flex flex-col pr-10 sm:w-auto w-full">
                        <h1 className="cursor-pointer font-onest pb-6 text-gray-400">FAQ</h1>
                        <p className="cursor-pointer font-onest pt-1.5">Refund policies</p>
                        <p className="cursor-pointer font-onest pt-1.5">Terms and conditions</p>
                        <p className="cursor-pointer font-onest pt-1.5">Cookie</p>
                        <p className="cursor-pointer font-onest pt-1.5">Latest posts</p>
                    </div>

                    <div className="flex flex-col pr-10 sm:w-auto w-full">
                        <h1 className="cursor-pointer font-onest pb-6 text-gray-400">Support</h1>
                        <p className="cursor-pointer font-onest pt-1.5">Get in touch</p>
                        <p className="cursor-pointer font-onest pt-1.5">Visit our forum</p>
                    </div>
                </div>

                <div className="sm:pt-12 sm:mr-20 pt-6">
                    <hr className="sm:pb-12 border-dashed border-grayish sm:mr-40 pb-4"/>
                    <div className="flex justify-between">
                        <h1 className="font-onest font-medium text-xl">Join our official channels</h1>
                        <div className="flex space-x-4 sm:pr-40">
                            <img className="cursor-pointer" src="/instagram.png" alt="" />
                            <img className="cursor-pointer" src="/x.png" alt="" />
                            <img className="cursor-pointer" src="/facebook.png" alt="" />
                            <img className="cursor-pointer" src="/discord.png" alt="" />
                        </div>
                    </div>
                    <hr className="mt-6 sm:mt-12 border-dashed border-grayish sm:mr-40" />
                </div>

                <div className="pt-10 font-onest text-gray-600">
                    &copy; 2024 PPTPAL. All Rights Reserved.
                </div>
            </div>
        </div>
    );
}
