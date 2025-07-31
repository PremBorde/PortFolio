import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  UserIcon,
  PaperAirplaneIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const contactInfo = [
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      title: 'Email',
      value: 'prembordesn4@gmail.com',
      link: 'mailto:prembordesn4@gmail.com',
      color: 'bg-blue-500',
    },
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      title: 'Phone',
      value: '+91 9653309640',
      link: 'tel:+919653309640',
      color: 'bg-green-500',
    },
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      title: 'Location',
      value: 'Pune, Moshi',
      link: null,
      color: 'bg-purple-500',
    },
    {
      icon: <BriefcaseIcon className="h-6 w-6" />,
      title: 'Freelancing',
      value: 'Available for freelance projects',
      link: null,
      color: 'bg-orange-500',
    },
  ]

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/PremBorde',
      icon: '🐙',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/prem-borde-115a92281/',
      icon: '💼',
    },
  ]

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-white to-primary/5 dark:from-primary/20 dark:via-gray-900 dark:to-secondary/10" />
      
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Accent bar */}
          <div className="flex justify-center mb-4">
            <span className="inline-block w-16 h-1 rounded-full bg-gradient-to-r from-secondary to-primary"></span>
          </div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-extrabold text-center mb-16 text-gray-900 dark:text-textPrimary tracking-tight drop-shadow-lg"
          >
            Get In Touch
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-1 space-y-6"
            >
              {/* Contact Info Cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group"
                  >
                    {info.link ? (
                      <a
                        href={info.link}
                        className="block p-6 rounded-2xl bg-white/60 dark:bg-gray-800/70 backdrop-blur-md border border-secondary/20 dark:border-primary/20 hover:border-secondary dark:hover:border-secondary transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-xl ${info.color} text-white`}>
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-textPrimary">
                              {info.title}
                            </h3>
                            <p className="text-gray-600 dark:text-textSecondary group-hover:text-secondary transition-colors">
                              {info.value}
                            </p>
                          </div>
                        </div>
                      </a>
                    ) : (
                      <div className="block p-6 rounded-2xl bg-white/60 dark:bg-gray-800/70 backdrop-blur-md border border-secondary/20 dark:border-primary/20 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-xl ${info.color} text-white`}>
                            {info.icon}
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-textPrimary">
                              {info.title}
                            </h3>
                            <p className="text-gray-600 dark:text-textSecondary">
                              {info.value}
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="p-6 rounded-2xl bg-white/60 dark:bg-gray-800/70 backdrop-blur-md border border-secondary/20 dark:border-primary/20"
              >
                <h3 className="text-xl font-semibold text-gray-900 dark:text-textPrimary mb-4 flex items-center gap-2">
                  <ChatBubbleLeftRightIcon className="h-5 w-5 text-secondary" />
                  Connect with me
                </h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/50 dark:bg-gray-700/50 backdrop-blur-sm border border-secondary/20 dark:border-primary/20 hover:border-secondary dark:hover:border-secondary transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-xl">{social.icon}</span>
                      <span className="font-medium text-gray-700 dark:text-textSecondary">
                        {social.name}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="lg:col-span-2"
            >
              <div className="p-8 rounded-3xl bg-white/60 dark:bg-gray-800/70 backdrop-blur-md border border-secondary/20 dark:border-primary/20 shadow-2xl">
                <div className="flex items-center gap-3 mb-8">
                  <div className="p-3 rounded-xl bg-secondary/10 dark:bg-secondary/20">
                    <UserIcon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-textPrimary">
                    Send me a message
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700 dark:text-textSecondary mb-2"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-textPrimary transition-all duration-200 hover:border-secondary dark:hover:border-secondary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700 dark:text-textSecondary mb-2"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-textPrimary transition-all duration-200 hover:border-secondary dark:hover:border-secondary"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 dark:text-textSecondary mb-2"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-textPrimary transition-all duration-200 hover:border-secondary dark:hover:border-secondary"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 dark:text-textSecondary mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-secondary focus:border-transparent bg-white/50 dark:bg-gray-700/50 text-gray-900 dark:text-textPrimary transition-all duration-200 hover:border-secondary dark:hover:border-secondary resize-none"
                      placeholder="Tell me about your project or inquiry..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-secondary to-primary text-white font-semibold py-4 px-8 rounded-xl hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <PaperAirplaneIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 