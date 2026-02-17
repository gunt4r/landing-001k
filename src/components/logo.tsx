import Image from 'next/image';

export default function Logo() {
  return (
    <Image className="w-[clamp(90px,8vw,90px)] justify-self-center invert sm:justify-self-start" src="/001k.svg" alt="logo" width={90} height={40} />

  );
}
