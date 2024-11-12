
import piteyImage from '../images/pitey.jpeg';
import bebeImage from '../images/bebe.jpeg';

import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ankit Kunwar',
      role: 'CA Dropout',
      image: bebeImage,
      quote: 'QuestionAI has revolutionized how I prepare tests. It saves me hours every week and loved the variety of questions.',
    },
    {
      name: 'Mishan Parajuli',
      role: 'matric Fail',
      image: piteyImage,
      quote: 'The AI-generated questions are incredibly accurate and relevant. It\'s like having a teaching assistant available 24/7.',
    },
    {
      name: 'Sanskar Singh',
      role: 'Montessory Dropout',
      image: bebeImage,
      quote: 'We use QuestionAI for all our Test Prepration. The analytics help us to Study  effectively.',
    },
  ];

  return (
    <div id="testimonials" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Loved by students worldwide
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            See what our users have to say about their experience with QuestionAI
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="flex flex-col justify-between rounded-2xl bg-white p-8 ring-1 ring-gray-200">
              <div>
                <div className="flex gap-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="mt-6 text-lg leading-7 text-gray-600">
                  "{testimonial.quote}"
                </div>
              </div>
              <div className="mt-8 flex items-center gap-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full bg-gray-50"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}