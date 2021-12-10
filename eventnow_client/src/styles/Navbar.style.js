import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.nav`
	width: 100%;
	height: ${(props) => (props.extendNavbar ? '100vh' : '80px')};
	background-color: #cc5a71;
	display: flex;
	flex-direction: column;

	@media (min-width: 700px) {
		height: 80px;
	}
`;

export const LeftContainer = styled.div`
	flex: 70%;
	display: flex;
	align-items: center;
	padding-left: 5%;
`;

export const RightContainer = styled.div`
	flex: 30%;
	display: flex;
	justify-content: flex-end;
	padding-right: 50px;
`;

export const NavbarExtendedContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media (min-width: 700px) {
		display: none;
	}
`;

export const NavbarLinkContainer = styled.div`
	display: flex;
`;

export const NavbarInnerContainer = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
`;
export const NavbarLink = styled(Link)`
	color: #f0f757;
	font-size: x-large;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;
	margin: 10px;

	@media (max-width: 700px) {
		display: none;
	}
`;

export const Button = styled.button`
	background: transparent;
	border-radius: 3px;
	border: 2px solid #f0f757;
	background: palevioletred;
	color: #f0f757;
	margin: 0.5em 1em;
	padding: 0.25em 1em;
`;

export const Logo = styled.img`
	margin: 10px;
	max-width: 180px;
	height: auto;
`;

export const OpenLinksButton = styled.button`
	width: 70px;
	height: 50px;
	background: none;
	border: none;
	color: white;
	font-size: 45px;
	cursor: pointer;

	@media (min-width: 700px) {
		display: none;
	}
`;

export const NavbarLinkExtended = styled(Link)`
	color: white;
	font-size: x-large;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;
	margin: 10px;
`;
