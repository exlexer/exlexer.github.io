import React, { useState, useEffect } from 'react'
import MDEditor from '@uiw/react-md-editor';

export default () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch('https://raw.githubusercontent.com/exlexer/exlexer/main/README.md');
      const text = await response.text();

      setContent(text);
    }

    fetchContent();
  }, [setContent]);

  return (<MDEditor.Markdown source={content} />);
}
