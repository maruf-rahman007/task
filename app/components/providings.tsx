

export default function Providings() {
    return (
        <div className="p-10 sm:p-40 sm:flex sm:pt-20 sm:m-20 sm:pb-10">
            {/* left container */}
            <div className="flex-1">
                <h1 className="font-onest font-bold text-3xl">We provide...</h1>
                <div className="flex pt-10">
                    <img src="/correcticon.png" alt="" />
                    <p className="pl-6 font-medium text-gray-500">Personalized routine</p>
                </div>
                <div className="flex pt-10">
                    <img src="/correcticon.png" alt="" />
                    <p className="pl-6 font-medium text-gray-500">Follow-up after completing courses</p>
                </div>
                <hr className="mt-6 mr-24" />
                <div className="flex pt-8">
                    <img src="/correcticonblu.png" alt="" />
                    <p className="font-onest pl-6 font-medium">Access to additional resources </p>
                </div>
                <p className="pt-1 pl-12 text-sm font-onest">We offer access to a variety of additional resources to <br/> enhance your experience, including exclusive tools, guides,<br/> and support materials designed to help you achieve your<br/> goals more effectively.</p>
                <hr className="mt-6 mr-24" />
                <div className="flex pt-6">
                    <img src="/correcticon.png" alt="" />
                    <p className="pl-6 font-medium text-gray-500">Free community support</p>
                </div>
                <div className="pt-8">
                    <button className="text-xs font-onest px-3 py-2 bg-white text-teal-700 rounded-full border border-teal-700">Learn More About Our Services</button>
                </div>
            </div>
            {/* right continer */}
            <div className="pt-8 sm:flex-1">
                <img src="/providings.png" alt="" />
            </div>
        </div>
    )
}