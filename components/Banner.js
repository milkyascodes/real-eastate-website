import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'

const Banner = ({ purpose, title1, title2, desc1, desc2, buttonText, linkName, imageUrl }) => (
    <Flex flexWrap='wrap' justifyContent='center' alignItems='center' m='10'>
        <Image src={imageUrl} width={500} height={300} alt='banner' />
        <Box p={5} >
            <Text color='gray.500' fontSize='sm' fontWeight='mediu'>{purpose}</Text>
            <Text fontSize='3xl' fontWeight='bold'>{title1} <br />{title2}</Text>
            <Text py='3' fontSize='lg' color='gray.5\700' fontWeight='bold'>{desc1}</Text>
            <Text py='3' fontSize='lg' color='gray.5\700' fontWeight='bold'>{desc2}</Text>
            <Button fontSize='xl'>
                <Link href={linkName}>{buttonText}</Link>
            </Button>
        </Box>
    </Flex>

)
export default Banner;
