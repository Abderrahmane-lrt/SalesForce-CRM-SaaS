import { useSelector } from "react-redux";

const OpportunitiesSelector = () => {
    const opportinities = useSelector(opportinities => opportinities)
    console.log(JSON.stringify(opportinities));
    return ( 
    <ul>
     {
        opportinities.map((element, index) => <li key={index}>{element.status}</li>)
     }
    </ul>

     );
}
 
export default OpportunitiesSelector;