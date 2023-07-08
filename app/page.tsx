'use client'
import Image from "next/image";
import NavBar from "./components/NavBar";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter()
  return (
    <main className="">
      My version of multi-step from <br />
      <button onClick={()=>{router.push('/step-one')}} className="inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md">
        go
      </button>
    </main>
  );
}
