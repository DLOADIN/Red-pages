import { Button } from "../components/ui/button"

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-heading mb-4">Contact Us</h1>
        <p className="text-paragraph">Feel free to reach out to us in any of the below possible ways</p>
      </section>

      {/* Contact Form */}
      <section className="bg-white p-8 rounded-lg shadow-sm border border-[#e5e5e5] mb-16">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-small font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 border border-[#e5e5e5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ad343e] focus:border-transparent"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-small font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 border border-[#e5e5e5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ad343e] focus:border-transparent"
                placeholder="Enter email address"
              />
            </div>
          </div>
          <div>
            <label className="block text-small font-medium mb-2">Subject</label>
            <input
              type="text"
              className="w-full p-3 border border-[#e5e5e5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ad343e] focus:border-transparent"
              placeholder="Write a subject"
            />
          </div>
          <div>
            <label className="block text-small font-medium mb-2">Message</label>
            <textarea
              rows={5}
              className="w-full p-3 border border-[#e5e5e5] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ad343e] focus:border-transparent resize-none"
              placeholder="Write your message"
            ></textarea>
          </div>
          <Button className="w-full bg-[#ad343e] hover:bg-red-accent text-white py-3 rounded-full text-lg font-medium">
            Send
          </Button>
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
