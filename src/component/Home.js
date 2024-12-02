import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, Menu, Star, X } from 'react-feather';
import SaiLogo from './SaiLogo';
import img1 from "../Assets/img6.jpeg"
import img2 from '../Assets/img2.jpeg';
import img0 from '../Assets/img1.jpeg';
import img4 from '../Assets/img4.jpeg';
import img7 from '../Assets/img7.jpeg';

import prog1 from '../Assets/prog1.jpeg';
import parents1 from '../Assets/parents1.jpg';
import prog3 from '../Assets/prog3.jpeg';
import parents2 from '../Assets/parents2.jpg';
import parents3 from '../Assets/parents2.webp';
import prog6 from '../Assets/prog6.jpeg';
import prog7 from '../Assets/prog7.jpeg';
import prog9 from '../Assets/prog9.jpg';
import pedagogy from '../Assets/pedagogy.avif';
import games from '../Assets/games.jpg';
import { motion, AnimatePresence } from 'framer-motion'

// interface Testimonial {
//   name: string
//   image: string
//   text: string
//   rating: number
// }


const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentProgramme, setCurrentProgramme] = useState(0);
  const [currentReason, setCurrentReason] = useState(0);
  const [openFAQ, setOpenFAQ] = useState(null);

  

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const nextSlide = (setter, length) => {
    setter(prev => (prev + 1) % length);
  };

  const prevSlide = (setter, length) => {
    setter(prev => (prev - 1 + length) % length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide(setCurrentSlide, heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0)

  const testimonials = [
    {
      name: 'Parents of Bhushn Krishna',
      // image: '/placeholder.svg?height=200&width=200',
      image: parents2,
      text: "Dear SAI team and faculties, we thank you for lighting my son's educational career bearing his naughtiness patiently with more tolerance. Because of all of your efforts and continued teaching, he has become mature and shows interest in reading and writing his home works as well as in playing. We have no doubt that his coming academic year also will be shining and confident that he is in the best hands.",
      rating: 5,
    },
    {
      name: 'Parents of Aanya Sharma',
      image: parents1,
      text: "The dedication and care shown by the teachers has transformed our daughter's learning experience. She loves going to school every day!",
      rating: 5,
    },
    {
      name: 'Parents of Arjun Patel',
      image: parents3,
      text: "We're amazed by the progress our son has made. The curriculum is excellent and the teachers are exceptional at nurturing young minds.",
      rating: 5,
    },
  ];
  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const [isExpanded, setIsExpanded] = useState(false);

  const advantages = [
    'CBSE Curriculum: Sai English Medium School follows the Central Board of Secondary Education (CBSE) curriculum, which is widely recognized and respected.',
    'Experienced Faculty: The school has a team of experienced and qualified teachers who are dedicated to providing a high-quality education.',
    'Safe and Secure Campus: The school has a safe and secure campus, with CCTV cameras and a strict security protocol in place.',
    'Affordable Fees*: The school offers affordable fees, making it accessible to students from all backgrounds.',
    'Convenient Location: The school is located in a convenient location, making it easily accessible by public transport.',
    'Parent-Teacher Association: The school has an active parent-teacher association, which encourages parental involvement and participation in school activities.',
  ];


const heroSlides = [
  {
    image: img1,
    title: 'Build a foundation for a life time of learning',
    cta: 'Enroll Now',
  },
  {
    image: img7,
    title: 'Nurturing Gen-Next with innovative education',
    cta: 'Enroll Nowe',
  },
  {
    image: img0,
    title: 'Discover the joy of early childhood education',
    cta: 'Enroll Now',
  },
  // {
  //   image: img3,
  //   title: 'Empowering young minds for a bright future',
  //   cta: 'Schedule a Visit',
  // },
];

 const programmes = [
   {
     title: 'Together We Learn and Grow',
     description: `Fostering creativity, teamwork, and artistic skills in young learners to build a strong foundation for their future.`,
     image: prog9,
   },
   {
     title: 'Drawing Competition',
     description:
       'Encouraging creativity and artistic skills among children through fun and engaging drawing activities.',
     image: img2,
   },
   {
     title: 'Sports Day',
     description: 'A day filled with exciting outdoor games and activities promoting fitness and teamwork.',
     image: img4,
   },
   {
     title: 'Games Hour',
     description: 'Interactive games to develop problem-solving and cognitive skills in a fun environment.',
     image: games, // Unsplash static image
   },
   {
     title: 'Cultural Event                   ',
     description: 'Celebrating national pride with performances, flag hoisting, and engaging activities.',
     image: prog1,
   },
   {
     title: 'Plant a Sapling, Grow a Future',
     description: 'Instilling environmental responsibility in children through hands-on tree planting activities.',
     image: prog3, // Replace with a suitable static image URL or variable
   },
 ];


  const reasons = [
    {
      title: 'Holistic Learning',
      description: 'Fostering all-round development through a balanced blend of academics, play, and life skills.',
    },
    {
      title: 'Experienced Educators',
      description: 'Our team of qualified and passionate teachers ensure the best learning experience for your child.',
    },
    {
      title: 'Safe Environment',
      description: 'We prioritize the safety and security of your child with our state-of-the-art facilities.',
    },
    {
      title: 'Innovative Curriculum',
      description: 'Our curriculum is designed to nurture curiosity, creativity, and critical thinking skills.',
    },
  ];

  const faqs = [
    {
      question: 'What sets SAI curriculum apart from other preschools?',
      answer:
        "SAI curriculum is designed to provide a well-rounded education, emphasizing creativity, critical thinking, and emotional intelligence. It's tailored to each age group and encourages experiential learning.",
    },
    {
      question: 'What is the process for admission to SAI English Medium School?',
      answer:
        'The admission process typically involves filling out an application form, submitting required documents, and attending a parent-child interaction session. Our staff will guide you through each step of the process.',
    },
    {
      question: 'How does SAI help prepare children for the transition to primary school?',
      answer:
        'SAI curriculum focuses on developing essential skills such as literacy, numeracy, and social skills. We also emphasize independence and confidence-building to ensure a smooth transition to primary education.',
    },
    {
      question: 'Are the educators at SAI qualified and experienced?',
      answer:
        'Yes, all our educators are highly qualified and experienced in early childhood education. They undergo regular training to stay updated with the latest teaching methodologies and child development practices.',
    },
  ];

  const blogPosts = [
    {
      title: 'How Many Letters Are There in Alphabets?',
      date: '2024-11-21',
      excerpt: 'Discover how accents and diacritics shape alphab...',
      image:
        'https://zeecms.s3.ap-south-1.amazonaws.com/zeecms/1707747443172How%20many%20Letter%20are%20there%20in%20Alphabets%28Preview%29.jpeg',
    },
    {
      title: 'The Importance of Early Childhood Education',
      date: '2024-11-18',
      excerpt: 'Learn about the lasting impact of quality early education...',
      image:
        'https://zeecms.s3.ap-south-1.amazonaws.com/zeecms/1705409759828The%20Importance%20of%20Reading%20-%2010%20Reasons%20for%20Kids%20in%20Nursery%20%28Preview%29.jpg',
    },
    {
      title: "Fun Activities to Boost Your Child's Creativity",
      date: '2024-11-15',
      excerpt: 'Explore engaging activities that nurture creativity in young minds...',
      image:
        'https://zeecms.s3.ap-south-1.amazonaws.com/zeecms/1702029063118Exploring%20the%20Franchise%20World%20with%20Kidzee%20%282%29.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-purple-100">
      {/* Header */}
      <header className="bg-purple-600 text-white p-2 fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <SaiLogo size={60} />
          <button onClick={toggleMenu} className="lg:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
            <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#programmes">Programmes</a>
              </li>
              <li>
                <a href="#daycare">DayCare</a>
              </li>
              <li>
                <a href="#facilities">Facilities</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Slider */}
      <section id="home" className="relative h-screen pt-16">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${slide.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center text-white">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                <button className="bg-yellow-400 text-purple-800 px-6 py-2 rounded-full text-lg font-semibold hover:bg-yellow-300 transition duration-300">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}
        <button
          onClick={() => prevSlide(setCurrentSlide, heroSlides.length)}
          className="absolute bottom-4 left-4 bg-white/20 p-2 rounded-full text-white hover:bg-white/40"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={() => nextSlide(setCurrentSlide, heroSlides.length)}
          className="absolute bottom-4 right-4 bg-white/20 p-2 rounded-full text-white hover:bg-white/40"
        >
          <ChevronRight size={24} />
        </button>
      </section>

      {/* About Us */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-8">About Us</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-4">
              Kalikapur Sai English Medium School is a reputable educational institution located in the heart of
              Kolkata.B-21, Purba Kalikapur, Ganganagar 700099. We offer a comprehensive and holistic education from
              Play Group to Class 10, fostering academic excellence, creativity, and character development.
            </p>
            <p className="text-lg mb-4">
              Being one of the largest preschools in India, SAI has 2000+ centres in 750+ cities in India and Nepal.
            </p>
            <h3 className="text-2xl font-semibold text-purple-700 mt-8 mb-4">
              Kalikapur SAI English Medium School Advantage
            </h3>
            <ul className="list-disc list-inside text-lg space-y-2">
              <li>{advantages[0]}</li>
              {isExpanded && advantages.slice(1).map((advantage, index) => <li key={index}>{advantage}</li>)}
            </ul>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-200"
            >
              {isExpanded ? (
                <>
                  <button className="mt-4 bg-yellow-400 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-300 transition duration-300">
                    Read Less
                  </button>
                  <ChevronUp style={{ marginTop: '15px' }} className="ml-2 h-5 w-5" />
                </>
              ) : (
                <>
                  <button className="mt-4 bg-yellow-400 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-300 transition duration-300">
                    Read More
                  </button>
                  <ChevronDown style={{ marginTop: '15px' }} className="ml-2 h-5 w-5" />
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Programmes */}
      <section id="programmes" className="py-16 bg-purple-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-8">Our Programmes</h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentProgramme * 100}%)` }}
              >
                {programmes.map((program, index) => (
                  <div key={index} className="w-full flex-shrink-0 px-4">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden">
                      <img src={program.image} alt={program.title} className="w-full h-48 object-cover" />
                      <div className="p-6">
                        <h3 className="text-xl font-semibold text-purple-700 mb-2">{program.title}</h3>
                        <p className="text-gray-600">{program.description}</p>
                        <button className="mt-4 bg-yellow-400 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-300 transition duration-300">
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={() => prevSlide(setCurrentProgramme, programmes.length)}
              className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => nextSlide(setCurrentProgramme, programmes.length)}
              className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* DayCare */}
      <section id="daycare" className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">DayCare</h2>
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              SAI English Medium School Daycare - A home away from home for your child!
            </h3>
            <div className="bg-purple-700 p-4 rounded-lg mb-6">
              <p className="font-semibold">Duration - Choose Suitable Hours Schedule.</p>
              <p className="font-semibold">Flexible Hours - Post School Schedule.</p>
            </div>
            <p className="text-lg mb-4">
              We understand that the early years in the child's life are important for the overall development. The
              primary role of parents in these years is to provide their children with an environment that is loving,
              caring, fun-filled and one which provides happy experiences.
            </p>
            <p className="text-lg">
              As these aspects play a very important role in fostering the developmental areas, like, cognitive
              development, physical development, socio-emotional development, and so on our objective is to create a
              home away from home for them to feel safe, secure and happy.
            </p>
          </div>
        </div>
      </section>

      {/* Our Pedagogy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-8">Our Pedagogy</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="md:w-1/2">
              <img src={pedagogy} alt="Pentemind" className="mx-auto max-w-full h-auto" />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">Péntemind - The Learning Minds</h3>
              <p className="text-lg mb-4">
                Péntemind - The Learning Minds, our pedagogy nurtures the 'Learning Minds' in every child. It shapes the
                child's overall development in a fun and inspiring manner.
              </p>
              <ul className="list-disc list-inside text-lg">
                <li>Focused Mind: Knowledge Retention</li>
                <li>Inventive Mind: Knowledge Development</li>
                <li>Analytical Mind: Knowledge Application</li>
                <li>Empathetic Mind: Emotional Balance propels real learning</li>
                <li>Conscientious Mind: Knowledge Acquisition</li>
              </ul>
              <button className="mt-6 bg-yellow-400 text-purple-800 px-6 py-2 rounded-full text-lg font-semibold hover:bg-yellow-300 transition duration-300">
                Know More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose SAI English Medium School */}
      <section className="py-16 bg-purple-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-8">
            Why Choose SAI English Medium School ?
          </h2>
          <div className="relative max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">{reasons[currentReason].title}</h3>
              <p className="text-lg">{reasons[currentReason].description}</p>
            </div>
            <button
              onClick={() => prevSlide(setCurrentReason, reasons.length)}
              className="absolute top-1/2 -left-12 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={() => nextSlide(setCurrentReason, reasons.length)}
              className="absolute top-1/2 -right-12 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Facilities  */}
      <section id="facilities" className="py-16 bg-yellow-400">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-8">Our Facilities</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold text-purple-700 mb-4">
              Providing the Best Environment for Young Learners
            </h3>
            <ul className="list-disc list-inside text-lg mb-6">
              <li>Well-equipped libraries for fostering a love for reading</li>
              <li>Modern classrooms designed for interactive learning</li>
              <li>Spacious playgrounds for physical development</li>
              <li>Smart classes with advanced technology integration</li>
              <li>Computer labs with internet connectivity</li>
              <li>Dedicated spaces for music, arts, and sports activities</li>
            </ul>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300">
              Explore More
            </button>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-8">FAQs</h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="flex justify-between items-center w-full text-left p-4 bg-purple-100 rounded-lg focus:outline-none"
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-purple-800">{faq.question}</span>
                  {openFAQ === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </button>
                {openFAQ === index && (
                  <div className="p-4 bg-purple-50 rounded-b-lg">
                    <p className="text-gray-700">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-16 bg-purple-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-8">Blogs</h2>
          <div className="relative">
            <div className="flex overflow-x-auto gap-6 pb-4">
              {blogPosts.map((post, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden min-w-[300px]">
                  <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                  <div className="p-4">
                    <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                    <h3 className="text-xl font-semibold text-purple-700 mb-2">{post.title}</h3>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <button className="bg-yellow-400 text-purple-800 px-4 py-2 rounded-full text-sm font-semibold hover:bg-yellow-300 transition duration-300">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full">
              <ChevronLeft size={24} />
            </button>
            <button className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* Happy Parents */}

      <section className="relative bg-purple-600 overflow-hidden">
        {/* Curved yellow section */}
        <div
          className="absolute top-0 left-0 w-full h-32 bg-yellow-400"
          style={{
            clipPath: 'ellipse(70% 100% at 50% 0%)',
          }}
        />

        <div className="container mx-auto px-4 py-16 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-800 mb-12">Our happy parents</h2>

          <div className="max-w-6xl mx-auto relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 text-yellow-400 hover:text-yellow-300 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={40} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 text-yellow-400 hover:text-yellow-300 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={40} />
            </button>

            {/* Testimonial Circles */}
            <div className="flex justify-center gap-8 mb-12">
              <AnimatePresence mode="wait">
                {[-1, 0, 1].map(offset => {
                  const index = (currentIndex + offset + testimonials.length) % testimonials.length;
                  return (
                    <motion.div
                      key={index}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{
                        scale: offset === 0 ? 1.2 : 1,
                        opacity: 1,
                      }}
                      exit={{ scale: 0.8, opacity: 0 }}
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 24,
                      }}
                      className="relative"
                    >
                      <div
                        className={`w-32 h-32 rounded-full overflow-hidden border-4 
                        ${offset === 0 ? 'border-yellow-400' : 'border-blue-400'}`}
                      >
                        <img src={testimonials[index].image} alt="" className="w-full h-full object-cover" />
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            {/* Testimonial Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center text-white"
              >
                <h3 className="text-2xl font-semibold mb-4">{testimonials[currentIndex].name}</h3>
                <p className="max-w-3xl mx-auto mb-4 text-lg">{testimonials[currentIndex].text}</p>
                <div className="flex justify-center gap-1">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Decorative Elements */}
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTauDVqYbm1FhPR4u1WOlAx7cesZY1lniJBsg&s?height=40&width=40"
          alt=""
          className="absolute bottom-8 left-8 w-10 h-10 opacity-50"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTauDVqYbm1FhPR4u1WOlAx7cesZY1lniJBsg&s?height=40&width=40"
          alt=""
          className="absolute bottom-8 right-8 w-10 h-10 opacity-50"
          animate={{
            rotate: -360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </section>
      {/* Footer */}
      <footer className="bg-purple-900 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">About Us</h3>
              <p className="text-gray-300">
                SAI English Medium School is a leading chain of preschools committed to providing quality education and
                nurturing young minds.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Programs
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Admissions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-300 hover:text-white">
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Kolkata - 700099</li>
                <li>West Bengal, Kolkata B-21, Purba Kalikapur Ganganagar</li>
                <li>Phone: +91 93200 63100</li>
                <li>Email: care@sai.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="space-y-4">
                <div className="aspect-video">
                  <iframe
                    className="w-full rounded-lg"
                    src="https://www.youtube.com/embed/VIDEO_ID"
                    title="SAI - Brings Out The Best In The Best"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-purple-800 pt-6 text-center text-gray-300">
            <p>© {new Date().getFullYear()} Ruzan Global Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
