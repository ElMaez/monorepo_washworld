'use client';

// Defininng inputfields

//text
type inputTextField = {
  type: "text";
  name: string;
  label: string;
  inputLabel: string;
  onChange: (value: string) => void;
};

//number
type inputNumber = {
  type: "number";
  name: string;
  label: string;
  inputLabel: string;
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
type inputType = inputTextField | inputNumber | inputCheckbox | inputRadio;


// Adding conditional rendering for changing each input fields props & actions
export default function Input(props: inputType) {
  return (
    <div className="display-flex m-4">
      <label id={props.name} htmlFor={props.label}>{props.inputLabel}</label>
      {props.type === "text" && (
        <input
        id={props.name}
          type="text"
          name={props.name}
          onChange={(e) => props.onChange(e.target.value)}
          className="bg-surface border-primary-100 border-2"
        ></input>
      )}
      {props.type === "number" && (
        <input
        id={props.name}
          type="number"
          name={props.name}
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
