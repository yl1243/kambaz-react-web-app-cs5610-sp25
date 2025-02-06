// import { Link } from "react-router-dom";
// export default function AccountNavigation() {
//     return (
//         <div id="wd-account-navigation">
//             <Link to={`/Kambaz/Account/Signin`} > Signin </Link> <br />
//             <Link to={`/Kambaz/Account/Signup`} > Signup </Link> <br />
//             <Link to={`/Kambaz/Account/Profile`} > Profile </Link> <br />
//         </div>
//     );
// }

import { Link } from "react-router-dom";

export default function AccountNavigation() {
    return (
        <div className="list-group">
            <Link to="/Kambaz/Account/Signin" className="list-group-item list-group-item-action">
                Signin
            </Link>
            <Link to="/Kambaz/Account/Signup" className="list-group-item list-group-item-action">
                Signup
            </Link>
            <Link to="/Kambaz/Account/Profile" className="list-group-item list-group-item-action">
                Profile
            </Link>
        </div>
    );
}
