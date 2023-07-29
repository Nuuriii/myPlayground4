import styled from "styled-components";

export const Navigation = styled.nav`
   height: 60px;
   width: 100%;
   display: flex;
   align-items: center;
   position: relative;
   padding: 0.5rem 0rem;
   background-color: #fff;
   color: black;
   box-shadow: 0 2px 2px 2px rgba(9, 9, 9, 0.23);
`;

export const BrandName = styled.a`
   text-decoration: none;
   color: black;
   font-size: 1.3rem;
   margin-left: 1rem;
`;

export const Hamburger = styled.button`
   // Hapus border bawaan button
   border: 0;
   height: 40px;
   width: 40px;
   padding: 0.5rem;
   border-radius: 50%;
   background-color: #283b8b;
   cursor: pointer;
   transition: 0.2s ease-in-out;

   // Memposisikan icon ke kanan dan buat rata tengah
   position: absolute;
   top: 50%;
   right: 25px;
   transform: translateY(-50%);
   display: none;

   &:hover {
      background-color: #2642af;
   }
`;

export const Menu = styled.div`
   margin-left: auto;
`;

export const ListWrapper = styled.ul`
   display: flex;
   padding: 0;
`;

export const List = styled.li`
   // Menghapus bullet efek, dan mengatur margin kiri dan kanan
   list-style-type: none;
   margin: 0 1rem;
   a {
      text-decoration: none;
      color: gray;
      display: block;
      width: 100%;
   }
`;
