import React, { useState } from 'react'

import {data} from './data'


function index() {

    const [select, setSelected] = useState(null)

    const handleClick = (id) =>{
        setSelected( select === id ? null : id)

    }

  return (
    <div className='wrapper'>
       <div className='accordian'>    
            {data && data.length > 0 ?(
            
                <div className=''>
                    {
                        data.map((dataItem) => (
                        <div key={dataItem.id} className='item' style={{cursor:'pointer'}}>
                            <div onClick={()=> handleClick(dataItem.id)}>
                              <h3> {dataItem.name}</h3> 
                            </div>
                            <div >
                                +
                            </div>
                            <div >
                                {select === dataItem.id ? 
                                
                                <div className='content'>
                                    {dataItem.bio}
                                </div>

                                :null}
                            </div>
                            
                        </div>
                        ))
                    }
                </div>
            )
            : null}

      </div>
    </div>
  )
}

export default index
