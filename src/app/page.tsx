import { VoiceRecorderView } from "@/features";

export default function Home() {
  return (
    <main className=' relative flex min-h-screen flex-col items-center justify-between p-24'>
      <VoiceRecorderView />
    </main>
  );
}
