
import { ArrowRight, Brain, Zap, Target } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white pt-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-24 sm:pb-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Generate Perfect Practice Questions with AI
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Create unlimited practice questions for any subject using advanced AI. Perfect for teachers, students, and professionals.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 flex items-center gap-2">
              Get started free <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-16 flow-root sm:mt-24">
          <div className="relative rounded-xl bg-gray-900/5 p-2">
            <div className="relative rounded-lg bg-white shadow-2xl ring-1 ring-gray-900/5">
              <img
                src="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2940&auto=format&fit=crop"
                alt="App screenshot"
                className="rounded-lg"
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>

        <div className="mt-16 sm:mt-24">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className="relative rounded-2xl border border-gray-200 p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <Brain className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">AI-Powered Generation</h3>
              <p className="mt-2 text-gray-600">Advanced AI creates high-quality questions tailored to your needs.</p>
            </div>
            <div className="relative rounded-2xl border border-gray-200 p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Instant Results</h3>
              <p className="mt-2 text-gray-600">Get questions and answers instantly, saving hours of preparation time.</p>
            </div>
            <div className="relative rounded-2xl border border-gray-200 p-8">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900">Custom Difficulty</h3>
              <p className="mt-2 text-gray-600">Adjust difficulty levels to match your learning objectives.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}