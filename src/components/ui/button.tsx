import { useFormStatus } from "react-dom";

export default function Button() {
  const { pending } = useFormStatus();
  return (
    <button className="bg-blue-500 text-white rounded-2xl font-bold uppercase p-3 transition-transform hover:scale-105 hover:bg-blue-700">
      {pending ? "Searching" : "Search"}
    </button>
  );
}
