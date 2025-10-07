import React from "react";
import devopscloud from "../assets/devopscloud.png"
import webdev from "../assets/web.png"
import uiux from "../assets/UIUX.png"
import twotier from "../assets/twotier.png"
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
      title_ar: "تطوير الويب",
      description: "Custom web applications built with modern technologies for optimal performance and scalability.",
      description_ar: "تطبيقات ويب مخصصة مبنية بأحدث التقنيات لأداء مثالي وقابلية التوسع.",
      deliverables: ["Responsive Design", "SEO Optimization", "CMS Integration", "API Development"],
      deliverables_ar: ["تصميم متجاوب", "تحسين محركات البحث", "تكامل نظام إدارة المحتوى", "تطوير واجهات برمجة التطبيقات"],
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      technologies_ar: ["ريأكت", "نود.جي إس", "مونغو دي بي", "خدمات أمازون السحابية"],
      //pricing: "Starting at $5,000",
      icon: <img src={webdev} alt="Web Development services icon" className="w-15 h-15 mx-auto" loading="lazy"/>
    },
    {
      id: 2,
      title: "UI/UX Design",
      title_ar: "تصميم واجهات وتجربة المستخدم",
      description: "User-centered design solutions that enhance engagement and drive conversions.",
      description_ar: "حلول تصميم تركز على المستخدم لتعزيز التفاعل وزيادة التحويلات.",
      deliverables: ["Wireframes", "Prototypes", "Style Guides", "User Testing"],
      deliverables_ar: ["إطارات سلكية", "نماذج أولية", "أدلة الأنماط", "اختبار المستخدم"],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
      technologies_ar: ["فيجما", "أدوبي XD", "سكيتش", "إنفيجن"],
      //pricing: "Starting at $3,500",
      icon: <img src={uiux} alt="UI/UX Design services icon" className="w-15 h-15 mx-auto" loading="lazy"/>
    },
    {
      id: 3,
      title: "Cloud & DevOps",
      title_ar: "الحوسبة السحابية و DevOps",
      description: "We design and manage cloud infrastructures that keep your applications always available, secure, and ready to grow with your business.",
      description_ar: "نصمم وندير بنى تحتية سحابية تضمن جاهزية وأمان تطبيقاتك وقابليتها للنمو.",
      deliverables: ["AWS Cloud Infrastructure Setup", "Automated Deployment & CI/CD", "Monitoring & Alerts for Your Applications", "Scalable Resources & Automated Backups"],
      deliverables_ar: ["إعداد بنية تحتية سحابية من AWS", "النشر التلقائي والتكامل المستمر", "مراقبة وتنبيهات للتطبيقات", "موارد قابلة للتوسع ونسخ احتياطية تلقائية"],
      technologies: ["AWS EC2 & S3", "AWS Lambda", "AWS CloudFormation", "AWS RDS & DynamoDB", "Docker & Kubernetes", "Terraform", "CI/CD Tools (GitHub Actions, Jenkins)"],
      technologies_ar: ["خدمات EC2 وS3 من AWS", "لامبدا AWS", "AWS CloudFormation", "قواعد بيانات RDS وDynamoDB", "دوكر وKubernetes", "تيرافورم", "أدوات CI/CD (GitHub Actions, Jenkins)"],
      //pricing: "Starting at $8,000",
      icon: <img src={devopscloud} alt="Cloud Engineering and DevOps services icon" className="w-15 h-15 mx-auto" loading="lazy"/>
    },

  ];

