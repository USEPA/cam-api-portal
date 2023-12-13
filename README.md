# Clean Air Markets API Portal

The Clean Air Markets (CAM) API Portal is the documentation site for a suite of API's that EPA's Clean Air Markets Division (CAMD) provides to access the data collected to run programs designed to reduce air pollution from power plants.  These APIs will also used by the Clean Air Markets Programd Data (CAMPD) site and the new version of the Emission Collection and Monitoring Plan System (ECMPS).

## npm login

This project uses npm to install packages, start and testing the app, etc. Project contributors will need to use a personal access token (PAT) to authenticate to GitHub Packages. The PAT scopes should include repo and read:packages. You can authentiate to GitHub Packages by either logging into npm via the CLI or editing your ~/.npmrc file, see the [GitHub Guidance here](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token).

After configuring your npm login, users may continue experiencing issues using npm and should run `npm clean cache -f` to clean the npm cache.

## Required environment variables

* `$REACT_APP_API_UMBRELLA_KEY_CREATOR={cam_api_portal API key for API key signup form found in api gateway}`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

#### Production build steps

1. Merge any updates and re-run `npm install`
2. Test locally with `npm run start`
    * API docs
    * API key signup form
    * Contact us form
    * Any new links or content
    * Run unit tests
3. Run `npm run build`
4. Copy all css artifacts into clipboard using `cat build/static/css/*.css > /dev/clipboard` or `cat build/static/css/*.css | clip` (on Windows)
5. Paste copied css artifacts (e.g., for the react-swagger pages and any custom css) into "Page Javascript" section in drupal within a \<style\> tag
6. Copy all javascript artifacts into clipboard using `cat build/static/js/*.js > /dev/clipboard` or `cat build/static/js/*.js | clip` (in Windows)
7. Paste copied javascript artifacts into "Page Javascript" section in drupal within a \<script\> tag
9. Tag new version and create release within github including the complete html drupal artifact
8. Update any cam-api-example scripts with new changes and merge into master


## License & Contributing
​
This project is licensed under the MIT License. We encourage you to read this project’s [License](LICENSE), [Contributing Guidelines](CONTRIBUTING.md), and [Code of Conduct](CODE_OF_CONDUCT.md).

## Disclaimer

The United States Environmental Protection Agency (EPA) GitHub project code is provided on an "as is" basis and the user assumes responsibility for its use. EPA has relinquished control of the information and no longer has responsibility to protect the integrity, confidentiality, or availability of the information. Any reference to specific commercial products, processes, or services by service mark, trademark, manufacturer, or otherwise, does not constitute or imply their endorsement, recommendation or favoring by EPA. The EPA seal and logo shall not be used in any manner to imply endorsement of any commercial product or activity by EPA or the United States Government.

