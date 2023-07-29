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

   @media screen and (max-width: 768px) {
      display: block;
   }
`;

export const Menu = styled.div`
   margin-left: auto;
`;

export const ListWrapper = styled.ul`
   display: flex;
   padding: 0;
   @media screen and (max-width: 768px) {
      // Atur posisi ul ketika di mode mobile
      // Karena kita akan menggunakan kelas lain untuk mngatur tampilan menu, maka jadikan tampilannya menjadi tidak ada
      display: none;
      position: absolute;
      top: 60px;
      left: 0%;

      // Jadikan li menjadi vertical
      flex-direction: column;

      // Atur tinggi dan lebar element
      width: 100%;
      height: calc(100vh - 77px);
      background-color: white;
      border-top: 1px solid black;

      .expanded {
         display: block;
      }
   }
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
