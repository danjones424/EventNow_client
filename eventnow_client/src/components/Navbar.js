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
						{loggedIn ? <NavbarLink to="/" >Home</NavbarLink> : null}
						{!loggedIn ? <NavbarLink to="/">Login</NavbarLink> : null}
						{!loggedIn ? <NavbarLink to="/signup">Sign Up</NavbarLink> : null}
						{loggedIn ? <Button onClick={handleLogOut}>Log Out</Button> : null}
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
					{/* {loggedIn ? <NavbarLinkExtended to="/home">Home</NavbarLinkExtended> : null}
						{!loggedIn ? <NavbarLinkExtended to="/login">Login</NavbarLinkExtended> : null}
						{!loggedIn ? <NavbarLinkExtended to="/signup">Sign Up</NavbarLinkExtended> : null}
						{loggedIn ? <NavbarLinkExtended onClick={handleLogOut}>Log Out</NavbarLinkExtended> : null} */}
					
				</NavbarExtendedContainer>
			)}
		</NavbarContainer>
	);
};

export default Navbar;
