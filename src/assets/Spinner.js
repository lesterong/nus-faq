export const Spinner = ({major}) => {
  let fillStyle = 'fill-default';
  switch (major) {
    case 'cs':
      fillStyle = 'fill-cs'
      break;
    default:
      break;

  }
  return (
    <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' className={`animate-spin ${fillStyle} h-16 mx-auto`}>
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M19.8532 18.1909C21.2438 16.427 22 14.2462 22 12H20C20 13.797 19.3951 15.5416 18.2826 16.9528C17.1701 18.3639 15.6149 19.3595 13.8676 19.779C12.1203 20.1985 10.2826 20.0175 8.65076 19.2652C7.01887 18.5128 5.68778 17.233 4.87199 15.6319C4.05619 14.0308 3.80319 12.2017 4.15376 10.4393C4.50432 8.67686 5.43804 7.08378 6.80445 5.91676C8.17086 4.74973 9.89039 4.07672 11.686 4.00617C13.4815 3.93562 15.2485 4.47164 16.7023 5.52786L17.8779 3.90983C16.0607 2.58956 13.8519 1.91953 11.6074 2.00771C9.36296 2.0959 7.21355 2.93716 5.50553 4.39595C3.79752 5.85473 2.63037 7.84607 2.19216 10.0491C1.75395 12.2521 2.0702 14.5385 3.08995 16.5399C4.1097 18.5413 5.77355 20.141 7.81342 21.0814C9.85328 22.0218 12.1503 22.2481 14.3345 21.7237C16.5186 21.1993 18.4626 19.9549 19.8532 18.1909Z'
      />
      <title> Loading </title>
    </svg>
  );
};