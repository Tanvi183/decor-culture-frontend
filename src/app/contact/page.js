'use client';

import { useState } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import ToastProvider from '../components/ToastProvider.jsx';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [expandedFAQ, setExpandedFAQ] = useState(1); // FAQ item 2 is expanded by default

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.message) {
      console.log('Contact form submitted:', formData);
      toast.success('Thank you for your message! We\'ll get back to you within 24 hours.', {
        position: "top-right",
        autoClose: 5000,
      });
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        subject: 'General Inquiry',
        message: ''
      });
    }
  };

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      {/* Top Banner */}
      <div className="bg-primary text-white text-xs py-2 text-center font-medium tracking-wide">
        GET CURATED ADVICE DELIVERED TO ANYWHERE IN BANGLADESH IN 3-5 DAYS
      </div>

      <Header />

      {/* Main Content Wrapper */}
      <main className="flex-1 max-w-[1200px] mx-auto w-full px-6 py-12 md:py-20">
        {/* Page Heading */}
        <div className="mb-16">
          <h1 className="text-slate-900 dark:text-white text-5xl font-black leading-tight tracking-[-0.033em] mb-4">
            Contact Us
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl font-light leading-relaxed">
            We're here to help you create your dream home with authentic Bangladeshi craftsmanship. Whether you have questions about our collections or need interior advice, reach out to us.
          </p>
        </div>

        {/* Split Section: Contact Info & Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-start">
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <h2 className="text-2xl font-bold tracking-tight mb-2">Get in Touch</h2>
            <div className="grid grid-cols-1 gap-4">
              <div className="flex gap-5 p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-accent/50 transition-all duration-300">
                <div className="flex items-center justify-center size-12 rounded-full bg-accent/10 text-accent">
                  <span className="material-icons-outlined">location_on</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold">Studio HQ</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-normal leading-normal">
                    House 123, Road 15, Block C<br/>
                    Bashundhara R/A, Dhaka 1229
                  </p>
                </div>
              </div>
              <div className="flex gap-5 p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-accent/50 transition-all duration-300">
                <div className="flex items-center justify-center size-12 rounded-full bg-accent/10 text-accent">
                  <span className="material-icons-outlined">mail</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold">Email Support</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-normal">
                    hello@decorandculture.com
                  </p>
                </div>
              </div>
              <div className="flex gap-5 p-6 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 hover:border-accent/50 transition-all duration-300">
                <div className="flex items-center justify-center size-12 rounded-full bg-accent/10 text-accent">
                  <span className="material-icons-outlined">call</span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-base font-bold">Phone</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm font-normal">
                    +880 1700-123456
                  </p>
                  <p className="text-xs text-slate-500 italic">Sat–Thu: 9am – 6pm BST</p>
                </div>
              </div>
            </div>
            {/* Visual Accent / Mini Map Placeholder */}
            <div className="mt-4 rounded-xl overflow-hidden aspect-video bg-slate-100 dark:bg-slate-700 border border-slate-200 dark:border-slate-600 relative group cursor-pointer">
              <Image
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
                alt="Map showing store location in Dhaka"
                fill
                className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white/90 dark:bg-black/80 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
                  View on Maps
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Support Form */}
          <div className="lg:col-span-7 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8 md:p-10 shadow-sm">
            <h2 className="text-2xl font-bold tracking-tight mb-8">Send a Message</h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold tracking-tight">Full Name</label>
                  <input
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full rounded-lg border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-accent focus:ring-1 focus:ring-accent/20 h-12 text-sm px-4"
                    placeholder="Your full name"
                    type="text"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold tracking-tight">Email Address</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-accent focus:ring-1 focus:ring-accent/20 h-12 text-sm px-4"
                    placeholder="your@email.com"
                    type="email"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold tracking-tight">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-lg border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-accent focus:ring-1 focus:ring-accent/20 h-12 text-sm px-4"
                >
                  <option>General Inquiry</option>
                  <option>Order Status & Tracking</option>
                  <option>Returns & Exchanges</option>
                  <option>Design Consultancy</option>
                  <option>Custom Orders</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold tracking-tight">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-lg border-slate-200 dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:border-accent focus:ring-1 focus:ring-accent/20 min-h-[160px] text-sm px-4 py-3"
                  placeholder="How can we assist you?"
                  required
                ></textarea>
              </div>
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full md:w-auto min-w-[200px] h-14 bg-accent text-white rounded-lg font-bold text-base hover:bg-accent/90 transition-colors shadow-lg shadow-accent/10 flex items-center justify-center gap-2"
                >
                  <span>Send Message</span>
                  <span className="material-icons-outlined text-[18px]">send</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="border-t border-slate-200 dark:border-slate-700 pt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black tracking-tight mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-600 dark:text-slate-400 font-light">
              Quick answers to common questions about our services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {/* FAQ Item 1 */}
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 overflow-hidden">
              <button
                onClick={() => toggleFAQ(0)}
                className="flex items-center justify-between w-full p-6 text-left group"
              >
                <span className="text-base font-bold tracking-tight">
                  What are your delivery charges within Dhaka?
                </span>
                <span className={`material-icons-outlined text-accent transition-transform duration-300 ${expandedFAQ === 0 ? 'rotate-45' : ''}`}>
                  add
                </span>
              </button>
              {expandedFAQ === 0 && (
                <div className="p-6 pt-0 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  We offer free delivery within Dhaka city for orders above Tk 5,000. For orders below this amount, a delivery charge of Tk 150 applies. Outside Dhaka, delivery charges vary based on location.
                </div>
              )}
            </div>

            {/* FAQ Item 2 */}
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 overflow-hidden">
              <button
                onClick={() => toggleFAQ(1)}
                className={`flex items-center justify-between w-full p-6 text-left group border-b border-slate-200 dark:border-slate-700 ${expandedFAQ === 1 ? 'bg-accent/5' : ''}`}
              >
                <span className={`text-base font-bold tracking-tight ${expandedFAQ === 1 ? 'text-accent' : ''}`}>
                  How do I track my furniture delivery?
                </span>
                <span className="material-icons-outlined text-accent">
                  {expandedFAQ === 1 ? 'remove' : 'add'}
                </span>
              </button>
              {expandedFAQ === 1 && (
                <div className="p-6 text-sm text-slate-600 dark:text-slate-400 leading-relaxed bg-white dark:bg-slate-800">
                  Once your order is dispatched, you will receive an SMS and email with tracking details. For large furniture pieces, our delivery team will contact you 24 hours prior to schedule a specific 2-hour delivery window that works for you.
                </div>
              )}
            </div>

            {/* FAQ Item 3 */}
            <div className="border border-slate-200 dark:border-slate-700 rounded-xl bg-white dark:bg-slate-800 overflow-hidden">
              <button
                onClick={() => toggleFAQ(2)}
                className="flex items-center justify-between w-full p-6 text-left group"
              >
                <span className="text-base font-bold tracking-tight">
                  Do you offer interior design consultations?
                </span>
                <span className={`material-icons-outlined text-accent transition-transform duration-300 ${expandedFAQ === 2 ? 'rotate-45' : ''}`}>
                  add
                </span>
              </button>
              {expandedFAQ === 2 && (
                <div className="p-6 pt-0 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Yes! We offer personalized interior design consultations to help you create spaces that reflect your cultural heritage and personal style. Contact us to schedule a consultation with our design experts.
                </div>
              )}
            </div>
          </div>
          <div className="text-center mt-12">
            <a className="text-accent font-bold text-sm underline underline-offset-4 hover:text-accent/80 transition-colors" href="#">
              View all Help Center topics
            </a>
          </div>
        </section>
      </main>

      <Footer />
      <ToastProvider />
    </div>
  );
}