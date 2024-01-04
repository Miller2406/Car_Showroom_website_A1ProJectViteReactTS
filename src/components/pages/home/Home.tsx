import AboutUs from "@/components/pages/home/aboutUs/AboutUs";
import Brands from "@/components/pages/home/brands/Brands";
import CarouselPictureShow from "@/components/pages/home/carouselPictureShow/CarouselPictureShow";
import Recommanded from "@/components/pages/home/recommmanded/Recommanded";
import TellCustomers from "@/components/pages/home/tellCustomers/TellCustomers";
import Transitions from "@/components/pages/home/transitions/Transitions";

function Home() {
  return (
    <div>
      <CarouselPictureShow />
      <TellCustomers />
      <Recommanded />
      <Brands />
      <Transitions />
      <AboutUs />
    </div>
  );
}

export default Home;