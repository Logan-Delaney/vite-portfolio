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
        title: 'Riot Stats - Riot API',
        desc: 'Using the Fast API framework for Python and React.js, this fullstack app allows the user to enter their game name and then view their game stats taking advantage of the Riot API',
        href: 'https://github.com/Logan-Delaney/riot-fastapi',
        className: 'animatedText1',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/riot-logo.svg',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
      {
        id: 1,
        name: 'Fast API',
        path: '/assets/logos/python.svg',
      },
      {
        id: 2,
        name: 'Python',
        path: '/assets/logos/python.svg',
      },
      {
        id: 3,
        name: 'React.js',
        path: '/assets/logos/react.svg',
      },
      {
        id: 4,
        name: 'MySQL',
        path: '/assets/logos/sql.svg',
      },
    ],
    },
    {
        title: 'Multiplayer Tetris',
        desc: 'Node.js backend, React.js Frontend. A multiplayer version of the classic block stacking game leveraging Socket.io. Fast and reliable multiplayer server.',
        href: 'https://github.com/Logan-Delaney/riot-fastapi',
        className: 'animatedText1',
        texture: '/textures/project/project2.mp4',
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
        name: 'Fast API',
        path: '/assets/logos/node.svg',
      },
      {
        id: 2,
        name: 'Python',
        path: '/assets/logos/python.svg',
      },
      {
        id: 3,
        name: 'React.js',
        path: '/assets/logos/react.svg',
      },
      {
        id: 4,
        name: 'MySQL',
        path: '/assets/logos/sql.svg',
      },
    ],
    },
]