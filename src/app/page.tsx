import Testimonials from "@/components/HomePage/testimonials";
import Advantages from "@/components/HomePage/advantages";
import HomeSearch from "@/components/HomePage/homeSearch";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-[100dvh]">
      <main className="flex-1">
        <HomeSearch />
        <Advantages />
        <Testimonials />
      </main>
    </div>
  );
}
