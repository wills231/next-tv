const CastList = ({ cast }) => {
  // retrieve array of unique person id's
  const uniqueIds = [
    ...new Set(cast.map((castMember) => castMember.person.id)),
  ];

  // map over unique id's to create new array of cast members
  const uniqueCastMembers = uniqueIds.map((id) =>
    cast.find((castMember) => castMember.person.id === id)
  );

  return (
    <>
      <h2>Cast:</h2>
      {uniqueCastMembers.map((castMember) => (
        <div className="c-cast__card" key={castMember.person.id}>
          {castMember.person.image?.medium ? (
            <img
              className="c-cast__image"
              src={castMember?.person?.image?.medium}
              alt={castMember.person.name}
            />
          ) : (
            <img
              className="c-cast__image"
              src="https://via.placeholder.com/210x295/828282/969696.png?text=No+image+available"
              alt="No image available"
            />
          )}
          <p>
            {castMember.person.name} ({castMember.character.name})
          </p>
        </div>
      ))}
    </>
  );
};

export default CastList;
