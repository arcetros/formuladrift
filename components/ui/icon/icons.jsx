export const HamburgerIcon = ({ styles }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles ? styles : "w-6 h-6"}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  );
};

export const XIcon = ({ styles }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={styles ? styles : "h-6 w-6"}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M6 18L18 6M6 6l12 12"
      />
    </svg>
  );
};

export const PlusIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 4v16m8-8H4"
      />
    </svg>
  );
};

export const NegIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M20 12H4"
      />
    </svg>
  );
};

export const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6 text-gray-700"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
};

export const FDLogo = () => {
  return (
    <svg
      width="160"
      height="80"
      viewBox="0 0 248 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.04572 21.1132L4.14572 54.7132H8.94572L10.1457 40.3132H16.8457L17.2457 35.5132H10.6457L11.4457 25.9132H19.1457L19.5457 21.1132H7.04572Z"
        fill="white"
      />
      <path
        d="M33.9457 48.2132C33.5457 52.9132 31.0457 55.3132 26.4457 55.3132C21.8457 55.3132 19.7457 53.0132 20.1457 48.2132L21.9457 27.7132C22.3457 23.0132 24.8457 20.6132 29.4457 20.6132C34.0457 20.6132 36.1457 22.9132 35.7457 27.7132L33.9457 48.2132ZM30.9457 27.7132C31.0457 26.2132 30.4457 25.4132 29.0457 25.4132C27.6457 25.4132 26.9457 26.2132 26.7457 27.7132L24.9457 48.2132C24.8457 49.7132 25.4457 50.5132 26.8457 50.5132C28.2457 50.5132 29.0457 49.7132 29.1457 48.2132L30.9457 27.7132Z"
        fill="white"
      />
      <path
        d="M40.4457 21.1132H47.4457C51.7457 21.1132 53.6457 23.5132 53.2457 28.2132L52.8457 33.2132C52.5457 36.2132 51.1457 38.1132 48.5457 39.0132L52.6457 54.6132H47.3457L44.2457 39.8132L43.6457 39.9132L42.3457 54.6132H37.5457L40.4457 21.1132ZM44.8457 25.9132L44.0457 35.5132H45.1457C45.8457 35.5132 46.2457 35.5132 46.5457 35.4132C47.4457 35.0132 47.9457 34.3132 48.0457 33.3132L48.4457 28.3132C48.5457 26.8132 47.9457 26.0132 46.5457 26.0132H44.8457V25.9132Z"
        fill="white"
      />
      <path
        d="M66.7457 44.1132L74.3457 21.1132H79.1457L76.2457 54.7132H71.5457L73.2457 35.9132L67.4457 54.7132H64.2457L61.5457 35.9132L59.9457 54.7132H55.2457L58.2457 21.1132H63.0457L66.7457 44.1132Z"
        fill="white"
      />
      <path
        d="M94.9457 48.2132C94.5457 52.9132 92.0457 55.3132 87.3457 55.3132C82.7457 55.3132 80.6457 52.9132 81.0457 48.2132L83.4457 21.1132H88.2457L85.8457 48.2132C85.7457 49.7132 86.3457 50.5132 87.7457 50.5132C89.1457 50.5132 89.9457 49.7132 90.0457 48.2132L92.4457 21.1132H97.2457L94.9457 48.2132Z"
        fill="white"
      />
      <path
        d="M98.6458 54.7132L101.546 21.1132H106.346L103.846 49.9132H111.546L111.146 54.7132H98.6458Z"
        fill="white"
      />
      <path
        d="M128.546 42.8132L129.046 54.7132H124.146L123.846 47.6132H118.946L117.346 54.7132H112.446L115.046 42.8132L120.346 21.1132H126.946L128.546 42.8132ZM123.646 42.8132L123.046 28.8132L119.946 42.8132H123.646Z"
        fill="white"
      />
      <path
        d="M234.246 62.1131H132.946L137.146 13.8131H238.546L234.246 62.1131Z"
        fill="#E9272A"
      />
      <path
        d="M143.646 17.7131H152.946C158.346 17.7131 160.746 20.6131 160.246 26.4131L158.246 49.3131C157.746 55.1131 154.846 58.0131 149.446 58.0131C149.346 58.0131 149.246 58.0131 149.146 58.0131H140.246L143.646 17.7131ZM149.746 24.2131L147.346 51.7131H149.346C150.646 51.7131 151.346 50.9131 151.546 49.4131L153.546 26.5131C153.646 25.0131 153.046 24.2131 151.746 24.2131H149.746V24.2131Z"
        fill="#FEFEFE"
      />
      <path
        d="M164.146 17.7131H172.946C178.346 17.7131 180.746 20.6131 180.246 26.4131L179.746 32.3131C179.446 36.0131 177.746 38.3131 174.746 39.4131L179.546 58.0131H172.246L168.646 40.7131H168.846L167.346 58.0131H160.646L164.146 17.7131ZM170.246 24.2131L169.346 34.7131H170.146C170.846 34.7131 171.346 34.7131 171.546 34.6131C172.446 34.3131 172.946 33.5131 173.046 32.4131L173.546 26.5131C173.646 25.0131 173.046 24.2131 171.746 24.2131H170.246V24.2131Z"
        fill="#FEFEFE"
      />
      <path
        d="M186.346 17.7131H193.046L189.546 58.1131H182.846L186.346 17.7131Z"
        fill="#FEFEFE"
      />
      <path
        d="M196.746 17.7131H212.446L211.946 24.2131H202.846L201.946 34.7131H209.746L209.146 41.1131H201.346L199.946 58.1131H193.246L196.746 17.7131Z"
        fill="#FEFEFE"
      />
      <path
        d="M232.046 17.7131L231.446 24.2131H226.146L223.146 58.1131H216.446L219.446 24.2131H214.146L214.646 17.7131H232.046Z"
        fill="#FEFEFE"
      />
      <path
        d="M243.746 20.7131L243.846 19.3131C243.846 19.1131 243.746 18.9131 243.446 18.9131H242.346L242.046 21.9131H242.646L242.746 20.9131H242.846L243.046 21.9131H243.646L243.446 20.9131C243.546 20.9131 243.646 20.8131 243.746 20.7131ZM243.146 20.4131C243.146 20.4131 243.146 20.5131 243.146 20.4131L242.746 20.5131L242.846 19.5131H243.146C243.146 19.5131 243.246 19.5131 243.146 19.6131V20.4131Z"
        fill="#E8272B"
      />
      <path
        d="M243.246 17.6132C241.746 17.6132 240.346 18.9132 240.246 20.4132C240.146 21.9132 241.246 23.2132 242.746 23.2132C244.246 23.2132 245.646 22.0132 245.746 20.4132C245.846 18.9132 244.746 17.6132 243.246 17.6132ZM242.846 22.5132C241.746 22.5132 240.846 21.6132 240.946 20.4132C241.046 19.3132 242.046 18.3132 243.146 18.3132C244.246 18.3132 245.146 19.2132 245.046 20.4132C244.946 21.5132 243.946 22.5132 242.846 22.5132Z"
        fill="#E8272B"
      />
    </svg>
  );
};

export const UserIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-5 text-gray-500 items-center"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const ClockIcon = ({ margin }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${margin} h-3.5 w-4`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
};

export const CalendarIcon = ({ margin }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${margin} h-3.5 w-4`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>
  );
};

export const ShareIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
      />
    </svg>
  );
};

export const DownArrow = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
};

export const ReturnIcon = ({ styles }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-6 w-6 ${styles}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
  );
};

export const DotIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
    </svg>
  );
};

export const TitleIcon = ({ children }) => {
  return (
    <div className="relative font-bold flex">
      <div className="absolute bg-red-500 p-6 top-0 -left-4 rounded-lg z-10"></div>
      <div className="tracking-wide py-3 px-2 rounded-r-lg z-40 bg-gray-800 text-white">
        {children}
      </div>
    </div>
  );
};

export const StarIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-white"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
};
