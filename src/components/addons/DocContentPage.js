import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './DocContentPage.css'

const DocContentPage = ({markdownPath}) => {
    const [markdown, setMarkdown] = useState('');

    useEffect(() => {
        fetch(markdownPath)
            .then((res) => res.text())
            .then(setMarkdown)
            .catch((err) => console.error(err))
    }, [markdownPath]);

  return (
    <div className='w-full bg-[rgb(17,17,17)] border border-[#333] rounded-br-2xl rounded-tr-2xl overflow-hidden'>
        <div className='doc h-full overflow-y-scroll p-4'>
            <article className='prose lg:prose-xl prose-invert max-w-none'>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
            </article>
        </div>
    </div>
  )
}

export default DocContentPage
