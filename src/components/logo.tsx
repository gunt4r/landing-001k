import Image from 'next/image';

export default function Logo() {
  return (
    <Image className="w-[clamp(75px,7vw,80px)] justify-self-center transition-opacity duration-500 hover:opacity-70 sm:justify-self-start" src="/001k.svg" alt="logo" width={90} height={40} />
  );
}
