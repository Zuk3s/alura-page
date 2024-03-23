import "./index.css";

interface Iinput {
  type: "text" | "dropdown";
  placeholder?: string;
}

export function Input(props: Iinput) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className= "${props.type === 'dropdown' ? 'input-bar dropdown' : 'input-bar'}"
    />
  );
}
