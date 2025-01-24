import React, { useCallback } from 'react'
import { createEditor, Descendant, Transforms,Range,Text } from 'slate'
import { Slate, Editable, withReact, } from 'slate-react'
import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'
import { HistoryEditor } from 'slate-history'
import { renderLf, renderME } from './Elmrender'
import { CustomElement, CustomText } from './Declarations'


//declare custom types for slate
declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor
    Element: CustomElement
    Text: CustomText
  }
}

//our editor component
function Editor(): JSX.Element {
    //intial value of the editor
    const [intialValue,setInitialValue] = React.useState<Descendant[]>([
        {type:'paragraph',
        children:[{text:'A line of text in a paragraph.'}]
    },
]);

//memoised render function
const rendermemoised  = useCallback(renderME,[]);
//memoised render leaf function
const renderLfs = useCallback(renderLf,[]);

//our editor instance
 const editor = React.useMemo(() => withReact(createEditor()), []);
 

 
//
const handleClick = (format:string)=>{

  if(format === "bold"){

  if (editor.selection && !Range.isCollapsed(editor.selection)) {
    Transforms.setNodes(
      editor,
      { bold: true }, // Add a bold property to the text
      { match: Text.isText, split: true } // Apply only to text nodes and split nodes as needed
    );
  } else {
    alert('Please select some text to bold!');
  }
}
else if(format === "italic"){

  if (editor.selection && !Range.isCollapsed(editor.selection)) {
    Transforms.setNodes(
      editor,
      { italic: true }, // Add a bold property to the text
      { match: Text.isText, split: true } // Apply only to text nodes and split nodes as needed
    );
  } 
  else {
    alert('Please select some text to italicize!');
  }
}
else if(format === "underline"){

  if (editor.selection && !Range.isCollapsed(editor.selection)) {
    Transforms.setNodes(
      editor,
      { underline: true }, // Add a bold property to the text
      { match: Text.isText, split: true } // Apply only to text nodes and split nodes as needed
    );
  }
}
else if(format === "h1"){

  if (editor.selection && !Range.isCollapsed(editor.selection)) {
    Transforms.setNodes(
      editor,
      { h1: true }, // Add a bold property to the text
      { match: Text.isText, split: true } // Apply only to text nodes and split nodes as needed
    );
  }
  else {
    alert('Please select some text to make h1!');
  }
}
else if(format === "h2"){

  if (editor.selection && !Range.isCollapsed(editor.selection)) {
    Transforms.setNodes(
      editor,
      { h2: true }, // Add a bold property to the text
      { match: Text.isText, split: true } // Apply only to text nodes and split nodes as needed
    );
  }
  else {
    alert('Please select some text to make h2!');
  }
}
else if(format === "h3"){

  if (editor.selection && !Range.isCollapsed(editor.selection)) {
    Transforms.setNodes(
      editor,
      { h3: true }, // Add a bold property to the text
      { match: Text.isText, split: true } // Apply only to text nodes and split nodes as needed
    );
  }
  else {
    alert('Please select some text to make h3!');
  }
}
else if(format === "h4"){

  if (editor.selection && !Range.isCollapsed(editor.selection)) {
    Transforms.setNodes(
      editor,
      { h4: true }, // Add a bold property to the text
      { match: Text.isText, split: true } // Apply only to text nodes and split nodes as needed
    );
  }
  else {
    alert('Please select some text to make h4!');
  }
}
else if(format === "h5"){

  if (editor.selection && !Range.isCollapsed(editor.selection)) {
    Transforms.setNodes(
      editor,
      { h5: true }, // Add a bold property to the text
      { match: Text.isText, split: true } // Apply only to text nodes and split nodes as needed
    );
  }
  else {
    alert('Please select some text to make h5!');
  }
}
else if(format === "h6"){

  if (editor.selection && !Range.isCollapsed(editor.selection)) {
    Transforms.setNodes(
      editor,
      { h6: true }, // Add a bold property to the text
      { match: Text.isText, split: true } // Apply only to text nodes and split nodes as needed
    );
  }
  else {
    alert('Please select some text to make h6!');
  }
}
else if(format === "quote"){

  if (editor.selection && !Range.isCollapsed(editor.selection)) {
    Transforms.setNodes(
      editor,
      { quote: true }, // Add a bold property to the text
      { match: Text.isText, split: true } // Apply only to text nodes and split nodes as needed
    );
  }
  else {
    alert('Please select some text to make quote!');
  }
}
}
  
    //function to render elements
    return (
        <div className=' flex  w-5/6 h-full bg-cyan-500'>
      
            <Slate editor={editor} initialValue={intialValue} onChange={(value)=>setInitialValue(value)}>
           
              <div className='flex flex-col gap-4 w-30 h-full p-2 m-3'>
                <button  className='w-20 h-10 bg-black text-cyan-50 rounded' onMouseDown={()=>handleClick("bold")}>bold</button>
                <button  className='w-20 h-10 bg-black text-cyan-50 rounded' onMouseDown={()=>handleClick("italic")}>italic</button>
                <button  className='w-20 h-10 bg-black text-cyan-50 rounded' onMouseDown={()=>handleClick("underline")}>underline</button>
                <button  className='w-20 h-10 bg-black text-cyan-50 rounded' onMouseDown={()=>handleClick("h1")}>h1</button>
                <button  className='w-20 h-10 bg-black text-cyan-50 rounded' onMouseDown={()=>handleClick("h2")}>h2</button>
                <button  className='w-20 h-10 bg-black text-cyan-50 rounded' onMouseDown={()=>handleClick("h3")}>h3</button>
                <button  className='w-20 h-10 bg-black text-cyan-50 rounded' onMouseDown={()=>handleClick("h4")}>h4</button>
                <button  className='w-20 h-10 bg-black text-cyan-50 rounded' onMouseDown={()=>handleClick("h5")}>h5</button>
                <button  className='w-20 h-10 bg-black text-cyan-50 rounded' onMouseDown={()=>handleClick("h6")}>h6</button>
                <button  className='w-20 h-10 bg-black text-cyan-50 rounded' onMouseDown={()=>handleClick("quote")}>quote</button>

              </div>
              <div className='p-8  w-full h-full bg-green-700'>
              <Editable renderElement={rendermemoised} renderLeaf={renderLfs}/>
              </div>
       
      </Slate> 
        </div>
     
    );
}
export default Editor;