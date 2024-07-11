import { MouseEventHandler } from "react";

export default function ActionButton({text, onAction}: {text: string, onAction?: MouseEventHandler<HTMLButtonElement>}) {
    return (
      <button className="px-4 py-2 bg-slate-200 hover:bg-slate-500 border border-slate-700" onClick={onAction}>
        <span>{text.toUpperCase()}</span>
      </button>
    );
}
