import React from "react";
import { CardBody, CardContainer, CardItem } from "./Perspective";
import GithubIcon from "../assets/icons/GithubIcon";
import MailIcon from "../assets/icons/MailIcon";

export function LinksCard() {
  return (
    <CardContainer className="w-full sm:w-80 p-4 sm:p-6">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem className="text-xl mb-2 font-bold mx-auto text-neutral-600 dark:text-white">
          Check out my projects, or contact me!
        </CardItem>

        <CardItem
          translateZ="100"
          className="flex flex-col sm:flex-row justify-center sm:justify-around items-center w-full mt-4"
        >
          <div className="flex flex-col items-center logo svg">
            <a
              href="https://github.com/jwt2706"
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2 p-4 flex flex-col items-center"
            >
              <GithubIcon />
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
              <MailIcon />
              <p className="mt-4 mb-2 underline-animation">work@jwt2706.ca</p>
            </a>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
