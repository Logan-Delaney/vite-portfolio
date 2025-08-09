import { workExperiences } from "../constants"

const Experience = () => {
    return (
        <section id="experience" className="c-space my-20 scroll-mt-15">
            <div className="w-full text-white-600">
                <div className="work-content">
                    <div className="sm:py-10 py-5 sm:px-5 px-2.5">
                        {workExperiences.map(({id, name, position, duration, description, icon}) => (
                            <div key={id} className="work-content_container group">
                                <div className="flex flex-col h-full justify-start items-center py2">
                                    <div className="work-content_logo">
                                        <img src={icon} alt="logo" className="w-full h-full"/>
                                    </div>
                                    <div className="work-content_bar"/>
                                </div>
                                <div className="sm:p-5 px-2.5 py-5">
                                    <p className="font-bold text-white-800">{name}</p>
                                    <p className="text-sm mb-5">{position} -- {duration}</p>
                                    <p className="group-hover:text-white transition ease-in-out duration-500 text-sm" dangerouslySetInnerHTML={{ __html: description }}></p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience