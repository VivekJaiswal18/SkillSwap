import Link from "next/link";
import { Circle } from "lucide-react";


const Footer = () => {
  return (
    <div>
      <div className="flex  gap-3 justify-center items-center mx-auto underline-offset-1 underline">
        <div className="bg-green-400 animate-ping rounded-full w-3 h-3" ></div>  
        <Link href="https://afrifarms.openstatus.dev/">
        All System Operational 
        </Link>
      </div>
      <footer className=" border-t !w-full py-10 my-9 justify-between flex items-center">
        <div className=" flex  gap-2 text-sm font-medium items-center">
          <Link href="/privacy" className=" underline">
            <span>Learn</span>
          </Link>
          <span className=" w-1 h-1 rounded-full bg-stone-200" />
          <Link href="/terms" className=" underline">
            <span>COurses</span>
          </Link>
          {/* <span className=" w-1 h-1 rounded-full bg-stone-200" />
                        <Link href="/terms" className=" underline">
                            <span>Information</span>
                        </Link> */}
        </div>
        <span className="text-gray-700 dark:text-stone-300 font-light text-sm flex justify-center items-center">
          {new Date().getFullYear()} © SkillSwap 
        </span>
        <div className=" flex items-center gap-2">
          <Link href="https://x.com/_vivekjaiswal18">
            <svg
              width="18"
              height="18"
              viewBox="0 0 16 16"
              fill="currentColor"
              role="img"
              focusable="false"
            >
              <path d="M16 3.42059C15.4484 3.66118 14.8558 3.82375 14.2328 3.89723C14.8684 3.52268 15.3559 2.92834 15.5858 2.22085C14.9912 2.56809 14.3326 2.82039 13.6317 2.95565C13.0702 2.36781 12.2708 1.99976 11.3856 1.99976C9.68647 1.99976 8.30842 3.35621 8.30842 5.02999C8.30842 5.26669 8.33617 5.49688 8.38769 5.71928C5.82912 5.59247 3.56254 4.38623 2.04444 2.55378C1.78019 3.00247 1.62825 3.52268 1.62825 4.0767C1.62825 5.12753 2.17194 6.05546 2.99705 6.59843C2.49234 6.58218 2.01801 6.44627 1.60314 6.21933V6.25835C1.60314 7.72599 2.66344 8.95045 4.07188 9.22876C3.81291 9.29769 3.5414 9.3341 3.2613 9.3341C3.06311 9.3341 2.86955 9.31589 2.68193 9.28078C3.07368 10.4838 4.20994 11.3603 5.55695 11.3837C4.50326 12.1966 3.17608 12.681 1.73461 12.681C1.48622 12.681 1.24113 12.6667 1 12.6388C2.3622 13.4991 3.97939 13.9998 5.71681 13.9998C11.3783 13.9998 14.4733 9.38417 14.4733 5.38114C14.4733 5.25108 14.47 5.11973 14.4641 4.98968C15.0652 4.5618 15.5871 4.02923 15.9987 3.42254L16 3.42059Z"></path>
            </svg>
          </Link>
          
          {/* <Link href="https://t.me/afrifarm">
            <svg
              viewBox="0 0 24 24"
              className=" w-6 h-6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M12 4C10.4178 4 8.87103 4.46919 7.55544 5.34824C6.23985 6.22729 5.21447 7.47672 4.60897 8.93853C4.00347 10.4003 3.84504 12.0089 4.15372 13.5607C4.4624 15.1126 5.22433 16.538 6.34315 17.6569C7.46197 18.7757 8.88743 19.5376 10.4393 19.8463C11.9911 20.155 13.5997 19.9965 15.0615 19.391C16.5233 18.7855 17.7727 17.7602 18.6518 16.4446C19.5308 15.129 20 13.5823 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4ZM15.93 9.48L14.62 15.67C14.52 16.11 14.26 16.21 13.89 16.01L11.89 14.53L10.89 15.46C10.8429 15.5215 10.7824 15.5715 10.7131 15.6062C10.6438 15.6408 10.5675 15.6592 10.49 15.66L10.63 13.66L14.33 10.31C14.5 10.17 14.33 10.09 14.09 10.23L9.55 13.08L7.55 12.46C7.12 12.33 7.11 12.03 7.64 11.83L15.35 8.83C15.73 8.72 16.05 8.94 15.93 9.48Z"
                  fill="#000"
                ></path>
              </g>
            </svg>
          </Link> */}
          <Link href="https://discord.gg/asas" className="ml-3">
            <svg
              className=" w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  d="M18.59 5.88997C17.36 5.31997 16.05 4.89997 14.67 4.65997C14.5 4.95997 14.3 5.36997 14.17 5.69997C12.71 5.47997 11.26 5.47997 9.83001 5.69997C9.69001 5.36997 9.49001 4.95997 9.32001 4.65997C7.94001 4.89997 6.63001 5.31997 5.40001 5.88997C2.92001 9.62997 2.25001 13.28 2.58001 16.87C4.23001 18.1 5.82001 18.84 7.39001 19.33C7.78001 18.8 8.12001 18.23 8.42001 17.64C7.85001 17.43 7.31001 17.16 6.80001 16.85C6.94001 16.75 7.07001 16.64 7.20001 16.54C10.33 18 13.72 18 16.81 16.54C16.94 16.65 17.07 16.75 17.21 16.85C16.7 17.16 16.15 17.42 15.59 17.64C15.89 18.23 16.23 18.8 16.62 19.33C18.19 18.84 19.79 18.1 21.43 16.87C21.82 12.7 20.76 9.08997 18.61 5.88997H18.59ZM8.84001 14.67C7.90001 14.67 7.13001 13.8 7.13001 12.73C7.13001 11.66 7.88001 10.79 8.84001 10.79C9.80001 10.79 10.56 11.66 10.55 12.73C10.55 13.79 9.80001 14.67 8.84001 14.67ZM15.15 14.67C14.21 14.67 13.44 13.8 13.44 12.73C13.44 11.66 14.19 10.79 15.15 10.79C16.11 10.79 16.87 11.66 16.86 12.73C16.86 13.79 16.11 14.67 15.15 14.67Z"
                  fill="#fff"
                ></path>{" "}
              </g>
            </svg>
          </Link>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
