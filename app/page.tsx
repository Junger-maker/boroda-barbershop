import Header from './components/header';
import Hero from './components/hero';
import Advantages from './components/advantages';
import Pricing from './components/pricing';
import Barbers from './components/barbers';
import Reviews from './components/reviews';
import Faq from './components/faq';
import BookingForm from './components/booking-form';
import Footer from './components/footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Pricing />
        <Barbers />
        <Reviews />
        <Faq />
        <BookingForm />
      </main>
      <Footer />
    </>
  );
}
