import { div } from "framer-motion/client";


export default function Footer() {
    return (
        <div className="bg-light-gray">
            <div className="pt-20 pb-20 pl-40 ml-20">
            <div className="flex flex-col">
                <div>
                    <div className="flex space-x-24">
                        <div className="flex flex-col pr-20">
                            <h1 className="font-onest pb-6 text-gray-400">Categories</h1>
                            <p className="font-onest pt-1.5">Nutrition and diet</p>
                            <p className="font-onest pt-1.5">Fitness training</p>
                            <p className="font-onest pt-1.5">Mindfulness</p>
                            <p className="font-onest pt-1.5">Mental health</p>
                            <p className="font-onest pt-1.5">Personal growth</p>
                            <p className="font-onest pt-1.5">Social well-being</p>
                        </div>
                        <div className="flex flex-col pr-20">
                            <h1 className="font-onest pb-6 text-gray-400">About</h1>
                            <p className="font-onest pt-1.5">About us</p>
                            <p className="font-onest pt-1.5">Our partners</p>
                            <p className="font-onest pt-1.5">Investors</p>
                            <p className="font-onest pt-1.5">Career</p>
                        </div>
                        
                        <div className="flex flex-col pr-20">
                            <h1 className="font-onest pb-6 text-gray-400">FAQ</h1>
                            <p className="font-onest pt-1.5">Refund policies</p>
                            <p className="font-onest pt-1.5">Terms and conditions</p>
                            <p className="font-onest pt-1.5">Cookie </p>
                            <p className="font-onest pt-1.5">Latest posts</p>
                        </div>
                        
                        <div className="flex flex-col pr-20">
                            <h1 className="font-onest pb-6 text-gray-400">Support</h1>
                            <p className="font-onest pt-1.5">Get in touch</p>
                            <p className="font-onest pt-1.5">Visit our forum</p>
                        </div>
                        
                    </div>
                </div>
                <div className="pt-12 mr-20">
                    <hr className="pb-12 border-dashed border-grayish mr-40" />
                    <div className="flex justify-between">
                        <h1 className="font-onest font-medium text-xl">Join our official channels</h1>
                        <div className="flex space-x-4 pr-40">
                            <img src="/instagram.png" alt="" />
                            <img src="/x.png" alt="" />
                            <img src="/facebook.png" alt="" />
                            <img src="/discord.png" alt="" />
                        </div>
                    </div>
                    <hr className="mt-12 border-dashed border-grayish mr-40" />
                </div>
                <div className="pt-10 font-onest text-gray-600">
                &copy; 2024 PPTPAL. All Rights Reserved.
                </div>
            </div>
        </div>
        </div>
    )
}