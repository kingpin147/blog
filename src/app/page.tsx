import Navbar from "./components/Navbar";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10">
      <div>
      <span className="flex whitespace items-center text-xl text-slate-600 hover:text-black">Hi, its Nouman&apos;s blog
          
        </span>
        <Posts/>  
      </div>
        
           
    </main>
  );
}
