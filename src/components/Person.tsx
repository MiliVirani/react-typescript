import { PersonType } from "../types/PersonType";

const Person = ({ name }: PersonType) => {
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
};

export default Person;
