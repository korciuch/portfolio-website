import React from "react";
import {
  Heading,
  Stack,
  Text,
  Image,
  Grid,
  GridItem,
  Center,
  useBreakpointValue,
  Link,
} from "@chakra-ui/react";
import MySpacer from "./MySpacer.js";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faExternalLinkAlt,
  faLocationArrow,
  faBuilding,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Milestones from "./TimeLine.js";

const HelloWorld = () => {
  const resizeLargeHeader = useBreakpointValue({
    base: "lg",
    lg: "xl",
    md: "xl",
    sm: "lg",
    xs: "lg",
  });
  const resizeSubHeader = useBreakpointValue({
    base: "md",
    lg: "md",
    md: "md",
    sm: "md",
    xs: "md",
  });

  const socials = [
    {
      name: "Github",
      icon: faGithub,
      link: "https://github.com/korciuch",
    },
    {
      name: "LinkedIn",
      icon: faLinkedin,
      link: "https://www.linkedin.com/in/kyleorciuch/",
    },
    {
      name: "Email",
      icon: faEnvelope,
      link: "mailto:kyle.orciuch@alumni.stanford.edu",
    },
  ];

  return (
    <Stack p="5px">
      <MySpacer height={[10, 25, 50]} />
      <Grid
        h="200px"
        templateRows="repeat(3, 1fr)"
        templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
        gap={50}
        px={["5%", "10%", "15%", "20%"]}
      >
        <GridItem rowSpan={1} colSpan={[1, 1, 2]} p="5px">
          <MySpacer height={20} />
          <Heading size={resizeLargeHeader}>
            <FontAwesomeIcon color="#7fafe8" icon={faBuilding} />
            &nbsp; Building in the proptech space
          </Heading>
          <Heading size={resizeSubHeader} paddingTop="10px">
            <FontAwesomeIcon color="#7fafe8" icon={faLocationArrow} />
            &nbsp;&nbsp;&nbsp;&nbsp; San Francisco Bay Area
          </Heading>
          <MySpacer height={25} />
          <Text paddingBottom="10px">
            Kyle Orciuch is a recent graduate from Stanford University with a
            degree in Computer Science with an AI specialization. He is the
            Co-Founder & CEO of{" "}
            <Link color="#7fafe8" href="https://causaltwin.ai">
              Causal Twin, Inc.
            </Link>
            , a pre-seed stage start-up focused on the development of autonomous
            LiDAR drones for complete construction site monitoring, mapping &
            version control. Current pitch deck for the SiteSense product
            concept can be found here:{" "}
            <Link
              color="#7fafe8"
              href="https://docsend.com/view/q3f9hxj6dnguneci"
            >
              Docsend
            </Link>
          </Text>
          <Text>
            Kyle has also worked as a Data Scientist and an Intern at Second
            Front Systems, a company that provides rapid software hardening &
            accreditation for govcloud use-cases. In addition to his technical
            skills, he was a varsity student-athlete on the men’s soccer team at
            Stanford and was awarded two PAC-12 championships.
          </Text>
          <MySpacer height={7.5} />
          <Text>
            <b>Vision:&nbsp;</b> "GitHub meets point cloud data" of buildings
            under construction via repeatable, autonomous scanning platforms
            such as drones or other robots. We are all well familiar with
            version control systems for code, i.e. knowing exactly what lines
            were added, modified, or deleted. However, there isn't a robust set
            of algorithms for understanding changes between 3D point cloud scans
            of the same general location. High quality scans can each take tens
            of gigabtes of memory, if not hundreds.
          </Text>
          <MySpacer height={7.5} />
          <Text>
            Scenarios that require repeitive scans of the same areas will
            contain a lot of duplicative information which rather could be
            broken down into a tree of additions, modifications, and
            subtractions. Only problem with this is that while traditionally the
            positions of characters and lines within files are well-defined,
            point clouds collected without geospatial tags don't have this
            nicety and would require manual alignment through a software such as
            CloudCompare. We at CausalTwin believe that the Earth is a giant
            filesystem, and that we need a robust framework for tracking changes
            to physical infrastructure that rapidly evolves over time—in our
            case, this happens to be large commercial construction projeccts.
          </Text>
          <Milestones />
        </GridItem>
        <GridItem
          //bg="gray.400"
          rowSpan={1}
          colSpan={1}
          p="5px"
        >
          <Center>
            <Image
              objectFit="cover"
              src="./Images/city_hall_alt_downscaled.jpg"
              style={{
                clipPath:
                  "polygon(100% 5%, 30% 5%, 0% 30%, 0% 100%, 75% 90%, 90% 75%)",
              }}
            />
          </Center>
          <MySpacer height={50} />
          <Heading size="lg">Socials</Heading>
          <MySpacer height={10} />
          <Stack>
            {socials.map((s) => {
              return (
                <a href={s.link} target="_blank">
                  <FontAwesomeIcon icon={s.icon} /> {s.name}{" "}
                  <FontAwesomeIcon
                    size="xs"
                    color="gray"
                    icon={faExternalLinkAlt}
                  />
                </a>
              );
            })}
          </Stack>
        </GridItem>

        <MySpacer height={50} />
      </Grid>
    </Stack>
  );
};

export default HelloWorld;
