import React , {useState} from 'react'
import marked from 'marked'

import Editor from './components/Editor';
import Previewer from './components/Previewer';

import './App.css';


const placeholder = `# Hello World, this is my Markdown Previewer

## This is a sub-heading...

 \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

how to make BOLD LETER **bold**...!
how to make BOLD LETER _italic_.
Or...**_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and

> Block Quotes!

And if you want to get really crazy, even tables:

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. this project is create for the requirement for FCC
1. by John Vincent Racasa
1. thank you freecodecamp for the knowledge and experience!!! Love it a lot.

![freeCodeCamp Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/FreeCodeCamp_logo.png/800px-FreeCodeCamp_logo.png)

`;


const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};


function App() {

  const [markdown, setMarkdown] = useState(placeholder)

  const handleTextChange = (e) => {
    setMarkdown((e.target.value))
  }

  let markdownPreview = marked(markdown, {renderer: renderer, breaks: true})

  return (
    <div className="App">
      <Editor  handleTextChange = {handleTextChange} text={markdown}/>
      <Previewer markdown= {markdownPreview}/>
    </div>
  );
}

export default App;
