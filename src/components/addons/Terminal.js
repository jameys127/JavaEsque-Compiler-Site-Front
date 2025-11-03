import React, {useEffect, useRef} from 'react'

const Terminal = ({output}) => {
  const containerRef = useRef();

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const formatted = output
        .split('\n')
        .map(line => `> ${line}`)
        .join('\n');
    el.innerText = formatted;
    el.scrollTop = el.scrollHeight;
  }, [output]);

  return (
    <div className='bg-[#111] min-h-full max-h-full p-2 text-green-500 font-mono rounded-md border border-[#333333] border-solid overflow-y-scroll' ref={containerRef} />
  );
};

export default Terminal
