
# Cat Meme Generator

### Notes
- This project requires nodejs 17+ 
- If you have installed node using nvm, go into the root of this project in the terminal and run `nvm use`, the `.npmrc` file will give you the version i used when creating this project (v18.16.1)
- As at Feb 11th 2020, the `request` package is fully deprecated therefore we have used `axios`
- The library used to merge the images `merge-img` has not been maintained since 2019. It uses jimp under the hood. `jimp` is implemented in pure js however `sharp` is a better alternative for improved performance
- As per the cataas documentation, `color` and `size` cannot be part of the query params


### Usage

Clone this the project
> git clone https://github.com/Muljayan/cat-meme-generator.git

Make sure the node version is 17+
> node -v

If you have installed nvm
> nvm use

Install the modules
> npm install

Run the app
> npm start