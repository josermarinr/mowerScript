export const mowerEntity = ({
	x,
	y,
	orientation,
}: {
	x: number;
	y: number;
	orientation: string;
}) => {
	return {
		position: { x: x, y: y },
		orientation: orientation,
	};
};
