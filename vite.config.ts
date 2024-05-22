import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import path from "path";

export default defineConfig({
	plugins: [solidPlugin()],
	server: {
		port: 3000,
	},
	build: {
		target: "esnext",
	},
	resolve: {
		alias: {
			"@atoms": path.resolve(__dirname, "./src/components/atoms"),
			"@molecules": path.resolve(__dirname, "./src/components/molecules"),
			"@organisms": path.resolve(__dirname, "./src/components/organisms"),
		},
	},
});
