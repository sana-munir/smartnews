import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/"><strong>SmartNews</strong></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/General">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Science">Science</Link>
                </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Sports">Sports</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/Technology">Technology</Link>
              </li>
              <li>
              <select class="form-select" style={{marginLeft:'200px', overflowY: 'auto'}} aria-label="Default select example" onChange={(e) => props.changecountry(e.target.value)}>
  <option selected>Select your country</option>
  <option value="tr">Turkiye</option>
  <option value="sa">Saudia Arabia</option>
  <option value="us">United States</option>
  <option value="cn">China</option>
  <option value="jp">Japan</option>
  <option value="ae">United Arab Emirates</option>
  <option value="cu">Cuba</option>
  <option value="rs">Serbia</option>
  <option value="ng">Nigeria</option>
  <option value="nl">Netherlands</option>
  <option value="nz">New Zealand</option>
  <option value="ph">Philipines</option>
  <option value="pl">Poland</option>
  <option value="pt">Portugal</option>
  <option value="ro">Romania</option>
  <option value="ru">Russia</option>
  <option value="sg">Singapore</option>
  <option value="si">Slovenia</option>
  <option value="sk">Slovakia</option>
  <option value="th">Thailand</option>
  <option value="tw">Taiwan</option>
  <option value="hu">Hungary</option>
  <option value="id">Indonesia</option>
  <option value="ie">Ireland</option>
  <option value="il">Israel</option>
  <option value="it">Italy</option>
  <option value="kr">Korea</option>
  <option value="lt">Lithuania</option>
  <option value="lv">Latvia</option>
  <option value="ma">Morocco</option>
  <option value="mx">Mexico</option>
  <option value="my">Malaysia</option>
  <option value="za">South Africa</option>
  <option value="in">India</option>
</select>
</li>
            {/*<li className="nav-item dropdown" style={{marginLeft:'400px'}}>
          <div className="nav-link dropdown-toggle" data-bs-toggle="dropdown" style={{color:'lightgreen'}} >
            <strong>Select Country</strong>
          </div>
          <ul className="dropdown-menu">
            <li><div className="dropdown-item" role="button" onClick={()=>{props.changeCountry('in')}}>India</div></li>
            <li><div className="dropdown-item" role="button" onClick={()=>{props.changeCountry('ae')}}>United Arab Emirates</div></li>
            {/*<li><hr classname="dropdown-divider"  /></li>
            <li><div className="dropdown-item">Something else here</div></li>
          </ul>
        </li>*/}
        </ul>
          </div>
        </div>
      </nav>
    )
}

export default Navbar;
