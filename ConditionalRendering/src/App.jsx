import Iitem from "./assets/components/Challenge2Component";

import Item from "./assets/components/challenge1component";

 function App() {

   return (
    <>
     <section>
       <h1>Sally Ride's Packing List</h1>
       <ul>
         <Item 
           isPacked={true} 
           name="Space suit" 
         />
         <Item 
           isPacked={true} 
           name="Helmet with a golden leaf" 
         />
         <Item 
           isPacked={false} 
           name="Photo of Tam" 
         />
       </ul>
     </section>
     
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul>
        <Iitem 
          importance={9} 
          name="Space suit" 
        />
        <Iitem 
          importance={0} 
          name="Helmet with a golden leaf" 
        />
        <Iitem 
          importance={6} 
          name="Photo of Tam" 
        />
      </ul>
    </section>
  

     
     </>
   );
 }

export default App;
