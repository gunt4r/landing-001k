import Image from 'next/image';

export default function Logo() {
  return (
    <Image className="w-[clamp(60px,8vw,90px)] invert" src="/001k.svg" alt="logo" width={90} height={40} />

  );
}
