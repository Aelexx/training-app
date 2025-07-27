import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return(
        <div className="layouts">
                    <Link to="/">
                    <div className="cards">
                        Главная 
                    </div>
                    </Link>
                    <Link to="/cheap">
                        <div className="cards">
                         А как <br></br> дешевле? 
                    </div>
                    </Link>
                    <Link to="/speak">
                    <div className="cards">
                         А как <br></br> говорить?
                    </div>
                     </Link>
                    <Link to="/watch">
                    <div className="cards">
                         А что <br></br> посмотреть? 
                    </div>
                    </Link>
                    <Link to="/custom">
                    <div className="cards">
                         А какие <br></br> традиции?
                    </div>
                    </Link>
                    <Link to="/hint">
                    <div className="cards">
                         А что <br></br> если?.. 
                    </div>
                    </Link>
                    <Link to="/safe">
                    <div className="cards">
                         А как <br></br> безопасней?
                    </div>
                    </Link>       
            <Outlet />
        </div>
    )
};
export default Layout;

