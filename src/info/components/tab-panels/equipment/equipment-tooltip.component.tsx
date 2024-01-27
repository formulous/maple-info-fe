import styled from "@emotion/styled";
import { BaseTooltip } from "../../../../common/components/tooltip.component";
import { iEquipmentInfo } from "../../../../common/constants/equipment-map.constant";
import {
	Font12Px,
	Font14Px,
	ImageWrapper,
	Row,
} from "../../../../common/styles/global-component";
import Utils from "../../../../common/utils/utils";
import { ePotentialOptionGrade } from "../../../../common/enums";

const EquipmentBox = styled.div`
	width: 100%;
	padding: 10px;
	color: white;
`;

const EquipStat = styled.div`
	padding: 10px 0 10px 0;
`;

export function EquipmentTooltip(props: { equip: iEquipmentInfo }) {
	const {
		itemName,
		itemEquipmentPart,
		itemIcon,
		itemAddOption,
		itemTotalOption,
		itemBaseOption,
		itemStarforceOption,
		itemEtcOption,
		itemShapeIcon,
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
		<BaseTooltip
			children={
				<EquipmentBox>
					<Row>
						<Font14Px
							style={{
								width: "100%",
								textAlign: "center",
								margin: 0,
							}}>
							{itemName}
						</Font14Px>
					</Row>
					{potentialOptionGrade && (
						<Row>
							<Font12Px
								style={{
									color: "white",
									width: "100%",
									textAlign: "center",
									marginBottom: "10px",
								}}>
								{"(" + potentialOptionGrade + " 아이템)"}
							</Font12Px>
						</Row>
					)}
					<Row
						style={{
							padding: "5px 0 5px 0",
							borderTop: "1px dotted gray",
							borderBottom: "1px dotted gray",
						}}>
						<ImageWrapper
							style={{
								borderColor: `${Utils.potentialOptionToColor(
									potentialOptionGrade as ePotentialOptionGrade
								)}`,
								backgroundColor: "white",
							}}>
							<img src={itemIcon} />
						</ImageWrapper>
						<Font12Px
							style={{
								display: "flex",
								alignItems: "center",
								color: "#f6a730",
								marginLeft: "5px",
							}}>
							{`* REQ LEV: ${itemBaseOption.baseEquipmentLevel}`}
						</Font12Px>
					</Row>
					<EquipStat>
						<Row>
							<Font12Px>{`장비 분류 : ${itemEquipmentPart}`}</Font12Px>
						</Row>
						<Row>
							{Utils.optionFormatting(
								"STR",
								itemTotalOption.str,
								itemBaseOption.str,
								itemAddOption?.str ?? "0",
								itemEtcOption?.str,
								itemStarforceOption?.str
							)}
						</Row>
						<Row>
							{Utils.optionFormatting(
								"DEX",
								itemTotalOption.dex,
								itemBaseOption.dex,
								itemAddOption?.dex ?? "0",
								itemEtcOption?.dex,
								itemStarforceOption?.dex
							)}
						</Row>
						<Row>
							{Utils.optionFormatting(
								"INT",
								itemTotalOption.int,
								itemBaseOption.int,
								itemAddOption?.int ?? "0",
								itemEtcOption?.int,
								itemStarforceOption?.int
							)}
						</Row>
						<Row>
							{Utils.optionFormatting(
								"LUK",
								itemTotalOption.luk,
								itemBaseOption.luk,
								itemAddOption?.luk ?? "0",
								itemEtcOption?.luk,
								itemStarforceOption?.luk
							)}
						</Row>
					</EquipStat>
				</EquipmentBox>
			}></BaseTooltip>
	);
}
