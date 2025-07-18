const Card = ({ img, title, para}) => {
  return (
    <div className="card">
      <img
        src={img}
        alt=""
      />
      <h1>{title}</h1>
      <p>
       {para}
      </p>
    </div>
  );
};

export default Card
