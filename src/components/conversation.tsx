'use client';
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Phone, Volume2, VolumeOff } from 'lucide-react';
import { useConversation } from '@elevenlabs/react';

interface ConversationProps {}

export function Conversation(props: ConversationProps) {
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>('');
  const conversation = useConversation();

  const { status, isSpeaking } = conversation;

  async function startConversation() {
    try {
      requestMicPermission();
      if (!hasPermission) return;
      await conversation.startSession({
        agentId: process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID!,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async function endConversation() {
    try {
      await conversation.endSession();
    } catch (error) {
      console.log(error);
    }
  }

  const requestMicPermission = async () => {
    try {
      await navigator.mediaDevices.getUserMedia({ audio: true });
      setHasPermission(true);
    } catch (error) {
      setErrorMsg('Microphone permission denied');
      console.error('Error requesting microphone permission:', error);
    }
  };

  async function toggleMute() {
    try {
      await conversation.setVolume({ volume: isMuted ? 1 : 0 });
      setIsMuted(!isMuted);
    } catch (error) {
      setErrorMsg('Failed to mute agent');
    }
  }

  useEffect(() => {}, []);

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="">
        <CardTitle className="text-center flex iterms-center my-auto justify-between">
          <span className="text-lg font-semibold">Nyota support agent</span>
          <div className="">
            <Button variant="ghost" className="cursor-pointer" onClick={toggleMute}>
              {isMuted ? (
                <VolumeOff className="w-4 h-4" />
              ) : (
                <Volume2 className="w-4 h-4" />
              )}
            </Button>
          </div>
        </CardTitle>
        <CardContent className="pt-4 flex flex-col items-center">
          {status === 'disconnected' ? (
            <Button
              variant="outline"
              className="cursor-pointer"
              onClick={startConversation}>
              <Phone className="w-4 h-4" />
              Start Conversation
            </Button>
          ) : (
            <Button
              variant="destructive"
              className="cursor-pointer mt-2"
              onClick={endConversation}>
              <Phone className="w-4 h-4" />
              End Conversation
            </Button>
          )}

          {status === 'connected' && (
            <span className="text-green-400 text-center py-4 animate-pulse">
              {isSpeaking ? 'Speaking' : 'Listening'}
            </span>
          )}
        </CardContent>
      </CardHeader>
    </Card>
  );
}
