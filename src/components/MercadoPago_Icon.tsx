import { twMerge } from "tailwind-merge";

const MercadoPagoIcon = ({className} : {className?: string}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      x="0"
      y="0"
      className={twMerge('w-10', className)}
      version="1.1"
      viewBox="0 0 500 500"
      xmlSpace="preserve"
    >
      <path
        fill="#273577"
        d="M475 241.439c0-81.074-100.726-147.162-224.988-147.162-124.256 0-224.983 66.087-224.983 147.162 0 2.091-.029 7.878-.029 8.616 0 86.005 88.043 155.668 224.979 155.668 137.79 0 225.021-69.644 225.021-155.652v-8.632z"
      ></path>
      <path
        fill="#3FB6E9"
        d="M466.386 241.367c0 76.431-96.855 138.391-216.334 138.391-119.481 0-216.326-61.96-216.326-138.391 0-76.439 96.846-138.402 216.326-138.402 119.478-.001 216.334 61.962 216.334 138.402z"
      ></path>
      <g fill="#FFF">
        <path d="M178.222 197.702c-.116.217-2.274 2.451-.876 4.246 3.419 4.361 13.959 6.861 24.621 4.471 6.35-1.427 14.484-7.902 22.372-14.155 8.542-6.79 17.021-13.585 25.542-16.288 9.022-2.87 14.801-1.64 18.619-.483 4.193 1.25 9.117 4.006 16.976 9.905 14.803 11.127 74.33 63.08 84.609 72.064 8.281-3.744 45.087-19.588 95.112-30.617-4.343-26.667-20.57-51.063-45.171-71.043-34.282 14.401-76.189 21.916-117.168 1.904-.208-.086-22.388-10.585-44.266-10.067-32.508.753-46.589 14.826-61.499 29.722l-18.871 20.341z"></path>
        <path d="M367.666 263.11c-.696-.621-69.99-61.249-85.682-73.048-9.085-6.811-14.139-8.551-19.445-9.225-2.761-.358-6.579.154-9.244.885-7.302 1.986-16.85 8.371-25.326 15.092-8.78 6.989-17.052 13.574-24.734 15.293-9.806 2.199-21.788-.396-27.254-4.093-2.218-1.489-3.776-3.208-4.526-4.958-2.016-4.684 1.71-8.427 2.32-9.055l19.12-20.681a410.988 410.988 0 016.751-6.624c-6.171.803-11.872 2.379-17.422 3.925-6.927 1.949-13.59 3.8-20.332 3.798-2.816 0-17.897-2.473-20.756-3.252-17.305-4.735-32.491-9.348-55.178-19.937-27.178 20.234-45.359 45.536-50.608 73.405 3.903 1.033 10.199 2.905 12.84 3.493 61.514 13.678 80.675 27.769 84.149 30.707 3.763-4.182 9.189-6.835 15.249-6.835 6.809.008 12.941 3.429 16.667 8.713 3.526-2.781 8.384-5.158 14.664-5.156 2.851 0 5.814.528 8.801 1.542 6.935 2.381 10.516 7.001 12.379 11.181a20.53 20.53 0 018.56-1.816c3.311 0 6.756.756 10.23 2.259 11.34 4.866 13.11 16.008 12.078 24.408.808-.097 1.62-.133 2.446-.133 13.446.006 24.381 10.937 24.381 24.391a24.19 24.19 0 01-2.914 11.512c3.657 2.058 12.985 6.715 21.174 5.677 6.541-.83 9.024-3.062 9.917-4.321.609-.863 1.253-1.872.649-2.596l-17.354-19.283s-2.86-2.702-1.914-3.748c.98-1.072 2.74.464 3.993 1.514 8.835 7.377 19.62 18.513 19.62 18.513.179.116.899 1.524 4.886 2.238 3.436.615 9.508.261 13.719-3.191a21.23 21.23 0 003.01-3.089c-.066.046-.127.126-.191.155 4.437-5.684-.493-11.43-.493-11.43l-20.266-22.753s-2.894-2.679-1.913-3.758c.884-.934 2.749.476 4.016 1.532 6.42 5.365 15.487 14.465 24.169 22.973 1.693 1.246 9.336 5.961 19.442-.679 6.141-4.019 7.371-8.966 7.197-12.695-.427-4.936-4.28-8.456-4.28-8.456l-27.681-27.826s-2.923-2.501-1.884-3.764c.837-1.06 2.743.47 3.984 1.514 8.821 7.377 32.691 29.259 32.691 29.259.333.242 8.582 6.112 18.775-.375 3.645-2.329 5.973-5.843 6.17-9.92.346-7.079-4.65-11.282-4.65-11.282z"></path>
        <path d="M233.409 298.388c-4.292-.052-8.989 2.499-9.604 2.129-.336-.226.264-1.948.667-2.94.412-.992 6.064-18-7.713-23.905-10.543-4.53-16.983.565-19.202 2.866-.583.607-.841.555-.908-.215-.211-3.058-1.58-11.345-10.685-14.117-13.002-3.988-21.364 5.094-23.486 8.367-.948-7.411-7.218-13.165-14.894-13.173-8.339-.008-15.101 6.748-15.113 15.088-.002 8.336 6.756 15.097 15.098 15.097 4.051.013 7.729-1.611 10.437-4.211.084.074.119.219.075.507-.635 3.733-1.803 17.304 12.403 22.824 5.7 2.209 10.545.569 14.561-2.249 1.201-.847 1.392-.493 1.221.638-.514 3.491.136 10.96 10.61 15.204 7.971 3.236 12.686-.081 15.777-2.934 1.343-1.23 1.711-1.027 1.781.87.38 10.102 8.769 18.117 18.955 18.124 10.494.006 18.995-8.479 19.005-18.964.007-10.498-8.495-18.89-18.985-19.006z"></path>
      </g>
      <path
        fill="#273577"
        d="M370.342 255.855c-21.341-18.631-70.668-61.513-84.026-71.544-7.635-5.739-12.84-8.77-17.409-10.132-2.056-.62-4.895-1.326-8.551-1.329-3.402 0-7.049.614-10.859 1.827-8.632 2.731-17.233 9.569-25.555 16.178l-.427.34c-7.753 6.159-15.762 12.533-21.823 13.886a36.822 36.822 0 01-8.081.906c-6.785-.011-12.886-1.967-15.174-4.886-.377-.481-.133-1.263.748-2.386l.116-.149 18.775-20.235c14.71-14.705 28.6-28.589 60.572-29.327a61.108 61.108 0 011.601-.022c19.898.012 39.795 8.922 42.025 9.954 18.665 9.099 37.925 13.724 57.292 13.742 20.179.006 40.998-4.99 62.891-15.071-2.444-2.059-4.993-4.056-7.608-6.022-19.231 8.338-37.554 12.553-55.227 12.546-18.056-.014-36.102-4.351-53.615-12.897-.921-.441-22.892-10.798-45.747-10.811-.597 0-1.209.013-1.807.02-26.857.627-41.987 10.168-52.157 18.522-9.896.238-18.433 2.626-26.027 4.747-6.777 1.883-12.631 3.519-18.341 3.514-2.348 0-6.582-.215-6.964-.228-6.565-.201-39.633-8.312-65.942-18.27a174.162 174.162 0 00-7.789 5.863c27.483 11.268 60.931 19.983 71.486 20.667 2.934.192 6.066.524 9.198.531 6.983 0 13.947-1.962 20.698-3.847 3.981-1.121 8.38-2.337 12.999-3.223a387.856 387.856 0 00-3.695 3.681l-19.082 20.635c-1.505 1.515-4.758 5.562-2.612 10.543.855 2.01 2.589 3.932 5.013 5.569 4.55 3.059 12.69 5.129 20.251 5.135 2.866.001 5.579-.285 8.078-.847 7.994-1.795 16.384-8.473 25.268-15.538 7.081-5.629 17.142-12.77 24.845-14.868 2.148-.588 4.789-.948 6.918-.948.632.005 1.23.024 1.792.102 5.086.647 10.007 2.378 18.79 8.97 15.655 11.763 84.957 72.382 85.633 72.983.052.039 4.465 3.851 4.158 10.187-.165 3.53-2.127 6.671-5.535 8.85-2.958 1.872-6.012 2.828-9.099 2.828-4.631-.01-7.819-2.18-8.024-2.327-.256-.207-23.998-21.979-32.732-29.29-1.395-1.153-2.744-2.189-4.115-2.189a2.247 2.247 0 00-1.812.853c-1.375 1.694.165 4.038 1.977 5.58l27.738 27.876c.035.033 3.451 3.24 3.827 7.514.217 4.622-1.989 8.483-6.582 11.5-3.274 2.151-6.591 3.247-9.833 3.247-4.256 0-7.246-1.942-7.906-2.4l-3.982-3.922c-7.27-7.156-14.777-14.55-20.272-19.138-1.34-1.114-2.771-2.139-4.137-2.139-.67 0-1.28.249-1.747.739-.628.698-1.061 1.951.499 4.027a13.693 13.693 0 001.398 1.561l20.243 22.727c.168.203 4.172 4.959.452 9.703l-.71.905a19.293 19.293 0 01-1.882 1.81c-3.451 2.837-8.064 3.143-9.888 3.143-.98 0-1.923-.087-2.744-.232-1.992-.36-3.335-.917-3.981-1.688l-.25-.249c-1.105-1.149-11.306-11.56-19.747-18.606-1.113-.932-2.499-2.11-3.935-2.11-.707 0-1.342.278-1.826.818-1.673 1.832.841 4.563 1.902 5.568l17.262 19.033c-.021.174-.241.57-.658 1.172-.618.847-2.711 2.94-8.975 3.736-.748.091-1.522.133-2.285.133-6.46 0-13.344-3.133-16.896-5.017a25.643 25.643 0 002.453-10.943c.009-14.208-11.529-25.76-25.737-25.772-.301 0-.623.012-.931.023.467-6.487-.449-18.768-13.057-24.178-3.625-1.572-7.246-2.369-10.764-2.369-2.752 0-5.399.47-7.896 1.427-2.607-5.075-6.945-8.771-12.605-10.703-3.123-1.081-6.235-1.628-9.238-1.628-5.246 0-10.08 1.541-14.392 4.607-4.129-5.131-10.372-8.177-16.942-8.177-5.745 0-11.277 2.303-15.374 6.359-5.37-4.102-26.685-17.641-83.726-30.592-2.763-.625-9.104-2.444-12.99-3.581a92.105 92.105 0 00-1.459 9.361s10.523 2.52 12.593 2.982c58.271 12.943 77.525 26.404 80.781 28.945a21.97 21.97 0 00-1.681 8.386c-.006 12.032 9.784 21.84 21.831 21.853 1.352 0 2.688-.116 4.008-.36 1.813 8.856 7.609 15.573 16.47 19.016 2.586.998 5.207 1.507 7.777 1.507a19.903 19.903 0 004.972-.619c1.636 4.158 5.321 9.336 13.551 12.676 2.882 1.166 5.77 1.774 8.576 1.774 2.291 0 4.533-.399 6.669-1.195 3.945 9.609 13.327 15.979 23.795 15.979 6.933.006 13.593-2.818 18.451-7.818 4.153 2.315 12.935 6.489 21.797 6.508 1.148 0 2.227-.081 3.299-.215 8.806-1.114 12.907-4.551 14.788-7.231.336-.466.644-.963.905-1.474 2.082.592 4.367 1.079 6.985 1.085 4.808 0 9.421-1.636 14.09-5.034 4.581-3.313 7.84-8.05 8.307-12.092.008-.052.023-.116.029-.174a23.28 23.28 0 004.712.487c4.95 0 9.816-1.549 14.47-4.592 8.977-5.887 10.537-13.577 10.389-18.604 1.572.329 3.178.499 4.77.499 4.651 0 9.215-1.404 13.565-4.176 5.562-3.555 8.911-9.001 9.415-15.341.354-4.309-.716-8.653-2.987-12.386 15.038-6.479 49.413-19.02 89.89-28.141-.243-3.138-.696-6.237-1.256-9.322-48.975 10.869-85.52 26.684-94.677 30.759zm-136.933 79.149c-9.511-.01-17.242-7.394-17.59-16.811-.029-.812-.111-2.959-1.926-2.959-.748 0-1.395.447-2.143 1.12-2.09 1.942-4.755 3.909-8.644 3.909-1.769 0-3.68-.406-5.701-1.236-10.044-4.065-10.18-10.966-9.769-13.738.108-.743.145-1.508-.362-2.112l-.614-.551h-.63c-.514 0-1.035.209-1.749.714-2.908 2.035-5.692 3.027-8.526 3.027-1.557 0-3.155-.313-4.761-.928-13.222-5.15-12.175-17.631-11.532-21.389.099-.758-.092-1.35-.577-1.741l-.934-.77-.873.839a13.615 13.615 0 01-9.494 3.841c-7.571-.006-13.735-6.164-13.73-13.732.006-7.58 6.173-13.728 13.751-13.72 6.843 0 12.671 5.147 13.547 11.984l.467 3.686 2.024-3.116c.23-.368 5.777-8.759 15.981-8.748 1.939 0 3.943.313 5.961.936 8.131 2.483 9.508 9.856 9.723 12.927.145 1.793 1.418 1.874 1.668 1.874.702 0 1.221-.441 1.586-.83a13.865 13.865 0 0110.111-4.261c2.389.004 4.938.569 7.569 1.704 12.927 5.545 7.064 21.969 6.993 22.143-1.113 2.721-1.153 3.922-.11 4.617l.51.238h.371c.586 0 1.311-.25 2.506-.656 1.76-.609 4.417-1.526 6.898-1.52h.006c9.732.11 17.644 8.028 17.639 17.647-.011 9.719-7.927 17.612-17.646 17.612z"
      ></path>
    </svg>
  );
};

export default MercadoPagoIcon;
