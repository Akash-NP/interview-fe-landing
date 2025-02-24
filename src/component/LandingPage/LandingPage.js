import React, { useState } from "react";
import "./LandingPage.css";
import TestimonialsCarousel from "./Testimonial";
import mob1 from "../../images/mob1.png";
import logo from "../../images/logo.jpg";
import work from "../../images/work.png";
import mob2 from "../../images/mob2.png";
import mob3 from "../../images/mob3.png";
import mob4 from "../../images/mob4.png";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import WaitingListSection from "./WaitingList";


const LandingPage = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [showIframe, setShowIframe] = useState(false);

  const handleSignUpClick = () => {
    setShowIframe(true);
  };

  const handleClose = () => {
    setShowIframe(false);
  };

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const faqData = [
    {
      question:
        "How is Interview Prep Up different from other preparation platforms?",
      answer:
        "Interview Prep Up stands out by providing a unique combination of technology and human expertise. Our platform offers instant mentor connections within 3 hours during IST working hours, something you won't find elsewhere. While other platforms might offer basic mock interviews, our AI-powered system is available 24/7 and adapts to your skill level. We provide company-specific modules based on real interview experiences, ensuring you're practicing what actually matters. Every practice session comes with structured feedback, helping you understand exactly where to improve. Plus, our question bank is continuously updated by current FAANG PMs, keeping you ahead of the curve.",
    },
    {
      question:
        "I'm from a non-PM background. Is this platform suitable for me?",
      answer:
        "Absolutely! We specifically designed our platform with career transitioners in mind. Many of our most successful users came from non-PM backgrounds. We start with foundation modules that build your PM fundamentals from the ground up. Our mentors specialize in guiding career switchers, having helped over 200 professionals successfully transition into PM roles. You'll have access to a structured learning path that progressively builds your knowledge, and our dedicated support team ensures you're never lost in your journey. We've seen engineers, marketers, consultants, and even teachers successfully transition to PM roles using our platform.",
    },
    {
      question: "How long does it typically take to get interview-ready?",
      answer:
        "The preparation timeline varies based on your background and target companies. From our experience with thousands of candidates,",
    },
    {
      question: "How do the AI mock interviews work?",
      answer:
        "Our AI mock interview system replicates real interview scenarios using advanced natural language processing. When you start a session, you'll face questions similar to those asked at your target companies. The AI analyzes your responses in real-time, evaluating factors like structure, clarity, completeness, and problem-solving approach. You receive instant feedback highlighting strengths and areas for improvement. The system adapts question difficulty based on your performance, ensuring you're always challenged appropriately.",
    },
    {
      question: "Who are your mentors?",
      answer:
        "Our mentor network consists of carefully selected Product Managers from top tech companies including FAANG. Each mentor brings at least 5 years of hands-on PM experience and active involvement in their companies' interview panels. Unlike other platforms that might have casual mentors, our mentors undergo regular training to stay updated with the latest interview patterns and industry trends. They represent diverse domains - from consumer tech to enterprise software - ensuring you're matched with someone who understands your target role deeply. Many of our mentors have themselves guided 50+ candidates to successful PM roles, maintaining a success rate of over 85%.",
    },
    {
      question: "How does mentor matching work?",
      answer:
        "Our mentor matching system is designed to create the most valuable connections possible. When you join, we analyze multiple factors to pair you with the right mentor. We consider your target companies, ensuring your mentor has relevant experience there. Your experience level is matched with mentors who have successfully guided similar candidates. We also look at domain preferences - if you're interested in fintech, we'll match you with mentors having fintech PM experience. The system considers time zone compatibility to ensure smooth scheduling, and you can always request a different mentor if needed. ",
    },
    {
      question: "What's your refund policy?",
      answer:
        "We believe in complete transparency and flexibility with our pricing. You get a no-questions-asked 7-day refund period to ensure the platform meets your needs. For our annual plan members, we offer a unique money-back guarantee if you don't secure a PM role within 6 months of consistent preparation. You can pause your subscription at any time - perfect for when life gets busy. We offer EMI options through major Indian banks to make the investment more manageable. ",
    },
    {
      question: "Can I switch between plans?",
      answer:
        "Absolutely! We understand that your preparation needs might change over time. You can upgrade your plan at any time, and we'll calculate the new price pro-rata, ensuring you don't lose any money from your current plan. There's no switching fee, and you retain all your progress, notes, and mentor relationships. We often provide special upgrade discounts to existing members. If you need to downgrade, you can do so at the end of your current billing cycle. All plan changes are hassle-free and can be done with a single click in your account settings.",
    },
    {
      question: "What study materials do you provide?",
      answer:
        "Our resource library is comprehensive and constantly updated. You get access to over 2,000 real interview questions sourced directly from recent interviews. These aren't just theoretical questions - they come with detailed solutions, PM frameworks, and expert explanations. Our case study bank includes 500+ product cases from various domains, each with multiple approaches to solution. You'll find video explanations from experienced PMs, breaking down complex concepts into digestible pieces. The content is structured progressively - starting from basics for beginners to advanced concepts for experienced PMs. All materials are vetted by current FAANG PMs to ensure relevance and accuracy.",
    },

    {
      question: "Is the content relevant for different regions?",
      answer:
        "Our content is globally relevant while being locally optimized. We cover major tech companies across the US, India, and Europe, with specific interview patterns and expectations for each region. For Indian candidates targeting local startups, we have dedicated modules covering the unique aspects of Indian product management. Similarly, we provide specific guidance for those targeting US tech companies, including visa considerations and international interview nuances. Our salary data is region-specific, helping you negotiate better. The frameworks and case studies are adapted to include regional market dynamics and user behaviors.",
    },
    {
      question: "What do I need to use the platform?",
      answer:
        "The platform is designed to be accessible while ensuring high-quality interview practice. At minimum, you'll need a stable internet connection - we recommend at least 4 Mbps for smooth video calls with mentors and AI mock interviews. A laptop or desktop computer with a working camera is essential for the full interview simulation experience. While most modern browsers work, we've optimized for Chrome and Firefox to ensure all features function perfectly. A good quality microphone is important - your built-in laptop mic works fine, but a headset with mic provides better clarity during mock interviews. We recommend a quiet environment for practice sessions to allow our AI to accurately analyze your responses. You don't need any special software installations; everything runs in your browser.",
    },
    {
      question: "Can I access the platform on mobile?",
      answer:
        "Currently No! We are working on it and will be available by Jun 30, 2025.",
    },
    {
      question: "How is the learning structured?",
      answer:
        "Our learning path is built on the principle of progressive mastery. When you join, you'll first take a comprehensive skill assessment that evaluates your PM knowledge, interview readiness, and areas for improvement. Based on these results, we create a customized learning path that adapts as you progress. The content difficulty increases gradually - you won't face advanced system design questions before mastering basic product sense frameworks. We track your progress through regular checkpoints, adjusting the path based on your performance and learning speed. Every few sessions, you'll have mentor checkpoints where experienced PMs review your progress and fine-tune your preparation strategy. This structured approach ensures you're always challenged but never overwhelmed.",
    },
    {
      question: "What if I'm preparing for multiple companies?",
      answer:
        "We've specifically designed our platform to support parallel preparation for multiple companies. Our company-specific modules help you understand the unique aspects of each company's interview process - from Amazon's Leadership Principles to Google's product sense questions to Meta's execution focus. We provide comparative frameworks showing how similar questions might be asked differently at various companies. The platform helps you identify common patterns across companies, allowing you to prepare efficiently without duplicating effort. You'll get access to parallel preparation tracks, letting you switch between company-specific practice as needed. Our mentors often have experience interviewing at multiple companies and can help you adapt your responses accordingly. We even track your readiness level separately for each company you're targeting.",
    },
  ];

  faqData[2].answer += `
- Fresh graduates typically need 3-6 months of focused preparation. Career transitioners usually require 3-4 months to build both foundational knowledge and interview-specific skills. 

-Experienced PMs looking to switch companies can generally get ready in 1-3 months.

However, these are average timelines - your personal journey might be shorter or longer depending on your dedication, previous experience, and target companies. Our platform adapts to your pace, and our mentors help optimize your preparation timeline.

`;

  faqData[3].answer += `

All sessions are documented and can be reviewed later with mentors for additional insights. The system also offers company-specific interview formats, so you can practice Amazon's LP-style questions or Google's product sense format.

`;

  faqData[5].answer += `

Most  importantly, we guarantee mentor connection within 3 hours during IST working hours.

`;

  faqData[6].answer += `

Most importantly, you only pay after your first mentor session, so you can experience the value firsthand.


`;

  faqData[13].answer += `

These structured learning paths have helped candidates successfully interview at multiple companies simultaneously, leading to multiple offers and better negotiating positions. Regular updates to company-specific content ensure you're always preparing with the most current information.


`;

  return (
    <div className="landing-container">
      {/* Combined Header and Hero Section */}
      <div className="header-hero-container">
        {/* Navigation Header */}
        <header className="header">
          <div className="oneline">
            <div className="logo">
              <img src={logo} alt="company logo" width={40} />
            </div>
            <nav className="nav-menu">
              <button
                onClick={() => scrollToSection("home")}
                className="nav-link"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="nav-link"
              >
                How it Works
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="nav-link"
              >
                FAQ
              </button>

              <button
                onClick={() => scrollToSection("testimonial")}
                className="nav-link"
              >
                Testimonial
              </button>

              <button
                onClick={() => scrollToSection("footer")}
                className="nav-link"
              >
                Contact Us
              </button>
            </nav>
          </div>
        </header>

        {/* Hero Section
          <div className="header-actions">
          <button className="signin-btn">Sign In</button>
        </div>
        */}
        <section id="home" className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-heading">Never Face PM Interviews <br/> Unprepared Again </h1>
              <div className="desscription">
                <p className="hero-desc">
                Turn Interview Anxiety into Confidence{" "}
                  <ul style={{ fontSize: 14 }}>
                    <li>Tired of unstructured preparation?</li>
                    <li>Struggling to find the right mentors?</li>
                    <li>Need company-specific guidance?</li>
                    <li>Can't find practice partners?
                    </li>

                  </ul>
                </p>

                <p className="hero-desc">We’ve got you covered!
                  <ul style={{ fontSize: 14 }}>
                    <li>AI Mock Interviews + Instant Mentor Access + Company-Specific Prep
                    <br/>All in One Platform</li>
                  </ul>

                  Trusted by PMs who cracked interviews at Amazon, Uber, Microsoft, and more

                </p>
              </div>

              <div >
              <div style={{ paddingBottom: 50 }} >           
              <button className="cta-button" onClick={handleSignUpClick}>
              Join the Waitlist
              </button>
            </div>
      
            {showIframe && (
              <div className="iframe-overlay">
                <div className="iframe-container">
                  <button className="close-button" onClick={handleClose}>×</button>
                  <iframe
                    src="https://share.synamate.com/widget/form/PzpVc391cMxwteQOQ36n"
                    style={{ width: "100%", height: "556px", border: "none", borderRadius: "3px" }}
                    id="popup-PzpVc391cMxwteQOQ36n"
                    data-layout='{"id":"POPUP"}'
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="IPU Sign up Form"
                    data-height="556"
                    data-layout-iframe-id="popup-PzpVc391cMxwteQOQ36n"
                    data-form-id="PzpVc391cMxwteQOQ36n"
                    title="IPU Sign up Form"
                  />
                </div>
              </div>
            )}
      
            {/* Keep the script directly in the JSX, so it loads properly */}
            <script src="https://share.synamate.com/js/form_embed.js"></script>
              </div>
            </div>
            <div className="hero-image">
              <img src={mob1} alt="Dashboard illustration" width={367} />
            </div>
          </div>
        </section>
      </div>

      {/* Scrollable Content Area  <button className="cta-button">Start Interview</button> */}
      <div className="content-area">
        {/* Stats Section */}
        <section className="stats-section">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-number">2025</div>
              <div className="stat-label">Founded</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">200+</div>
              <div className="stat-label">Users</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">100K</div>
              <div className="stat-label">Interviews</div>
            </div>
          </div>
        </section>

        {/* How It Works Section - Step 1 */}
        <div>
        <section id="how-it-works" className="how-it-works">
        <div className="section-container">
          <h2 className="section-title">How it Works?</h2>
          <img src={work} alt="work image" width={200} />
          <div className="feature-row">
            <div className="feature-text">
              <h3 className="feature-heading">Practice Anytime with AI</h3>
              <p className="feature-desc">
                <ul>
                  <li>
                    Can't find practice partners?{" "}
                    <strong>Our AI is available 24/7</strong>
                  </li>
                  <li>
                    Stuck at 2 AM before an interview?{" "}
                    <strong>Practice unlimited times</strong>
                    
                  </li>
                  <li>
                    Need quick feedback?{" "}
                    <strong> Get instant structured evaluation</strong>
                  </li>
                  <li>
                    Want company-specific practice?{" "}
                    <strong>
                      Just paste the job description of the company - Amazon
                      LP, Uber PM, Microsoft PM
                    </strong>
                    
                  </li>
                </ul>
              </p>
            </div>
            <div className="feature-image">
              <img
                src={mob2}
                alt="Laptop demonstration"
                width={630}
                height={347}
              />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Step 2 */}
      <section className="how-it-works-2">
        <div className="section-container">
          <div className="feature-row">
            <div className="feature-image">
              <img
                src={mob3}
                alt="Laptop demonstration"
                width={430}
                height={575}
              />
            </div>
            <div className="feature-text-2">
              <h3 className="feature-heading">One-Stop Company Research</h3>
              <p className="feature-desc">
                <ul>
                  <li>
                    Overwhelmed with company research ?
                    <strong>
                      {" "}
                      Get curated insights about company, products,
                      leadership, culture and salary range
                    </strong>
                  </li>
                  <li>
                    Lost in product analysis ?{" "}
                    <strong>Access structured product breakdowns</strong>{" "}
                  </li>

                  <li>
                    Need interview patterns ?{" "}
                    <strong> See recent interview questions</strong>
                  </li>

                  <li>
                    Want insider tips ?{" "}
                    <strong>Get company-specific strategies</strong>
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Step 3 */}
      <section className="how-it-works-3">
        <div className="section-container">
          <div className="feature-row">
            <div className="feature-text-3">
              <h3 className="feature-heading">Instant Mentor Support</h3>
              <p className="feature-desc">
                <ul>
                  <li>
                    Not sure if AI is accurate and Need urgent help ?{" "}
                    <strong>
                      {" "}
                      Connect with mentors within 3 hours (IST time zone)
                    </strong>
                  </li>

                  <li>
                    Confused about approach ?{" "}
                    <strong> Get personalized feedback</strong>
                  </li>

                  <li>
                    Want expert validation ?{" "}
                    <strong>
                      Talk directly with senior PMs at Amazon, Google, Zomato,
                      and top tech companies
                    </strong>
                  </li>

                  <li>
                    Need level-specific guidance ?{" "}
                    <strong>Match with relevant mentors</strong>
                  </li>
                </ul>
              </p>
            </div>
            <div className="feature-image">
              <img
                src={mob4}
                alt="Laptop demonstration"
                width={516}
                height={575}
              />
            </div>
          </div>
        </div>
      </section>
        </div>
    

        {/* Testimonials Section */}
        <section id="testimonial">
          <TestimonialsCarousel />
        </section>

        {/* FAQ Section */}
        <section id="faq" className="faq-section">
          <div className="section-container">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <div className="faq-grid" style={{ paddingBottom: "30px" }}>
              {faqData.map((faq, index) => (
                <div
                  key={index}
                  className={`faq-item ${openIndex === index ? "open" : ""}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <h3 className="faq-question">
                    {faq.question}
                    <span className="accordion-icon">
                      {openIndex === index ? (
                        <IoIosArrowDropup />
                      ) : (
                        <IoIosArrowDropdown />
                      )}
                    </span>
                  </h3>
                  {openIndex === index && (
                    <div className="faq-answer">
                      {faq.answer.includes("-") ? ( // Check if the answer contains bullet points
                        <ul>
                          {faq.answer
                            .split("\n")
                            .map((line, i) =>
                              line.startsWith("-") ? (
                                <li key={i}>{line.replace("-", "").trim()}</li>
                              ) : (
                                <p key={i}>{line}</p>
                              )
                            )}
                        </ul>
                      ) : (
                        <p>{faq.answer}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}

        <footer id="footer" className="footer">
          <div className="footer-container">
            {/* Left Section - Logo */}
            <div className="footer-logo">Upivot</div>

            {/* Middle Section - Links */}
            <div className="footer-links-container">
              <div className="footer-column">
                <h4>Join</h4>
                <a
                  href="https://forms.gle/efKAZTxpqVrs9soEA"
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join as Mentor
                </a>
              </div>

              <div className="footer-column">
                <h4>Resources</h4>

                <a
                  href="https://upivot.substack.com/"
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Interview Resources
                </a>
              </div>

              <div className="footer-column">
                <h4>Contact</h4>
                <a
                  href="http://Upivot.in"
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Right Section - Socials */}
            <div className="footer-socials">
              <a href="https://www.facebook.com/share/19yoAMDtgm/" className="social-icon" target="_blank"
              rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://x.com/abhiksthought?t=3p4XyljexC6fmWRn5A9Vrg&s=08" className="social-icon" target="_blank"
              rel="noopener noreferrer"><FaXTwitter /></a>
              <a href="https://www.instagram.com/upivothq?igsh=MW1hZTc2NXRqbGg2cA==" className="social-icon"  target="_blank"
              rel="noopener noreferrer" >
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/in/abhikchowdhury?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="social-icon" target="_blank"
              rel="noopener noreferrer">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Bottom Section - Copyright */}
          <div className="footer-bottom">
            <p>
              Copyright © 2025 Upivot Technologies Pvt Ltd. All Rights Reserved
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;

// <footer id="footer" className="footer">
//   <div className="footer-container">
//     {/* Left Section - Logo */}
//     <div className="footer-logo">Upivot</div>

//     {/* Middle Section - Links */}
//     <div className="footer-links-container">
//       <div className="footer-column">
//         <h4>Product</h4>
//         <a href="#" className="footer-link">Pricing</a>
//         <a href="#" className="footer-link">Overview</a>
//         <a href="#" className="footer-link">Browse</a>
//         <a href="#" className="footer-link">
//           Accessibility <span className="beta-badge">BETA</span>
//         </a>
//       </div>
//       <div className="footer-column">
//         <h4>Resources</h4>
//         <a href="#" className="footer-link">Help Center</a>
//         <a href="#" className="footer-link">Blog</a>
//         <a href="#" className="footer-link">Tutorials</a>
//         <a href="#" className="footer-link">FAQs</a>
//       </div>
//       <div className="footer-column">
//         <h4>Company</h4>
//         <a href="#" className="footer-link">About</a>
//         <a href="#" className="footer-link">Press</a>
//         <a href="#" className="footer-link">Events</a>
//         <a href="#" className="footer-link">Request Demo →</a>
//       </div>
//     </div>

//     {/* Right Section - Socials */}
//     <div className="footer-socials">
//       <a href="#" className="social-icon"><FaYoutube /></a>
//       <a href="#" className="social-icon"><FaFacebook /></a>
//       <a href="#" className="social-icon"><FaTwitter /></a>
//       <a href="#" className="social-icon"><FaInstagram /></a>
//       <a href="#" className="social-icon"><FaLinkedin /></a>
//     </div>
//   </div>

//   {/* Bottom Section - Copyright */}
//   <div className="footer-bottom">
//     <p>Upivot. All rights reserved © 2025.</p>
//   </div>
// </footer>
