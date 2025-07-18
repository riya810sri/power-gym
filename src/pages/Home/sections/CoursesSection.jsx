import { Button } from '../../../components/ui/Button';
import courses from '../../../data/courses.json';

export function CoursesSection() {
  return (
    <section id="courses" className="section-dark py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Our Course Offerings</h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Browse our expert-led courses to gain practical skills and advance your professional journey.
        </p>
      </div>
      
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div key={course.id} className="feature-card bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-purple-500 group hover:transform hover:scale-105 transition-all duration-300">
            <div className="h-48 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl mb-6 flex items-center justify-center">
              <span className="text-5xl">{course.icon || "🎓"}</span>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">{course.title}</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">{course.description}</p>
            <div className="flex justify-between items-center mb-6">
              <span className="bg-purple-600/20 text-purple-400 px-3 py-1 rounded-full text-sm font-medium">{course.level || "Beginner"}</span>
              <span className="text-gray-400 text-sm">{course.duration || "4 weeks"}</span>
            </div>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">Learn More</Button>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <p className="text-gray-400 text-lg">Students Journey</p>
      </div>
    </section>
  );
}