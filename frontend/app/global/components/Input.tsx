"use client";

// Defining the validations
type Validation = {
  autoComplete?: string;
  title?: string;
  pattern?: string;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
};

// Defininng inputfields

// Bruger '&' operatør sådan så input's indeholder alle de felter fra Validation
// TypeScript kalder det for en intersection Type opertør.
// source: https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html
//         https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces

//text
type inputTextField = {
  type: "text";
  name: string;
  value: string;
  label: string;
  inputLabel: string;
  onChange: (value: string) => void;
} & Validation;
//text
type inputEmail = {
  type: "email";
  name: string;
  value: string;
  label: string;
  inputLabel: string;
  onChange: (value: string) => void;
} & Validation;

// phonenumber
type inputTel = {
  type: "tel";
  name: string;
  value: string;
  label: string;
  inputLabel: string;
  onChange: (value: string) => void;
} & Validation;

// password
type inputPassword = {
  type: "password";
  name: string;
  value: string;
  label: string;
  inputLabel: string;
  onChange: (value: string) => void;
} & Validation;

//number
type inputNumber = {
  type: "number";
  name: string;
  value: number;
  label: string;
  inputLabel: string;
  inputMode: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  max?: number;
  min?: number;
  onChange: (value: number) => void;
} & Validation;

//checkbox
type inputCheckbox = {
  type: "checkbox";
  checked: boolean;
  name: string;
  label: string;
  inputLabel: string;
  onChange: (value: boolean) => void;
} & Validation;

//radio
type inputRadio = {
  type: "radio";
  name: string;
  label: string;
  inputLabel: string;
  onChange: (value: string) => void;
} & Validation;

// Using 'or' operator for changing type of inputfield
type inputType =
  | inputTextField
  |inputEmail
  | inputTel
  | inputPassword
  | inputNumber
  | inputCheckbox
  | inputRadio;

// Adding conditional rendering for changing each input fields props & actions
export default function Input(props: inputType) {
  return (
    <div className="flex m-4">
      <label htmlFor={props.label}>{props.inputLabel}</label>

      {/* Text Inputfield */}
      {props.type === "text" && (
        <input
          id={props.name}
          type="text"
          value={props.value}
          name={props.name}
          required={props.required}
          title={props.title}
          minLength={props.minLength}
          maxLength={props.maxLength}
          pattern={props.pattern}
          autoComplete={props.autoComplete}
          onChange={(e) => props.onChange(e.target.value)}
          className="bg-surface border-primary-100 border-2"
        ></input>
      )}
      {/* Email Inputfield */}
      {props.type === "email" && (
        <input
          id={props.name}
          type="email"
          value={props.value}
          name={props.name}
          required={props.required}
          title={props.title}
          minLength={props.minLength}
          maxLength={props.maxLength}
          pattern={props.pattern}
          autoComplete={props.autoComplete}
          onChange={(e) => props.onChange(e.target.value)}
          className="bg-surface border-primary-100 border-2"
        ></input>
      )}

      {/* Phonenumber Inputfield */}
      {props.type === "tel" && (
        <input
          id={props.name}
          type="tel"
          value={props.value}
          name={props.name}
          required={props.required}
          title={props.title}
          minLength={props.minLength}
          maxLength={props.maxLength}
          pattern={props.pattern}
          autoComplete={props.autoComplete}
          onChange={(e) => props.onChange(e.target.value)}
          className="bg-surface border-primary-100 border-2"
        ></input>
      )}

      {/* Password Inputfield */}
      {props.type === "password" && (
        <input
          id={props.name}
          type="password"
          value={props.value}
          name={props.name}
          required={props.required}
          title={props.title}
          minLength={props.minLength}
          maxLength={props.maxLength}
          pattern={props.pattern}
          autoComplete={props.autoComplete}
          onChange={(e) => props.onChange(e.target.value)}
          className="bg-surface border-primary-100 border-2"
        ></input>
      )}

      {/* Number Inputfield */}
      {props.type === "number" && (
        <input
          id={props.name}
          type="number"
          value={props.value}
          name={props.name}
          inputMode={props.inputMode}
          required={props.required}
          title={props.title}
          minLength={props.minLength}
          maxLength={props.maxLength}
          pattern={props.pattern}
          autoComplete={props.autoComplete}
          onChange={(e) => props.onChange(Number(e.target.value))}
          className="bg-surface border-primary-100 border-2"
        ></input>
      )}

      {/* Checkbox Inputfield */}
      {props.type === "checkbox" && (
        <input
          id={props.name}
          type="checkbox"
          name={props.name}
          required={props.required}
          title={props.title}
          autoComplete={props.autoComplete}
          pattern={props.pattern}
          onChange={(e) => props.onChange(e.target.checked)}
          className="bg-surface border-primary-100 border-2"
        ></input>
      )}

      {/* Radio Inputfield */}
      {props.type === "radio" && (
        <input
          id={props.name}
          type="radio"
          name={props.name}
          required={props.required}
          title={props.title}
          autoComplete={props.autoComplete}
          pattern={props.pattern}
          onChange={(e) => props.onChange(e.target.value)}
          className="bg-surface border-primary-100 border-2"
        ></input>
      )}
    </div>
  );
}
