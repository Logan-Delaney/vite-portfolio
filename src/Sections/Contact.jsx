import { useRef, useState } from "react"

const Contact = () =>
{
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = () => {

    }
    const handleSubmit= () => {

    }

    return(
        <section id="contact" className="c-space my-20 scroll-mt-2">
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <div className="contact-container">
                    <h3 className="head-text">Let's connect</h3>
                    <p className="text-lg text-white-600 mt-5">Whether you're hiring, looking to collaborate, or just want to connect — feel free to reach out via the links below or drop a message.</p>
                    <div className="flex flex-row m-2 justify-evenly">
                        <a href="https://www.linkedin.com/in/logan-delaney-6744641aa" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/linkedin-brands.svg" alt="LinkedIn" className="w-8 h-8 opacity-50 hover:opacity-100 transition duration-300" />
                    </a>
                    <a href="https://github.com/Logan-Delaney" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/github-brands.svg" alt="GitHub" className="w-8 h-8 opacity-50 hover:opacity-100 transition duration-300" />
                    </a>
                    <a href="mailto:logan_delaney@yahoo.com" rel="noopener noreferrer">
                        <img src="/assets/email.svg" alt="Email" className="w-8 h-8 opacity-50 hover:opacity-100 transition duration-300" />
                    </a>
                    </div>

                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col space-y-3 border-t border-neutral-700 my-8 w-full pt-6">
                        <label className="space-y-1">
                            <span className="field-label">Full Name</span>
                        </label>
                        <input 
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="field-input"
                        placeholder="John Doe"
                        />
                        <label className="space-y-1">
                            <span className="field-label">Email</span>
                        </label>
                        <input 
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="field-input"
                        placeholder="johndoe@gmail.com"
                        />
                        <label className="space-y-1">
                            <span className="field-label">Your Message</span>
                        </label>
                        <textarea 
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={3}
                        className="field-input"
                        placeholder="Hi Logan..."
                        />
                        <button className="field-btn mt-3" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.svg" alt="arrow-up" className="field-btn_arrow"/> 
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact