import { RenderElementProps,RenderLeafProps} from "slate-react";

  //function for rendering elements
 export const renderME = (props:RenderElementProps)=>{

    return <p  {...props.attributes}>{props.children}</p>
  }
  //render leaf function
  export const renderLf = (props:RenderLeafProps)=>{

    if(props.leaf.bold){
      return <strong {...props.attributes}>{props.children}</strong>
    }
    else if(props.leaf.italic){
      return <em {...props.attributes}>{props.children}</em>
    }
    else if(props.leaf.underline){
      return <u {...props.attributes}>{props.children}</u>
    }
    else if(props.leaf.quote){
      return <blockquote {...props.attributes}>{props.children}</blockquote>
    }
    else if(props.leaf.title){
      return <h1 {...props.attributes}>{props.children}</h1>
    }
    else if(props.leaf.h1){
      return <h1 {...props.attributes}>{props.children}</h1>
    }
    else if(props.leaf.h2){
      return <h2 {...props.attributes}>{props.children}</h2>
    }
    else if(props.leaf.h3){
      return <h3 {...props.attributes}>{props.children}</h3>
    }
    else if(props.leaf.h4){
      return <h4 {...props.attributes}>{props.children}</h4>
    }
    else if(props.leaf.h5){
      return <h5 {...props.attributes}>{props.children}</h5>
    }
    else if(props.leaf.h6){
      return <h6 {...props.attributes}>{props.children}</h6>
    }
   
    else{
      return <span {...props.attributes}>{props.children}</span>
    }

    
  }