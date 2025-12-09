import Link from 'next/link';

export default function Button({ text, url }) {
  return (
    <Link
      href={String(url)}
      className='px-6 py-3 max-sm:px-5 max-sm:py-2 rounded bg-[#4aaf7c] text-white hover:bg-[#53c38a] transition-colors cursor-pointer w-max font-bold inline-block'
    >
      {text}
    </Link>
  );
}
