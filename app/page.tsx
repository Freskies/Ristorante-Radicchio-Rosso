import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';
import Gallery from './components/Gallery/Gallery';
import About from './components/About/About';
import Info from './components/Info/Info';
import Footer from './components/Footer/Footer';

export default function Home () {
	return <div className="min-h-dvh bg-white">
		<Header/>
		<main>
			<Hero/>
			<About/>
			<Menu/>
			<Gallery/>
			<Info/>
		</main>
		<Footer/>
	</div>;
}
