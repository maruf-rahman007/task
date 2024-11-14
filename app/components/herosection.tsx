
export default function Hero() {
    return (
        <div className="bg-custom-bg">
            <div className=" px-40 mx-20">
                <div className="container flex items-center px-5">
                    <div className="flex-1 pt-10 mt-16">
                        <div className="flex items-center space-x-2 mb-2">
                            <i className="fa fa-star" style={{ color: 'orange', fontSize: '24px' }}></i>
                            <i className="fa fa-star" style={{ color: 'orange', fontSize: '24px' }}></i>
                            <i className="fa fa-star" style={{ color: 'orange', fontSize: '24px' }}></i>
                            <i className="fa fa-star" style={{ color: 'orange', fontSize: '24px' }}></i>
                            <i className="fa fa-star-half-full" style={{ color: 'orange', fontSize: '24px' }}></i>
                            <span className="text-lg font-semibold text-gray-700">4.9 (566)</span>
                        </div>

                        <h1 className="text-4xl font-bold text-gray-800 mb-6">
                            #1 Platform <br />Powering Health <br /> and Wellness
                        </h1>
                        <p className="text-xl font-semibold text-gray-600 mb-4">
                            We're restoring home as the primary <br /> place of
                            personal well-being
                        </p>
                        <p className="text-lg text-gray-500">
                            Health is not just about what you're eating.
                            It's also <br /> about what you're thinking and saying.
                        </p>
                        <div className="mt-6 space-x-4">
                            <button className="px-5 py-2 bg-teal-700 text-white rounded-full hover:bg-teal-600">Browse Courses</button>
                            <button className="px-5 py-2 bg-white text-teal-700 rounded-full border border-teal-700">Get Started</button>
                        </div>
                    </div>
                    <div className="flex-1 rounded-xl">
                        <img className="rounded-xl" src="/herosection.png" alt="Hero Section" />
                    </div>
                </div>
            </div>
        </div>
    )
}