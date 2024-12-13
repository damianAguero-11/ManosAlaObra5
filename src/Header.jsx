import BotonMenu from './BotonMenu';
function Header({onClick,nombre}){
    return(
        <header>
      
        <BotonMenu onClick={onClick}/>
      <h1 className='titulo'>
        {nombre}
      </h1>
      </header>
    )
}
export default Header;