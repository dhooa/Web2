import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Head from 'next/head'

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <>
      <Head>
        <title>Shelter Green Coffee - Premium Eco Lodge</title>
        <meta name="description" content="Experience tranquil accommodation surrounded by nature at Shelter Green Coffee, where sustainability meets comfort." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-forest-900 via-forest-800 to-forest-700">
        {/* Navigation */}
        <motion.nav 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="fixed top-0 w-full z-50 bg-forest-900/80 backdrop-blur-md border-b border-forest-600/30"
        >
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="text-2xl font-serif font-bold text-white"
              >
                Shelter Green Coffee
              </motion.div>
              <div className="hidden md:flex space-x-8">
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#rooms">Rooms</NavLink>
                <NavLink href="#coffee">Coffee</NavLink>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </div>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-coffee-500 text-white px-6 py-2 rounded-full hover:bg-coffee-600 transition-colors"
              >
                Book Now
              </motion.button>
            </div>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-forest-900/50 to-forest-700/50"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <motion.div
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, 0],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 20, repeat: Infinity }}
              className="absolute top-20 left-20 w-96 h-96 bg-forest-400/20 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ 
                scale: [1.1, 1, 1.1],
                rotate: [0, -5, 0],
                opacity: [0.1, 0.2, 0.1]
              }}
              transition={{ duration: 25, repeat: Infinity }}
              className="absolute bottom-20 right-20 w-96 h-96 bg-coffee-400/20 rounded-full blur-3xl"
            />
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="relative z-10 text-center text-white max-w-4xl mx-auto px-6"
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-6xl md:text-8xl font-serif font-bold mb-6 bg-gradient-to-r from-white via-forest-100 to-coffee-200 bg-clip-text text-transparent"
            >
              Shelter Green Coffee
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="text-xl md:text-2xl mb-8 text-forest-100 leading-relaxed"
            >
              Where Nature Meets Comfort. Experience sustainable luxury in our eco-friendly lodge surrounded by lush coffee plantations.
            </motion.p>
            
            <motion.div 
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-forest-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-forest-600 transition-all duration-300 shadow-lg"
              >
                Explore Rooms
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-coffee-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-coffee-600 transition-all duration-300 shadow-lg"
              >
                Coffee Experience
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
            </div>
          </motion.div>
        </section>

        {/* Rooms Section */}
        <section id="rooms" className="py-20 bg-gradient-to-br from-forest-50 to-coffee-50">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-serif font-bold text-forest-800 mb-4">Our Rooms</h2>
              <p className="text-xl text-forest-600 max-w-2xl mx-auto">Choose from our carefully designed accommodations, each offering a unique blend of comfort and nature.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <RoomCard
                title="Forest Suite"
                description="Spacious suite with panoramic forest views and private balcony"
                price="$120/night"
                features={["King bed", "Forest view", "Private balcony", "Coffee maker"]}
                delay={0}
              />
              <RoomCard
                title="Coffee Cabin"
                description="Cozy cabin nestled among coffee plants with rustic charm"
                price="$85/night"
                features={["Queen bed", "Coffee plantation view", "Outdoor seating", "Mini fridge"]}
                delay={0.2}
              />
              <RoomCard
                title="Eco Lodge"
                description="Sustainable luxury with solar power and rainwater collection"
                price="$150/night"
                features={["King bed", "Eco-friendly", "Solar power", "Rainfall shower"]}
                delay={0.4}
              />
            </div>
          </div>
        </section>

        {/* Coffee Experience Section */}
        <section id="coffee" className="py-20 bg-coffee-gradient">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-5xl font-serif font-bold text-white mb-6">Coffee Experience</h2>
                <p className="text-xl text-coffee-100 mb-8 leading-relaxed">
                  Immerse yourself in the world of coffee with our farm-to-cup experience. Learn about sustainable farming practices and taste the difference quality makes.
                </p>
                <div className="space-y-4">
                  <ExperienceItem icon="🌱" title="Farm Tours" description="Walk through our organic coffee plantation" />
                  <ExperienceItem icon="☕" title="Roasting Workshop" description="Learn the art of coffee roasting" />
                  <ExperienceItem icon="🎯" title="Cupping Sessions" description="Professional coffee tasting experience" />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 10, repeat: Infinity }}
                    className="text-6xl mb-4 text-center"
                  >
                    ☕
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white text-center mb-4">Daily Coffee Ritual</h3>
                  <p className="text-coffee-100 text-center">
                    Start each morning with freshly roasted coffee from our plantation, served with a side of nature's tranquility.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-gradient-to-br from-forest-50 to-forest-100">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-5xl font-serif font-bold text-forest-800 mb-6">About Shelter Green Coffee</h2>
              <p className="text-xl text-forest-600 mb-8 leading-relaxed">
                Nestled in the heart of sustainable coffee country, Shelter Green Coffee is more than just accommodation - it's a sanctuary where environmental consciousness meets luxury comfort. Our commitment to eco-friendly practices ensures that your stay contributes to the preservation of our beautiful natural surroundings.
              </p>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <ValueCard
                  icon="🌍"
                  title="Eco-Friendly"
                  description="100% renewable energy and sustainable practices"
                />
                <ValueCard
                  icon="🌿"
                  title="Organic Farm"
                  description="Certified organic coffee plantation on-site"
                />
                <ValueCard
                  icon="🤝"
                  title="Community"
                  description="Supporting local farmers and artisans"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-forest-gradient">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <h2 className="text-5xl font-serif font-bold text-white mb-4">Get In Touch</h2>
                <p className="text-xl text-forest-100">Ready to experience sustainable luxury? Contact us to book your stay.</p>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <ContactItem icon="📍" text="123 Coffee Plantation Road, Green Valley" />
                    <ContactItem icon="📞" text="+1 (555) 123-4567" />
                    <ContactItem icon="✉️" text="info@sheltergreencoffee.com" />
                    <ContactItem icon="🕒" text="Check-in: 3:00 PM | Check-out: 11:00 AM" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">Quick Booking</h3>
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-coffee-400 transition-colors"
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-coffee-400 transition-colors"
                    />
                    <textarea
                      placeholder="Message"
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-coffee-400 transition-colors resize-none"
                    ></textarea>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full bg-coffee-500 text-white py-3 rounded-lg font-semibold hover:bg-coffee-600 transition-colors"
                    >
                      Send Message
                    </motion.button>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-forest-900 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="text-center">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-serif font-bold mb-4">Shelter Green Coffee</h3>
                <p className="text-forest-300 mb-6">Where sustainable luxury meets natural beauty</p>
                <div className="flex justify-center space-x-6 mb-8">
                  import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

