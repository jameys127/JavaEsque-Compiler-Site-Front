import React, {useEffect, useRef} from 'react'
import './Terminal.css'

const Terminal = ({output}) => {
  const containerRef = useRef();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const formatted = output
        .split('\n')
        .map(line => `> ${line}`)
        .join('<br>');
    el.innerHTML = `${formatted}<span class="cursor">█</span>`;
    el.scrollTop = el.scrollHeight;
  }, [output]);

  return (
    <div className='terminal bg-[#111] min-h-full max-h-full p-2 text-[#e76fff] font-mono rounded-md border border-[#333333] border-solid overflow-y-scroll z-0' ref={containerRef} />
  );
};

export default Terminal
