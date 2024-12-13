function ListItems({children,onClick}){

    return(
        
        <li className="card" onClick={onClick}>
           {children}
           </li>

    )

}

export default ListItems;