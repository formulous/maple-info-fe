import { styled } from "styled-components";

export const Logo = styled.img`
	width: 16px;
	height: 16px;
	margin-right: 5px;
`;

export const Font12Px = styled.span`
	font-size: 12px;
	color: inherit;
`;

export const Font14Px = styled.span`
	font-size: 14px;
	font-weight: bold;
	margin-bottom: 10px;
`;

export const Row = styled.div`
	display: flex;
	width: 100%;
	flex-direction: row;
`;

export const Col = styled.div`
	display: flex;
	flex-direction: column;
`;

export const ImageWrapper = styled.div`
	border: 1.5px solid;
	border-radius: 3px;
	width: 36px;
	height: 36px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
`;
