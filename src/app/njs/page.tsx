import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        $npx create-next-app@latest<br/>
        What is your project named? yes<br/>
        Would you like to use Typescript? yes<br/>
        Would you like to use ESlint? yes<br/>
        Would you like to use Tailwind CSS? yes<br/>
        Would you like to use 'src/' directory? yes<br/>
        Would you like to use App Router? yes<br/>
        Would you like to use customize the default import alias? No<br/>
      </div>
      <div>
        $npm i
        $npm run dev

      </div>
    </main>
  );
}
