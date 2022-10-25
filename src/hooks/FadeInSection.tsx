import React from 'react';

export function FadeInSection(props: { children: React.ReactNode; }) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef<HTMLInputElement>(null)
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    if (domRef.current) {
      observer.observe(domRef.current);
    }
    return () => observer.unobserve(domRef.current!);
  }, []);


  const visible = isVisible ? 'is-visible' : '';
  return (
    <div
      className={`fade-in-section ${visible}`}
      ref={domRef}
    >
      {props.children}
    </div>
  );
}