import Testimonials from '@/components/HomePage/testimonials'
import HomeSearch from '@/components/HomePage/homeSearch'
import HomeHeader from '@/components/HomePage/homeHeader'
import PopularSearches from '@/components/HomePage/popularSearches'
import BannerFeatures from '@/components/HomePage/banner'

export default function Home() {
  return (
    <main className="">
      <div className="md:h-screen">
        <HomeHeader />
        <HomeSearch />
      </div>
      <PopularSearches />
      <BannerFeatures />
      <Testimonials />
    </main>
  )
}
