import React from "react";
import { Container, Accordion } from "react-bootstrap";

const Faq = () => {
  const faqs = [
    {
      question: "What services does CodeTrios offer?",
      answer:
        "CodeTrios provides AI Development, AI Automation, Web Development, Mobile App Development, Custom Software Development, UI/UX Design, eCommerce Solutions, Cloud Services, SEO, and AI Search Optimization (GEO).",
    },
    {
      question: "Do you develop custom software?",
      answer:
        "Yes. We build scalable and secure custom software solutions tailored to your business requirements.",
    },
    {
      question: "Do you develop mobile applications?",
      answer:
        "Yes. We develop Android, iOS, and cross-platform mobile applications using modern technologies.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Absolutely. We redesign websites to improve user experience, performance, SEO, and conversion rates.",
    },
    {
      question: "Do you provide website maintenance?",
      answer:
        "Yes. We offer website maintenance, security updates, bug fixes, performance optimization, and feature enhancements.",
    },
    {
      question: "What AI services do you provide?",
      answer:
        "We provide AI Chatbots, AI Agents, AI Automation, Generative AI, OpenAI integrations, Workflow Automation, and AI Search Optimization.",
    },
    {
      question: "Can AI be integrated into my existing software?",
      answer:
        "Yes. We integrate AI capabilities into existing websites, CRMs, ERPs, SaaS platforms, and mobile applications.",
    },
    {
      question: "Do you provide SEO services?",
      answer:
        "Yes. We offer Technical SEO, On-page SEO, Local SEO, AI Search Optimization (GEO), and Website Performance Optimization.",
    },
    {
      question: "How much does a project cost?",
      answer:
        "Pricing depends on project scope, features, technology, timeline, and complexity. Contact us for a custom quote.",
    },
    {
      question: "Do you offer support after project completion?",
      answer:
        "Yes. We provide ongoing maintenance, technical support, updates, and feature enhancements after launch.",
    },
  ];

  return (
    <section className="py-5">
      <Container>
        <div className="text-center mb-5">
          <h1>Frequently Asked Questions</h1>
          <p className="text-muted">
            Find answers to common questions about our services and development
            process.
          </p>
        </div>

        <Accordion defaultActiveKey="0">
          {faqs.map((faq, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{faq.question}</Accordion.Header>
              <Accordion.Body>{faq.answer}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
    </section>
  );
};

export default Faq;