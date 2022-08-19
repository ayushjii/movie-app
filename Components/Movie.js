import Image from "next/image";


const Show = (props) => {
  
    let handleShowClick = (e) => {
      props.showClicked(e.target.dataset.id);
    }
    
    return (
      <div className='show' 
        id={props.id} 
        data-id={props.id} 
        onClick={handleShowClick} >
        
        <Image src={props.imgLink} data-id={props.id} alt="" width={200} height={400}/>
        <h1>{props.name}</h1>
      </div>
    )
  }

  export default Show;