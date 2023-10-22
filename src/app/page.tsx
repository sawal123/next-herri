import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Image src="/images/bg.jpg" alt={'image'} width={80} height={80} />
    </main>
  )
}
