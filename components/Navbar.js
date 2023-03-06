
import Link from "next/link";
import { Menu, MenuButton, IconButton, Flex, Box, Spacer, MenuList, MenuItem } from "@chakra-ui/react";
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc'
import { BsSearch } from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'

const Navbar = () => (
    <Flex p='2'>
        <Box fontSize='3xl' color='green' fontWeight='bold'>
            <Link href='/' >
                HouseHub
            </Link>
        </Box>
        <Spacer />
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color='green.200' />
                <MenuList>
                    <Link href='/' passHref>
                        <MenuItem icon={<FcHome />} >Home</MenuItem>
                    </Link>
                    <Link href='/search' passHref>
                        <MenuItem icon={<BsSearch />} >Search</MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-sale' passHref>
                        <MenuItem icon={<FcAbout />} >Buy Property</MenuItem>
                    </Link>
                    <Link href='/search?purpose=for-rent' passHref>
                        <MenuItem icon={<FiKey />} >Rent Property</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>

    </Flex>
)

export default Navbar;