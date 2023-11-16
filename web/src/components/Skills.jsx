const Skills = ({ skills }) => {
  return (
    <>
      <div className="gap-4 md:grid md:grid-cols-2 xl:grid-cols-3">
        {skills.map((skill) => {
          return (
            <div className="p-2 border-2 rounded-lg flex flex-col items-center">
              <img
                className="object-scale-down h-48 w-28"
                src={skill.path}
                alt=""
              />
              <p>{skill.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Skills;
