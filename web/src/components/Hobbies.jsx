const Hobbies = ({ hobbies }) => {
  console.table(hobbies);

  if (!hobbies) {
    return <p>No hobbies available</p>;
  }

  return (
    <div className="m-2">
      {hobbies.map((hobbie) => {
        return (
          <div className="p-2 border-2 rounded-lg flex flex-col items-center">
            <h2 className="text-center font-bold text-2xl">{hobbie.title}</h2>
            <p>{hobbie.description}</p>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
              {hobbie.activities.map((activity) => {
                return (
                  <div className="text-center">
                    <img
                      className="object-scale-down h-72 w-52"
                      src={activity.path}
                      alt=""
                    />
                    <h3>{activity.title}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Hobbies;