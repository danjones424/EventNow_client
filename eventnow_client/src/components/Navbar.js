import React, { useState } from 'react';
import {
	LeftContainer,
	OpenLinksButton,
	Logo,
	NavbarContainer,
	NavbarExtendedContainer,
	NavbarInnerContainer,
	NavbarLink,
	NavbarLinkContainer,
	RightContainer,
	NavbarLinkExtended,
	Button,
} from '../styles/Navbar.style';
import LogoImg from '../Assets/Logo.png';

const Navbar = ({ handleLogOut, loggedIn }) => {
	const [extendNavbar, setExtendNavbar] = useState(false);

	return (
		<NavbarContainer extendNavbar={extendNavbar}>
			<NavbarInnerContainer>
				<LeftContainer>
					<NavbarLinkContainer>
						<NavbarLink to="/home">Home</NavbarLink>
						{!loggedIn ? <NavbarLink to="/login">Login</NavbarLink> : null}
						{!loggedIn ? <NavbarLink to="/signup">Sign Up</NavbarLink> : null}
						<Button onClick={handleLogOut}>Log Out</Button>
						<OpenLinksButton
							onClick={() => {
								setExtendNavbar((value) => !value);
							}}
						>
							{extendNavbar ? <>&#x263C;</> : <> &#8801;</>}
						</OpenLinksButton>
					</NavbarLinkContainer>
				</LeftContainer>
				<RightContainer>
					<Logo src={LogoImg}></Logo>
				</RightContainer>
			</NavbarInnerContainer>
			{extendNavbar && (
				<NavbarExtendedContainer>
					<NavbarLink to="/">Home</NavbarLink>
					{!loggedIn ?<NavbarLinkExtended to="/login">Login</NavbarLinkExtended> : null}
					{!loggedIn ?<NavbarLinkExtended to="/signup">Sign Up</NavbarLinkExtended> : null}
					
				</NavbarExtendedContainer>
			)}
		</NavbarContainer>
	);
};

export default Navbar;
