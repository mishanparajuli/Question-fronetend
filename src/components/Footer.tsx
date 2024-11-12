
import { BookOpen } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a href="#" className="text-gray-400 hover:text-gray-500">
            Terms
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            Privacy
          </a>
          <a href="#" className="text-gray-400 hover:text-gray-500">
            Contact
          </a>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <BookOpen className="h-6 w-6 text-indigo-600" />
            <span className="text-lg font-semibold text-gray-900">QuestionAI</span>
          </div>
          <p className="mt-2 text-center md:text-left text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} QuestionAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}