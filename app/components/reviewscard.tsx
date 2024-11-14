"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function ReviewsCard() {
  return (
    <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "I love the interactive elements and the community forums where I can connect with other learners.",
    name:"No name",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "The mindfulness courses have helped me manage stress better and find balance in my daily life. The guided meditations are a highlight! The courses are well worth the investment and have made a positive impact on my life.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "A fantastic platform with a wide variety of health and wellness courses. The instructors are top-notch, and the content is very engaging.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It's not just about physical health but mental and emotional well-being too.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "I love the flexibility of the courses. I can learn at my own pace and revisit the material whenever I need to.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
  {
    quote:
    "A fantastic platform with a wide variety of health and wellness courses. The instructors are top-notch, and the content is very engaging.",
    name:"Maruf Rahman",
    title: "Moby-Dick",
  }
];
