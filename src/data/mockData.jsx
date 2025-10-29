import React from "react";
import devopscloud from "../assets/devopscloud.png"
import webdev from "../assets/web.png"
import uiux from "../assets/UIUX.png"

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
      description: "High-quality, responsive web applications designed with modern technologies to deliver seamless performance and scalable growth.",
      description_ar: "تطبيقات ويب عالية الجودة ومتجاوبة، مبنية بأحدث التقنيات لتقديم أداء سلس وقابلية توسع عالية.",
      deliverables: ["Responsive Design", "SEO Optimization", "CMS Integration", "Performance Optimization"],
      deliverables_ar: ["تصميم متجاوب", "تحسين محركات البحث", "تكامل نظام إدارة المحتوى", "أداء محسن"],
      technologies: ["React.js", "Node.js","ASP.NET","Angular","MongoDB","SQL","PostgreSQL","Next.js","Tailwind CSS","Bootstrap","AWS"],
      technologies_ar: ["ريأكت", "نود.جي إس", "مونغو دي بي", "خدمات أمازون السحابية"],
      //pricing: "Starting at $5,000",
      icon: <img src={webdev} alt="Web Development services icon" className="w-15 h-15 mx-auto" loading="lazy"/>
    },
    {
      id: 2,
      title: "UI/UX Design",
      title_ar: "تصميم واجهات وتجربة المستخدم",
      description: "User-centered design solutions crafted to boost engagement and optimize user experience across devices.",
      description_ar: "حلول تصميم تركز على المستخدم لتعزيز التفاعل وتحسين تجربة المستخدم عبر جميع الأجهزة.",
      deliverables: ["Wireframes", "Prototypes", "Style Guides", "Full UI Design", "Comprehensive Testing & Handoff"],
      deliverables_ar: ["إطارات سلكية", "نماذج أولية", "أدلة الأنماط", "تصميم واجهة كاملة", "اختبارات شاملة وتسليم التصميم"],
      technologies: ["Figma", "Adobe XD", "Sketch", "InVision"],
      technologies_ar: ["فيجما", "أدوبي XD", "سكيتش", "إنفيجن"],
      //pricing: "Starting at $3,500",
      icon: <img src={uiux} alt="UI/UX Design services icon" className="w-15 h-15 mx-auto" loading="lazy"/>
    },
    {
      id: 3,
      title: "Cloud Computing & DevOps",
      title_ar: "الحوسبة السحابية و DevOps",
      description: "We design and manage cloud infrastructures to ensure your applications are secure, highly available, and scalable to grow with your business.",
      description_ar: "نصمم وندير بنى تحتية سحابية لضمان أمان تطبيقاتك، جاهزيتها العالية، وقابليتها للتوسع مع نمو أعمالك.",
      deliverables: ["AWS Cloud Infrastructure Setup", "Resource Management", "Automated Deployment & CI/CD", "Monitoring & Alerts for Your Applications", "Scalable Resources & Automated Backups", "High Security & Compliance"],
      deliverables_ar: ["إعداد بنية تحتية سحابية من AWS",  "إدارة الموارد", "النشر التلقائي والتكامل المستمر", "مراقبة وتنبيهات للتطبيقات", "موارد قابلة للتوسع ونسخ احتياطية تلقائية",  "أمان عالي وامتثال المعايير"],
      technologies: ["AWS EC2 & S3", "AWS Lambda", "AWS CloudFormation", "AWS RDS & DynamoDB", "Docker & Kubernetes", "Terraform", "CI/CD Tools (GitHub Actions, Jenkins)"],
      technologies_ar: ["خدمات EC2 وS3 من AWS", "لامبدا AWS", "AWS CloudFormation", "قواعد بيانات RDS وDynamoDB", "دوكر وKubernetes", "تيرافورم", "أدوات CI/CD (GitHub Actions, Jenkins)"],
      //pricing: "Starting at $8,000",
      icon: <img src={devopscloud} alt="Cloud Engineering and DevOps services icon" className="w-15 h-15 mx-auto" loading="lazy"/>
    },

  ];

export const portfolioProjects = [
    {
      id: 1,
      title: "Two-Tier Architecture Cloud Infrastructure",
      title_ar: "بنية تحتية ذات طبقتين",
      category: "Cloud & DevOps",
      category_ar: "الحوسبة السحابية و DevOps",
      image: "TwoTier.png",
      challenge: "The client needed a reliable and scalable cloud infrastructure to support their growing applications and ensure high availability.",
      solution: "Designed and deployed a two-tier architecture on AWS using Terraform for Infrastructure as Code (IaC). Automated the provisioning of VPC, subnets, EC2 instances, and RDS with proper security groups and load balancing.",
      technologies: ["AWS", "Terraform"],
      results: "Reduced infrastructure setup time by 80%, improved system scalability and resilience, and ensured consistent and repeatable deployments.",
      /*link: "https://github.com/ashrafbilalmohaidat2/Two-Tier-Architecture"*/
    },
    {
      id: 2,
      title: "Spices Food Blog",
      title_ar: "مدونة التوابل الغذائية",
      category: "Web Development (Frontend)",
      category_ar: "تطوير الويب (الواجهة الأمامية)",
      image: "https://placehold.co/600x400/00AEEF/FFFFFF?text=Spices+Food+Blog",
      challenge: "The client wanted a responsive and visually appealing food blog with optimized performance.",
      solution: "Designed and deployed a two-tier architecture on AWS using Terraform for Infrastructure as Code (IaC). Automated the provisioning of VPC, subnets, EC2 instances, and RDS with proper security groups and load balancing.",
      technologies: ["React.js", "HTML5", "CSS3", "JavaScript"],
      results: "Improved page load speed by 40% and increased user engagement through an optimized browsing experience.",
      link: "https://spices-resturant-app-teal.vercel.app/"

    },
    {
      id: 3,
      title: "Three-Tier Architecture Cloud Infrastructure",
      title_ar: "بنية تحتية ذات ثلاث طبقات",
      category: "Cloud Computing & DevOps",
      category_ar: "الحوسبة السحابية و DevOps",
      image: "ThreeTier.png",
      challenge: "The client needed a reliable and scalable cloud infrastructure to support their growing applications and ensure high availability.",
      solution: "Built a React.js application with lazy loading for components and images to enhance performance and ensure a smooth user experience across devices.",
      technologies: ["AWS", "Terraform","Cloud Security"],
      results: "Improved page load speed by 40% and increased user engagement through an optimized browsing experience.",
     /* link: "https://github.com/ashrafbilalmohaidat2/Multi-Tier-Architecture-on-AWS-Terraform-"*/

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