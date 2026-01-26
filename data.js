const heroData = {
    image: 'src/project/profile.jpeg',
    name: "Samahah Abd Razak",
    role: "Software Engineer",
    cta: [
        { href: "#contact", text: "Get in Touch", type: "primary" },
        { href: "#projects", text: "View Projects", type: "outline" }
    ]
};

const aboutData = {
    description: "Software Engineer with 6+ years of experience specializing in backend development, API design, and full-stack solutions. Proven track record of delivering enterprise-level systems for major clients including Petronas, Shell, Syarikat Air Selangor, and Syarikat Air Melaka.",
    stats: [
        { number: "6+", label: "Years Experience" },
        { number: "12+", label: "Major Projects" },
        { number: "4+", label: "Enterprise Clients" }
    ]
};

const experienceData = [
    {
        title: "Software Engineer",
        company: "Terato Tech Sdn Bhd",
        period: "2020 – Present",
        responsibilities: [
            "Develop backend solutions using multiple programming languages for enterprise applications",
            "Build and maintain RESTful APIs with optimal performance and security standards",
            "Perform system integration with third-party services and legacy systems",
            "Drive feature enhancements, bug fixing, and production issue investigation",
            "Execute automated and manual testing to ensure system stability and quality",
            "Support and maintain enterprise-level systems for major clients including Petronas, Shell, and water utility companies",
            "Collaborate with cross-functional teams to deliver projects on time"
        ]
    },
    {
        title: "Backend Developer Intern",
        company: "Terato Tech Sdn Bhd",
        period: "2019 – 2020",
        responsibilities: [
            "Developed backend functionalities using ASP.NET and MySQL for client projects",
            "Assisted in API development and database optimization",
            "Participated in testing procedures and system maintenance activities",
            "Collaborated with senior developers to implement new features and resolve technical issues"
        ]
    }
];

const skillsData = [
    {
        category: "Backend Development",
        skills: ["Laravel (PHP)", "ASP.NET", "Java", "C++", "JavaScript", "NodeJS", "NestJS", "TypeScript"]
    },
    {
        category: "Frontend Development",
        skills: ["Vue.js", "Svelte.js", "Tailwind CSS"]
    },
    {
        category: "Databases",
        skills: ["MySQL", "PostgreSQL"]
    },
    {
        category: "Testing & QA",
        skills: ["Selenium", "Cypress", "TestProject", "Manual Testing", "iOS Testing (XCTest/XCUITest)"]
    }
];

const contactData = {
    description: "I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!",
    info: [
        { label: "Email", value: "samahah.razak08@gmail.com", href: "mailto:samahah.razak08@gmail.com" },
        { label: "Phone", value: "+6013-3828851", href: "tel:+60133828851" }
    ]
};

