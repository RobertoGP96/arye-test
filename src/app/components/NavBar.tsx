import { LogIn, User2Icon } from "lucide-react";



export const NavBar = () => {
    return <nav className="navbar-top px-6  py-1.5 w-full  flex flex-row gap-1.5 justify-between items-center">
        <img
            src="/black-logo.svg"
            className="aspect-square"
            width={60}
            alt="AR&E logo"
        />
        <div className="flex flex-row gap-2">

            <button type="button" className="bg-orange-400 flex justify-center items-center gap-2 px-3 py-2 rounded-sm text-white cursor-pointer">
                <LogIn/>
                <span className="font-medium">Iniciar Sesión</span>
            </button>
            <button type="button" className="bg-orange-400 flex justify-center items-center gap-2 px-3 py-2 rounded-sm text-white cursor-pointer">
                <User2Icon/>
                <span className="font-medium">Registrarse</span>
            </button>
            
        </div>
    </nav>
}