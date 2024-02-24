import Footer from "@/components/Footer";
import type { Metadata } from "next";

export default function AboutPage() {
  return (
    <div className="flex h-screen flex-col justify-between bg-black">
      <main className="flex h-full w-full items-center justify-center px-8">
        <div className="flex flex-col font-mono" dir="auto">
          <p>تو این تاریکی کنار ماه</p>
          <p>زمان نداره نگاه به ما</p>
          <p>ماییم و روح روشنایی</p>
          <p>سال هاست که مردن ستاره‌ها</p>
        </div>
      </main>
      <Footer link="/" showIcons={true} />
    </div>
  );
}

export const metadata: Metadata = {
  title: "About Jomleha",
};
