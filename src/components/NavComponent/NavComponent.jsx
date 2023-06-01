import React from 'react'
import Hamburger from '../Hamburger/Hamburger'

 const NavComponent = () => {
  return (
    <>
    
        <div className='navigation'>
            <ul>
                <li>item1</li>
                <li>item2</li>
                <li>item3</li>
            </ul>
            <div className='hamburger'></div>
            <Hamburger/>
        </div>

        <style jsx>{`
        .navigation{
            width:100%;position:fixed;top:0;z-index:9999;background-color:black;color:white;text-
        }
        
        .navigation ul{
            list-style-type: none;float:right;text-align:right;padding-top:10px;width:200px;margin:0;transition: all 0.3s;-moz-transition: all 0.3s;-webkit-transition: all 0.3s;-o-transition: all 0.3s;-ms-transition: all 0.3s;text-transform:uppercase;color:white;text-decoration:none;text-transform:uppercase;text-decoration:none;cursor

        }

        .navigation ul li{
            display:inline-block;float:left;width:100%;position:relative;text-align:left;cursor:pointer;text-align:left;color:white;text-decoration:none;text-transform:uppercase;text-decoration:none;cursor:pointer;transition: all 0.3s;-moz-transition: all 0.3s;-webkit-transition: all 0.3s;-o-transition: all 0.3s;-ms-transition: all 0.3s;text-transform:

        }
        
        `}</style>


    
    
    </>
  )
}


export default NavComponent