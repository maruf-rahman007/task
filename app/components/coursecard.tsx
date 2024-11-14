export default function CourseCard({ course }: any) {
    return (
        <div className="flex-shrink-0 w-[300px] border border-gray-200 rounded-xl overflow-hidden">
            <img src={course.image} alt={course.title} className="w-full h-[200px] object-cover" />
            <div className="p-4">
                <div className="flex gap-2 mb-2">
                    <span className="px-2 py-1 text-xs font-medium rounded-md bg-orange-100 text-orange-800">
                        {course.level}
                    </span>
                    <span className="px-2 py-1 text-xs font-medium rounded-md bg-green-100 text-green-800">
                        {course.category}
                    </span>
                </div>
                <h2 className="font-onest font-medium text-lg mb-2">
                    {course.title}
                </h2>
                <div className="flex items-center space-x-2 mb-2">
                    <i className="fa fa-star" style={{ color: 'orange', fontSize: '15px' }}></i>
                    <i className="fa fa-star" style={{ color: 'orange', fontSize: '15px' }}></i>
                    <i className="fa fa-star" style={{ color: 'orange', fontSize: '15px' }}></i>
                    <i className="fa fa-star" style={{ color: 'orange', fontSize: '15px' }}></i>
                    <i className="fa fa-star-half-full" style={{ color: 'orange', fontSize: '15px' }}></i>
                    <span className="text-lg font-semibold text-gray-700">{course.rating} ({course.reviews})</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                        <img src="/timer.png" alt="Time" className="w-4 h-4" />
                        <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <img src="/book.png" alt="Lessons" className="w-4 h-4" />
                        <span>{course.lessons} Lessons</span>
                    </div>
                </div>
                <hr className="border-gray-200 mb-4" />
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <img className="w-10 h-10 rounded-full" src={course.instructorImage} alt={course.instructor} />
                        <span className="font-medium">{course.instructor}</span>
                    </div>
                    <span className="font-onest font-semibold text-lg">{course.price}</span>
                </div>
            </div>
        </div>
    );
}