export const portfolioProjects = [
    {
      id: 1,
      title: "Two-Tier Architecture Infrastructure",
      title_ar: "بنية تحتية ذات طبقتين",
      category: "Cloud & DevOps",
      category_ar: "الحوسبة السحابية و DevOps",
      image: "src/assets/twotier.png",
      challenge: "The client needed a reliable and scalable cloud infrastructure to support their growing applications and ensure high availability.",
      solution: "Designed and deployed a two-tier architecture on AWS using Terraform for Infrastructure as Code (IaC). Automated the provisioning of VPC, subnets, EC2 instances, and RDS with proper security groups and load balancing.",
      technologies: ["AWS", "Terraform"],
      results: "Reduced infrastructure setup time by 80%, improved system scalability and resilience, and ensured consistent and repeatable deployments.",
      link: "https://github.com/ashrafbilalmohaidat2/Two-Tier-Architecture"
    },
    {
      id: 2,
      title: "Image Analysis",
      title_ar: "محلل الصور",
      category: "Cloud & DevOps",
      category_ar: "الحوسبة السحابية و DevOps",
      image: "https://placehold.co/600x400/1E3A8A/FFFFFF?text=Image+Analysis",
      challenge: "The client needed an automated and scalable solution to analyze and classify images in the cloud.",
      solution: "Implemented a two-tier architecture on AWS and automated infrastructure provisioning with Terraform. Integrated AWS Rekognition for intelligent image analysis and ensured secure, scalable deployments.",
      technologies: ["AWS", "AWS Rekognition", "JavaScript"],
      results: "Reduced manual image processing time by 75%, improved classification accuracy, and delivered a scalable cloud-native solution.",
      link: "https://github.com/ashrafbilalmohaidat2/ImageAnalysis"

    },
    {
      id: 3,
      title: "Spices Food Blog",
      title_ar: "مدونة التوابل الغذائية",
      category: "Web Development (Frontend)",
      category_ar: "تطوير الويب (الواجهة الأمامية)",
      image: "https://placehold.co/600x400/00AEEF/FFFFFF?text=Spices+Food+Blog",
      challenge: "The client wanted a responsive and visually appealing food blog with optimized performance.",
      solution: "Built a React.js application with lazy loading for components and images to enhance performance and ensure a smooth user experience across devices.",
      technologies: ["React.js", "HTML5", "CSS3", "JavaScript"],
      results: "Improved page load speed by 40% and increased user engagement through an optimized browsing experience.",
      link: "https://github.com/ashrafbilalmohaidat2/spices-resturant-app"

    }
  ];

export const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      name_ar: "سارة جونسون",
      role: "CEO & Lead Developer",
      role_ar: "المديرة التنفيذية وقائدة التطوير",
      bio: "10+ years experience in full-stack development and team leadership.",
      bio_ar: "أكثر من 10 سنوات خبرة في تطوير البرمجيات وإدارة الفرق.",
      image: "https://placehold.co/300x300/00AEEF/FFFFFF?text=SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      name_ar: "مايكل تشين",
      role: "Design Director",
      role_ar: "مدير التصميم",
      bio: "Award-winning UI/UX designer focused on creating intuitive user experiences.",
      bio_ar: "مصمم واجهات وتجربة مستخدم حائز على جوائز يركز على خلق تجارب مستخدم بديهية.",
      image: "https://placehold.co/300x300/1E3A8A/FFFFFF?text=MC"
    },
    {
      id: 3,
      name: "Alex Rodriguez",
      name_ar: "أليكس رودريغيز",
      role: "Senior Developer",
      role_ar: "مطور أول",
      bio: "Specializes in mobile applications and performance optimization.",
      bio_ar: "متخصص في تطبيقات الهواتف وتحسين الأداء.",
      image: "https://placehold.co/300x300/00AEEF/FFFFFF?text=AR"
    },
    {
      id: 4,
      name: "Emma Wilson",
      name_ar: "إيما ويلسون",
      role: "Project Manager",
      role_ar: "مديرة المشاريع",
      bio: "Ensures projects are delivered on time and exceed client expectations.",
      bio_ar: "تضمن تسليم المشاريع في الوقت المحدد وتجاوز توقعات العملاء.",
      image: "https://placehold.co/300x300/1E3A8A/FFFFFF?text=EW"
    }
  ];

export const testimonials = [
    {
      name: "David Thompson",
      name_ar: "ديفيد طومسون",
      company: "TechStart Inc.",
      company_ar: "تك ستارت إنك",
      quote: "Clusters transformed our outdated website into a modern, high-performing platform that has increased our conversions by 70%.",
      quote_ar: "حولت Clusters موقعنا القديم إلى منصة حديثة عالية الأداء زادت من تحويلاتنا بنسبة 70%.",
      rating: 5
    },
    {
      name: "Lisa Martinez",
      name_ar: "ليزا مارتينيز",
      company: "GreenEco Products",
      company_ar: "منتجات جرين إيكو",
      quote: "The team's attention to detail and commitment to deadlines made our e-commerce launch seamless and successful.",
      quote_ar: "اهتمام الفريق بالتفاصيل والالتزام بالمواعيد جعل إطلاق متجرنا الإلكتروني سلسًا وناجحًا.",
      rating: 5
    },
    {
      name: "Robert Kim",
      name_ar: "روبرت كيم",
      company: "FinTech Solutions",
      company_ar: "فينتك سوليوشنز",
      quote: "Professional, responsive, and delivered beyond our expectations. We've already started our second project with them.",
      quote_ar: "محترفون، متجاوبون، وقدموا أكثر مما توقعنا. بدأنا بالفعل مشروعنا الثاني معهم.",
      rating: 5
    }
  ];