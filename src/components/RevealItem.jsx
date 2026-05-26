import useReveal from '../hooks/useReveal';

export default function RevealItem({ className = '', style = {}, children }) {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${className}`} style={style}>
      {children}
    </div>
  );
}
