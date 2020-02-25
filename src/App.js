import React from "react";
import "./App.css";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Login from "./login";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  validate = e => {
    if (e.target.value.length === 0) {
      this.setState({
        email: "input tidak boleh kosong "
      });
    } else {
      this.setState({
        email: ""
      });
    }
  };
  validatePass = e => {
    if (e.target.value.length === 0) {
      this.setState({
        password: "password tidak boleh kosong"
      });
    } else if (e.target.value.length < 8) {
      this.setState({
        password: "password setidaknya memiliki 8 karakter"
      });
    } else {
      this.setState({
        password: ""
      });
    }
  };

  render() {
    return (
      <div>
        <div className="container">
          <form>
            <div className="email">
              <label>Email</label>
              <input
                id="email"
                type="email"
                required
                placeholder="Apa Emailmu??"
                // value={this.state.email}
                onKeyPress={this.validate}
                onChange={e => this.setState({ email: e.target.value })}
              />
            </div>
            {this.state.email && (
              <span style={{ color: "red" }}>{this.state.email}</span>
            )}
            <br />
          </form>
          <form>
            <label>Password </label>
            <input
              type="password"
              placeholder="apa password mu"
              onKeyPress={this.validatePass}
            />
            {this.state.password && (
              <span style={{ color: "red" }}>{this.state.password}</span>
            )}
          </form>
        </div>
      </div>

      // <form>
      //   <div className="ini">
      //     <label>Email</label>
      //     <input type="email" value={this.state.email} />
      //   </div>
      // </form>
    );
  }
}

export default App;
// function App() {
//   return (
//     <Router>
//       <div className="App">
//         <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//           <div className="container">
//             <Link className="navbar-brand" to={"/sign-in"}>
//               positronX.io
//             </Link>
//             <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//               <ul className="navbar-nav ml-auto">
//                 <li className="nav-item">
//                   <Link className="nav-link" to={"/sign-in"}>
//                     Login
//                   </Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to={"/sign-up"}>

//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>

//         <div className="auth-wrapper">
//           <div className="auth-inner">
//             <Switch>
//               <Route exact path="/" component={Login} />
//             </Switch>
//           </div>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;
