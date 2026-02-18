import Image from 'next/image';

export default function Logo() {
  return (
    <Image className="w-[clamp(75px,7vw,80px)] justify-self-center sm:justify-self-start" src="/001k.svg" alt="logo" width={90} height={40} />
  );
}
