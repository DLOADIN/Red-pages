import type React from "react"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "../components/ui/button"

export default function Contact() {
  const formRef = useRef<HTMLFormElement | null>(null)
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSend = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return
    setIsSending(true)
    setStatus("idle")

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("Missing EmailJS environment variables")
      }

      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey })
      formRef.current.reset()
      setStatus("success")
    } catch (err) {
      console.error("EmailJS send error", err)
      setStatus("error")
    } finally {
      setIsSending(false)
    }
  }
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-heading mb-4">Contact Us</h1>
        <p className="text-paragraph">Feel free to reach out to us in any of the below possible ways</p>
      </section>

      {/* Contact Form */}
      <section className="bg-white p-8 rounded-lg shadow-sm border border-[#e5e5e5] mb-16">
        <form ref={formRef} onSubmit={handleSend} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-small font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 border border-[#e5e5e5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ad343e] focus:border-transparent"
                placeholder="Enter your name"
                name="user_name"
                required
              />
            </div>
            <div>
              <label className="block text-small font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-[#e5e5e5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ad343e] focus:border-transparent"
                placeholder="Enter email address"
                name="user_email"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-small font-medium mb-2">Subject</label>
            <input
              type="text"
              className="w-full p-3 border border-[#e5e5e5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ad343e] focus:border-transparent"
              placeholder="Write a subject"
              name="subject"
              required
            />
          </div>
          <div>
            <label className="block text-small font-medium mb-2">Message</label>
            <textarea
              rows={5}
              className="w-full p-3 border border-[#e5e5e5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ad343e] focus:border-transparent resize-none"
              placeholder="Write your message"
              name="message"
              required
            ></textarea>
          </div>
          <Button disabled={isSending} className="w-full bg-[#ad343e] hover:bg-red-accent text-white py-3 rounded-full text-lg font-medium disabled:opacity-60">
            {isSending ? "Sending..." : "Send"}
          </Button>
          {status === "success" && (
            <p className="text-green-600 text-center">Message sent successfully. We will get back to you soon.</p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center">Something went wrong. Please try again later.</p>
          )}
        </form>
      </section>

      {/* Contact Information */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-[#2c2f24] mb-4">Call Us:</h3>
          <div className="space-y-2">
            <p className="text-[#ad343e] font-medium">+44 7572795578</p>
            <p className="text-[#ad343e] font-medium">+44 7843562328</p>
            <p className="text-[#ad343e] font-medium">+44 01183272740</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#2c2f24] mb-4">Hours:</h3>
          <div className="space-y-1">
            <p className="text-small">Mon-Fri 9am - 6pm</p>
            <p className="text-small">Sat-Sun 9am - 5pm</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#2c2f24] mb-4">Our Location:</h3>
          <div className="space-y-1">
            <p className="text-small">79 Kingsley Close,</p>
            <p className="text-small">Reading, RG 30 3TX, United</p>
            <p className="text-small">Kingdom</p>
          </div>
        </div>
      </section>
    </div>
  )
}
