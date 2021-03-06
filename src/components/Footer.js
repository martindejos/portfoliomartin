import React from "react";
import { Navbar, NavbarBrand, Container } from "react-bootstrap";
import { SocialIcon } from "react-social-icons";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        
        <div className=" bg-success d-flex justify-content-center shadow-lg mt-5 fixed-bottom ">
          <Navbar color="dark" dark>
           
            <Container className="d-md-flex flex-row text-center ">
              <NavbarBrand className=" text-white" id="textoFooter">
               
                Contact: martindejos@gmail.com
              </NavbarBrand>

             
              <div className="d-md-flex flex-row justify-content-around">
               

                

                <SocialIcon
                  url="https://www.linkedin.com/in/mart%C3%ADn-madridejos-b832a4212/"
                  className="linkedin"
                  bgColor="black"
                  target="_blank"
                  style={{ height: 25, width: 25, margin: "5px" }}
                 
                />
                
                <a href="https://github.com/martindejos"><img src="https://midu.dev/images/tags/github.png"  style={{ height: 25, width: 25, margin: "5px", cursor: "pointer" }}/></a> 
              </div>
            </Container>
          </Navbar>
        </div>
      </React.Fragment>
    );
  }
}
export default Footer;

