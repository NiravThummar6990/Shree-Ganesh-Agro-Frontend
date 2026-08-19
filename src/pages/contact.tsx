import PageContent from "@/components/layout/PageContent"
import { Check, Copy, Mail, MapPin, Phone } from "lucide-react"
import { useState } from "react"

type CopyField = "email" | "phone" | "address" | null

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [copiedField, setCopiedField] = useState<CopyField>(null)

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

  const handleCopy = (field: Exclude<CopyField, null>, value: string) => {
    navigator.clipboard.writeText(value)
    setCopiedField(field)
    setTimeout(
      () => setCopiedField((current) => (current === field ? null : current)),
      1500
    )
  }

  return (
    <PageContent>
      {/* Fonts: add once in index.html <head>, same as Products.tsx / AboutUs.tsx
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600;9..144,700&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@500;600&display=swap" rel="stylesheet">
      */}
      <div className="bg-[#F3F7F2] px-4 py-8 sm:px-8">
        <div className="mx-auto max-w-4xl">
          {/* Hero */}
          <div className="mb-10 text-center">
            <span className="mb-3 inline-block font-['Inter'] text-xs font-semibold tracking-[0.25em] text-[#B5651D] uppercase">
              Get In Touch
            </span>
            <h1 className="mb-4 font-['Fraunces'] text-4xl font-semibold text-[#163B22] sm:text-5xl">
              Contact Us
            </h1>
            <div className="mx-auto mb-5 flex items-center justify-center gap-2">
              <span className="h-1 w-1 rounded-full bg-[#D9A404]" />
              <span className="h-1 w-1 rounded-full bg-[#D9A404]" />
              <span className="h-6 w-6 rounded-full border border-dashed border-[#276132]" />
              <span className="h-1 w-1 rounded-full bg-[#D9A404]" />
              <span className="h-1 w-1 rounded-full bg-[#D9A404]" />
            </div>
            <p className="mx-auto max-w-xl font-['Inter'] leading-relaxed text-[#3A3229]/80">
              Have a question, feedback, or want to connect with us? Reach us
              directly below, or send a message and we&apos;ll get back to you
              soon.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            {/* Contact info — postcard style */}
            <div className="flex flex-col justify-between rounded border border-dashed border-[#194023]/25 bg-white px-4 py-8 shadow-[0_4px_20px_rgba(22,59,34,0.08)]">
              <div className="space-y-6">
                <ContactRow
                  icon={<Mail className="h-5 w-5" />}
                  label="Email"
                  value="abhaybhaivala132@gmail.com"
                  copied={copiedField === "email"}
                  onCopy={() =>
                    handleCopy("email", "abhaybhaivala132@gmail.com")
                  }
                />
                <ContactRow
                  icon={<Phone className="h-5 w-5" />}
                  label="Phone"
                  value="+91 97242 45834"
                  copied={copiedField === "phone"}
                  onCopy={() => handleCopy("phone", "+91 97242 45834")}
                />
                <ContactRow
                  icon={<MapPin className="h-5 w-5" />}
                  label="Address"
                  value={
                    <>
                      302, Main Road, Dharagni,
                      <br />
                      Amreli, Gujarat,
                      <br />
                      India - 365630
                    </>
                  }
                  copied={copiedField === "address"}
                  onCopy={() =>
                    handleCopy(
                      "address",
                      "302, Main Road, Dharagni,\nAmreli, Gujarat,\nIndia - 365630"
                    )
                  }
                />
              </div>

              <div className="mt-10 flex items-center gap-3 border-t border-dashed border-[#194023]/15 pt-6">
                <span className="flex h-12 w-12 shrink-0 rotate-[-6deg] items-center justify-center rounded-full border-2 border-dashed border-[#B5651D] font-['Fraunces'] text-xs font-semibold text-[#B5651D]">
                  SGA
                </span>
                <p className="font-['Inter'] text-xs leading-relaxed text-[#3A3229]/60">
                  Shree Ganesh Agro — bridging the farm and your table.
                </p>
              </div>
            </div>

            {/* Form */}
            <div className="rounded bg-white p-8 shadow-[0_4px_20px_rgba(22,59,34,0.08)]">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-['Inter'] text-sm font-semibold text-[#163B22]"
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
                    className="mt-1 w-full rounded-lg border border-[#194023]/20 bg-[#FAF3E4]/40 px-3 py-2 font-['Inter'] text-[#3A3229] shadow-sm transition-colors outline-none focus:border-[#276132] focus:ring-2 focus:ring-[#276132]/40"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-['Inter'] text-sm font-semibold text-[#163B22]"
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
                    className="mt-1 w-full rounded-lg border border-[#194023]/20 bg-[#FAF3E4]/40 px-3 py-2 font-['Inter'] text-[#3A3229] shadow-sm transition-colors outline-none focus:border-[#276132] focus:ring-2 focus:ring-[#276132]/40"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block font-['Inter'] text-sm font-semibold text-[#163B22]"
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
                    className="mt-1 w-full rounded-lg border border-[#194023]/20 bg-[#FAF3E4]/40 px-3 py-2 font-['Inter'] text-[#3A3229] shadow-sm transition-colors outline-none focus:border-[#276132] focus:ring-2 focus:ring-[#276132]/40"
                  />
                </div>

                {submitted && (
                  <div className="rounded-lg bg-[#276132]/10 px-4 py-3 text-center font-['Inter'] text-sm font-medium text-[#163B22]">
                    Thank you for contacting us! We&apos;ll get back to you
                    soon.
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full rounded-full bg-[#D9A404] py-2.5 font-['Inter'] text-base font-semibold text-[#163B22] transition-colors duration-200 hover:bg-[#276132] hover:text-white focus:ring-2 focus:ring-[#194023] focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  disabled={!form.name || !form.email || !form.message}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageContent>
  )
}

type ContactRowProps = {
  icon: React.ReactNode
  label: string
  value: React.ReactNode
  copied: boolean
  onCopy: () => void
}

const ContactRow = ({
  icon,
  label,
  value,
  copied,
  onCopy,
}: ContactRowProps) => (
  <div className="flex items-start gap-3">
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#276132]/10 text-[#276132]">
      {icon}
    </span>
    <div className="min-w-0 flex-1">
      <span className="block font-['Inter'] text-xs font-semibold tracking-wide text-[#B5651D] uppercase">
        {label}
      </span>
      <button
        type="button"
        onClick={onCopy}
        title={`Copy ${label.toLowerCase()}`}
        className="group mt-0.5 flex items-start gap-2 text-left font-['Inter'] text-[#3A3229] focus:outline-none"
      >
        <span className="leading-relaxed">{value}</span>
        {copied ? (
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#276132]" />
        ) : (
          <Copy className="mt-0.5 h-4 w-4 shrink-0 text-[#3A3229]/40 transition-transform duration-100 group-hover:text-[#276132] group-active:scale-90" />
        )}
      </button>
    </div>
  </div>
)

export default Contact
