type PropsType = {
  name?: string;
};

const HelloWorld = (props: PropsType) => {
  return (
    <h1 className="title">
      Hello <br />
      <span>{props.name}</span>
    </h1>
  );
};

export default HelloWorld;
