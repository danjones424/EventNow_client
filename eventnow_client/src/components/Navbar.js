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
} from '../styles/Navbar.style';
import LogoImg from '../Assets/Logo.png';

const Navbar = () => {
	const [extendNavbar, setExtendNavbar] = useState(false);

	return (
		<NavbarContainer extendNavbar={extendNavbar}>
			<NavbarInnerContainer>
				<LeftContainer>
					<NavbarLinkContainer>
						<NavbarLink to="/home">Home</NavbarLink>
						<NavbarLink to="/login">Login</NavbarLink>
						<NavbarLink to="/signup">Sign Up</NavbarLink>
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
					<NavbarLinkExtended to="/login">Login</NavbarLinkExtended>
					<NavbarLinkExtended to="/signup">
						Sign Up
					</NavbarLinkExtended>
				</NavbarExtendedContainer>
			)}
		</NavbarContainer>
	);
};

export default Navbar;
