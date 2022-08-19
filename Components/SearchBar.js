const Search = (props) => {

    let sendValue = (e) => {
      props.getInputValue(e.target.value)
    }
    
    const handleSubmit = () => {
      props.getSubmit();
    }
    
    const handleKeyDown = (e) => {
      if(e.key === 'Enter'){
        props.sendEnter();
        console.log('Enter');
      }
    }
    return(
        <div className='h-24 flex flex-col'>
          <div className='flex'>
            <input className="border appearance-none outline-0 h-10 bg-white px-0 py-2 max-w-sm" type='text' onChange={sendValue} onKeyDown={handleKeyDown} placeholder='Enter word...' />
            <button className="border appearance-none outline-0 h-10 bg-white px-0 py-2 cursor-pointer" onClick={handleSubmit} ><i className="fas fa-search"></i></button>
          </div>
        </div>
      )
    }

    export default Search;