const projectsData = {
    'air-melaka': {
        title: 'mySAMB CMS',
        subtitle: 'Content Management System for Air Melaka',
        role: ['Backend Developer'],
        client: 'Syarikat Air Melaka Berhad (SAMB)',
        year: '2025-2026',
        logo: 'src/project/samb.png',
        overview: [
            'mySAMB CMS is a centralized content management system built for Syarikat Air Melaka Berhad to manage the mySAMB mobile application and water utility operations.',
            'The system enables administrators to manage customer accounts, billing information, service requests, water supply announcements, complaints, and content updates without coding, ensuring smooth operations and consistent information delivery across the mobile app.'
        ],
        technologies: ['PHP 8.3', 'Laravel', 'PostgreSQL', 'Redis', 'Node.js 24', 'Bun', 'Composer'],
        features: [
            'Built centralized backend system for managing mobile app content and operations',
            'Developed user management system for app users, accounts, and role-based access control',
            'Implemented billing and payment management with FPX integration and transaction history',
            'Created complaint tracking and resolution system with real-time reporting',
            'Built water disruption announcement management with push notifications',
            'Developed popup/banner management system for customer announcements',
            'Implemented FAQ and help center content management',
            'Created contact information and water account management modules',
            'Built comprehensive logging system for tracking application activities and user actions',
            'Developed payment report generation and export functionality',
            'Implemented integration management for third-party services with API logging',
            'Created system health monitoring and maintenance mode controls',
            'Built cache management and job scheduling with Laravel Horizon'
        ],
        images: [
            { placeholder: '🖼️', caption: 'CMS Login', src: 'src/project/samb-login.png' },
            { placeholder: '🖼️', caption: 'CMS Dashboard', src: 'src/project/samb-dashboard.png' }
        ],
        challenges: [
            {
                challenge: 'Creating a user-friendly CMS that allows non-technical staff to manage complex water utility operations and mobile app content without coding knowledge.',
                solution: 'Built an intuitive backend system with role-based permissions, allowing authorized personnel to easily create, edit, and publish content such as announcements, water disruptions, FAQs, and manage customer data through simple interfaces.'
            },
            {
                challenge: 'Managing real-time data synchronization between CMS and mobile app while handling high transaction volumes and concurrent users.',
                solution: 'Implemented queue-based processing with Laravel Horizon and Redis caching to ensure smooth operations and instant content updates across the platform.'
            }
        ],
        results: [
            'Successfully deployed CMS for SAMB administrators across Melaka',
            'Enabled non-technical staff to manage mobile app content without coding',
            'Streamlined water utility operations with centralized data management',
            'Improved customer communication through real-time announcements and notifications',
            'Enhanced operational efficiency with automated reporting and monitoring tools'
        ]
    },
    'sentinel': {
        title: 'Sentinel HOS',
        subtitle: 'Operations Management System for Petronas Facilities',
        role: ['Backend Developer'],
        client: 'Petronas',
        year: '2024-2025',
        logo: 'src/project/petronas.png',
        overview: [
            'Sentinel HOS is a hospitality management system built for Petronas facilities across Malaysia. It handles fuel pricing, inventory tracking, product management, and facility operations.',
            'The system processes high transaction volumes, generates fuel management reports, and provides real-time updates across multiple locations, supporting smooth operations for one of Malaysia\'s largest companies.'
        ],
        technologies: ['Laravel 8.x', 'PHP 7.4', 'PostgreSQL 17', 'Vue.js', 'Redis'],
        features: [
            'Built automated Fuel Management Reports (FMR) for daily operations tracking',
            'Integrated with SHIFT system for real-time inventory synchronization',
            'Developed RESTful APIs for facility operations and customer services',
            'Optimized database queries to handle thousands of daily transactions',
            'Implemented data validation and error handling for fuel pricing updates',
            'Created scheduled tasks for automated report generation',
            'Built authentication and authorization system for multi-facility access'
        ],
        images: [
            { placeholder: '🖼️', caption: 'HOS Login', src: 'src/project/sentinel-login.png' },
            { placeholder: '🖼️', caption: 'CMS Overview', src: 'src/project/hos.png' }
        ],
        challenges: [
            {
                challenge: 'Connecting multiple older systems across different Petronas facilities.',
                solution: 'Built a middleware layer that translates data between the SHIFT system and Sentinel HOS, enabling seamless inventory synchronization without replacing existing infrastructure.'
            }
        ],
        results: [
            'Successfully launched across all Petronas facilities in Malaysia',
            'Reduced manual reporting time by automating daily fuel management reports',
            'Improved system response time by 40% through database optimization'
        ]
    },
    'ronpos': {
        title: 'Ronpos HOS',
        subtitle: 'Hospitality Management System for Shell Facilities',
        role: ['Backend Developer'],
        client: 'Shell',
        year: '2024-2025',
        logo: 'src/project/shell.png',
        overview: [
            'Ronpos HOS is a hospitality management system built for Shell facilities across Malaysia. It handles fuel pricing, inventory tracking, product management, and facility operations.',
            'The system processes high transaction volumes, generates fuel management reports, and provides real-time updates across multiple locations, supporting smooth operations for one of Malaysia\'s largest companies.'
        ],
        technologies: ['Laravel 12.x', 'PHP 8.3', 'PostgreSQL 17', 'Vue.js', 'Redis'],
        features: [
            'Built automated Fuel Management Reports (FMR) for daily operations tracking',
            'Developed RESTful APIs for facility operations and customer services',
            'Optimized database queries to handle thousands of daily transactions',
            'Implemented data validation and error handling for fuel pricing updates',
            'Created scheduled tasks for automated report generation',
            'Built authentication and authorization system for multi-facility access'
        ],
        images: [
            { placeholder: '🖼️', caption: 'Ronpos Login', src: 'src/project/ronpos-login.png' }
        ]
    },
    'air-selangor': {
        title: 'Syarikat Air Selangor & iERP',
        subtitle: 'Water Management System for Air Selangor',
        role: ['Backend Developer'],
        client: 'Syarikat Air Selangor',
        year: '2022-2023',
        logo: 'src/project/air-selangor.png',
        overview: [
            'Air Selangor CMS is a water management system built for Syarikat Air Selangor, serving millions of customers across Selangor.',
            'The system handles customer billing, service requests, meter readings, water distribution management, and provides real-time updates for water service operations.'
        ],
        technologies: ['Laravel 12.x', 'PHP 8.3', 'PostgreSQL', 'Vue.js', 'API Integration'],
        features: [
            'Built customer portal APIs for bill payments and service requests',
            'Developed automated meter reading integration system',
            'Implemented billing calculation engine for multiple tariff structures',
            'Created notification system for service updates and billing alerts',
            'Developed API endpoints for mobile app integration',
            'Optimized database queries to handle millions of customer records'
        ],
        images: [
            { placeholder: '🖼️', caption: 'Dashboard', src: 'src/project/ierp-dashboard.png' },
            { placeholder: '🖼️', caption: 'Landing Page', src: 'src/project/ierp-landing-page.png' }
        ]
    },
    'dominos': {
        title: 'Domino\'s Pizza Malaysia & Singapore',
        subtitle: 'Multi-Region Food Ordering Platform',
        role: ['Backend Developer', 'QA Automation Tester'],
        client: 'Domino\'s Pizza',
        year: '2020-2022',
        logo: 'src/project/dominos.jpg',
        overview: [
            'A food ordering and delivery management platform serving Domino\'s Pizza operations across Malaysia.',
            'The system handles online orders, delivery tracking, payment processing, inventory management, and franchise operations across multiple locations.'
        ],
        technologies: ['ASP.NET Core', 'C#', 'MySQL', 'Selenium', 'Cypress', 'REST API'],
        features: [
            'Developed order management APIs for web and mobile platforms',
            'Built delivery tracking system with real-time status updates',
            'Implemented automated testing framework using Selenium and Cypress for quality assurance',
            'Developed promotion engine for dynamic pricing, discounts, and special offers',
            'Built payment gateway integration for multiple payment methods',
            'Implemented automated test suites for regression testing and continuous integration',
            'Created order history and customer management APIs'
        ],
        challenges: [
            {
                challenge: 'Ensuring system reliability across multiple regions with different franchises, currencies, and payment methods.',
                solution: 'Built a flexible multi-region system with configurable settings for each country, supporting multiple currencies and payment gateways while maintaining a unified codebase.'
            },
            {
                challenge: 'Maintaining code quality and preventing bugs in a fast-paced food delivery environment with frequent updates.',
                solution: 'Implemented comprehensive automated testing with Selenium and Cypress, creating test suites that run on every deployment to catch issues early and ensure system stability.'
            }
        ],
        results: [
            'Successfully deployed across Domino\'s franchises in Malaysia',
            'Reduced manual testing time through automated test coverage',
            'Improved order processing efficiency with real-time tracking',
            'Enabled seamless multi-region operations with unified platform'
        ]
    },
    'bepunct': {
        title: 'Bepunct',
        subtitle: 'Employee Management & Hub System',
        role: ['Backend Developer'],
        client: 'Internal R&D Project',
        year: '2025-2026',
        logo: 'src/project/bepunct.png',
        overview: [
            'Bepunct is an internal employee management system developed as an R&D project, used by our company to manage all aspects of staff operations through three main hubs: Employee Hub, HR Hub, and Payroll Hub.',
            'The system provides a centralized platform for managing attendance, leave, claims, bookings, payroll, announcements, events, and company directory with role-based access for different user types.'
        ],
        technologies: ['PHP 8.3', 'Laravel', 'PostgreSQL', 'Redis', 'Vue.js', 'Node.js', 'Bun'],
        features: [
            'Built APIs for Employee Hub to manage daily tasks and information',
            'Developed backend services for HR Hub dashboard and staff administration',
            'Created Payroll Hub APIs for salary and compensation management',
            'Implemented dashboard APIs with key metrics and analytics',
            'Built calendar system backend for leave planning and event tracking',
            'Developed leave application and time-off management APIs with approval workflows',
            'Created claims submission and approval system with validation logic',
            'Built booking system APIs for meeting rooms and resource management',
            'Implemented employee directory with search and filtering capabilities',
            'Developed organization chart data structure and APIs',
            'Created announcement management system for company-wide communications',
            'Built event management APIs for company activities and schedules',
            'Implemented role-based access control and authentication across all hubs',
            'Optimized database queries for handling employee data and transactions'
        ],
        images: [
            { placeholder: '🖼️', caption: 'Login Page', src: 'src/project/bepunct-login.png' },
            { placeholder: '🖼️', caption: 'Employee Dashboard', src: 'src/project/bepunct-dashboard.png' },
            { placeholder: '🖼️', caption: 'HR Hub Dashboard', src: 'src/project/bepunct-hr-dashboard.png' }
        ],
        challenges: [
            {
                challenge: 'Building a flexible backend system that supports three different hubs (Employee, HR, Payroll) with different permissions and data access requirements.',
                solution: 'Designed a modular API architecture with role-based middleware and shared services, allowing each hub to access appropriate data while maintaining security and code reusability.'
            }
        ],
        results: [
            'Successfully deployed for internal company use across all departments',
            'Unified employee operations through three specialized hubs',
            'Streamlined leave, claims, and booking processes with digital workflows',
            'Improved company communication with centralized announcements and events',
            'Enhanced team collaboration with employee directory and organization chart'
        ]
    },
    'investsmart': {
        title: 'InvestSmart',
        subtitle: 'Financial Investment Platform',
        role: ['Backend Developer'],
        client: 'InvestSmart',
        year: '2022',
        logo: 'src/project/investsmart.png',
        overview: [
            'InvestSmart is a mobile investment platform that enables users to manage investment portfolios, track market data, and execute trades.',
            'Built with security and real-time data processing as top priorities to handle financial transactions and sensitive user information.'
        ],
        technologies: ['ASP.NET Core', 'C#', 'MySQL', 'REST API'],
        features: [
            'Built secure authentication and authorization system for user accounts',
            'Developed real-time stock price feed integration with market data providers',
            'Implemented portfolio management and investment tracking APIs',
            'Created transaction processing and settlement system for trades',
            'Built notification system for price alerts and market updates',
            'Developed APIs for buy/sell order execution',
            'Implemented data validation and error handling for financial transactions'
        ]
    },
    'kitajaga': {
        title: 'kitajaga.co',
        subtitle: 'Healthcare platform quality assurance and maintenance',
        role: ['Automated Tester', 'Support'],
        client: 'kitajaga.co',
        year: '2021',
        logo: 'src/project/kitajaga.png',
        overview: [
            'Quality assurance and support for a healthcare platform connecting patients with medical professionals.',
            'Focused on ensuring system reliability and user experience through comprehensive testing.'
        ],
        technologies: ['Selenium', 'Cypress', 'TestProject', 'Manual Testing', 'Bug Tracking'],
        features: [
            'Implemented automated testing suite for critical user flows',
            'Conducted regular regression testing for new features',
            'Performed manual testing for user interface and experience',
            'Created test documentation and reports',
            'Provided technical support for production issues'
        ],
    },
    'summer-scan': {
        title: 'Summer Scan & Wallet',
        subtitle: 'Consumer-facing scanning and digital wallet application',
        role: ['Frontend Developer', 'Backend Developer'],
        client: 'Summer Technologies',
        year: '2023-2024',
        logo: 'src/project/summerscan.png',
        overview: [
            'A consumer mobile application combining QR code scanning functionality with a digital wallet for payments and rewards.',
            'Focused on creating an intuitive and responsive user interface.'
        ],
        technologies: ['Vue.js', 'Svelte.js', 'Tailwind CSS', 'REST API Integration'],
        features: [
            'Developed responsive UI for QR code scanning',
            'Built digital wallet interface for transactions',
            'Implemented rewards and loyalty program displays',
            'Created transaction history and receipt views',
            'Designed user profile and settings management'
        ],
        images: [
            { placeholder: '🖼️', caption: 'Dashboard Overview', src: 'src/project/summerscan-dashboard.png' },
            { placeholder: '🖼️', caption: 'Campaign Details', src: 'src/project/summerscan-details.png' }
        ]
    },
};