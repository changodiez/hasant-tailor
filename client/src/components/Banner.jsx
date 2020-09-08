import React from 'react';


const Banner = () => {
let randomNumber = Math.floor(Math.random()*10)
let backgroundImageLink = `url(../../src/Assets/${randomNumber}.jpeg)`

    return ( 
        <div className="banner" >
            <h1 className="banner-text">
            “Our vision has always been to make luxury tailoring accessible to everyone.”
            </h1>
        </div>
     );
}
 
export default Banner;