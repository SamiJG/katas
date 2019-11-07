#!/bin/bash

echo -n "Kata Name? "
read -r kataName

while [ -d "$kataName" ]; do
    echo -n "Directory /$kataName already exist, please choose a new name: " 
    read -r kataName
done

echo -n "Description: "
read -r kataDescription

# generate folder
mkdir "$kataName"
cd "$kataName" || exit

# generate package.json
cat <<EOT >> package.json
{
  "name": "$kataName",
  "version": "1.0.0",
  "description": "$kataDescription",
  "main": "index.js",
  "scripts": {
    "test": "mocha ./*.spec.js"
  },
  "type": "commonjs",
  "author": "Sami Gildart",
  "license": "ISC",
  "devDependencies": {
    "chai": "4.2.0",
    "mocha": "6.2.2"
  }
}
EOT

# generate .gitignore
echo /node_modules >> .gitignore

# npm i
# npm i

# generate js file with function name and export
cat <<EOT >> $kataName.js
const $kataName = () => {};

module.exports = { $kataName };
EOT

# generate spec.js file with deps required in and initial describe/it block
cat <<EOT >> $kataName.spec.js
const { $kataName } = require ("./$kataName");
const { expect } = require("chai")

describe('$kataName', () => {
  it('', () => {
    
  });
});

EOT

# generate markdown with template
cat <<EOT >> $kataName.md
 # Title

 link?
 
> ## Story
> 
>
> 
> ## Example
> 
> 
> 
> ## Notes
>
>
EOT

CYAN='\033[0;36m'
PURPLE='\033[0;35m'

echo -e "${CYAN}Created initial kata structure for $kataName"

# install the node packages
echo -e "${PURPLE}Installing packages....."
npm i