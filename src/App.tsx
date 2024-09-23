import "./App.css";
import Greet from "./components/Greet";
// import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Oscar from "./components/Oscar";
// import Person from "./components/Person";
// import PersonList from "./components/PersonList";
import Status from "./components/Status";

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
      <Status status="success" />
      <Oscar>
        <Heading>Oscar goes to MV</Heading>
      </Oscar>
      <Greet name="MV" isLoggedIn={false} />
    </>
  );
}

export default App;
