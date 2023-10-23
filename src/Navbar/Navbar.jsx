import React from 'react'
import { Button, Navbar } from 'flowbite-react';


function NavBar() {
    return (
        <>
            <Navbar fluid rounded>
                    <Navbar.Toggle />
                <Navbar.Brand href="#">
                    <img src="https://www.flowbite-react.com/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">React</span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    <Button>Get started</Button>
                </div>
                <Navbar.Collapse>
                    <Navbar.Link href="#" active>
                        Home
                    </Navbar.Link>
                    <Navbar.Link href="#">About</Navbar.Link>
                    <Navbar.Link href="#">Services</Navbar.Link>
                    <Navbar.Link href="#">Pricing</Navbar.Link>
                    <Navbar.Link href="#">Contact</Navbar.Link>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}


export default NavBar
