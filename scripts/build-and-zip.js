const { execSync } = require('child_process');
const fs = require('fs');
const archiver = require('archiver');

const outputDir = 'out';
const archiveName = 'out.zip';

console.log('Starting build process...');

try {
	// 1. Run next build
	console.log('Running next build...');
	execSync('next build', { stdio: 'inherit' });
	console.log('Build successful.');

	// 2. Run next-sitemap (if it's in postbuild)
	console.log('Running next-sitemap...');
	execSync('next-sitemap', { stdio: 'inherit' });
	console.log('Sitemap generation successful.');

	// 3. Create a zip file
	console.log(`Creating ${archiveName}...`);
	const output = fs.createWriteStream(archiveName);
	const archive = archiver('zip', { zlib: { level: 9 } });

	output.on('close', () => {
		console.log(`\n${archiveName} has been created successfully! (${archive.pointer()} total bytes)`);
	});

	archive.on('error', (err) => {
		throw err;
	});

	archive.pipe(output);
	archive.directory(outputDir, false);
	archive.finalize();

} catch (error) {
	console.error('An error occurred during the build and zip process:', error);
	process.exit(1);
}