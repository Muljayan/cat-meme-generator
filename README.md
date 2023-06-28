
# Cat Meme Generator

### Notes
- This project requires nodejs 17+ 
- If you have installed node using nvm, go into the root of this project in the terminal and run `nvm use`, the `.npmrc` file will give you the version i used when creating this project (v18.16.1)
- As at Feb 11th 2020, the `request` package is fully deprecated therefore we have used `axios`
- The library used to merge the images `merge-img` has not been maintained since 2019. It uses jimp under the hood. `jimp` is implemented in pure js however `sharp` is a better alternative for improved performance
- As per the cataas documentation, `color` and `size` cannot be part of the query params


### Functional Requirements
- Use Cat as a Service (https://cataas.com)
- Fetches an image of a cat with some custom text
- Fetches an image of another cat with some more custom text 
- Binds these images together into one image
- Saves the resulting image as a file

### Non Functional Requirements
- Simplicity (less is more!)
- Maintainability
- Performance

### Task
- Refactor my application to improve, harden and modernize the code. 
- Be prepared to verbally rationalize the changes you make. 
- Wrapping it up in a package with a proper package.json would be a good start.



