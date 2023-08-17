import React, {useState} from "react";
import Header from './header/Header';
import Body from './body/Body';
import Footer from './footer/Footer';

const MainComponent = () => {

    const [User, setUser] = useState(null);

    return (
        <div>
            <Header User={User} setUser={setUser}/>
            <Body User={User} setUser={setUser}/>
            <Footer />
        </div>
    );
}

export default MainComponent;