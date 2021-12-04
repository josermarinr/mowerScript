import { moveContext } from "./domain/move/moveContext";
import { horizontalInside, verticalInside } from "./domain/move/moveValidation";
import { lawnEntity } from "./entity/lanwEntity";
import { mowerEntity } from "./entity/mowerEntity";
import {
	fileToArray,
	pointNotAvailable,
	splitMowerByFile,
	splitSequenciesByFile,
} from "./tools/tools";

export const index = (fileUrl: string) => {
	const { moving } = moveContext();
	const data = fileToArray(fileUrl);
	const lawnLine = data.shift();
	const width = Number(lawnLine?.split(" ")[0]);
	const height = Number(lawnLine?.split(" ")[1]);

	const lawn = lawnEntity({ width: width, height: height });

	const mowerList = splitMowerByFile(data);
	const sequenciesList = splitSequenciesByFile(data);
	const mowerResult: string[] = [];

	mowerList.map((mower, index) => {
		const currentMower = mowerEntity(mower);
		const includeMowerInLawn = pointNotAvailable(
			currentMower.x,
			currentMower.y,
			lawn
		);
		const isInsideOfLawn =
			horizontalInside(currentMower, lawn) &&
			verticalInside(currentMower, lawn);

		if (includeMowerInLawn !== false && isInsideOfLawn !== false) {
			lawn.addMowerPosition(currentMower);
			moving({
				lawn: lawn,
				mower: currentMower,
				sequencies: sequenciesList[index],
			});
			mowerResult.push(
				`${currentMower.x} ${currentMower.y} ${currentMower.direction}`
			);
		} else {
			console.error(
				`error in position of mower ${currentMower.x} ${currentMower.y}`
			);
			return false;
		}
	});

	console.log(mowerResult);
};

index("./src/mock/mock.txt");
