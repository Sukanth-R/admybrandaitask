import React, { useState } from 'react';

interface Testimonial {
  image: string;
  name: string;
  text: string;
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[];
}

export const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ testimonials }) => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  const testimonial = testimonials[index];

  return (
    <div className="flex flex-col items-center">
      <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mb-2" />
      <p className="font-bold">{testimonial.name}</p>
      <p className="italic mb-2">{testimonial.text}</p>
      <div className="flex gap-2">
        <button onClick={prev} className="px-2 py-1 bg-gray-200 rounded">Prev</button>
        <button onClick={next} className="px-2 py-1 bg-gray-200 rounded">Next</button>
      </div>
    </div>
  );
};
