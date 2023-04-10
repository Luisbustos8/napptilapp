import { Footer } from "./Footer"
import { Header } from "./Header"




export const Layout = ({ children }) => {

    return (
        <div className="flex flex-col">
            <Header />
            <main className="h-max">
                {children}
            </main>
            <Footer />
        </div>
    )
}