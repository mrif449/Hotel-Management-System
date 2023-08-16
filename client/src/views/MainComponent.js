import React, {useState} from "react";
import Header from './header/Header';
import Body from './body/Body';
import Footer from './footer/Footer';

const MainComponent = () => {

    const [User, setUser] = useState(undefined);

    return (
        <div>
            <Header />
            <Body User={User} setUser={setUser}/>
            <Footer />
        </div>
    );
}

export default MainComponent;