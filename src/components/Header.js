import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: istvanszasz99@gmail.com",
  },
  {
    icon: faGithub,
    url: "https://github.com/istvanszasz99",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com/in/istvanszasz99/",
  },
  {
    icon: faTwitter,
    url: "https://x.com/istvanszasz99",
  }
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
          <HStack spacing={10}>
            {socials.map((social) => (
              <a href={social.url}>
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </a>
            ))}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={10}>
            <a href="/#projects-section" onClick={()=>handleClick("projects")}>Projects</a>
            <a href="/#contactme-section" onClick={()=>handleClick("contactme")}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;