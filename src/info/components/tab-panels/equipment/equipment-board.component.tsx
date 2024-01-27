import { styled } from "styled-components";
import { iEquipmentInfo } from "../../../../common/constants/equipment-map.constant";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { EquipmentCard } from "./equipment-card.component";

const Wrapper = styled.div`
	display: grid;
	gap: 8px;
	color: black;
	width: 100%;
	height: 490px;
`;

export function EquipmentBoard(props: { equipmentList: iEquipmentInfo[] }) {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const { equipmentList } = props;

	const handleResize = () => {
		setWindowWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<Wrapper>
			<Grid container spacing={1}>
				{equipmentList.map((equip, idx) => {
					return (
						<Grid item xs={12} sm={windowWidth > 1200 ? 4 : 6} key={idx}>
							<EquipmentCard equip={equip}></EquipmentCard>
						</Grid>
					);
				})}
			</Grid>
		</Wrapper>
	);
}
