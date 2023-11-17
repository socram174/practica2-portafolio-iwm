const Skills = ({ skills }) => {
  return (
    <>
      <div className="gap-4 md:grid md:grid-cols-2 xl:grid-cols-3 m-2">
        {skills.map((skill) => {
          return (
            <div className="p-2 border-2 rounded-lg flex flex-col items-center hover:ring-4 hover:ring-cyan-400 ring-offset-4">
              <img
                className="object-scale-down h-48 w-28"
                src={skill.path}
                alt=""
              />
              <h2 className="text-green-500 font-bold text-2xl">{skill.title}</h2>
              <p>{skill.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Skills;
