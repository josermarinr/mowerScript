import { MowerInterface } from "../interface/Mower.interface";

export const lawnEntity = ({
	height,
	width,
	mowerPosition = [],
}: {
	width: number;
	height: number;
	mowerPosition?: MowerInterface[];
}) => {
	return {
		width: width,
		height: height,
		mowerPosition: mowerPosition,
		addMowerPosition: (mower: MowerInterface) => mowerPosition.push(mower),
		getSize: () => {
			return { width: width, height: height };
		},
		newSize: (newWidth: number, newHeight: number) => (
			(width = newWidth), (height = newHeight)
		),
		getMowerPosition: () => mowerPosition,
	};
};
