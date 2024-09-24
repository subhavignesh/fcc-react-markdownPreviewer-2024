import React, { useState } from 'react'
import { marked } from 'marked'; // Correct named import for marked

marked.setOptions({
    gfm: true,
    breaks: true, // Treat single line breaks as <br>
    headerIds: true,
    sanitize: true,
    smartLists: true,  // Use smarter list formatting
    smartypants: true,
    highlight: function(code, lang) {
        return hljs.highlightAuto(code).value;
      }
  });


const MarkdownPreviewer = () => {

    const [markdown, setMarkdown] = useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine === '\`\`\`' && lastLine === '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`)
    

    const handleChange = (e) => {
        setMarkdown(e.target.value)
    }

  return (
    <div className='screen-max-width h-screen border-2 border-black flex-col items-center justify-center'>

        <div id='textArea' className='w-[40vw] h-[40vh] border-2 border-black'>
            <div className='font-semibold w-full bg-seaBlue-200 border-2 border-black'>Editor</div>
            <textarea id="editor" 
            className='w-full h-[90%] p-3' 
            placeholder='Type your markdown here...'
            onChange={handleChange}
            value={markdown}
            ></textarea>
        </div>

        <div id='previewArea' className='w-[72.8vw] h-[59.5vh] border-2 border-black'>
            <div className='font-semibold w-full bg-seaBlue-200 border-2 border-black'>Previewer</div>
            <div id='preview' 
            className='w-full h-[90%] p-3 overflow-y-auto'
            dangerouslySetInnerHTML={{ __html: marked.parse(markdown) }} // Using only dangerouslySetInnerHTML
            />
        </div>
    </div>
  )
}

export default MarkdownPreviewer