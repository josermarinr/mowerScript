import { lawnEntity } from "./entity/lanwEntity";
import { fileToArray } from "./tools/tools";

export const index = (fileUrl: string) => {
	const data = fileToArray(fileUrl);
	const lawnLine = data.shift();
	const width = Number(lawnLine?.split(" ")[0]);
	const height = Number(lawnLine?.split(" ")[1]);

	const lawn = lawnEntity({ width: width, height: height });
	console.log("====================================");
	console.log(data);
	console.log("====================================");
};

index("./src/mock/mock.txt");
