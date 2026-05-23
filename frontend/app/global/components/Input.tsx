'use client';

// Defininng inputfields

//text
type inputTextField = {
  type: "text";
  name: string;
  value: string;
  label: string;
  inputLabel: string;
  onChange: (value: string) => void;
};
type inputTel= {
  type: "tel";
  name: string;
  value: string;
  label: string;
  inputLabel: string;
  onChange: (value: string) => void;
};
type inputPassword = {
  type: "password";
  name: string;
  value: string;
  label: string;
  inputLabel: string;
  onChange: (value: string) => void;
};

//number
type inputNumber = {
  type: "number";
  name: string;
  value: number,
  label: string;
  inputLabel: string;
  inputMode: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  max?: number;
  min?: number;
  onChange: (value: number) => void;
};

//checkbox
type inputCheckbox = {
  type: "checkbox";
  checked: boolean;
  name: string;
  label: string;
  inputLabel: string;
  onChange: (value: boolean) => void;
};

//radio
type inputRadio = {
  type: "radio";
  name: string;
  label: string;
  inputLabel: string;
  onChange: (value: string) => void;
};

// Using 'or' operator for changing type of inputfield
type inputType = inputTextField | inputTel | inputPassword | inputNumber | inputCheckbox | inputRadio;

// Adding conditional rendering for changing each input fields props & actions
export default function Input(props: inputType) {
  return (
    <div className="flex m-4">
      <label id={props.name} htmlFor={props.label}>
        {props.inputLabel}
      </label>
      {props.type === "text" && (
        <input
          id={props.name}
          type="text"
          value={props.value}
          name={props.name}
          onChange={(e) => props.onChange(e.target.value)}
          className="bg-surface border-primary-100 border-2"
        ></input>
      )}
      {props.type === "tel" && (
        <input
          id={props.name}
          type="tel"
          value={props.value}
          name={props.name}
          onChange={(e) => props.onChange(e.target.value)}
          className="bg-surface border-primary-100 border-2"
        ></input>
      )}
      {props.type === "password" && (
        <input
          id={props.name}
          type="password"
          value={props.value}
          name={props.name}
          onChange={(e) => props.onChange(e.target.value)}
          className="bg-surface border-primary-100 border-2"
        ></input>
      )}
      {props.type === "number" && (
        <input
          id={props.name}
          type="number"
          value={props.value}
          name={props.name}
          inputMode={props.inputMode}
          min={props.min}
          max={props.max}
          onChange={(e) => props.onChange(Number(e.target.value))}
          className="bg-surface border-primary-100 border-2"
        ></input>
      )}
      {props.type === "checkbox" && (
        <input
          id={props.name}
          type="checkbox"
          name={props.name}
          onChange={(e) => props.onChange(e.target.checked)}
          className="bg-surface border-primary-100 border-2"
        ></input>
      )}
      {props.type === "radio" && (
        <input
          id={props.name}
          type="radio"
          name={props.name}
          onChange={(e) => props.onChange(e.target.value)}
          className="bg-surface border-primary-100 border-2"
        ></input>
      )}
    </div>
  );
}
