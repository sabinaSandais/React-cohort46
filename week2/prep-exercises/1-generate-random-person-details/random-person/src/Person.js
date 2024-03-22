const Person = ({ person }) => {
  if (!person) {
    return null;
  }
  return (
    <ul>
      <li>
        {" "}
        <strong>First Name:</strong> {person.name.first}{" "}
      </li>
      <li>
        {" "}
        <strong>Last Name:</strong> {person.name.last}
      </li>
      <li>
        {" "}
        <strong>Email:</strong> {person.email}
      </li>
    </ul>
  );
};
export default Person;
