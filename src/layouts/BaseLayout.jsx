import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import Footer from "../components/Footer"
import PurchasePopup from "../components/PurchasePopup"
import FloatingButton from "../components/FloatingButton"

const BaseLayout = () => {
    return (
        <div className="__variable_c476aa __variable_44c5d8 __variable_3cae6b __variable_e10379 __variable_ffbbde __variable_189f6d __variable_913606 __variable_f065bb __variable_cf4b9a antialiased">
            <h1 className="w-2 h-1 pointer-events-none absolute top-0 left-0 rgba(255,255,255,0) sitetitle">THE REAL WORLD</h1>
            <PurchasePopup />
            <div className="rootc">
                <FloatingButton />
                <Header />
                <main className="relative z-10 overflow-hidden bg-[#02040e] homeC">
                   <Outlet />
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default BaseLayout