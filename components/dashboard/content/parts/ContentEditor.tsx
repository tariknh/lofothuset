import React, { useRef, useEffect } from "react";
import { Editor } from "novel";

const ContentEditor = (props: any) => {
  const editorRef = useRef(null);

  useEffect(() => {
    if (!editorRef.current) return;

    // Instantiate the Editor and attach it to the editorRef DOM element
    const editor = new Editor({
      // You may need to provide additional options here based on the Editor's API
      // and your requirements, such as the element to attach the editor to,
      // default value, extensions, and so on.
    });

    // Cleanup function to destroy the editor instance when the component unmounts
    return () => {
      editor.destroy();
    };
  }, []);

  return <div ref={editorRef} {...props}></div>;
};

export default ContentEditor;
