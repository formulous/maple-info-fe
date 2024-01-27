import { ReactElement } from "react";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "styled-components";
import { eTooltipHeight, eTooltipWidth } from "../enums";

export interface ITooltipProps {
	title?: string;
	children?: ReactElement;
	text?: string;
	width?: eTooltipWidth;
	height?: eTooltipHeight;
}

const TooltipBox = styled.div`
	display: flex;
	border: 1px solid black;
	border-radius: 5px;
	background-color: rgba(0, 0, 0, 0.8);
	position: absolute;
	z-index: 1;
	top: 100%;
`;

export function BaseTooltip(props: ITooltipProps) {
	const { title, children, text, width, height } = props;
	return (
		<TooltipBox
			style={{
				width: width ?? eTooltipWidth.S,
				height: height ?? eTooltipHeight.M,
			}}>
			<Tooltip title={title} placement="right-end">
				{children ? children : <div>{text}</div>}
			</Tooltip>
		</TooltipBox>
	);
}
