
export default function Hero() {
    return (
        <div className="bg-custom-bg">
            <div className="sm:px-40 sm:mx-20">
                {/* Main Container */}
                <div className="sm:container sm:flex items-center px-5">
                    {/* Left Container with text and Buttons */}
                    <div className="flex-1 pb-8 pt-10 sm:mt-16 pl-4">
                        <div className="flex items-center space-x-2 mb-2">
                            {/* Review Stars */}
                            <i className="fa fa-star" style={{ color: 'orange', fontSize: '24px' }}></i>
                            <i className="fa fa-star" style={{ color: 'orange', fontSize: '24px' }}></i>
                            <i className="fa fa-star" style={{ color: 'orange', fontSize: '24px' }}></i>
                            <i className="fa fa-star" style={{ color: 'orange', fontSize: '24px' }}></i>
                            {/* Half Star */}
                            <i className="fa fa-star-half-full" style={{ color: 'orange', fontSize: '24px' }}></i>
                            <span className="text-lg font-semibold text-gray-700">4.9 (566)</span>
                        </div>

                        <h1 className="font-onest text-4xl font-bold text-gray-800 mb-6">
                            #1 Platform <br />Powering Health <br /> and Wellness
                        </h1>
                        <p className="font-onest text-xl font-semibold text-gray-600 mb-4">
                            We're restoring home as the primary <br /> place of
                            personal well-being
                        </p>
                        <p className="font-onest text-lg text-gray-500">
                            Health is not just about what you're eating.
                            It's also <br /> about what you're thinking and saying.
                        </p>
                        <div className="mt-6 space-x-4">
                            <button className="font-onest px-5 py-2 bg-teal-700 text-white rounded-full hover:bg-teal-600">Browse Courses</button>
                            <button className="font-onest px-5 py-2 bg-white text-teal-700 rounded-full border border-teal-700">Get Started</button>
                        </div>
                    </div>
                    {/* Right image container */}
                    <div className="flex-1 rounded-xl">
                        <img className="rounded-xl" src="/herosection.png" alt="Hero Section" />
                    </div>
                </div>
            </div>
        </div>
    )
}