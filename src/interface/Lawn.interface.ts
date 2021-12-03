import { MowerInterface } from "./Mower.interface";

export interface LawnInterface {
	width: number;
	height: number;
	mowerPosition: MowerInterface[];
}
