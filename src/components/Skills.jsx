import "./skills.css";

function Skills({skills}) {
    const categories = ["Frontend", "Backend", "Tools"];
    return (
        <section className="skills" id="skills">
            <div className="container">
                <h2 className="section-title">Skills</h2>
                <p className="section-subtitle">
                    The languages, frameworks, and tools I use to build web applications.
                </p>
                <div className="skills-grid"></div>
                {categories.map((category) => (
                    <div className="skills-group" key={category}>
                        <h3>{category}</h3>
                        <div className="skills-list">
                            {skills
                                .filter((skill) => skill.category === category)
                                .map((skill) => (
                                    <span className="skill-chip" key={skill._id}>
                                        {skill.name}
                                    </span>
                                ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Skills;