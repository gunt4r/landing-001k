'use client';
import { HashLoader } from 'react-spinners';

export default function Loading() {
  return (
    <HashLoader
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#fff',
        zIndex: '100',
        color: '#000',
      }}
    />
  );
}
