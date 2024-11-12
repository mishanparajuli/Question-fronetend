
import {  BookOpen, Users, BarChart3, Brain } from 'lucide-react';

export default function Features() {
  const features = [
    {
      name: 'Multiple Question Types',
      description: 'Generate MCQs, true/false, short answer, and essay questions.',
      icon: BookOpen,
    },
    {
      name: 'Collaborative Learning',
      description: 'Share question banks with students and colleagues.',
      icon: Users,
    },
    {
      name: 'Progress Tracking',
      description: 'Monitor student performance and identify areas for improvement.',
      icon: BarChart3,
    },
    {
      name: 'Smart Analytics',
      description: 'Get insights into question difficulty and student performance.',
      icon: Brain,
    },
  ];

  return (
    <div id="features" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Advanced Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to create perfect practice materials
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our AI-powered platform provides all the tools you need to create, manage, and analyze practice questions.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}