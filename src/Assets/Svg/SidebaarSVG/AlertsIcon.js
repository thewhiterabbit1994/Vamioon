import { useLocation } from "react-router-dom";

export default () => {
  let location = useLocation();

  return (
    <svg
      width="0.9375vw"
      height="1.09375vw"
      viewBox="0 0 12 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_87_47)">
        <path
          d="M1.09998 6.1C1.09998 4.90652 1.57409 3.76193 2.418 2.91802C3.26191 2.0741 4.40651 1.6 5.59998 1.6C6.79346 1.6 7.93805 2.0741 8.78196 2.91802C9.62587 3.76193 10.1 4.90652 10.1 6.1V8.004L11.064 10.414C11.0944 10.4899 11.1057 10.572 11.097 10.6533C11.0883 10.7345 11.0598 10.8124 11.014 10.8801C10.9682 10.9478 10.9065 11.0033 10.8344 11.0416C10.7622 11.0799 10.6817 11.1 10.6 11.1H0.599981C0.518254 11.1 0.437776 11.0799 0.365595 11.0416C0.293413 11.0033 0.231728 10.9478 0.18594 10.8801C0.140151 10.8124 0.111654 10.7345 0.102945 10.6533C0.0942356 10.572 0.105579 10.4899 0.135981 10.414L1.09998 8.004V6.1Z"
          fill={
            location.pathname === "/panel/admin/notifications" ||
            location.pathname === "/panel/user/notifications"
              ? "#00693B"
              : "#818181"
          }
        />
        <path
          d="M3.66211 12.1C3.88311 12.965 4.66411 13.6 5.60011 13.6C6.53611 13.6 7.31711 12.965 7.53811 12.1H3.66211Z"
          fill={
            location.pathname === "/panel/admin/notifications" ||
            location.pathname === "/panel/user/notifications"
              ? "#00693B"
              : "#818181"
          }
        />
        <path
          d="M12.2999 3.2C12.2999 4.69117 11.0911 5.9 9.5999 5.9C8.10873 5.9 6.8999 4.69117 6.8999 3.2C6.8999 1.70883 8.10873 0.5 9.5999 0.5C11.0911 0.5 12.2999 1.70883 12.2999 3.2Z"
          fill="#00AF63"
          stroke="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_87_47">
          <rect width="12" height="13.6" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
