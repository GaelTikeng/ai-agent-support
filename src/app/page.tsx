import { Conversation } from '@/components/conversation';
import Image from 'next/image';
import { Navbar } from '../components/nav/navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden">
      <Navbar />
      <div className="absolute -z-10 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-[100px] animate-pulse" />
      <div className="min-h-screen items-center flex">
        <small className="text-sm text-gray-500">Powered by Nyota LTD</small>
        <h1 className="text-transparent bg-clip-text bg-gradient-to-r from-[#2835a0] to-purple-600">
          Realtime Voice Agent
        </h1>
        <Conversation />
        <small className="text-xs text-gray-500 my-6">
          The app requires microphone access to work. Please enablle your microphone
        </small>
      </div>
    </main>
  );
}
