import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
		alias: {
			'@': path.join(__dirname, 'src/'),
			'@app': path.join(__dirname, 'src/app/'),
			'@assets': path.join(__dirname, 'src/assets/'),
			'@components': path.join(__dirname, 'src/components/'),
			'@lib': path.join(__dirname, 'src/lib/'),
			'@constants': path.join(__dirname, 'src/constants/'),
			'@public': path.join(__dirname, 'public/'),
			'@styles': path.join(__dirname, 'src/styles/'),
			'@types': path.join(__dirname, 'src/types/'),
		},
	},
	server: {
		watch: {
			usePolling: true,
		},
		host: true,
		strictPort: true,
		port: 8080,
	},
});
