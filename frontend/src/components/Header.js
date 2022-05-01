import { getUserInfo } from "../localStorage";

/* eslint-disable arrow-body-style */
const Header = {
  render: () => {
    const { name, isAdmin } = getUserInfo();
    return `
        <div class="logo-area">
               
            <a href = "/#/"> Racer<span style="color: rgb(250, 36, 36)">X</span></a>
            <a href = "http://localhost:8000/"> Events<span style="color: rgb(250, 36, 36)">X</span></a>

               
           </div>
           <div class = "logo-area1">
           ${
             name
               ? `<a href="/#/profile"> <span style=" color :rgb(169 145 12)">${name}</span></a>`
               : `<a href="/#/signin">Sign-In</a>`
           }    

                ${
                  isAdmin
                    ? `<a href="/#/dashboard" class = "logo-area1">Dashboard</a>`
                    : ""
                }
               <a href="/#/cart">
                  <img src="https://www.freeiconspng.com/uploads/cart-icon-16.png" style="height:4rem; width:4rem; ">
               </a>
               
           </div> 
      `;
  },
  after_render: () => {},
};
export default Header;
