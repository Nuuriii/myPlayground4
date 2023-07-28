import styled from "styled-components";

export const Wrapper = styled.div`
   display: flex;
   justify-content: right;
   padding: 1rem;
   width: 100vh;
   height: 1rem;
   ul {
      display: none;
   }
   .show {
      display: block;
   }

   div > #hamburger {
      display: none;
   }

   div > .hamburger {
      display: block;
      width: 3rem;
      height: 60px;
      position: relative;
      cursor: pointer;
      padding: 0 5px;
      background-color: ;
   }
   div > .hamburger > .line {
      position: absolute;
      height: 6px;
      width: 80%;
      background-color: #000;
      transition: 0.5s;
   }
   div > .hamburger > .line:nth-child(1) {
      top: 12px;
   }
   div > .hamburger > .line:nth-child(2) {
      top: 24px;
   }
   div > .hamburger > .line:nth-child(3) {
      top: 36px;
   }
   #hamburger:checked + .hamburger .line:nth-child(1) {
      transform: translateY(12px) rotate(-45deg);
   }
   #hamburger:checked + .hamburger .line:nth-child(2) {
      opacity: 0;
   }

   #hamburger:checked + .hamburger .line:nth-child(3) {
      transform: translateY(-12px) rotate(45deg);
   }
`;
