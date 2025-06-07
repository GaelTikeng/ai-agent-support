import { Conversation } from '@/components/conversation';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute -z-10 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-[100px] animate-pulse" />

      <small className="text-sm text-gray-500">Powered by Nyota LTD</small>
      <h1 className="text-4xl font-bold mb-6">Realtime Voice Agent</h1>
      <Conversation />
      <small className="text-xs text-gray-500 my-6">
        The app requires microphone access to work. Please enablle your microphone
      </small>
    </main>
  );
}
