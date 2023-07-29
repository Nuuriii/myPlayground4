import { Navbar } from "./Navbar";
import "./style/index.css";

export const Wrapper = () => {
   return (
      <div>
         <Navbar />
         <div className='container'>
            <article>
               <h1>What is Lorem Ipsum</h1>
               Lorem ipsum dolor sit amet consectetur, adipisicing elit.
               Laudantium eligendi ratione laborum similique minus, fugit
               reiciendis ipsa. Quibusdam, consequuntur nostrum!
            </article>
         </div>
      </div>
   );
};
