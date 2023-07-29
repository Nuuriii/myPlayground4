import {
   Navigation,
   BrandName,
   Hamburger,
   Menu,
   ListWrapper,
   List,
} from "./navbar.style";

export const Navbar3 = () => {
   return (
      <Navigation>
         <BrandName>LINUX</BrandName>
         <Hamburger>
            <svg
               xmlns='http://www.w3.org/2000/svg'
               className='h-5 w-5'
               viewBox='0 0 20 20'
               fill='white'
            >
               <path
                  fillRule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
                  clipRule='evenodd'
               />
            </svg>
         </Hamburger>
         <Menu>
            <ListWrapper>
               <List>
                  <a href='/'>Home</a>
               </List>
               <List>
                  <a href='/about'>About</a>
               </List>
               <List>
                  <a href='/contact'>Contact</a>
               </List>
            </ListWrapper>
         </Menu>
      </Navigation>
   );
};
