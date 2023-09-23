
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';
import MenuSection from './components/MenuSection/MenuSection';

function App() {

    return (
        <>
            <Layout>
                <Header/>
                <MenuSection/>
                <Footer/>
            </Layout>
        </>
    );
}

export default App;
