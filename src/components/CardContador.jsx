import { useCounter } from "../Hooks/useCounter";



export default function CardContador(){
    const { count, sumar, restar } = useCounter();
    
     let numerofavorito= "";
        if (count == 5) {
         
          numerofavorito = "es mi numero favorito";
        }
    return(
        <div className="card"> 
        {/* <h2>{numerofavorito}</h2> */}
        <h2>{count} {numerofavorito}</h2>
       


        <button className='btn' onClick={sumar}>
          ➕
        </button>
        <button className='btn' onClick={restar}>
          ➖
        </button>
       
      </div>
    )
}