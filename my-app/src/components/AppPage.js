import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBMask,
MDBRow, MDBCol, MDBBtn, MDBView, MDBContainer, MDBFormInline } from "mdbreact";

class AppPage extends React.Component {
state = {
  collapsed: false
};

handleTogglerClick = () => {
this.setState({
  collapsed: !this.state.collapsed
});
};

render() {
const overlay = (
  <div id="sidenav-overlay" style={{ backgroundColor: "transparent" }} onClick={this.handleTogglerClick} />
);
return (
<div id="apppage">
  <Router>
    <div>
      <MDBNavbar color="primary-color" dark expand="md" fixed="top" scrolling transparent>
        <MDBContainer>
          <MDBNavbarBrand>
            <strong className="white-text">ISA</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.handleTogglerClick} />
          <MDBCollapse isOpen={this.state.collapsed} navbar>
            <MDBNavbarNav left>
              <MDBNavItem active>
                <MDBNavLink to="#!">HOME</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">ABOUT</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">LEADERSHIP</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">EVENTS</MDBNavLink>
              </MDBNavItem>

              <MDBNavItem>
                <MDBNavLink to="#!">RESOURCES</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to="#!">CONTACT</MDBNavLink>
              </MDBNavItem>
            </MDBNavbarNav>
            <MDBNavbarNav right>
              <MDBNavItem>
                <MDBFormInline waves>
                  <div className="md-form my-0">
                    <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                  </div>
                </MDBFormInline>
              </MDBNavItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      {this.state.collapsed && overlay}
    </div>
  </Router>
  <MDBView>
    <MDBMask className="d-flex justify-content-center align-items-center gradient">
      <MDBContainer>
        <MDBRow>
          <div className="white-text text-center text-md-left col-md-6 mt-xl-5 mb-5">
            <h1 className="h1-responsive font-weight-bold mt-sm-5">
              {/* Make purchases with our app{" "} */}
            </h1>
            <hr className="hr-light" />
            <h6 className="mb-4">
                      ISA at LSU is committed to promoting better friendship, interaction, and understanding among 
                      international students and between international students and other groups at LSU and the wider
                      Baton Rouge community. We are devoted to interpersonal connections and cross-cultural
                      excellence among our members by championing initiatives, and organizing social, cultural,
                      and career development events. We work to create a more inclusive and prosperous
                      international community at LSU
            </h6>
            {/* <MDBBtn color="white">Download</MDBBtn>
            <MDBBtn outline color="white">
              Learn More
            </MDBBtn> */}
          </div>
          <MDBCol md="6" xl="5" className="mt-xl-5">
            <img src="http://drive.google.com/uc?export=view&id=1Rfke6mEu6U3mZ0r27kFiEWJxRYovqV7N" alt="" className="img-fluid" />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBMask>
  </MDBView>

  <MDBContainer>
    <MDBRow className="py-5">
      <MDBCol md="12" className="text-center">
        <p>
          
        </p>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</div>
);
}
}

export default AppPage;