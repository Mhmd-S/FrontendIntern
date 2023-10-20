import { Outlet, Link } from "react-router-dom";

const Root = () => {
  return (
    <div className="w-screen h-screen bg-[black] grid grid-cols-1 grid-rows-[10%_90%] inset-0 bg-[url(/overlay.a588a288.webp)] bg-center">
        
        <ul className="w-full h-full flex flex-row justify-evenly items-center">
            <li>
                Logo
            </li>

            <li>
                Home
            </li>
            
            <li>
                Menu
            </li>
            
            <li>
                <Link to='email-security'>
                    Email Security
                </Link>
            </li>

            <li>
                <Link to='network-security'>
                    Network Secuirty
                </Link>
            </li>
        </ul>

        <div className="w-full h-full">
            <Outlet />
        </div>

    </div>
  )
}

export default Root