<SocialLink href="#" icon={<FaFacebookF />} />
<SocialLink href="#" icon={<FaInstagram />} />
<SocialLink href="#" icon={<FaTwitter />} />
<SocialLink href="#" icon={<FaYoutube />} />
                </div>
                <p className="text-forest-400">© 2024 Shelter Green Coffee. All rights reserved.</p>
              </motion.div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

// Component definitions
function NavLink({ href, children }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      className="text-white hover:text-forest-300 transition-colors font-medium"
    >
      {children}
    </motion.a>
  )
}

function RoomCard({ title, description, price, features, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="h-48 bg-gradient-to-br from-forest-400 to-forest-600 relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute inset-0 bg-gradient-to-br from-forest-300/50 to-coffee-300/50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="text-6xl text-white/80"
          >
            🏡
          </motion.div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-forest-800 mb-2">{title}</h3>
        <p className="text-forest-600 mb-4">{description}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-coffee-600">{price}</span>
        </div>
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-forest-600">
              <span className="text-forest-500 mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-forest-500 text-white py-3 rounded-lg font-semibold hover:bg-forest-600 transition-colors"
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  )
}

function ExperienceItem({ icon, title, description }) {
  return (
    <motion.div
      whileHover={{ x: 10 }}
      className="flex items-center space-x-4 text-white"
    >
      <span className="text-2xl">{icon}</span>
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-coffee-100">{description}</p>
      </div>
    </motion.div>
  )
}

function ValueCard({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="text-center"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-forest-800 mb-2">{title}</h3>
      <p className="text-forest-600">{description}</p>
    </motion.div>
  )
}

function ContactItem({ icon, text }) {
  return (
    <div className="flex items-center space-x-3 text-white">
      <span className="text-xl">{icon}</span>
      <span>{text}</span>
    </div>
  )
}
