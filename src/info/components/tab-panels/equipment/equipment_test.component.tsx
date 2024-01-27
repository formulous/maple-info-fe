import { styled } from "styled-components";
import { EquipmentBoard } from "./equipment-board.component";
import { useQuery } from "react-query";
import { getEquipmentInfo } from "../../../../common/apis/character.api";
import { iEquipmentInfo } from "../../../../common/constants/equipment-map.constant";
import { MOCK_EQUIPMENT } from "../../../../common/constants/mock-data.constant";
import Utils from "../../../../common/utils/utils";

type itemType = {
	item_equipment_part?: any;
	item_equipment_slot?: any;
	item_name?: any;
	item_icon?: any;
	item_description?: any;
	item_shape_name?: any;
	item_shape_icon?: any;
	item_gender?: any;
	item_total_option?: any;
	item_base_option?: any;
	potential_option_grade?: any;
	additional_potential_option_grade?: any;
	potential_option_1?: any;
	potential_option_2?: any;
	potential_option_3?: any;
	additional_potential_option_1?: any;
	additional_potential_option_2?: any;
	additional_potential_option_3?: any;
	equipment_level_increase?: any;
	item_exceptional_option?: any;
	item_add_option?: any;
	growth_exp?: any;
	growth_level?: any;
	scroll_upgrade?: any;
	cuttable_count?: any;
	golden_hammer_flag?: any;
	scroll_resilience_count?: any;
	scroll_upgradeable_count?: any;
	soul_name?: any;
	soul_option?: any;
	item_etc_option?: any;
	starforce?: any;
	starforce_scroll_flag?: any;
	item_starforce_option?: any;
	special_ring_level?: any;
	date_expire?: any;
};

const Wrapper = styled.div`
	width: 100%;
	height: 100%;
`;

export function EquipmentTest(props: { characterName: string }) {
	const { characterName } = props;

	// ## OPEN API 다 썼을때 목 데이터 활용
	const equipmentList = MOCK_EQUIPMENT.map((item: itemType): iEquipmentInfo => {
		return {
			itemName: item.item_name,
			itemEquipmentPart: item.item_equipment_part,
			itemIcon: item.item_icon,
			itemTotalOption: item.item_total_option,
			itemBaseOption: item.item_base_option,
			itemAddOption: item.item_add_option,
			itemStarforceOption: item.item_starforce_option,
			itemEtcOption: item.item_etc_option,
			itemShapeIcon: item.item_shape_icon,
			potentialOptionGrade: item.potential_option_grade,
			starforce: item.starforce,
			additionalPotentialOptionGrade: item.additional_potential_option_grade,
			potentialOption1:
				item.potential_option_1 && Utils.filterOptions(item.potential_option_1),
			potentialOption2:
				item.potential_option_2 && Utils.filterOptions(item.potential_option_2),
			potentialOption3:
				item.potential_option_3 && Utils.filterOptions(item.potential_option_3),
			additionalPotentialOption1:
				item.additional_potential_option_1 &&
				Utils.filterOptions(item.additional_potential_option_1),
			additionalPotentialOption2:
				item.additional_potential_option_2 &&
				Utils.filterOptions(item.additional_potential_option_2),
			additionalPotentialOption3:
				item.additional_potential_option_3 &&
				Utils.filterOptions(item.additional_potential_option_3),
		};
	});

	return (
		<Wrapper>
			<EquipmentBoard equipmentList={equipmentList}></EquipmentBoard>
		</Wrapper>
	);
}
