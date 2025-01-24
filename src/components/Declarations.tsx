//type definitions for custom elements
export type CustomElement = |{ type: 'paragraph'; children: CustomText[] }
| { type: 'code'; children: CustomText[] }
| { type: 'title'; children: CustomText[] }
| { type: 'quote'; children: CustomText[] }
| { type: 'image'; children: CustomImage}
| { type: 'link'; children: CustomLink}
| { type: 'list'; children: CustomList }
| { type: 'bold'; children: CustomBoldText[]}

//todo : later add more types ex table, video, audio etc
export type CustomLink = { url: string; text: string; }

export type CustomList = {
    title: string;
    listElements: string[];
}
export type CustomImage = {
    src: string;
    alt: string;
    title: string;
}
export type CustomText = { text: string; 
    bold?: true; 
    italic?: true;
    quote?: true; 
    code?: true; 
    underline?: true;
    title?: true;
    h1?: true;
    h2?: true;
    h3?: true;
    h4?: true;
    h5?: true;
    h6?: true;
    list?: true;
    
 };
    export type CustomBoldText = { text: string; 
        bold: true; 
        italic?: true;
        quote?: true; 
        code?: true; 
        underline?: true;
        title?: true; };
