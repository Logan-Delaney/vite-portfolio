import { useState } from 'react';

const About = () => {
    const [hoveredTech, setHoveredTech] = useState(null);
    const [isLocationHovered, setIsLocationHovered] = useState(false);
    const [isProfileHovered, setIsProfileHovered] = useState(false);

    const techStack = [
        { name: 'JavaScript', logo: '/assets/logos/javascript.svg', color: 'from-yellow-400 to-yellow-600' },
        { name: 'Python', logo: '/assets/logos/python.svg', color: 'from-green-400 to-green-600' },
        { name: 'React.js', logo: '/assets/logos/react.svg', color: 'from-blue-400 to-blue-600' },
        { name: 'Node.js', logo: '/assets/logos/node.svg', color: 'from-green-500 to-green-700' },
        { name: 'GitHub', logo: '/assets/logos/github.svg', color: 'from-gray-600 to-gray-800' },
        { name: 'Jest', logo: '/assets/logos/jest.svg', color: 'from-orange-500 to-red-500' },
        { name: 'Pytest', logo: '/assets/logos/pytest.svg', color: 'from-blue-400 to-blue-600' },
        { name: 'SQL', logo: '/assets/logos/sql.svg', color: 'from-purple-400 to-purple-600' },
        { name: 'CI/CD', logo: '/assets/logos/jenkins.svg', color: 'from-orange-400 to-orange-600' },
    ];

    return (
        <section id="about" className="c-space my-20 scroll-mt-20">
            <div className="grid xl:grid-cols-3 xl:grid-rows-1 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div 
                        className={`
                            grid-container relative overflow-hidden transition-all duration-500 ease-out
                            ${isProfileHovered ? 'transform scale-[1.02] shadow-2xl' : 'shadow-lg'}
                        `}
                        onMouseEnter={() => setIsProfileHovered(true)}
                        onMouseLeave={() => setIsProfileHovered(false)}
                    >
                        {/* Glassmorphism overlay */}
                        <div className={`
                            absolute inset-0 transition-opacity duration-500
                            bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-teal-500/10
                            ${isProfileHovered ? 'opacity-50' : 'opacity-20'}
                        `} />
                        
                        {/* Animated border glow */}
                        <div className={`
                            absolute inset-0 rounded-lg transition-opacity duration-500
                            bg-gradient-to-r from-purple-400/20 via-blue-400/20 to-teal-400/20
                            ${isProfileHovered ? 'opacity-40 blur-sm' : 'opacity-0'}
                        `} />

                        <div className="relative z-10">
                            <div className="w-full sm:h-[276px] h-fit rounded-lg overflow-hidden">
                                <img 
                                    src="/assets/grid-1.jpeg" 
                                    alt="Logan Delaney" 
                                    className={`
                                        w-full h-full object-contain transition-all duration-700 ease-out
                                        ${isProfileHovered ? 'scale-100 brightness-110 contrast-110' : 'scale-100'}
                                    `}
                                />
                            </div>
                            <div>
                                <p className={`
                                    grid-headtext mt-4 bg-gradient-to-r from-white via-purple-100 to-blue-100 
                                    bg-clip-text text-transparent transition-all duration-300
                                    ${isProfileHovered ? 'transform translate-x-1' : ''}
                                `}>
                                    Logan Delaney
                                </p>
                                <p className={`
                                    grid-subtext transition-all duration-300
                                    ${isProfileHovered ? 'text-white/95 transform translate-x-1' : ''}
                                `}>
                                    I'm a software developer focused on JavaScript and Python, with experience building production-ready apps and automated testing systems.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 xl:row-span-3">
                    <div 
                        className={`
                            grid-container relative overflow-hidden transition-all duration-500 ease-out
                            ${hoveredTech !== null ? 'transform scale-[1.02] shadow-2xl' : 'shadow-lg'}
                        `}
                        onMouseEnter={() => setHoveredTech(0)}
                        onMouseLeave={() => setHoveredTech(null)}
                    >
                        {/* Glassmorphism overlay */}
                        <div className={`
                            absolute inset-0 transition-opacity duration-500
                            bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-green-500/10
                            ${hoveredTech !== null ? 'opacity-50' : 'opacity-20'}
                        `} />
                        
                        {/* Animated border glow */}
                        <div className={`
                            absolute inset-0 rounded-lg transition-opacity duration-500
                            bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-green-400/20
                            ${hoveredTech !== null ? 'opacity-40 blur-sm' : 'opacity-0'}
                        `} />

                        <div className="w-full h-full relative z-10">
                            <div className="grid grid-cols-3 gap-4 mb-6 h-full">
                                {techStack.map((tech, index) => (
                                    <div
                                        key={tech.name}
                                        className={`
                                            relative group cursor-pointer transform transition-all duration-300 ease-out
                                            hover:scale-110 hover:-translate-y-2
                                            ${hoveredTech === index ? 'z-10' : ''}
                                        `}
                                        onMouseEnter={() => setHoveredTech(index)}
                                        onMouseLeave={() => setHoveredTech(null)}
                                        style={{
                                            animationDelay: `${index * 0.1}s`
                                        }}
                                    >
                                        <div className={`
                                            absolute inset-0 rounded-lg blur-sm opacity-0 group-hover:opacity-70 transition-opacity duration-300
                                            bg-gradient-to-r ${tech.color}
                                        `}></div>
                                        
                                        <div className={`
                                            relative bg-gradient-to-r ${tech.color} 
                                            rounded-lg p-4 text-center shadow-lg min-h-[80px]
                                            border border-white/20 backdrop-blur-sm
                                            group-hover:shadow-xl group-hover:border-white/40
                                            transition-all duration-300 flex flex-col justify-center
                                        `}>
                                            <img 
                                                src={tech.logo} 
                                                alt={`${tech.name} logo`}
                                                className="w-10 h-10 mx-auto mb-2 object-contain filter drop-shadow-sm"
                                            />
                                            <div className="text-white text-xs font-semibold truncate">
                                                {tech.name}
                                            </div>
                                        </div>

                                        {hoveredTech === index && (
                                            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 z-20">
                                                <div className="bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                                                    {tech.name}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Enhanced Location Card */}
                <div className="col-span-1 xl:row-span-3">
                    <div 
                        className={`
                            grid-container relative overflow-hidden transition-all duration-500 ease-out
                            ${isLocationHovered ? 'transform scale-[1.02] shadow-2xl' : 'shadow-lg'}
                        `}
                        onMouseEnter={() => setIsLocationHovered(true)}
                        onMouseLeave={() => setIsLocationHovered(false)}
                    >
                        {/* Glassmorphism overlay */}
                        <div className={`
                            absolute inset-0 transition-opacity duration-500
                            bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-green-500/10
                            ${isLocationHovered ? 'opacity-50' : 'opacity-20'}
                        `} />
                        
                        {/* Animated border glow */}
                        <div className={`
                            absolute inset-0 rounded-lg transition-opacity duration-500
                            bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-green-400/20
                            ${isLocationHovered ? 'opacity-40 blur-sm' : 'opacity-0'}
                        `} />

                        <div className="relative z-10 flex flex-col justify-between h-full">
                            {/* Header with animated pin */}
                            <div className="flex items-start gap-4">
                                <div className={`
                                    transition-all duration-300 ease-out
                                    ${isLocationHovered ? 'transform -translate-y-1 scale-110' : ''}
                                `}>
                                    <div className="relative">
                                        {/* Pulsing ring effect */}
                                        <div className={`
                                            absolute inset-0 rounded-full transition-all duration-1000
                                            ${isLocationHovered ? 'bg-blue-400/30 animate-ping' : 'bg-transparent'}
                                        `} />
                                        <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                                            <svg 
                                                className="w-6 h-6 text-white" 
                                                fill="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="flex-1">
                                    <h3 className={`
                                        text-2xl font-bold bg-gradient-to-r from-white via-blue-100 to-purple-100 
                                        bg-clip-text text-transparent mb-3 transition-all duration-300
                                        ${isLocationHovered ? 'transform translate-x-1' : ''}
                                    `}>
                                        Lexington, KY
                                    </h3>
                                    
                                    {/* Work availability indicators stacked */}
                                    <div className="flex flex-col gap-2">
                                        <div className={`
                                            flex items-center gap-2 px-5 py-3 rounded-full text-s font-medium
                                            bg-green-500/20 text-green-300 border border-green-500/30 w-fit
                                            transition-all duration-300
                                            ${isLocationHovered ? 'bg-green-500/30 border-green-400/50 transform scale-105' : ''}
                                        `}>
                                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                            Remote Ready
                                        </div>
                                        <div className={`
                                            flex items-center gap-2 px-5 py-3 rounded-full text-s font-medium
                                            bg-blue-500/20 text-blue-300 border border-blue-500/30 w-fit
                                            transition-all duration-300
                                            ${isLocationHovered ? 'bg-blue-500/30 border-blue-400/50 transform scale-105' : ''}
                                        `}>
                                            <div className="w-2 h-2 bg-blue-400 rounded-full" />
                                            Open to Relocate
                                        </div>
                                        <div className={`
                                            flex items-center gap-2 px-5 py-3 rounded-full text-s font-medium
                                            bg-orange-500/20 text-orange-300 border border-orange-500/30 w-fit
                                            transition-all duration-300
                                            ${isLocationHovered ? 'bg-orange-500/30 border-orange-400/50 transform scale-105' : ''}
                                        `}>
                                            <div className="w-2 h-2 bg-orange-400 rounded-full" />
                                            Timezone: EST
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Enhanced image container with parallax effect */}
                            <div className="mt-8 relative">
                                <div className={`
                                    w-full h-40 rounded-xl overflow-hidden border transition-all duration-500
                                    ${isLocationHovered ? 
                                        'border-blue-400/40 shadow-lg shadow-blue-500/20' : 
                                        'border-white/20 shadow-md'
                                    }
                                `}>
                                    {/* Gradient overlay */}
                                    <div className={`
                                        absolute inset-0 z-10 transition-opacity duration-500
                                        bg-gradient-to-t from-black/60 via-transparent to-transparent
                                        ${isLocationHovered ? 'opacity-40' : 'opacity-60'}
                                    `} />
                                    
                                    <img
                                        src="/assets/lex.jpeg"
                                        alt="Lexington skyline"
                                        className={`
                                            w-full h-full object-cover transition-all duration-700 ease-out
                                            ${isLocationHovered ? 
                                                'scale-110 brightness-110 contrast-110' : 
                                                'scale-100 brightness-90 contrast-100'
                                            }
                                        `}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About