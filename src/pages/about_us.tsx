import Navigation from "@/components/home/Navigation"

const AboutUs = () => {
  return (
    <div className="flex min-h-screen flex-col bg-[#f5f5f5]">
      {/* Navigation */}
      <div className="bg-[#15321a] shadow-lg">
        <div className="mx-auto max-w-5xl px-4 py-3">
          <Navigation />
        </div>
      </div>

      {/* About Us Content */}
      <div className="flex flex-1 items-center justify-center p-4">
        <div className="w-full max-w-3xl rounded-xl bg-white px-7 py-10 shadow-lg">
          <h1 className="mb-6 text-center text-3xl font-extrabold text-[#194023]">
            About Us
          </h1>
          <p className="mb-4 text-lg text-gray-700">
            Welcome to{" "}
            <span className="font-bold text-[#276132]">Shree Ganesh Agro</span>{" "}
            – your trusted partner for high-quality agricultural products!
          </p>
          <p className="mb-4 text-gray-700">
            At Shree Ganesh Agro, we are passionate about empowering farmers and
            consumers with the best grains, seeds, and agricultural produce.
            With decades of experience in the industry, our mission is to bridge
            the gap between the farm and your table, bringing you fresh and
            nutritious products at fair prices.
          </p>
          <p className="mb-4 text-gray-700">
            Our values are rooted in integrity, transparency, and commitment to
            sustainability. We work closely with local farmers to promote
            responsible farming practices and ensure you receive genuine,
            top-quality produce.
          </p>
          <ul className="mb-4 list-disc pl-6 text-gray-700">
            <li>Wide selection of agricultural products</li>
            <li>Trusted sourcing and quality checks</li>
            <li>Customer-oriented service</li>
            <li>Focus on sustainable farming and local communities</li>
          </ul>
          <p className="mb-4 text-gray-700">
            Thank you for choosing Shree Ganesh Agro. We look forward to
            supporting your needs and growing together!
          </p>
          <div className="mt-8 text-center">
            <span className="font-semibold text-[#276132]">Contact us: </span>
            <a
              href="mailto:info@shreeganeshagro.com"
              className="text-[#276132] underline"
            >
              info@shreeganeshagro.com
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
