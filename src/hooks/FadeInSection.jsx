import React from 'react';

export function FadeInSection(props) {
  const [isVisible, setVisible] = React.useState(true);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
    
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