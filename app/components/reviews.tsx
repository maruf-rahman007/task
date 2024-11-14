import { ReviewsCard } from "./reviewscard";


export default function Reviews() {
    return (
        <div>
            <div className="flex flex-col items-center font-onest text-3xl font-bold">
                <p>Learners love EduPath. See why</p>
                <p>they rate us 4.9 out of 5</p>
            </div>
            <div className="pt-8 pb-10">
                <ReviewsCard/>
            </div>
        </div>
    )
}