
<a id="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/github_username/repo_name">
    <img src="https://github.com/user-attachments/assets/0f2cd737-de1f-44cc-809a-bc2a90bccb0d" alt="Logo">

  </a>

<h3 align="center">UK Jobble</h3>

  <p align="center">
    Job Searching Website Allowing users to search over 130000 jobs in the United Kingdom
    <br />
    <a href="https://job.trentonfisher.xyz">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#usage">More ScreenShots</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## About The Project
This is a job search application that allows users to explore over 130,000 job opportunities across the UK by leveraging the Reed.co.uk API. With this app, users can easily search for jobs based on location, job title, or other filters to match their career goals.

Key features include:
  - Job Search: Browse and filter through a vast collection of job listings pulled from Reed.co.uk.
  - User Authentication: Sign up or log in to your account to save jobs you are interested in.
  - Save and Track Jobs: Keep track of your favorite jobs by saving them to your profile for later review.
  - Apply for Jobs: Once you've found the perfect job, you can choose to apply directly through Reed.co.uk or through the hosting company's website.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Built With

- ⚡️ Next.js 14
- 🐘 PostgreSQL
- ✨ TypeScript
- 💨 Auth0

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

This section explains how to get started with running the project locally. Follow these steps in order to set up and run the job search app on your local machine.

### Prerequisites

Make sure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (version 14.x or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. **Clone the repository**  
   Open your terminal and run the following command to clone the repository:
   ```bash
   git clone https://github.com/Trenton1Fisher/job-search.git
2. Install NPM packages
   ```sh
   npm install
   ```
3. Obtain necessary api keys
   
   - First Visit [Reed.co.uk](https://www.reed.co.uk/developers) to obtain api key to enable job searching data
     
   - Go to [Vercel](https://vercel.com/) and set up a PostgreSQL database. Once the database is created, Copy all relevant credentials.
   
   - Copy your API keys and credentials into the following format(It is important to keep all names the same and do not edit the port of the Auth0 base URL).
     ```
      AUTH0_BASE_URL=http://localhost:3000
      AUTH0_SECRET=your_auth0_secret_key
      SEARCH_API_KEY=your_search_api_key
      AUTH0_ISSUER_BASE_URL=your_auth0_issuer_base_url
      AUTH0_CLIENT_ID=your_auth0_client_id
      AUTH0_CLIENT_SECRET=your_auth0_client_secret
      CLIENT_ID=your_google_client_id
      CLIENT_SECRET=your_google_client_secret
      POSTGRES_URL_NON_POOLING=your_postgres_non_pooling_url
      POSTGRES_URL_NO_SSL=your_postgres_no_ssl_url
      POSTGRES_PRISMA_URL=your_postgres_prisma_url
      POSTGRES_USER=your_postgres_user
      POSTGRES_PASSWORD=your_postgres_password
      POSTGRES_HOST=your_postgres_host
      POSTGRES_DATABASE=your_postgres_database
      POSTGRES_URL=your_postgres_url
      ```
     
5. Change git remote url to avoid accidental pushes to base project
   ```sh
   git remote set-url origin github_username/repo_name
   git remote -v # confirm the changes
   ```
   
6. Lastly Run the app with:
   ```
   npm run dev
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## More Screenshots

- Job Results Page
  <img src="https://github.com/user-attachments/assets/22acddc2-757b-4e9c-b6ea-94c9f151d798" alt="Job Results Page" />

- Individual Job Page with links to apply through Reed.uk or directly with Company
  <img src="https://github.com/user-attachments/assets/e656667f-e93a-4b4f-9ee5-2894a93e3e42" alt="Individual Job Page" />
  
- Login Page
  <img src="https://github.com/user-attachments/assets/80a7c1f3-caef-4faf-bc4e-19014f7ba200" alt="Login Page"/>

- Saved Jobs Page allowing users to save and delete jobs
<img src="https://github.com/user-attachments/assets/f851314c-da90-4bae-936c-5008a5f6d64e" alt="Saved Jobs Page" />

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Trenton Fisher
trenton0fisher@gmail.com

Project Link: [View Live Site](https://job.trentonfisher.xyz)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
