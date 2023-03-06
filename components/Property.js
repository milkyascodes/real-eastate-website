import Image from "next/image";
import Link from "next/link";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import millify from "millify";
import DefaultImage from '../assets/house.webp'


const Property = ({ property: { coverPhoto, price, rentFrequency, rooms, area, title, baths, isVerified, agency, externalID } }) => (
    <Link href={`property/${externalID}`} passHref>
        <Flex flexWrap="wrap" w="400px" p='5' justifyContent='center' alignItems='center' cursor='pointer' paddingTop='0'>
            <Box>
                <Image alt="house" width='400' height='20' src={coverPhoto ? coverPhoto.url : DefaultImage} />
            </Box>
            <Box w='full' >
                <Flex justifyContent='space-between' py='10' alignItems='center'>
                    <Flex alignItems='center'>
                        <Box pr='3' color='blue.400'>{isVerified && <GoVerified />}</Box>
                        <Text fontWeight='bold' fontSize='lg'>AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                    </Flex>
                    <Box>
                        <Avatar size='sm' src={agency?.logo?.url} />
                    </Box>
                </Flex>
                <Flex alignItems='center' p='1' justifyContent='space-between' width='250px' color="green" >
                    {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                </Flex>
                <Text fontSize="lg">
                    {title.length > 30 ? `${title.substring(0, 30)}...` : title}
                </Text>
            </Box>
        </Flex>
    </Link>
)

export default Property;