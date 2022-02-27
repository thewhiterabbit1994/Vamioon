import { useLocation } from "react-router-dom";

export default () => {
  let location = useLocation();
  return (
    <svg
      width="1.25vw"
      height="0.9375vw"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 1.42857C0 0.64 0.64 0 1.42857 0H12.2857C13.0743 0 13.7143 0.64 13.7143 1.42857V7.71429C13.7143 8.50286 13.0743 9.14286 12.2857 9.14286H1.42857C0.64 9.14286 0 8.50286 0 7.71429V1.42857ZM3.42857 1.71429V1.14286H2.28571V1.71429C2.28571 1.86584 2.22551 2.01118 2.11835 2.11835C2.01118 2.22551 1.86584 2.28571 1.71429 2.28571H1.14286V3.42857H1.71429C2.16894 3.42857 2.60498 3.24796 2.92647 2.92647C3.24796 2.60498 3.42857 2.16894 3.42857 1.71429ZM9.14286 4.57143C9.14286 3.96522 8.90204 3.38384 8.47339 2.95518C8.04473 2.52653 7.46335 2.28571 6.85714 2.28571C6.25093 2.28571 5.66955 2.52653 5.2409 2.95518C4.81224 3.38384 4.57143 3.96522 4.57143 4.57143C4.57143 5.17764 4.81224 5.75902 5.2409 6.18767C5.66955 6.61633 6.25093 6.85714 6.85714 6.85714C7.46335 6.85714 8.04473 6.61633 8.47339 6.18767C8.90204 5.75902 9.14286 5.17764 9.14286 4.57143ZM11.4286 1.14286H10.2857V1.71429C10.2857 2.16894 10.4663 2.60498 10.7878 2.92647C11.1093 3.24796 11.5453 3.42857 12 3.42857H12.5714V2.28571H12C11.8484 2.28571 11.7031 2.22551 11.5959 2.11835C11.4888 2.01118 11.4286 1.86584 11.4286 1.71429V1.14286ZM3.42857 7.42857C3.42857 6.97391 3.24796 6.53788 2.92647 6.21639C2.60498 5.8949 2.16894 5.71429 1.71429 5.71429H1.14286V6.85714H1.71429C1.86584 6.85714 2.01118 6.91735 2.11835 7.02451C2.22551 7.13167 2.28571 7.27702 2.28571 7.42857V8H3.42857V7.42857ZM11.4286 8V7.42857C11.4286 7.27702 11.4888 7.13167 11.5959 7.02451C11.7031 6.91735 11.8484 6.85714 12 6.85714H12.5714V5.71429H12C11.5453 5.71429 11.1093 5.8949 10.7878 6.21639C10.4663 6.53788 10.2857 6.97391 10.2857 7.42857V8H11.4286Z"
        fill={
          location.pathname === "/panel/admin/loans" ||
          location.pathname === "/panel/user/loans"
            ? "#00693B"
            : "#818181"
        }
      />
      <path
        d="M4 11.4286C3.63796 11.4287 3.28518 11.3142 2.99221 11.1015C2.69924 10.8888 2.48113 10.5889 2.36914 10.2446C2.528 10.272 2.69028 10.2857 2.85714 10.2857H12.2857C12.9677 10.2857 13.6218 10.0148 14.104 9.53256C14.5862 9.05032 14.8571 8.39627 14.8571 7.71429V2.38286C15.1915 2.50108 15.481 2.72009 15.6857 3.00973C15.8904 3.29936 16.0002 3.64534 16 4V7.71429C16 8.20205 15.9039 8.68504 15.7173 9.13568C15.5306 9.58632 15.257 9.99578 14.9121 10.3407C14.5672 10.6856 14.1577 10.9592 13.7071 11.1458C13.2565 11.3325 12.7735 11.4286 12.2857 11.4286H4Z"
        fill={
          location.pathname === "/panel/admin/loans" ||
          location.pathname === "/panel/user/loans"
            ? "#00693B"
            : "#818181"
        }
      />
    </svg>
  );
};
