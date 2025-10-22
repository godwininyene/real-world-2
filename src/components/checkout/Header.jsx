import { Link } from "react-router-dom"
import logo from './../../assets/images/trw-256.c3bb2895.png'
const Header = () => {
    return (
        <header className="text-center mb-12 mt-12">
            <div className="glow" />
            <Link to='/'>
                <img
                    src={logo}
                    alt="TRW Logo"
                    className="w-20 h-20 mx-auto mb-6"
                />
            </Link>
            <h1 className="text-4xl lg:text-6xl font-bold texture-text mb-4">
                CHOOSE YOUR PATH TO SUCCESS
            </h1>
            <p className="text-lg lg:text-xl text-gray-400">
                Join thousands crushing their competition and building enemies
            </p>
        </header>
    )
}
export default Header