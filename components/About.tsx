export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              About KryptonArc
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              KryptonArc is pioneering the next generation of smart security solutions. 
              Our mission is to create innovative, sustainable, and accessible technology 
              that empowers individuals and communities.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              The Battery-less Modular Smart-Padlock represents years of research and 
              development, combining cutting-edge technology with practical design. 
              By making our technology open-source and 3D printable, we&apos;re democratizing 
              access to advanced security solutions.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="text-primary mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Innovation First</h4>
                  <p className="text-gray-600 dark:text-gray-400">Pushing boundaries with revolutionary technology</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-primary mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Community Driven</h4>
                  <p className="text-gray-600 dark:text-gray-400">Open-source collaboration and transparency</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-primary mt-1">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">Sustainability</h4>
                  <p className="text-gray-600 dark:text-gray-400">Eco-friendly solutions for a better tomorrow</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-primary/20 to-primary-dark/20 rounded-2xl p-8">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Project Status
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 dark:text-gray-400">Development</span>
                      <span className="text-primary font-semibold">Prototype</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 dark:text-gray-400">Category</span>
                      <span className="text-gray-900 dark:text-white font-semibold">Technology / 3D Printing</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 dark:text-gray-400">Created By</span>
                      <span className="text-gray-900 dark:text-white font-semibold">Ali Sadat</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-600 dark:text-gray-400">Country</span>
                      <span className="text-gray-900 dark:text-white font-semibold">Australia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
