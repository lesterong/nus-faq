const Arrow = ({isOpen}) => {
 return (
  <svg className={isOpen ? 'rotate-180' : ''} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.51637 7.05806C3.76044 6.81398 4.15618 6.81398 4.40025 7.05806L9.99998 12.6577L15.5997 7.05806C15.8438 6.81398 16.2395 6.81398 16.4836 7.05806C16.7276 7.30213 16.7276 7.69786 16.4836 7.94194L10.4419 13.9836C10.1978 14.2277 9.80214 14.2277 9.55806 13.9836L3.51637 7.94194C3.27229 7.69786 3.27229 7.30213 3.51637 7.05806Z" fill="#31081F"/>
  </svg>
 );
}

export default Arrow;