import React from 'react'


function Previewer({markdown}) {
    return (
        <div className="preview__container">
          <header></header>
          <div id="preview" dangerouslySetInnerHTML={{__html: markdown}}></div>
        </div>
    )
}

export default Previewer
