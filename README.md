<p align="center">
  <img src="https://img.icons8.com/external-tal-revivo-regular-tal-revivo/96/external-readme-is-a-easy-to-build-a-developer-hub-that-adapts-to-the-user-logo-regular-tal-revivo.png" width="100" />
</p>
<p align="center">
    <h1 align="center">SEQUELIZE-CRUD-POSTGRESQL</h1>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/Bruno-Elvis/sequelize-crud-postgresql?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/Bruno-Elvis/sequelize-crud-postgresql?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/Bruno-Elvis/sequelize-crud-postgresql?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/Bruno-Elvis/sequelize-crud-postgresql?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/EditorConfig-FEFEFE.svg?style=flat&logo=EditorConfig&logoColor=black" alt="EditorConfig">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/D-B03931.svg?style=flat&logo=D&logoColor=white" alt="D">
	<img src="https://img.shields.io/badge/Nodemon-76D04B.svg?style=flat&logo=Nodemon&logoColor=white" alt="Nodemon">
	<img src="https://img.shields.io/badge/Sequelize-52B0E7.svg?style=flat&logo=Sequelize&logoColor=white" alt="Sequelize">
	<img src="https://img.shields.io/badge/Heroku-430098.svg?style=flat&logo=Heroku&logoColor=white" alt="Heroku">
	<img src="https://img.shields.io/badge/SemVer-3F4551.svg?style=flat&logo=SemVer&logoColor=white" alt="SemVer">
	<br>
	<img src="https://img.shields.io/badge/Lodash-3492FF.svg?style=flat&logo=Lodash&logoColor=white" alt="Lodash">
	<img src="https://img.shields.io/badge/Yarn-2C8EBB.svg?style=flat&logo=Yarn&logoColor=white" alt="Yarn">
	<img src="https://img.shields.io/badge/Buffer-231F20.svg?style=flat&logo=Buffer&logoColor=white" alt="Buffer">
	<img src="https://img.shields.io/badge/HERE-00AFAA.svg?style=flat&logo=HERE&logoColor=white" alt="HERE">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
	<img src="https://img.shields.io/badge/Express-000000.svg?style=flat&logo=Express&logoColor=white" alt="Express">
</p>
<hr>

## 🔗 Quick Links

