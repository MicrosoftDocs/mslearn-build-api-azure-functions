---
page_type: sample
languages:
  - javascript
products:
  - azure
description: "Products Manager application for Serverless API Learn Module"
urlFragment: "mslearn-build-api-azure-functions"
---

# Official Microsoft Sample

<!--
Guidelines on README format: https://review.docs.microsoft.com/help/onboard/admin/samples/concepts/readme-template?branch=master

Guidance on onboarding samples to docs.microsoft.com/samples: https://review.docs.microsoft.com/help/onboard/admin/samples/process/onboarding?branch=master

Taxonomies for products and languages: https://review.docs.microsoft.com/new-hope/information-architecture/metadata/taxonomies?branch=master
-->

This is a sample web application frontend for the Serverless API Learn Module.

## Contents

Outline the file contents of the repository. It helps users navigate the codebase, build configuration and any related assets.

| File/folder       | Description                                                                   |
| ----------------- | ----------------------------------------------------------------------------- |
| `frontend`        | The frontend website for the Products Manager application.                    |
| `api`             | A base Azure Functions project where the user will finish out the API project |
| `.gitignore`      | Define what to ignore at commit time.                                         |
| `CHANGELOG.md`    | List of changes to the sample.                                                |
| `CONTRIBUTING.md` | Guidelines for contributing to the sample.                                    |
| `README.md`       | This README file.                                                             |
| `LICENSE`         | The license for the sample.                                                   |

## Prerequisites

- Node.js

## Setup

Switch to the "frontend" directory.

## Running the sample

Run `npm start`.

## Key concepts

The "frontend" folder contains a single `index.html` file. This file defines the interface for the Products Manager application. It references the Bulma CSS framework, the Vue.js JavaScript framework, and a reference to the `index.js` file.

The `index.js` file is a single Vue.js object which the `index.html` file needs to properly function. This `index.js` file contains all of the application logic, binding code and AJAX requests.

## Contributing

This project welcomes contributions and suggestions. Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.
