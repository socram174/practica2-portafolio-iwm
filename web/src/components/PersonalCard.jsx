

const PersonalCard = ({ name, email, description, year }) => {
return (
    <div className="max-w-screen-sm border-2 bg-white p-6 rounded-lg flex sm:min-w-min flex-wrap">
    <img
      className="hover:animate-pulse object-scale-down h-48 w-28"
      src="/images/pc.png"
      alt=""
    />
    <div className="ml-2">
      <h1 className="text-4xl font-bold">{name}</h1>
      <h3 className="text-lg font-semibold">{email}</h3>
      <p className="text-lg pt-2">{description}</p>
      <h3 className="text-center text-green-600">{year}</h3>
    </div>
  </div>
)
};

export default PersonalCard;
