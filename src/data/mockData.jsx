import React from "react";
import devopscloud from "../assets/devopscloud.png"
import webdev from "../assets/web.png"
import uiux from "../assets/uiux.png"
import ecommerce from "../assets/e-commerce.png"
// data/mockData.js
export const colors = {
  mainBlue: "#1b5e82",
  darkGray: "#3C3C3C",
  mediumGray: "#9AA0A6",
  lightGray: "#C5C9CC",
  navyBlue: "#1b5e82",
  white: "#FFFFFF",
  black: "#000000"
};

export const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom web applications built with modern technologies for optimal performance and scalability.",
      deliverables: ["Responsive Design", "SEO Optimization", "CMS Integration", "API Development"],
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      //pricing: "Starting at $5,000",
      icon: <img src={webdev} alt="Web Development" className="w-15 h-15 mx-auto"/>
    },
    {
      id: 2,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance engagement and drive conversions.",
      deliverables: ["Wireframes", "Prototypes", "Style Guides", "User Testing"],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
      //pricing: "Starting at $3,500",
      icon: <img src={uiux} alt="UI/UX Design" className="w-15 h-15 mx-auto"/>
    },
    {
      id: 3,
      title: "Cloud & DevOps",
      description: "We design and manage cloud infrastructures that keep your applications always available, secure, and ready to grow with your business.",
      deliverables: ["AWS Cloud Infrastructure Setup", "Automated Deployment & CI/CD", "Monitoring & Alerts for Your Applications", "Scalable Resources & Automated Backups"],
      technologies: ["AWS EC2 & S3", "AWS Lambda", "AWS CloudFormation", "AWS RDS & DynamoDB", "Docker & Kubernetes", "Terraform", "CI/CD Tools (GitHub Actions, Jenkins)"],
      //pricing: "Starting at $8,000",
      icon: <img src={devopscloud} alt="DevOps Cloud" className="w-15 h-15 mx-auto"/>
    },
    {
      id: 4,
      title: "E-commerce Solutions",
      description: "Complete online store setups with secure payment processing and inventory management.",
      deliverables: ["Shopping Cart", "Payment Gateway", "Product Management", "Order Tracking"],
      technologies: ["Shopify", "WooCommerce", "Magento", "Stripe"],
      //pricing: "Starting at $6,500",
      icon: <img src={ecommerce} alt="E-commerce Solutions" className="w-15 h-15 mx-auto"/>
    }
  ];

export const portfolioProjects = [
    {
      id: 1,
      title: "FinTech Dashboard",
      category: "Web Development",
      image: "https://placehold.co/600x400/00AEEF/FFFFFF?text=FinTech+Dashboard",
      challenge: "Client needed a complex financial data visualization dashboard with real-time updates.",
      solution: "Built a responsive dashboard with interactive charts and secure authentication.",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      results: "Increased user engagement by 45% and reduced data processing time by 60%.",
      link: "#"
    },
    {
      id: 2,
      title: "EcoStore E-commerce",
      category: "E-commerce",
      image: "https://placehold.co/600x400/1E3A8A/FFFFFF?text=EcoStore",
      challenge: "Needed to create a seamless shopping experience for sustainable products.",
      solution: "Developed a custom Shopify store with advanced filtering and personalized recommendations.",
      technologies: ["Shopify", "Liquid", "JavaScript", "Stripe"],
      results: "Achieved 30% conversion rate and 25% repeat customer rate within first quarter.",
      link: "#"
    },
    {
      id: 3,
      title: "HealthTrack Mobile App",
      category: "Mobile App",
      image: "https://placehold.co/600x400/00AEEF/FFFFFF?text=HealthTrack+App",
      challenge: "Required a cross-platform health tracking application with sync capabilities.",
      solution: "Created a React Native app with cloud sync, push notifications, and data visualization.",
      technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
      results: "4.8/5 rating on app stores with over 50,000 downloads in first 3 months.",
      link: "#"
    }
  ];

export const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "CEO & Lead Developer",
      bio: "10+ years experience in full-stack development and team leadership.",
      image: "https://placehold.co/300x300/00AEEF/FFFFFF?text=SJ"
    },
    {
      name: "Michael Chen",
      role: "Design Director",
      bio: "Award-winning UI/UX designer focused on creating intuitive user experiences.",
      image: "https://placehold.co/300x300/1E3A8A/FFFFFF?text=MC"
    },
    {
      name: "Alex Rodriguez",
      role: "Senior Developer",
      bio: "Specializes in mobile applications and performance optimization.",
      image: "https://placehold.co/300x300/00AEEF/FFFFFF?text=AR"
    },
    {
      name: "Emma Wilson",
      role: "Project Manager",
      bio: "Ensures projects are delivered on time and exceed client expectations.",
      image: "https://placehold.co/300x300/1E3A8A/FFFFFF?text=EW"
    }
  ];

export const testimonials = [
    {
      name: "David Thompson",
      company: "TechStart Inc.",
      quote: "Clusters transformed our outdated website into a modern, high-performing platform that has increased our conversions by 70%.",
      rating: 5
    },
    {
      name: "Lisa Martinez",
      company: "GreenEco Products",
      quote: "The team's attention to detail and commitment to deadlines made our e-commerce launch seamless and successful.",
      rating: 5
    },
    {
      name: "Robert Kim",
      company: "FinTech Solutions",
      quote: "Professional, responsive, and delivered beyond our expectations. We've already started our second project with them.",
      rating: 5
    }
  ];