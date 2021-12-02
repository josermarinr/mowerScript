import type { Config } from "@jest/types";

const config: Config.InitialOptions = {
	verbose: true,
	preset: "ts-jest",
	moduleFileExtensions: ["ts", "tsx", "js", "json"],
	collectCoverage: true,
	transform: {
		"^.+\\.ts?$": "ts-jest",
	},
	testEnvironment: "jsdom",
};
export default config;
