export interface iEquipmentInfo {
	itemName?: string;
	itemEquipmentPart?: string;
	itemIcon?: string;
	itemTotalOption?: any;
	itemBaseOption?: any;
	itemStarforceOption?: any;
	itemEtcOption?: any;
	itemShapeIcon?: string;
	itemAddOption?: {
		str: string;
		dex: string;
		int: string;
		luk: string;
		max_hp: string;
		max_mp: string;
		attack_power: string;
		magic_power: string;
		armor: string;
		speed: string;
		jump: string;
		boss_damage: string;
		damage: string;
		all_stat: string;
		equipment_level_decrease: string;
	};
	additionalPotentialOptionGrade: string;
	potentialOptionGrade: string;
	potentialOption1: string;
	potentialOption2: string;
	potentialOption3: string;
	additionalPotentialOption1: string;
	additionalPotentialOption2: string;
	additionalPotentialOption3: string;
	starforce: number;
}
