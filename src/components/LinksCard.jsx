import React from "react";
import { CardBody, CardContainer, CardItem } from "./Perspective";

export function LinksCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem className="text-xl mb-2 font-bold mx-auto text-neutral-600 dark:text-white">
          Check out my projects, or contact me!
        </CardItem>

        <CardItem translateZ="100" className="w-full mt-4 flex justify-around">
          <div className="flex flex-col items-center logo svg">
            <a
              href="https://github.com/jwt2706"
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2 p-4 flex flex-col items-center"
            >
              <svg
                className="w-24 h-24"
                width="800px"
                height="800px"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <title>github</title>
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-140.000000, -7559.000000)"
                    fill="#000000"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                        id="github-[#142]"
                      ></path>
                    </g>
                  </g>
                </g>
              </svg>
              <p className="mt-4 mb-2 underline-animation">
                github.com/jwt2706
              </p>
            </a>
          </div>
          <div className="flex flex-col items-center logo svg">
            <a
              href="mailto:work@jwt2706.ca"
              className="w-1/2 p-4 flex flex-col items-center"
            >
              <svg
                className=" w-24 h-24"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width="800px"
                height="800px"
                viewBox="0 0 100 100"
                enableBackground="new 0 0 100 100"
                xmlSpace="preserve"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path
                      fill="#000000"
                      d="M85.944,20.189H14.056c-1.41,0-2.556,1.147-2.556,2.557v5.144c0,0.237,0.257,0.509,0.467,0.619 l37.786,21.583c0.098,0.057,0.208,0.083,0.318,0.083c0.112,0,0.225-0.029,0.324-0.088L87.039,28.53 c0.206-0.115,0.752-0.419,0.957-0.559c0.248-0.169,0.504-0.322,0.504-0.625v-4.601C88.5,21.336,87.354,20.189,85.944,20.189z"
                    />{" "}
                    <path
                      fill="#000000"
                      d="M88.181,35.646c-0.2-0.116-0.444-0.111-0.645,0.004L66.799,47.851c-0.166,0.096-0.281,0.266-0.309,0.458 c-0.025,0.191,0.035,0.386,0.164,0.527l20.74,22.357c0.123,0.133,0.291,0.204,0.467,0.204c0.079,0,0.159-0.015,0.234-0.043 c0.245-0.097,0.405-0.332,0.405-0.596V36.201C88.5,35.971,88.379,35.76,88.181,35.646z"
                    />{" "}
                    <path
                      fill="#000000"
                      d="M60.823,51.948c-0.204-0.221-0.532-0.27-0.791-0.118l-8.312,4.891c-0.976,0.574-2.226,0.579-3.208,0.021 l-7.315-4.179c-0.242-0.137-0.547-0.104-0.751,0.086L12.668,78.415c-0.148,0.138-0.222,0.337-0.2,0.538 c0.022,0.201,0.139,0.381,0.314,0.482c0.432,0.254,0.849,0.375,1.273,0.375h71.153c0.255,0,0.485-0.151,0.585-0.385 c0.102-0.232,0.056-0.503-0.118-0.689L60.823,51.948z"
                    />{" "}
                    <path
                      fill="#000000"
                      d="M34.334,49.601c0.15-0.137,0.225-0.339,0.203-0.54c-0.022-0.202-0.142-0.381-0.318-0.483L12.453,36.146 c-0.194-0.112-0.439-0.11-0.637,0.004c-0.196,0.114-0.316,0.325-0.316,0.552v32.62c0,0.253,0.15,0.483,0.382,0.584 c0.082,0.037,0.169,0.055,0.257,0.055c0.157,0,0.314-0.059,0.434-0.171L34.334,49.601z"
                    />{" "}
                  </g>{" "}
                </g>
              </svg>
              <p className="mt-4 mb-2 underline-animation">work@jwt2706.ca</p>
            </a>
          </div>
        </CardItem>
        <CardItem
          as="p"
          className="scroll-prompt text-neutral-500 text-sm max-w-sm mt-2 mx-auto dark:text-neutral-300"
        >
          I'll be sure to add some excerpts of my projects here eventually.
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
