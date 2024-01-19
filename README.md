
# GitHub Repositories Display

This project is a simple web application that retrieves and displays GitHub repositories for a specified user. It includes a user profile section with relevant information and a main section to showcase GitHub repositories.

## Table of Contents

- [Introduction](#introduction)
- [Usage](#usage)
- [Files](#files)
- [Dependencies](#dependencies)
- [How it Works](#how-it-works)
- [Styling](#styling)

## Introduction

The web application is designed to showcase GitHub repositories for a specific user, in this case, the user with the GitHub username `himanshu007-creator`. It uses the GitHub API to fetch repository information and dynamically displays it on the web page.

## Usage

To use the application, simply open the HTML file in a web browser. The page will load the GitHub repositories for the specified user (`himanshu007-creator`), displaying information such as repository name, description, topics, language, and a link to view the repository on GitHub.

Additionally, the application provides a dropdown menu to select the number of repositories to display per page, and it includes a loading spinner to indicate when repositories are being fetched.

## Files

- `index.html`: HTML file that structures the web page.
- `style.css`: CSS file containing styles for the web page.
- `script.js`: JavaScript file handling the logic for fetching and displaying GitHub repositories.

## Dependencies

- Bootstrap v5.3.2: Used for styling and responsiveness.
- GitHub API: Utilized to fetch repository information.

## How it Works

1. The JavaScript code (`script.js`) is responsible for handling the dynamic loading of GitHub repositories.
2. On page load, the script fetches the repositories from the GitHub API for the specified user (`himanshu007-creator`).
3. The fetched repositories are displayed on the web page, showing relevant details such as repository name, description, topics, and language.
4. The application includes a pagination feature to navigate through multiple pages of repositories.
5. Users can also select the number of repositories to display per page using the dropdown menu.

## Styling

The styling is done using Bootstrap for a clean and responsive layout. Custom styles are defined in the `style.css` file to enhance the visual appeal of the web page.

