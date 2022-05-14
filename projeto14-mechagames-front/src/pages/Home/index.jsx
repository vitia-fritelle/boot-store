import { useContext } from "react";
import UserContext from '../../contexts/userContext';
import Header from "../../components/mainComponents/Header";

export default () => {

    const user = useContext(UserContext);
    console.log(user.token)
    return (
        <>
            <Header/>
        </>
    );
};