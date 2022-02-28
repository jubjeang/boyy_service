import React from 'react'
import './CommonCss.css';
import './Menu.css';
class Menu extends React.Component {
    render() {
      return (
        <div style={{ marginTop : 0, paddingTop : 0 }}> 
          <marquee direction="left" className='TextRun'>                 
              Enjoy a complimentary Tiger Strap gift when you purchase two items* While quantities last 
              <em>*Minimum one handbag from </em>
              <a href="/collections/buckle-handbags" title="BUCKLE HANDBAGS">
                  <em>BUCKLE</em>
              </a>
              <em> </em>collection.   
          </marquee>
          <div className="TextLogo" style={{ marginTop : 0, paddingTop : 0 }}>
            <p>B O Y Y</p>
          </div>
        </div>
      )
    }
  }   
  export default Menu