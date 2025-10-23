import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

function Rating( {star = 10} ){

    const stars = [...Array(star).keys()]
    const [hover, setHover] = useState();
    const [select, setSelected] = useState();

    return(
        <div style={{
            // display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "20px",
        }}>
            {
                stars.map((_, index)=>{
                    const isActive = hover !== null ? 
                        index <= hover : 
                        select ? index <= select : false; 
                    return(
                        <FaStar size="2rem" key={index}
                            style={{

                                color: isActive ? "gold" : "gray",
    
                            }}
                            onClick={()=>setSelected(index)}
                            onMouseEnter={()=>setHover(index)}
                            onMouseLeave={()=>setHover(null)}
                        />
                        )
                })
            }

        </div>
    )
}

export default Rating;


