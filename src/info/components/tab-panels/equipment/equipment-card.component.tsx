import styled from "@emotion/styled";
import {
	Col,
	Font12Px,
	ImageWrapper,
	Row,
} from "../../../../common/styles/global-component";
import Utils from "../../../../common/utils/utils";
import { ePotentialOptionGrade } from "../../../../common/enums";
import { useState } from "react";
import { EquipmentTooltip } from "./equipment-tooltip.component";

const EquipmentBox = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	border-radius: 5px;
	padding: 5px 0px;
	border: 1px solid #969899;
	height: 100px;
`;

const Starforce = styled.div`
	background-color: #fff8e8;
	border-radius: 3px;
	color: #f6a730;
	font-size: 12px;
	width: fit-content;
	font-weight: bold;
`;

const AdditionalOption = styled.div`
	background-color: #efefef;
	border-radius: 3px;
	color: #666a7a;
	font-size: 12px;
	width: fit-content;
	font-weight: bold;
`;

export function EquipmentCard(props: any) {
	const [openTooltip, setOpenTooltip] = useState(false);

	const {
		itemName,
		itemEquipmentPart,
		itemIcon,
		itemShapeIcon,
		itemAddOption,
		starforce,
		potentialOptionGrade,
		additionalPotentialOptionGrade,
		potentialOption1,
		potentialOption2,
		potentialOption3,
		additionalPotentialOption1,
		additionalPotentialOption2,
		additionalPotentialOption3,
	} = props.equip;

	return (
		<EquipmentBox
			onMouseEnter={() => {
				setOpenTooltip(true);
			}}
			onMouseLeave={() => {
				setOpenTooltip(false);
			}}>
			<Row
				style={{
					gap: 8,
					flex: 3,
					borderBottom: "0.5px solid #969899",
					padding: "0px 11px",
					alignItems: "center",
				}}>
				<ImageWrapper
					style={{
						borderColor: `${Utils.potentialOptionToColor(
							potentialOptionGrade as ePotentialOptionGrade
						)}`,
					}}>
					<img src={itemIcon} />
				</ImageWrapper>
				<Col>
					<Font12Px style={{ color: "#666A7A" }}>{itemEquipmentPart}</Font12Px>
					<Font12Px style={{ fontWeight: "bold" }}>{itemName}</Font12Px>
					<Row style={{ gap: 8 }}>
						{starforce > 0 && <Starforce>{"★" + starforce}</Starforce>}
						<AdditionalOption>200급</AdditionalOption>
					</Row>
				</Col>
			</Row>
			<Row
				style={{
					flex: 1,
					padding: "5px 11px 0px 11px",
					fontWeight: "bold",
					gap: 6,
					color: `${Utils.potentialOptionToColor(
						potentialOptionGrade as ePotentialOptionGrade
					)}`,
				}}>
				<Font12Px>{potentialOption1}</Font12Px>
				<Font12Px>{potentialOption2}</Font12Px>
				<Font12Px>{potentialOption3}</Font12Px>
			</Row>
			<Row
				style={{
					flex: 1,
					padding: "5px 11px 0px 11px",
					gap: 6,
					fontWeight: "bold",
					color: `${Utils.potentialOptionToColor(
						additionalPotentialOptionGrade as ePotentialOptionGrade
					)}`,
				}}>
				<Font12Px>{additionalPotentialOption1}</Font12Px>
				<Font12Px>{additionalPotentialOption2}</Font12Px>
				<Font12Px>{additionalPotentialOption3}</Font12Px>
			</Row>
			{openTooltip && <EquipmentTooltip equip={props.equip}></EquipmentTooltip>}
			{/* <EquipmentTooltip equip={props.equip}></EquipmentTooltip> */}
		</EquipmentBox>
	);
}
