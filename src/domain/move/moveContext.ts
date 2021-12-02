import { Direction } from "../../enum/Direction.enum";
import { Mower } from "../../enum/Mower.enum";
import { LawnInterface } from "../../interface/Lawn.interface";
import { MowerInterface } from "../../interface/Mower.interface";
import { pointNotAvailable } from "../../tools/tools";

export const moveContext = () => {
	const toLeft = (mower: MowerInterface) => {
		switch (mower.direction) {
			case "E":
				mower.direction = "N";
				break;
			case "N":
				mower.direction = "W";
				break;
			case "W":
				mower.direction = "S";
				break;
			case "S":
				mower.direction = "S";
				break;
		}
	};

	const toRight = (mower: MowerInterface) => {
		switch (mower.direction) {
			case "E":
				mower.direction = "S";
				break;
			case "S":
				mower.direction = "W";
				break;
			case "W":
				mower.direction = "N";
				break;
			case "N":
				mower.direction = "E";
				break;
		}
	};

	const toFront = (mower: MowerInterface) => {
		switch (mower.direction) {
			case "N":
				mower.y++;
				break;
			case "S":
				mower.y--;
				break;
			case "E":
				mower.x++;
				break;
			case "W":
				mower.x--;
				break;
		}
	};

	const toBack = (mower: MowerInterface) => {
		switch (mower.direction) {
			case "N":
				mower.y--;
				break;
			case "S":
				mower.y++;
				break;
			case "E":
				mower.x--;
				break;
			case "W":
				mower.x++;
				break;
		}
	};

	const moving = (
		mower: MowerInterface,
		frequencies: string,
		lawn: LawnInterface
	) => {
		frequencies.split("").map((sec) => {
			switch (sec) {
				case "L":
					toLeft(mower);
					break;
				case "R":
					toRight(mower);
					break;
				case "F":
					// if (pointNotAvailable(mower.x, mower.y, lawn)) toFront(mower);
					break;
				default:
					console.log("Input Format Error");
			}
		});
	};

	return { toLeft, toRight, toFront, toBack };
};
