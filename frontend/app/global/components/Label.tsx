import "../styles/global.css";

interface LabelProps {
  title: string;
  subText?: string;
  icon?: string;
}

const Label = ({ title, subText }: LabelProps) => {
  const height = subText ? "48px" : "29px";

  return (
    <div className="flex">
      <div
        style={{ "--h": height, "--bl": subText ? 1 : 0, "--br": subText ? 0 : 1 } as React.CSSProperties} //TypeScript does not know --h, --br, therefore as React.CSSProperties
        className="angled-shape h-[--h] bg-primary-800 px-16 text-bg-light"
      >
        <h1>{title}</h1>
        {subText && <p>{subText}</p>}
      </div>

      <div
        style={{ "--h": height, "--bl": subText ? 1 : 0, "--br": subText ? 1 : 0 } as React.CSSProperties} //TypeScript does not know --h, --br, therefore as React.CSSProperties
        className="angled-shape h-[--h] bg-primary-800 px-16 text-bg-light"
      >
        <h1>{title}</h1>
        {subText && <p>{subText}</p>}
      </div>

      <div
        style={{ "--h": height, "--bl": subText ? 1 : 0, "--br": subText ? 0 : 1 } as React.CSSProperties} //TypeScript does not know --h, --br, therefore as React.CSSProperties
        className="angled-shape h-[--h] bg-primary-800 px-16 text-bg-light"
      >
        <h1>{title}</h1>
        {subText && <p>{subText}</p>}
      </div>
    </div>
  );
};

export default Label;