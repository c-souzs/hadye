import BuildCompanyImage from "./components/sections/BuildCompanyImage"
import Contact from "./components/sections/Contact"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Introduction from "./components/sections/Introduction"
import Testimonials from "./components/sections/Testimonials"
import Workflows from "./components/sections/Workflows"

const App = () => {
    return (
        <>
            <Header />
            <main className="bg-gray-200 dark:bg-zinc-500">
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
