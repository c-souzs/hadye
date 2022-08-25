import BuildCompanyImage from "./components/BuildCompanyImage"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Introduction from "./components/Introduction"
import Testimonials from "./components/Testimonials"
import Workflows from "./components/Workflows"

const App = () => {
    return (
        <>
            <Header />
            <main className="bg-zinc-500">
                <Introduction />
                <BuildCompanyImage />
                <Workflows />
                <Testimonials />
                <Contact />
            </main>
            <Footer />
        </>
    )
}

export default App
