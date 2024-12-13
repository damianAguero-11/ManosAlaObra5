import { Link } from "react-router-dom";
function Menu({onClick,estado}){


    
return (


    <aside className={`sidebar ${estado}`} >
        <nav>
        <div className="bloquemenu">
    <img className='logo-app'src="https://w7.pngwing.com/pngs/126/780/png-transparent-computer-icons-organization-management-risk-information-others-miscellaneous-angle-text.png" alt="logo_app" />
    <h2>menú</h2>

    <button onClick={onClick}className="quit">x</button>
    </div>

    <div className="nav">
        <ul className="elementos">
            <li>
                <Link className='link' to={'/home'}>🏠 home</Link>
                </li>
            <li>
                <Link className='link' to={'/my-projects'}> 📁 projetcts</Link>
                </li>
            <li> <Link className='link' to={'/my-stories'}>📑 stories</Link></li>
        </ul>
    </div>

    <div className="userprofilelink">
        
        <img className='usuario' src="https://c0.klipartz.com/pngpicture/782/114/gratis-png-icono-de-perfil-icono-de-usuario-en-un-circulo-thumbnail.png" alt="usuario"/>
        <Link className='link' to={'/settings'}>
        <h3 > usuario 1</h3>
        </Link>
    </div>
    </nav>
</aside>
)
}

export default Menu;