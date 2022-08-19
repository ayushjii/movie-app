import Image from "next/image";


const Showexpand = (props) => {
  
    return (
      <div className='show-expand'>
        
        <div className='show-content'>
          <i className="show-close fas fa-times" onClick={props.closePop} ></i>
          
          <div className='show-poster'>
            <span className='show-poster-bg'>
              <Image src={props.imgLink} alt={props.name} width={200} height={400}/>
            </span>
            <span className='show-poster-main'>
              <Image src={props.imgLink} alt={props.name} width={200} height={400} />
            </span>
          </div>
          
          <div className='show-detail'>
            <h2>{props.name}</h2>
            <ul className="show-tags">
              <li className="show-rated">{props.country}</li>
              <li className="show-year">{props.lang}</li>
              <li className="show-year">{props.genres}</li>
            </ul>
            <div className="show-plot" dangerouslySetInnerHTML={{__html: props.plot }}>
            </div>
            
            <div className="show-credits">
              <p><strong>Network:</strong> {props.network}</p>
              <p><strong>Runtime:</strong> {props.runtime || 'N/A '}mins</p>
              <p><strong>Rating:</strong> {props.rating}</p>
              <p><strong>Status:</strong> {props.status}</p>
              <a href={props.link} target='_blank' rel="noreferrer">
                More info 
                <i className="fas fa-external-link-alt"></i>
              </a>
            </div>
          </div>
          
        </div>
      </div>
    )
  }

  export default Showexpand