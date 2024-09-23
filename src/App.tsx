import "./App.css";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";
import LoggedIn from "./components/state/LoggedIn";
// import Greet from "./components/Greet";
// import Heading from "./components/Heading";
// import Oscar from "./components/Oscar";
// import Person from "./components/Person";
// import PersonList from "./components/PersonList";
// import Status from "./components/Status";

function App() {
  // const personName = {
  //   first: "Shiney",
  //   last: "Sparkle",
  // };

  // const nameList = [
  //   { first: "Shiney", last: "Sparkle" },
  //   { first: "Clark", last: "Kent" },
  //   { first: "Princess", last: "Diana" },
  // ];

  return (
    <>
      {/* <Greet name="MV" messageCount={10} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} /> */}
      {/* <Status status="success" />
      <Oscar>
        <Heading>Oscar goes to MV</Heading>
      </Oscar>
      <Greet name="MV" isLoggedIn={false} /> */}
      <Button
        handleClick={(event, id) => {
          console.log("Button clicked!", event, id);
        }}
      />
      <Input
        value=""
        handleChange={(event) => {
          console.log("e", event);
        }}
      />
      <Container styles={{ border: "1px solid black", padding: "1rem" }} />
      <LoggedIn />
    </>
  );
}

export default App;
