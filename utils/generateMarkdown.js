// render license badge
const renderLicenseSection = license => {
  if (license === 'GNU AGPLv3') {
    return `\r[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
  }
  else if (license === 'GNU GPLv3') {
    return `\r[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  else if (license === 'GNU AGPLv3') {
    return `\r[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
  }
  else if (license === 'GNU LGPLv3') {
    return `\r[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
  }
  else if (license === 'Mozilla Public License 2.0') {
    return `\r[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
  }
  else if (license === 'Apache License 2.0') {
    return `\r[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  else if (license === 'MIT License') {
    return `\r[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  else if (license === 'Boost Software License 1.0') {
    return `\r[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
  }
  else if (license === 'The Unlicense') {
    return `\r[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `

# ${data.title}

![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${data.github}/${data.repo}?style=flat&logo=appveyor) ![Badge for GitHub repo size](https://img.shields.io/github/repo-size/${data.github}/${data.repo}?style=flat&logo=appveyor)

Check out the badges hosted by [shields.io](https://shields.io/).

## Description:

${data.description}
	
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation:
${data.installation}

## Usage:
${data.usage}

## License:

${renderLicenseSection(data.license)}

## Contributing:

${data.contributing}

## Tests:

${data.test}

## Questions:
Contact me:

Github: https://github.com/${data.github}

Email: ${data.email}

`;
}

module.exports = generateMarkdown;
