import { ReviewsCard } from "./reviewscard";


export default function Reviews() {
    return (
        <div>
            <div className="flex flex-col items-center font-onest text-2xl sm:text-3xl font-bold">
                <p>Learners love EduPath. See why</p>
                <p>they rate us 4.9 out of 5</p>
            </div>
            <div className="pt-8 pb-10">
                <ReviewsCard/>
            </div>
        </div>
    )
}

/*
    I tried to customize this using the infinit moving card component from Aceternity Ui which looks awesome as review just a personal adding 
    for more visit - https://ui.aceternity.com/components/infinite-moving-cards
*/