'use client'
import { useState, useRef } from 'react';
import CourseCard from "./coursecard";

export default function PopularCourse() {
    //references of scroll handler
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);

    //scroll left or right based on the direction
    const scroll = (direction: 'left' | 'right') => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
            container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    //check if the container can scroll left or right
    const checkScroll = () => {
        const container = scrollContainerRef.current;
        if (container) {
            setCanScrollLeft(container.scrollLeft > 0); // Can scroll left if scrollLeft > 0
            setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth); // Can scroll right if it's not at the end
        }
    };

    //static course data IRL fetch from BE
    const courses = [
        {
            title: "Foundation of Sleep: Sleep Science and Sleep Disorders",
            level: "Beginner",
            category: "Nutrition and Diet",
            instructor: "Kilian Murphe",
            price: "$40",
            image: "/course1.png",
            instructorImage: "/person1.png",
            rating: 4.9,
            reviews: 566,
            duration: "6h 34m",
            lessons: 3,
        },
        {
            title: "Parenting in the Digital Age: Navigating Screen Time",
            level: "Intermediate",
            category: "Health and Wellness",
            instructor: "Sarah Hopkins",
            price: "$50",
            image: "/course2.png",
            instructorImage: "/person2.png",
            rating: 4.5,
            reviews: 456,
            duration: "5h 20m",
            lessons: 4,
        },
        {
            title: "Holistic Health: Integrating Mind, Body, and Spirit",
            level: "Beginner",
            category: "Nutrition and Diet",
            instructor: "Luna Karim",
            price: "Enrolled",
            image: "/course3.png",
            instructorImage: "/person3.png",
            rating: 4.7,
            reviews: 456,
            duration: "8h 40m",
            lessons: 6,
        },
        {
            title: "Introduction to Healthy Diet and Nutrition",
            level: "Beginner",
            category: "Nutrition and Diet",
            instructor: "Kate Winslate",
            price: "$30",
            image: "/course4.png",
            instructorImage: "/person4.png",
            rating: 4.8,
            reviews: 566,
            duration: "7h 15m",
            lessons: 5,
        },
        {
            title: "Foundation of Deep Sleep: Deep Sleep Science",
            level: "Beginner",
            category: "Nutrition and Diet",
            instructor: "Abdul Bari",
            price: "$40",
            image: "/course1.png",
            instructorImage: "/person1.png",
            rating: 4.9,
            reviews: 566,
            duration: "6h 50m",
            lessons: 4,
        },
        {
            title: "Parenting in the Digital Age: Navigating Screen Time",
            level: "Intermediate",
            category: "Health and Wellness",
            instructor: "Sarah Hopkins",
            price: "$50",
            image: "/course2.png",
            instructorImage: "/person2.png",
            rating: 4.5,
            reviews: 456,
            duration: "5h 20m",
            lessons: 4,
        },
    ];

    return (
        <div className="pl-8 sm:pl-40 sm:ml-20 pt-20 md:ml-10 md:pl-20 lg:pl-40 lg:ml-20">
            <h1 className="font-onest text-3xl font-bold mb-4">Our popular courses</h1>
            {/* description and scroll buttons */}
            <div className="sm:flex justify-between items-center mb-6">
                <p className="font-onest max-w-2xl">
                    By taking proactive steps to nurture mental health, we can enhance our quality of life,
                    build resilience, and foster a sense of inner peace and balance
                </p>
                <div className="sm:flex space-x-3 sm:mr-20 sm:pr-40 md:mr-10 md:pr-20 lg:mr-20 lg:pr-40">
                    {/*left scroll*/}
                    <button onClick={() => scroll('left')} disabled={!canScrollLeft}>
                        <img src="/leftarrow.png" alt="Scroll left" className="w-10 h-10 " />
                    </button>
                    {/*right scroll*/}
                    <button onClick={() => scroll('right')} disabled={!canScrollRight}>
                        <img src="/rightarrow.png" alt="Scroll right" className="w-10 h-10" />
                    </button>
                </div>
            </div>
            <div ref={scrollContainerRef} onScroll={checkScroll} className="flex gap-6 overflow-x-auto scrollbar-hide">
                {/*mapping through courses to render CourseCard*/}
                {courses.map((course, index) => (
                    <CourseCard key={index} course={course} />
                ))}
            </div>
        </div>
    );
}
