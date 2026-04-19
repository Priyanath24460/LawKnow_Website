import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import SectionWrapper from './SectionWrapper'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <SectionWrapper id="contact" bg="bg-white">
      <div className="text-center mb-14 flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 section-title font-playfair tracking-tight text-center">Contact Us</h2>
        <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed text-center">
          Have a question or want to collaborate? We'd love to hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Info */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4 font-playfair">Get in Touch</h3>
            <p className="text-gray-500 text-sm leading-relaxed">
              Whether you're interested in our research, want to collaborate, or have feedback about LawKnow, we are always happy to connect.
            </p>
          </div>
          {[
            { icon: Mail, label: 'Email', value: 'lawknow@sliit.lk' },
            { icon: Phone, label: 'Phone', value: '+94 11 754 4801' },
            { icon: MapPin, label: 'Address', value: 'SLIIT, New Kandy Road, Malabe, Sri Lanka' },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon size={18} className="text-amber-600" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">{label}</p>
                <p className="text-gray-800 text-sm">{value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {submitted && (
            <div className="bg-amber-50 border border-amber-200 text-amber-700 rounded-xl px-4 py-3 text-sm font-medium">
              ✅ Message sent successfully! We'll get back to you soon.
            </div>
          )}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">Name</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} required
                placeholder="Your name"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-500 mb-1.5">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} required
                placeholder="your@email.com"
                className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Subject</label>
            <input type="text" name="subject" value={form.subject} onChange={handleChange} required
              placeholder="How can we help?"
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1.5">Message</label>
            <textarea name="message" value={form.message} onChange={handleChange} required rows={5}
              placeholder="Write your message here..."
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-500 hover:to-orange-600 text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            <Send size={16} />
            Send Message
          </button>
        </form>
      </div>
    </SectionWrapper>
  )
}
