import Link from "next/link";


export const cellFunction_link = ({value}: any) => {
    const href = "/detail/" + value;
    return (
      <Link href={href}>
        <a className="px-6 py-2 bg-gray-700 hover:bg-gray-500 text-white rounded-lg text-sm font-bold">
          {("0000" + value).slice(-4)}
        </a>
      </Link>
    );
  };