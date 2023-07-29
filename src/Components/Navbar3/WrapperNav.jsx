import { Navbar3 } from "./Navbar3";
import { Container } from "./index.style";
import React from "react";

export const WrapperNav = () => {
   return (
      <div>
         <Navbar3 />
         <Container>
            <article>
               <h1>What is Lorem ipsum</h1>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
               saepe dignissimos mollitia obcaecati eveniet, recusandae ipsum?
               Quae expedita debitis quos?
            </article>
         </Container>
      </div>
   );
};
