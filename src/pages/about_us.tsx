import PageContent from "@/components/layout/PageContent"

const features = [
  "Wide selection of agricultural products",
  "Trusted sourcing and quality checks",
  "Customer-oriented service",
  "Focus on sustainable farming and local communities",
]

const AboutUs = () => {
  return (
    <PageContent>
      {/* Fonts: add once in index.html <head>, same as Products.tsx
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap" rel="stylesheet">
      */}
      <div className="bg-[#F3F7F2] px-4 py-8 sm:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Hero */}
          <div className="mb-8 text-center">
            <span className="mb-3 inline-block font-['Inter'] text-xs font-semibold tracking-[0.25em] text-[#B5651D] uppercase">
              Our Story
            </span>
            <h1 className="mb-4 font-['Fraunces'] text-4xl font-semibold text-[#163B22] sm:text-5xl">
              About Shree Ganesh Agro
            </h1>
            <div className="mx-auto flex items-center justify-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#D9A404]" />
              <span className="h-1 w-1 rounded-full bg-[#D9A404]" />
              <span className="h-6 w-6 rounded-full border border-dashed border-[#276132]" />
              <span className="h-1 w-1 rounded-full bg-[#D9A404]" />
              <span className="h-1 w-1 rounded-full bg-[#D9A404]" />
            </div>
          </div>

          {/* Intro + seal */}
          <div className="mb-10 grid grid-cols-1 gap-8 rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(22,59,34,0.08)] sm:grid-cols-[1fr_auto] sm:items-center sm:p-10">
            <div>
              <p className="mb-4 font-['Inter'] text-lg leading-relaxed text-[#3A3229]">
                Welcome to{" "}
                <span className="font-semibold text-[#276132]">
                  Shree Ganesh Agro
                </span>{" "}
                – your trusted partner for high-quality agricultural products.
              </p>
              <p className="font-['Inter'] leading-relaxed text-[#3A3229]/80">
                We are passionate about empowering farmers and consumers with
                the best grains, seeds, and agricultural produce. With decades
                of experience in the industry, our mission is to bridge the gap
                between the farm and your table, bringing you fresh and
                nutritious products at fair prices.
              </p>
            </div>
            <div className="flex shrink-0 items-center justify-center">
              <div className="flex h-28 w-28 rotate-[-6deg] flex-col items-center justify-center rounded-full border-2 border-dashed border-[#B5651D] font-['Inter'] text-[#B5651D]">
                <span className="text-[10px] font-bold tracking-wide uppercase">
                  Farm to
                </span>
                <span className="text-[10px] font-bold tracking-wide uppercase">
                  Table
                </span>
                <span className="mt-1 font-['Fraunces'] text-lg font-semibold">
                  Since
                </span>
                <span className="font-['Fraunces'] text-lg leading-none font-semibold">
                  Day One
                </span>
              </div>
            </div>
          </div>

          {/* Values statement */}
          <div className="mb-10 rounded-2xl bg-white p-8 shadow-[0_4px_20px_rgba(22,59,34,0.08)] sm:p-10">
            <h2 className="mb-3 font-['Fraunces'] text-2xl font-semibold text-[#163B22]">
              What We Stand For
            </h2>
            <p className="font-['Inter'] leading-relaxed text-[#3A3229]/80">
              Our values are rooted in integrity, transparency, and commitment
              to sustainability. We work closely with local farmers to promote
              responsible farming practices and ensure you receive genuine,
              top-quality produce.
            </p>
          </div>

          {/* Feature checklist */}
          <div className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-[0_4px_20px_rgba(22,59,34,0.08)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D9A404]/15 font-['Inter'] text-xs font-bold text-[#B5651D]">
                  ✓
                </span>
                <span className="font-['Inter'] text-sm leading-relaxed text-[#3A3229]">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Closing */}
          <p className="mb-10 text-center font-['Inter'] leading-relaxed text-[#3A3229]/80">
            Thank you for choosing Shree Ganesh Agro. We look forward to
            supporting your needs and growing together!
          </p>

          {/* Contact card */}
          <div className="mx-auto flex max-w-md flex-col items-center gap-2 rounded-2xl border border-dashed border-[#194023]/25 bg-white px-8 py-7 text-center shadow-[0_4px_20px_rgba(22,59,34,0.08)]">
            <span className="font-['Inter'] text-xs font-semibold tracking-[0.2em] text-[#B5651D] uppercase">
              Get In Touch
            </span>
            <a
              href="mailto:info@shreeganeshagro.com"
              className="font-['JetBrains_Mono'] text-lg font-medium text-[#163B22] underline decoration-[#D9A404] decoration-2 underline-offset-4 transition-colors hover:text-[#276132]"
            >
              info@shreeganeshagro.com
            </a>
          </div>
        </div>
      </div>
    </PageContent>
  )
}

export default AboutUs
