import React from 'react';
import style from './SearchBar.module.css';

import { GiMagnifyingGlass } from "react-icons/gi";


export default function SearchBar({onSearch}) {
  const [search, setSearch] = React.useState('');


  const handleOnSearch = () => {
    // const input = document.getElementById('searchInput');
    // onSearch(input.value);
    // input.value = '';
    
    onSearch(search);
    setSearch('');
  };


  return (
    <div className={style.contForm}>
      <input 
        id='searchInput'
        placeholder='Buscar ciudad..'
        autoComplete='off'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        onKeyPress={(e) => {if(e.key === 'Enter') handleOnSearch()}}
      />
      <button   onClick={handleOnSearch}   className={style.btn}>
        <GiMagnifyingGlass/>
      </button> 


    </div>

  );
}

// export default function SearchBar({onSearch}) {

//   let valor = "";

//   const valorChange = e => {
//     valor = e.target.value;
//     // console.log(valor);
    
//   };

//   return (
//     <form onSubmit={(e) => {
//       e.preventDefault();
//       console.log(valor);
//       onSearch(valor);
      
//     }}>
//       <input
//         onChange={valorChange}
//         type="text"
//         placeholder="Ciudad..."
//       />
      
//       <button type="submit" value="Agregar" className={style.btn}>
//         AGREGAR
//       </button> 
//     </form>
//   );
// }

