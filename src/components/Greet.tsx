type GreetType = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetType) => {
  return (
    <div>
      {props.isLoggedIn
        ? ` Welcome ${props.name}! You have ${props.messageCount} unread messages`
        : "Welcome Guest"}
    </div>
  );
};

export default Greet;
