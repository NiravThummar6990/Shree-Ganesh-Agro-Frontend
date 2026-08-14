import PageContent from "@/components/layout/PageContent"
import { Copy } from "lucide-react"
import { useState } from "react"

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setForm({
      name: "",
      email: "",
      message: "",
    })
  }

  return (
    <PageContent>
      <div className="mx-auto max-w-2xl rounded-xl bg-white px-7 py-10 shadow-lg">
        <h1 className="mb-6 text-center text-3xl font-extrabold text-[#194023]">
          Contact Us
        </h1>
        <p className="mb-4 text-center text-lg text-gray-700">
          Have a question, feedback, or want to connect with us? Fill out the
          form below and we&apos;ll get back to you as soon as possible.
        </p>
        <div className="mb-8 flex flex-col items-center space-y-1">
          <span className="font-semibold text-[#276132]">Email:</span>
          <button
            type="button"
            className="group flex items-center gap-2 text-[#276132] underline focus:outline-none"
            onClick={() => {
              navigator.clipboard.writeText("abhaybhaivala132@gmail.com")
            }}
            title="Copy email"
          >
            <span>abhaybhaivala132@gmail.com</span>
            <Copy className="cursor-pointer transition-transform duration-100 group-active:scale-90" />
          </button>
          <span className="mt-4 font-semibold text-[#276132]">Phone:</span>
          <button
            type="button"
            className="group flex items-center gap-2 text-[#276132] underline focus:outline-none"
            onClick={() => {
              navigator.clipboard.writeText("+91 97242 45834")
            }}
            title="Copy phone"
          >
            <span>+91 97242 45834</span>
            <Copy className="cursor-pointer transition-transform duration-100 group-active:scale-90" />
          </button>
          <span className="mt-4 font-semibold text-[#276132]">Address:</span>
          <button
            type="button"
            className="text-center text-gray-700 focus:outline-none"
            style={{ lineHeight: "1.5" }}
            onClick={() => {
              navigator.clipboard.writeText(
                "302, Main Road, Dharagni,\nAmreli, Gujarat,\nIndia - 365630"
              )
            }}
            title="Copy address"
          >
            302, Main Road, Dharagni,
            <br />
            Amreli, Gujarat,
            <br />
            India - 365630
          </button>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-[#276132]"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm outline-none focus:border-[#276132] focus:ring-2 focus:ring-[#276132]"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-[#276132]"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm outline-none focus:border-[#276132] focus:ring-2 focus:ring-[#276132]"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-semibold text-[#276132]"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 shadow-sm outline-none focus:border-[#276132] focus:ring-2 focus:ring-[#276132]"
            />
          </div>
          {submitted && (
            <div className="text-center font-medium text-green-700">
              Thank you for contacting us! We&apos;ll get back to you soon.
            </div>
          )}
          <button
            type="submit"
            className="w-full rounded-lg bg-[#276132] py-2.5 text-base font-semibold text-white transition-colors duration-200 hover:bg-[#194023] focus:ring-2 focus:ring-[#194023] focus:outline-none disabled:opacity-70"
            disabled={!form.name || !form.email || !form.message}
          >
            Send Message
          </button>
        </form>
      </div>
    </PageContent>
  )
}

export default Contact
