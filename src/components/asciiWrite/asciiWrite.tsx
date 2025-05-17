import './asciiWrite.scss'

type AsciiWriteProps = {
  label: string;
  text: string;
};

function AsciiWrite ({ label, text }: AsciiWriteProps) {
  return (
    <pre
      aria-label={label}
      className="text-art"
    >{text}</pre>
  );
}

export default AsciiWrite;