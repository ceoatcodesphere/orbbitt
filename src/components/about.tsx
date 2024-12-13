export default function TechLeaderSection() {
  return (
    <div>
      <section className="py-36 px-6 md:px-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-8">
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <button className="bg-green-100 text-black px-4 py-2 rounded-full text-sm font-medium mb-4">
              About Us
            </button>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Your Career Is Our Mission
            </h1>
            <p className="mb-6">
              At Orbbitt, we revolutionize education by connecting learners with top colleges and resources, empowering them to excel academically and professionally. Our mission is to make quality education accessible and impactful for everyone. Join us in shaping the future of learning and unlocking your potential with Orbbitt!
            </p>
            <a href="/search">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-white hover:text-black">
                Get Started
              </button>
            </a>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src="/Screenshot 2024-12-11 190426.png"
              alt="Tech Revolution"
              className="w-full h-auto rounded-2xl border border-white"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
