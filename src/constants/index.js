export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Experience',
    href: '#experience'
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
    {
        title: 'Chip-8 Emulator',
        desc: 'An emulator that interprets the Chip-8 instruction set and renders graphics using Pygame. It features a fully implemented CPU loop, memory management, stack operations, timers, and key-mapping for user input.',
        href: 'https://github.com/Logan-Delaney/chip-8-python',
        className: 'animatedText1',
        texture: '/textures/project/chip8-demo.mp4',
        logo: '/assets/space-invader.svg',
        logoStyle: {
            backgroundColor: '#146B14',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/logos/python.svg',
      },
    ],
    },
    {
        title: 'Beat Grids',
        desc: 'Node.js backend and React.js frontend. A free online DAW with a user-friendly, grid-based interface for creating music, plus backend support for saving and managing tracks.',
        href: 'https://github.com/Logan-Delaney/beat-grid-client',
        className: 'animatedText1',
        texture: '/textures/project/beat-grid.mp4',
        logo: '/assets/tetris.svg',
        logoStyle: {
            backgroundColor: '#0a2f61',
            border: '0.2px solid #135bbd',
            boxShadow: '0px 0px 60px 0px #135bbd',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/logos/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: '/assets/logos/node.svg',
      },
    ],
    },
]

export const workExperiences = [
  {
    id: 1,
    name: 'Fractal',
    position: 'Junior Developer / QA Engineer',
    duration: 'Oct. 2024 - Present',
    description: `<strong>Languages & Frameworks:</strong> Node.js, React.js, Python, SQL<br>
<strong>Testing:</strong> Pytest, End-to-End Automation, Test Case Design<br>
<strong>Methodologies & Tools:</strong> Agile, CI/CD, Code Quality Best Practices, GitHub<br>
<strong>Professional Experience & Projects:</strong><br>
• <strong>User Onboarding Redesign:</strong> Led a complete rewrite of the user onboarding flow in a fintech environment, enhancing performance, user experience, and regulatory compliance.<br>
• <strong>Automated Testing Infrastructure:</strong> Designed and implemented robust end-to-end testing frameworks using Pytest, creating test cases from the ground up to ensure cross-platform reliability.<br>
• <strong>Production Software Contributions:</strong> Delivered high-impact contributions to production systems with a focus on maintainability, security, and clean code practices.<br>
• <strong>CI/CD & Version Control:</strong> Managed GitHub workflows and CI/CD pipelines, ensuring efficient, reliable deployments.<br>
• <strong>Agile Team Collaboration:</strong> Delivered quality solutions within Agile sprints, consistently meeting deadlines and contributing to team-wide success.`,
    icon: '/assets/fractal.svg'
  },
  {
    id: 2,
    name: 'Sky Systemz',
    position: 'Project Manager',
    duration: 'Jul. 2024 - Oct. 2024',
    description: `• Successfully managed multiple projects simultaneously by prioritizing tasks according to urgency, resource availability, and alignment with organizational goals.<br>
• Used Agile methodologies and Jira for efficient project delivery<br>
• Planned, designed, and scheduled phases for large projects.<br>
• Identified plans and resources required to meet project goals and objectives.<br>
• Monitored project performance to identify areas of improvement and make adjustments.`,
    icon: '/assets/skysystemz.jpeg'
  },
  {
    id: 3,
    name: 'Sky Systemz',
    position: 'Customer Support Agent',
    duration: 'Feb. 2024 - Jul. 2024',
    description: `• Actively listened to customer feedback regarding product features or service improvements, passing valuable insights onto relevant departments for consideration in future developments.<br>
• Enhanced customer satisfaction by promptly addressing and resolving support inquiries.<br>
• Maintained clear communication with customers during troubleshooting procedures, ensuring understanding and swift resolution of problems.<br>
• Developed comprehensive knowledge of company products and services to better assist customers with their individual needs.`,
    icon: '/assets/skysystemz.jpeg'
  },
  {
    id: 4,
    name: 'Kroger',
    position: 'Ecommerce Specialist',
    duration: 'Apr. 2017 - Feb. 2024',
    description: `• Displayed positive, professional, friendly and high-energy willingness to assist customers through video, chat, telephone, or in-person interactions.<br> • Maintained working knowledge of company products, services and promotions.<br> • Performed in role leading department at times while ensuring that all orders were fulfilled and accurate.<br> • Handled technical errors when they arose, for example printer issues or computer/server issues.`,
    icon: '/assets/kroger.png'
  }
]