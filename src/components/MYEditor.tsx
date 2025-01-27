import React, { useCallback } from 'react'
import { Editor,createEditor, Descendant, Transforms,Range,Text } from 'slate'
import { Slate, Editable, withReact, } from 'slate-react'
import { BaseEditor } from 'slate'
import { ReactEditor } from 'slate-react'
import { HistoryEditor } from 'slate-history'
import { renderLf, renderME } from './Elmrender'
import { CustomElement, CustomText } from './Declarations'
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import { Button, Tooltip } from '@mui/material';
import TitleIcon from '@mui/icons-material/Title'; 
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';



//declare custom types for slate
declare module 'slate' {
  interface CustomTypes {
    Editor: BaseEditor & ReactEditor & HistoryEditor
    Element: CustomElement
    Text: CustomText
  }
}

//our editor component
function MYEditor(): JSX.Element {
    //intial value of the editor
    const [initialValue,setInitialValue] = React.useState<Descendant[]>([
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
 

const handleClick = (format:string)=>{
const marks = Editor.marks(editor);
console.log(marks);
  if(format === "bold"){
    if(editor.selection && !Range.isCollapsed(editor.selection)){
      const isBold = isBoldActive(editor); // Function to check if bold is already active
      if (isBold) {
        Editor.removeMark(editor, 'bold'); // Remove the bold mark
      } else {
        Editor.addMark(editor, 'bold', true); // Add the bold mark
      }
    } else {
      alert('Please select some text to toggle bold!');
    }
    }

else if(format === "italic"){
  
  if (editor.selection && !Range.isCollapsed(editor.selection)) {
    const isItalic = isItalicActive(editor); // Function to check if italic is already active
    if (isItalic) {
      Editor.removeMark(editor, 'italic'); // Remove the italic mark
    } else {
      Editor.addMark(editor, 'italic', true); // Add the italic mark  
    }
  } 
  else {
    alert('Please select some text to italicize!');
  }
}
else if(format === "underline"){

  if (editor.selection && !Range.isCollapsed(editor.selection)) {
    const isUnderline = isUnderlineActive(editor); // Function to check if italic is already active
    if (isUnderline) {
      Editor.removeMark(editor, 'underline'); // Remove the italic mark
    } else {
      Editor.addMark(editor, 'underline', true); // Add the italic mark  
    }
  }
}
else if(format === "heading-one"){

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
const isBoldActive = (editor:BaseEditor & ReactEditor & HistoryEditor) => {
  const marks = Editor.marks(editor);
  return marks ? marks.bold === true : false;
};
const isItalicActive = (editor:BaseEditor & ReactEditor & HistoryEditor) => {
  const marks = Editor.marks(editor);
  return marks ? marks.italic === true : false;
};
const isUnderlineActive = (editor:BaseEditor & ReactEditor & HistoryEditor) => {
  const marks = Editor.marks(editor);
  return marks ? marks.underline === true : false;
};


  
    //function to render elements
    return (
        <div className=' flex  w-5/6 h-full bg-gray-950'>
      
            <Slate editor={editor} initialValue={initialValue} onChange={(value)=>setInitialValue(value)}>
           
              <div className='flex flex-col gap-4 w-30 h-full p-2 m-3'>
              
        <Tooltip title="bold">
        <Button
          variant="contained"
          startIcon={<TitleIcon />}
          sx={{ textTransform: 'none' }}
          onMouseDown={()=>handleClick("bold")}
        >
          <FormatBoldIcon/>
        </Button></Tooltip>

        <Tooltip title="underline">
        <Button
          variant="contained"
          startIcon={<TitleIcon />}
          sx={{ textTransform: 'none' }}
          onMouseDown={()=>handleClick("underline")}
        >
          <FormatUnderlinedIcon/>
        </Button></Tooltip>

        <Tooltip title="italic">
        <Button
          variant="contained"
          startIcon={<TitleIcon />}
          sx={{ textTransform: 'none'}}
          onMouseDown={()=>handleClick("italic")}
        >
        <FormatItalicIcon/>
        </Button></Tooltip>
            <Tooltip title="H1">
        <Button
          variant="contained"
          startIcon={<TitleIcon />}
          sx={{ textTransform: 'none' }}
          onMouseDown={()=>handleClick("h1")}
        >
          H1
        </Button></Tooltip>
        <Tooltip title="H1">
        <Button
          variant="contained"
          startIcon={<TitleIcon />}
          sx={{ textTransform: 'none' }}
          onMouseDown={()=>handleClick("h2")}
        >
          H2
        </Button></Tooltip>
        <Tooltip title="H1">
        <Button
          variant="contained"
          startIcon={<TitleIcon />}
          sx={{ textTransform: 'none' }}
          onMouseDown={()=>handleClick("h3")}
        >
          H3
        </Button></Tooltip>
        <Tooltip title="H1">
        <Button
          variant="contained"
          startIcon={<TitleIcon />}
          sx={{ textTransform: 'none' }}
          onMouseDown={()=>handleClick("h4")}
        >
          H4
        </Button></Tooltip>
        <Tooltip title="H1">
        <Button
          variant="contained"
          startIcon={<TitleIcon />}
          sx={{ textTransform: 'none' }}
          onMouseDown={()=>handleClick("h5")}
        >
          H5
        </Button></Tooltip>
        <Tooltip title="H1">
        <Button
          variant="contained"
          startIcon={<TitleIcon />}
          sx={{ textTransform: 'none' }}
          onMouseDown={()=>handleClick("h1")}
        >
          H1
        </Button></Tooltip>
               
        <Tooltip title="quote">
        <Button
          variant="contained"
          startIcon={<TitleIcon />}
          sx={{ textTransform: 'none' }}
          onMouseDown={()=>handleClick("quote")}
        >
          <FormatQuoteIcon/>
        </Button></Tooltip>

              </div>
              <div className='p-8  w-full h-full bg-gray-100'>
              <Editable renderElement={rendermemoised} renderLeaf={renderLfs}/>
              </div>
       
      </Slate> 
        </div>
     
    );
}
export default MYEditor;