import Navbar from "./components/Navbar";
import Posts from "./components/Posts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>
        <span className="whitespace-nowrap">Hi, its nouman</span>
      </p>
      <Posts/>
      
    </main>
  );
}
