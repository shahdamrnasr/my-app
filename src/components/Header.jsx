function Header(){
  return(
    <>
      <header>
        <nav className="navbar navbar-expand-sm navbar-dark fixed-top" style={{backgroundColor:"#3e75acff"}}>
          <div className="container-fluid">
            <a className="navbar-brand logo" href="javascript:void(0)">logo</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0)" style={{color:"#000", fontWeight:"bold", borderBottom:"2px solid #fff"}}>Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0)" style={{color:"#ecf0f1", fontWeight:"bold"}}>About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0)" style={{color:"#ecf0f1", fontWeight:"bold"}}>person</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}
export default Header;