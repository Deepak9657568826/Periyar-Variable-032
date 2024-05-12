import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import deepakphoto from "../assets/deepakphoto.jpg";
import { Link } from "react-router-dom";
import "../App.css";

function HomePage() {
  return (
    <div style={{backgroundColor:"#6a9ac4"}}>
      <Box>
        <Box
          w={{ base: "100%", md: "90%" }}
          m="auto"
          p={{ base: ".6rem 2rem", md: "3rem" }}
          display={"flex"}
          flexDirection={{ base: "column", md: "row" }}
          gap={{ base: "2rem", md: "3rem" }}
        >
          <Box
            w={{ base: "96%", md: "45%" }}
            m={"auto"}
            mt={{ base: "2rem", md: "" }}
          >
            <Image src="https://static.vecteezy.com/system/resources/previews/009/292/408/non_2x/design-of-students-sitting-on-piles-of-books-studying-used-cloud-network-technology-access-technology-service-illustration-for-landing-page-website-poster-banner-mobile-apps-web-social-media-ads-etc-free-vector.jpg" filter={"drop-shadow(0 0 0.75rem #088395)"} />
          </Box>
          <Box
            w={{ base: "95%", md: "50%" }}
            m={{ base: "auto", md: "" }}
            mb={{ base: "3rem", md: "" }}
          >
            <Heading
              as={"h1"}
              color={"black"}
              fontSize={{ base: "2.2rem", md: "2.9rem" }}
              w={{ base: "100%", md: "90%" }}
              textAlign={{ base: "justify", md: "left" }}
            >
              Exchange Your Skills with Skillify
            </Heading>
            <Text
              color={"black"}
              fontSize={{ base: "1rem", md: "1.4rem" }}
              mt={"1rem"}
              textAlign={"justify"}
            >
              Skillify is your gateway to exchanging skills and services with others in a vibrant community-driven platform. Whether you're seeking expertise or offering your own, Skillify connects you with the right people without the need for monetary transactions. It's more than just a platform. it's a dynamic ecosystem where users come together to learn, grow, and exchange valuable skills and insights.
            </Text>
          </Box>
        </Box>
      </Box>
      <Box bg={"#AAD7D9"}>
        <Box
          w={{ base: "100%", md: "90%" }}
          m="auto"
          p={{ base: ".6rem 2rem", md: "3rem" }}
          color={"black"}
        >
          <Flex
            gap={{ base: "2rem", md: "3rem" }}
            textAlign={"justify"}
            flexDirection={{ base: "column", md: "row" }}
            m={{ base: "2rem 0rem" }}
          >
            <Box
              className="homepageBox"
              p={5}
              border={"1px solid #19212C"}
              w={{ base: "100%", md: "90%" }}
              borderRadius={"1rem"}
            >
              <Heading
                textAlign={"center"}
                mb={{ base: 2, md: 5 }}
                fontSize={{ base: "1.5rem", md: "2rem" }}
              >
             Connect with the Community
              </Heading>
              <Text color={"black"}>
              Accelerate your progress by engaging in collaborative projects or refining specific skills through experimentation, all while remaining connected to the dynamic Skillify community. Whether you're sharing expertise, seeking assistance, or simply networking, Skillify provides a platform for meaningful connections and mutual growth
              </Text>
            </Box>
            <Box
              className="homepageBox"
              p={5}
              border={"1px solid #19212C"}
              w={{ base: "100%", md: "90%" }}
              borderRadius={"1rem"}
            >
              <Heading
                textAlign={"center"}
                mb={{ base: 2, md: 5 }}
                fontSize={{ base: "1.5rem", md: "2rem" }}
              >
               Explore & Grow Together
              </Heading>
              <Text color={"black"}>
              Embark on a journey of discovery and growth by engaging in Skillify Challenges. Discover new skills, broaden your knowledge, and enhance your expertise within our vibrant community. It's an opportunity to elevate your capabilities and gain recognition for your achievements.
              </Text>
            </Box>
            <Box
              p={5}
              className="homepageBox"
              border={"1px solid #19212C"}
              borderRadius={"1rem"}
              w={{ base: "100%", md: "90%" }}
            >
              <Heading
                textAlign={"center"}
                mb={{ base: 2, md: 5 }}
                fontSize={{ base: "1.5rem", md: "2rem" }}
              >
               Connect & Collaborate
              </Heading>
              <Text color={"black"}>
              "Engage with the Skillify community to connect with individuals possessing complementary skills. Collaborate on projects, exchange insights, and leverage collective expertise to achieve mutual goals. It's a platform for forging meaningful connections and fostering collaborative efforts towards skill enhancement.
              </Text>
            </Box>
          </Flex>
        </Box>
      </Box>
    </div>
  );
}

export default HomePage;