> - [📂 Repository Structure](#-repository-structure)
> - [🧩 Modules](#-modules)
> - [🚀 Getting Started](#-getting-started)
>   - [⚙️ Installation](#️-installation)
>   - [🤖 Running sequelize-crud-postgresql](#-running-sequelize-crud-postgresql)
>   - [🧪 Tests](#-tests)
> - [🤝 Contributing](#-contributing)
> - [📄 License](#-license)

---

## 📂 Repository Structure

```sh
└── sequelize-crud-postgresql/
    ├── LICENSE
    ├── README.md
    ├── package.json
    ├── src
    │   ├── config
    │   │   └── database.js
    │   ├── controllers
    │   │   ├── AddressController.js
    │   │   ├── DownloadController.js
    │   │   ├── ReportController.js
    │   │   ├── UserController.js
    │   │   └── VehiclesController.js
    │   ├── database
    │   │   ├── index.js
    │   │   └── migrations
    │   │       ├── 20220923032520-create-users-teste.js
    │   │       ├── 20220924233055-create-count-downs.js
    │   │       ├── 20220925000739-create-addresses.js
    │   │       ├── 20221002224200-create-vehicles.js
    │   │       └── 20221002224821-create-user_vehicle.js
    │   ├── models
    │   │   ├── Address.js
    │   │   ├── Downloads.js
    │   │   ├── Users.js
    │   │   └── Vehicles.js
    │   ├── routes.js
    │   └── server.js
    └── yarn.lock
```

---

## 🧩 Modules

<details closed><summary>.</summary>

| File                                                                                              | Summary                                  |
| ---                                                                                               | ---                                      |
| [package.json](https://github.com/Bruno-Elvis/sequelize-crud-postgresql/blob/master/package.json) |  `package.json` |
| [yarn.lock](https://github.com/Bruno-Elvis/sequelize-crud-postgresql/blob/master/yarn.lock)       |  `yarn.lock`    |

</details>

<details closed><summary>src</summary>

| File                                                                                            | Summary                                   |
| ---                                                                                             | ---                                       |
| [server.js](https://github.com/Bruno-Elvis/sequelize-crud-postgresql/blob/master/src/server.js) |  `src/server.js` |
| [routes.js](https://github.com/Bruno-Elvis/sequelize-crud-postgresql/blob/master/src/routes.js) |  `src/routes.js` |

</details>

<details closed><summary>src.database</summary>

| File                                                                                                   | Summary                                           |
| ---                                                                                                    | ---                                               |
| [index.js](https://github.com/Bruno-Elvis/sequelize-crud-postgresql/blob/master/src/database/index.js) |  `src/database/index.js` |

</details>

<details closed><summary>src.database.migrations</summary>

| File                                                                                                                                                                        | Summary                                                                                   |
| ---                                                                                                                                                                         | ---                                                                                       |
| [20221002224821-create-user_vehicle.js](https://github.com/Bruno-Elvis/sequelize-crud-postgresql/blob/master/src/database/migrations/20221002224821-create-user_vehicle.js) |  `src/database/migrations/20221002224821-create-user_vehicle.js` |
| [20220923032520-create-users-teste.js](https://github.com/Bruno-Elvis/sequelize-crud-postgresql/blob/master/src/database/migrations/20220923032520-create-users-teste.js)   |  `src/database/migrations/20220923032520-create-users-teste.js`  |
| [20221002224200-create-vehicles.js](https://github.com/Bruno-Elvis/sequelize-crud-postgresql/blob/master/src/database/migrations/20221002224200-create-vehicles.js)         |  `src/database/migrations/20221002224200-create-vehicles.js`     |
| [20220925000739-create-addresses.js](https://github.com/Bruno-Elvis/sequelize-crud-postgresql/blob/master/src/database/migrations/20220925000739-create-addresses.js)       |  `src/database/migrations/20220925000739-create-addresses.js`    |
| [20220924233055-create-count-downs.js](https://github.com/Bruno-Elvis/sequelize-crud-postgresql/blob/master/src/database/migrations/20220924233055-create-count-downs.js)   |  `src/database/migrations/20220924233055-create-count-downs.js`  |

</details>

<details closed><summary>src.models</summary>

| File                                                                                                         | Summary                                             |
| ---                                                                                                          | ---                                                 |
| [Users.js](https://github.com/Bruno-Elvis/sequelize-crud-postgresql/blob/master/src/models/Users.js)         |  `src/models/Users.js`     |
| [Downloads.js](https://github.com/Bruno-Elvis/sequelize-crud-postgresql/blob/master/src/models/Downloads.js) |  `src/models/Downloads.js` |
| [Address.js](https://github.com/Bruno-Elvis/sequelize-crud-postgresql/blob/master/src/models/Address.js)     |  `src/models/Address.js`   |
| [Vehicles.js](https://github.com/Bruno-Elvis/sequelize-crud-postgresql/blob/master/src/models/Vehicles.js)   |  `src/models/Vehicles.js`  |

</details>

<details closed><summary>src.config</summary>

| File                                                                                                       | Summary                                            |
| ---                                                                                                        | ---                                                |
| [database.js](https://github.com/Bruno-Elvis/sequelize-crud-postgresql/blob/master/src/config/database.js) |  `src/config/database.js` |

</details>

<details closed><summary>src.controllers</summary>

| File                                                                                                                                | Summary                                                           |
| ---                                                                                                                                 | ---                                                               |
| [AddressController.js](https://github.com/Bruno-Elvis/sequelize-crud-postgresql/blob/master/src/controllers/AddressController.js)   |  `src/controllers/AddressController.js`  |
| [VehiclesController.js](https://github.com/Bruno-Elvis/sequelize-crud-postgresql/blob/master/src/controllers/VehiclesController.js) |  `src/controllers/VehiclesController.js` |
| [ReportController.js](https://github.com/Bruno-Elvis/sequelize-crud-postgresql/blob/master/src/controllers/ReportController.js)     |  `src/controllers/ReportController.js`   |
| [UserController.js](https://github.com/Bruno-Elvis/sequelize-crud-postgresql/blob/master/src/controllers/UserController.js)         |  `src/controllers/UserController.js`     |
| [DownloadController.js](https://github.com/Bruno-Elvis/sequelize-crud-postgresql/blob/master/src/controllers/DownloadController.js) |  `src/controllers/DownloadController.js` |

</details>

---

## 🚀 Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **JavaScript**: `version x.y.z`

### ⚙️ Installation

1. Clone the sequelize-crud-postgresql repository:

```sh
git clone https://github.com/Bruno-Elvis/sequelize-crud-postgresql
```

2. Change to the project directory:

```sh
cd sequelize-crud-postgresql
```

3. Install the dependencies:

```sh
npm install
```

### 🤖 Running sequelize-crud-postgresql

Use the following command to run sequelize-crud-postgresql:

```sh
node app.js
```

### 🧪 Tests

To execute tests, run:

```sh
npm test
```

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/Bruno-Elvis/sequelize-crud-postgresql/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/Bruno-Elvis/sequelize-crud-postgresql/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/Bruno-Elvis/sequelize-crud-postgresql/issues)**: Submit bugs found or log feature requests for Sequelize-crud-postgresql.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/Bruno-Elvis/sequelize-crud-postgresql
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to GitHub**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.

Once your PR is reviewed and approved, it will be merged into the main branch.

</details>

---

## 📄 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---


Esta API está integrada ao PostgreSQL em nuvem, disponivel na plataforma ElephantSQL ( https://www.elephantsql.com/ );

Para definição das entidades no banco foi utilizado Migrations junto ao Sequelize.

API rodando em ambiente Heroku ( https://www.heroku.com ), possui os endpoints:

// Users
https://sequelize-crud-postgresql.herokuapp.com/users (GET e POST)

// Adresses
https://sequelize-crud-postgresql.herokuapp.com/users/:user_id/addresses (GET e POST)

// Vehicles
https://sequelize-crud-postgresql.herokuapp.com/users/:user_id/vehicles (GET, POST e DELETE)

// Downloads
https://sequelize-crud-postgresql.herokuapp.com/downloads (GET)
https://sequelize-crud-postgresql.herokuapp.com/counts (GET)
