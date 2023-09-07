import { Dispatch, useState, SetStateAction } from "react";

interface Props {
  pagina: number;
  setPagina: Dispatch<SetStateAction<number>>;
  maximo: number;
}

export const Paginacion = ({ pagina, setPagina, maximo }: Props) => {
  const [input, setInput] = useState<number>(1);
  const maximoPaginas = maximo.toPrecision(2);

  function previousPage() {
    setInput(input - 1);
    setPagina(pagina - 1);
  }

  function nextPage() {
    setInput(input + 1);
    setPagina(pagina + 1);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(parseInt(e.target.value));
    // setPagina(parseInt(e.target.value));
    if (isNaN(parseInt(e.target.value))) return;

    if (
      parseInt(e.target.value) < 1 ||
      parseInt(e.target.value) > Math.ceil(parseInt(maximoPaginas))
    ) {
      setPagina(1);
      // setInput(1);
    } else {
      setPagina(parseInt(e.target.value));
      setInput(parseInt(e.target.value));
    }
  };

  return (
    <div className="flex justify-center">
      <button
        className="font-semibold text-white mr-2 px-4 py-1 rounded-lg bg-teal-500 disabled:cursor-not-allowed disabled:hover:bg-teal-600 "
        disabled={pagina === 1 || pagina < 1}
        onClick={previousPage}
      >
        anterior
      </button>
      <input
        onChange={(e) => onChange(e)}
        min={1}
        className="border-solid text-right w-12 border-black border-2 rounded h-10"
        max={maximoPaginas}
        name="page"
        type="number"
        autoComplete="off"
        value={input}
      />
      <p className="m-2"> de {maximo.toPrecision(2)} </p>
      <button
        className=" font-semibold text-white  ml-2 px-4 py-1 rounded-lg bg-teal-500 disabled:cursor-not-allowed disabled:hover:bg-teal-600"
        disabled={pagina === Math.ceil(maximo) || pagina > Math.ceil(maximo)}
        onClick={nextPage}
      >
        siguiente
      </button>
    </div>
  );
};
