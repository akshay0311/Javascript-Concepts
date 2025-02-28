// Benifits of using Webpack

// Benifits of Webpack 
// 1. Module Bundling -> Multiple modules into a single or multiple optimized files
// 2. Dependency Management -> 
// 3. Code Splitting -> Splitting small manageable chunks so that they are loaded on demand reducing initial load time
// 4. Optimization Minifies and optimizes assets such as JavaScript, CSS, and images to reduce file size and improve load times.
// 5. Transformation -> Transpiling modern javascript into ES5 JS & processes TypeScript, SCSS, and JSX via loaders


const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point
  output: {
    filename: 'bundle.js', // Output file
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Process .js files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Transpile ES6+ to ES5
        },
      },
      {
        test: /\.css$/, // Process .css files
        use: ['style-loader', 'css-loader'], // Inject styles into the DOM
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }), // Generate an HTML file
  ],
  mode: 'development', // 'development' or 'production'
};
