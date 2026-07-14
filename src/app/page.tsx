import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryGrid from "@/components/CategoryGrid";
import RecentArticles from "@/components/RecentArticles";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/posts";

export default function Home() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main>
        <Hero />
        <CategoryGrid />
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <RecentArticles posts={posts} />
            </div>
            <Sidebar />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
