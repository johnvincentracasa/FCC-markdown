import React from 'react'

function Editor({handleTextChange, text}) {
    return (
        <div className="editor__container">
            <textarea id="editor"  onChange={handleTextChange} value={text}/>
        </div>
    )
}

export default Editor
