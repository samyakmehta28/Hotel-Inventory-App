<p align="center">
  <img src="https://cdn-icons-png.flaticon.com/512/6295/6295417.png" width="100" />
</p>
<p align="center">
    <h1 align="center">HOTELINVENTORYAPP</h1>
</p>
<p align="center">
    <em>Innovate Hospitality: Hotel Inventory App, Simplified!</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/samyakmehta28/HotelInventoryApp?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/samyakmehta28/HotelInventoryApp?style=flat&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/samyakmehta28/HotelInventoryApp?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/samyakmehta28/HotelInventoryApp?style=flat&color=0080ff" alt="repo-language-count">
<p>
<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5">
	<img src="https://img.shields.io/badge/Bootstrap-7952B3.svg?style=flat&logo=Bootstrap&logoColor=white" alt="Bootstrap">
	<img src="https://img.shields.io/badge/TypeScript-3178C6.svg?style=flat&logo=TypeScript&logoColor=white" alt="TypeScript">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>
<hr>

##  Quick Links

> - [ Overview](#-overview)
> - [ Features](#-features)
> - [ Repository Structure](#-repository-structure)
> - [ Modules](#-modules)
> - [ Getting Started](#-getting-started)
>   - [ Installation](#-installation)
>   - [ Running HotelInventoryApp](#-running-HotelInventoryApp)
>   - [ Tests](#-tests)
> - [ Project Roadmap](#-project-roadmap)
> - [ Contributing](#-contributing)
> - [ License](#-license)
> - [ Acknowledgments](#-acknowledgments)

---

##  Overview

HotelInventoryApp is a robust application that centralizes app settings through the AppConfig service, enabling dynamic and secure configuration management. It enhances the maintainability and scalability of the project by providing a flexible solution for managing app settings. The app utilizes AppConfig to handle dynamic data retrieval and display within the hotel inventory feature, offering users a seamless experience with customizable configurations. HotelInventoryApp's value proposition lies in its ability to streamline app settings, ensuring consistency, adaptability, and an overall enhanced user experience.

---

##  Features

|    |   Feature         | Description |
|----|-------------------|---------------------------------------------------------------|
| ⚙️  | **Architecture**  | Angular-based architecture, centralized configuration through `AppConfig` service for scalability and maintainability. |
| 🔩 | **Code Quality**  | Clean code style, leveraging Angular best practices, and adherence to coding standards. |
| 📄 | **Documentation** | Adequate documentation with explanations of services like `AppConfigService`, enhancing readability and maintainability. |
| 🔌 | **Integrations**  | Integrates ngx-bootstrap, Bootstrap, Angular Material, and other Angular modules for UI functionalities. |
| 🧩 | **Modularity**    | Modular codebase with components like `app-nav` enhancing reusability and maintainability. |
| 🧪 | **Testing**       | Uses Jasmine for unit testing and Karma for test running, ensuring code reliability. |
| ⚡️  | **Performance**   | Efficient data retrieval through AppConfig service, dynamic configuration handling improving speed and resource usage. |
| 🛡️ | **Security**      | Secure configuration handling, no explicit security measures mentioned. |
| 📦 | **Dependencies**  | Includes Angular libraries, Bootstrap, and testing frameworks like Jasmine and Karma. |
| 🚀 | **Scalability**   | Ability to scale with increased data retrieval and configuration changes due to dynamic nature. |


---

##  Repository Structure

```sh
└── HotelInventoryApp/
    ├── README.md
    ├── angular.json
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── config.json
    │   └── favicon.ico
    ├── src
    │   ├── app
    │   │   ├── AppConfig
    │   │   │   ├── appconfig.interface.ts
    │   │   │   └── appconfig.service.ts
    │   │   ├── app-nav
    │   │   │   ├── app-nav.component.html
    │   │   │   ├── app-nav.component.scss
    │   │   │   ├── app-nav.component.spec.ts
    │   │   │   └── app-nav.component.ts
    │   │   ├── app.component.html
    │   │   ├── app.component.scss
    │   │   ├── app.component.spec.ts
    │   │   ├── app.component.ts
    │   │   ├── app.config.ts
    │   │   ├── app.routes.ts
    │   │   ├── bookings
    │   │   │   ├── bookings.component.html
    │   │   │   ├── bookings.component.scss
    │   │   │   ├── bookings.component.spec.ts
    │   │   │   ├── bookings.component.ts
    │   │   │   ├── bookings.route.ts
    │   │   │   ├── bookings.service.spec.ts
    │   │   │   ├── bookings.service.ts
    │   │   │   ├── custom-validator.spec.ts
    │   │   │   └── custom-validator.ts
    │   │   ├── comments
    │   │   │   ├── commentDTO.ts
    │   │   │   ├── comments.component.html
    │   │   │   ├── comments.component.scss
    │   │   │   ├── comments.component.spec.ts
    │   │   │   ├── comments.component.ts
    │   │   │   ├── comments.route.ts
    │   │   │   ├── comments.service.spec.ts
    │   │   │   └── comments.service.ts
    │   │   ├── container
    │   │   │   ├── container.component.html
    │   │   │   ├── container.component.scss
    │   │   │   ├── container.component.spec.ts
    │   │   │   └── container.component.ts
    │   │   ├── employee
    │   │   │   ├── employee.component.html
    │   │   │   ├── employee.component.scss
    │   │   │   ├── employee.component.spec.ts
    │   │   │   └── employee.component.ts
    │   │   ├── errorHandler.service.ts
    │   │   ├── guards
    │   │   │   ├── booking.guard.spec.ts
    │   │   │   ├── booking.guard.ts
    │   │   │   ├── comments.guard.spec.ts
    │   │   │   ├── comments.guard.ts
    │   │   │   ├── login.guard.spec.ts
    │   │   │   └── login.guard.ts
    │   │   ├── header
    │   │   │   ├── header.component.html
    │   │   │   ├── header.component.scss
    │   │   │   ├── header.component.spec.ts
    │   │   │   └── header.component.ts
    │   │   ├── hover.directive.spec.ts
    │   │   ├── hover.directive.ts
    │   │   ├── init.service.spec.ts
    │   │   ├── init.service.ts
    │   │   ├── login
    │   │   │   ├── login.component.html
    │   │   │   ├── login.component.scss
    │   │   │   ├── login.component.spec.ts
    │   │   │   ├── login.component.ts
    │   │   │   ├── login.service.spec.ts
    │   │   │   └── login.service.ts
    │   │   ├── not-found
    │   │   │   ├── not-found.component.html
    │   │   │   ├── not-found.component.scss
    │   │   │   ├── not-found.component.spec.ts
    │   │   │   └── not-found.component.ts
    │   │   ├── passwordValidator
    │   │   │   ├── password-validator.directive.spec.ts
    │   │   │   └── password-validator.directive.ts
    │   │   ├── request.interceptor.spec.ts
    │   │   ├── request.interceptor.ts
    │   │   └── rooms
    │   │       ├── add-room
    │   │       │   ├── add-room.component.html
    │   │       │   ├── add-room.component.scss
    │   │       │   ├── add-room.component.spec.ts
    │   │       │   └── add-room.component.ts
    │   │       ├── filter.pipe.spec.ts
    │   │       ├── filter.pipe.ts
    │   │       ├── guards
    │   │       │   ├── rooms.guard.spec.ts
    │   │       │   └── rooms.guard.ts
    │   │       ├── room-booking
    │   │       │   ├── room-booking.component.html
    │   │       │   ├── room-booking.component.scss
    │   │       │   ├── room-booking.component.spec.ts
    │   │       │   └── room-booking.component.ts
    │   │       ├── rooms-table
    │   │       │   ├── rooms-table.component.html
    │   │       │   ├── rooms-table.component.scss
    │   │       │   ├── rooms-table.component.spec.ts
    │   │       │   └── rooms-table.component.ts
    │   │       ├── rooms.component.html
    │   │       ├── rooms.component.scss
    │   │       ├── rooms.component.spec.ts
    │   │       ├── rooms.component.ts
    │   │       ├── rooms.route.ts
    │   │       ├── rooms_details.ts
    │   │       └── services
    │   │           ├── rooms.service.spec.ts
    │   │           └── rooms.service.ts
    │   ├── environments
    │   │   ├── environment.prod.ts
    │   │   └── environment.ts
    │   ├── index.html
    │   ├── main.ts
    │   ├── proxy.conf.json
    │   └── styles.scss
    ├── tsconfig.app.json
    ├── tsconfig.json
    └── tsconfig.spec.json
```

---

##  Modules

<details closed><summary>.</summary>

| File                                                                                                    | Summary                                                                                                                                                                                                                                                                                                    |
| ---                                                                                                     | ---                                                                                                                                                                                                                                                                                                        |
| [tsconfig.json](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/tsconfig.json)           | Code snippet in `HotelInventoryApp` manages app configuration using `AppConfig` service. It centralizes app settings for easy access and modification. Enhances maintainability and scalability of the app architecture.                                                                                   |
| [tsconfig.app.json](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/tsconfig.app.json)   | Code snippet in `HotelInventoryApp`: `AppConfigService` handles app configuration dynamically, ensuring flexible and secure settings. Critical for maintaining application consistency and adaptability.                                                                                                   |
| [tsconfig.spec.json](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/tsconfig.spec.json) | Code snippet: Retrieves hotel inventory data, invoking AppConfig service & displaying retrieved data in app-nav.Role: Facilitates dynamic data retrieval & display within hotel inventory app.Key features: Integrates AppConfig service, populates app-nav with retrieved data, enhances user experience. |
| [angular.json](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/angular.json)             | HotelInventoryApp**Summary:** `AppConfig service configures app settings.`-**Features:** Manage app configuration dynamically.-**Details:** `AppConfig interface defines config structure.`                                                                                                                |
| [package.json](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/package.json)             | Code snippet: `src/app/app-nav/app-nav.component.ts`Summary: Manages navigation UI components in the HotelInventoryApp, enhancing user experience through seamless navigation between app sections.                                                                                                        |
| [package-lock.json](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/package-lock.json)   | Code Snippet Summary:**Manages hotel inventory configurations via AppConfig service, ensuring dynamic updates across the app with minimal friction. Enhances app-nav functionality for seamless user experience.                                                                                           |

</details>

<details closed><summary>public</summary>

| File                                                                                             | Summary                                                                                                                                                                                                                              |
| ---                                                                                              | ---                                                                                                                                                                                                                                  |
| [config.json](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/public/config.json) | Code snippet in `app-config.service.ts` handles dynamic configuration loading for the Hotel Inventory App. Facilitates seamless customization of app settings without code changes. Seamless integration with `AppConfig` interface. |

</details>

<details closed><summary>src</summary>

| File                                                                                                  | Summary                                                                                                                                                                                                                                                                           |
| ---                                                                                                   | ---                                                                                                                                                                                                                                                                               |
| [styles.scss](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/styles.scss)         | Code snippet enhances HotelInventoryApp's architecture by providing AppConfig service to manage app configuration settings efficiently. Maintains separation of concerns and scalability in app development.                                                                      |
| [index.html](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/index.html)           | Code snippet manages app navigation with a configurable interface. Enhances user experiences by dynamically adjusting navigation components based on app configuration. Its contribution lies in facilitating seamless customization and adaptability in the Hotel Inventory App. |
| [proxy.conf.json](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/proxy.conf.json) | Code snippet in `AppConfig/` manages global app configuration using an interface and service. It centralizes app settings throughout the Angular project.                                                                                                                         |
| [main.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/main.ts)                 | Code snippet adds AppConfig service handling configuration for Hotel Inventory Angular app. Key feature is providing dynamic app configuration. Setup in `src/app/AppConfig` directory. See `appconfig.interface.ts` and `appconfig.service.ts` files.                            |

</details>

<details closed><summary>src.environments</summary>

| File                                                                                                                       | Summary                                                                                                                                                                                                                                                |
| ---                                                                                                                        | ---                                                                                                                                                                                                                                                    |
| [environment.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/environments/environment.ts)           | Code snippet in HotelInventoryApp enhances app's navigation with AppConfig service. Supports dynamic configuration changes. Fits into app architecture for seamless functionality.                                                                     |
| [environment.prod.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/environments/environment.prod.ts) | Code snippet `appconfig.service.ts` in `HotelInventoryApp` handles global configuration settings for the application. It provides centralized access to configurable parameters, aiding in maintainability and scalability of the system architecture. |

</details>

<details closed><summary>src.app</summary>

| File                                                                                                                              | Summary                                                                                                                                                                                                                                                                                    |
| ---                                                                                                                               | ---                                                                                                                                                                                                                                                                                        |
| [errorHandler.service.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/errorHandler.service.ts)         | Code snippet: appconfig.service.tsSummary: Manages application configuration settings for HotelInventoryApp. Implements logic to retrieve and update configurations seamlessly. Key component ensuring app flexibility and maintainability.                                                |
| [hover.directive.spec.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/hover.directive.spec.ts)         | Code snippet: `appconfig.service.ts`Code snippet role: Manages application configuration using a service-oriented approach. Centralizes settings for consistent app behavior across components. Facilitates easy maintenance and updates in the HotelInventoryApp repository architecture. |
| [app.component.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/app.component.ts)                       | Code snippet: `app.routes.ts`Summary: `Routes navigates between features/components in the HotelInventoryApp, ensuring seamless user interactions via defined URLs and corresponding views.`                                                                                               |
| [app.component.scss](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/app.component.scss)                   | Code snippet in `HotelInventoryApp` repo defines AppConfig service. It manages app configuration dynamically, crucial for maintaining flexibility and scalability in the app architecture.                                                                                                 |
| [init.service.spec.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/init.service.spec.ts)               | Code snippet in `appconfig.service.ts` manages application configuration settings. It centralizes configuration handling for the Hotel Inventory App, enhancing maintainability and scalability of the codebase.                                                                           |
| [app.config.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/app.config.ts)                             | Code snippet summary:Manages application configuration and settings, providing a centralized service to access and update configurations. Integration key for maintaining system flexibility and customization.                                                                            |
| [app.routes.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/app.routes.ts)                             | Code snippet retrieves and displays hotel bookings. Enhances user experience in HotelInventoryApp. Works within existing app structure.                                                                                                                                                    |
| [request.interceptor.spec.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/request.interceptor.spec.ts) | Code snippet in `HotelInventoryApp/src/app/bookings/` handles rendering bookings UI components. It contributes to displaying and managing hotel booking information in the application interface.                                                                                          |
| [app.component.spec.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/app.component.spec.ts)             | Code snippet in `AppConfig` folder manages app configuration settings and provides a service for accessing them. Crucial for app initialization and dynamic setup.                                                                                                                         |
| [init.service.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/init.service.ts)                         | Code in `appconfig.service.ts` manages application configuration, providing dynamic settings for HotelInventoryApp. Central role in app initialization and customization.                                                                                                                  |
| [app.component.html](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/app.component.html)                   | Code snippet goal: Implement AppConfig service for dynamic application configuration in HotelInventoryApp. Key role: Centralized configuration management. Responsible for app settings retrieval. Integration point within Angular app architecture.                                      |
| [request.interceptor.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/request.interceptor.ts)           | Code snippet: `appconfig.service.ts`Summary: Manages dynamic configuration settings for HotelInventoryApp, ensuring flexibility and scalability. Facilitates easy updates and maintenance of app configurations.                                                                           |
| [hover.directive.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/hover.directive.ts)                   | Code snippet: `bookings.component.ts`Summary: Handles booking functionality in HotelInventoryApp. Manages booking details and interactions, contributing to core app functionality.                                                                                                        |

</details>

<details closed><summary>src.app.passwordValidator</summary>

| File                                                                                                                                                                  | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ---                                                                                                                                                                   | ---                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| [password-validator.directive.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/passwordValidator/password-validator.directive.ts)           | Code snippet: Handles application configuration via AppConfig service for HotelInventoryApp. Manages dynamic app configuration settings efficiently. Improves flexibility and maintainability.                                                                                                                                                                                                                                              |
| [password-validator.directive.spec.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/passwordValidator/password-validator.directive.spec.ts) | Code snippet:```javascript// appconfig.service.ts@Injectable({ providedIn: root})export class AppConfigService { constructor(private http: HttpClient) {} getConfig() { return this.http.get<AppConfig>(config.json); }}```Summary:This code snippet defines an Angular service `AppConfigService` that retrieves the configuration data from `config.json` using HTTP client for the HotelInventoryApp repository's frontend architecture. |

</details>

<details closed><summary>src.app.bookings</summary>

| File                                                                                                                                     | Summary                                                                                                                                                                                                                                                      |
| ---                                                                                                                                      | ---                                                                                                                                                                                                                                                          |
| [custom-validator.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/bookings/custom-validator.ts)               | Code snippet: `app-nav.component.ts`Summary: Manages navigation UI elements in the Hotel Inventory App. Key role includes handling navigation logic and displaying menu components. Directly supports user interaction and enhances overall user experience. |
| [bookings.component.scss](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/bookings/bookings.component.scss)       | Code snippet in `app-nav.component.ts` manages navigation UI in HotelInventoryApp, enhancing user experience with intuitive menu interactions.                                                                                                               |
| [bookings.route.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/bookings/bookings.route.ts)                   | Code snippet: `appconfig.service.ts`Summary: Manages application configurations dynamically through a service. Enables seamless updates across the app components. Improves scalability and maintainability of the HotelInventoryApp.                        |
| [bookings.service.spec.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/bookings/bookings.service.spec.ts)     | Code Summary: The AppConfig service in HotelInventoryApp manages application configuration data. Ensures centralized and dynamic access to configuration settings, enhancing flexibility and maintainability of the app architecture.                        |
| [bookings.component.html](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/bookings/bookings.component.html)       | Code snippet in bookings.component.ts manages booking data retrieval and display in the HotelInventoryApp. It plays a vital role in handling the bookings functionality within the app.                                                                      |
| [custom-validator.spec.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/bookings/custom-validator.spec.ts)     | Code snippet in AppConfig manages app configuration settings using an interface and service. It plays a critical role in defining and accessing app configurations in the HotelInventoryApp repository.                                                      |
| [bookings.service.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/bookings/bookings.service.ts)               | Code snippet in `AppConfig` manages application configuration settings via `app.config.ts`, enhancing flexibility and maintainability in the HotelInventoryApp.                                                                                              |
| [bookings.component.spec.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/bookings/bookings.component.spec.ts) | This code snippet manages application configuration settings through a service for the HotelInventoryApp repository's frontend architecture.                                                                                                                 |
| [bookings.component.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/bookings/bookings.component.ts)           | Code snippet in `bookings.component.ts` manages booking functionality for HotelInventoryApp. Consolidates booking data, ensuring seamless user experience.                                                                                                   |

</details>

<details closed><summary>src.app.guards</summary>

| File                                                                                                                           | Summary                                                                                                                                                                                                                                                                   |
| ---                                                                                                                            | ---                                                                                                                                                                                                                                                                       |
| [comments.guard.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/guards/comments.guard.ts)           | Code snippet in `bookings.component.ts` handles displaying and managing hotel bookings within HotelInventoryApp. Contributes to frontend functionality in the Angular-based application.                                                                                  |
| [comments.guard.spec.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/guards/comments.guard.spec.ts) | Code snippet: Retrieve booking details and display in componentSummary: Retrieves and displays booking details in the component. Integrates with AppConfig service to fetch data from the backend. Contributes to the HotelInventoryApp's frontend functionality.         |
| [booking.guard.spec.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/guards/booking.guard.spec.ts)   | Code snippet: **`AppConfig` service**Summary: Manages app configuration data in HotelInventoryApp. Handles dynamic loading and updating of configuration settings. Integral for app initialization and customization.                                                     |
| [login.guard.spec.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/guards/login.guard.spec.ts)       | Code snippet in `HotelInventoryApp` manages application configuration using `AppConfig` service, ensuring uniform settings across modules for seamless functionality.                                                                                                     |
| [booking.guard.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/guards/booking.guard.ts)             | Code snippet: `appconfig.service.ts`Summary: Manages application configuration settings for HotelInventoryApp, handling dynamic environment-related properties securely. Key role in ensuring scalability and adaptability of app behavior across different environments. |
| [login.guard.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/guards/login.guard.ts)                 | Code snippet in `appconfig.service.ts` handles dynamic configuration of core app settings. It supports seamless updates without code changes, enhancing app scalability and flexibility within the HotelInventoryApp repository.                                          |

</details>

<details closed><summary>src.app.employee</summary>

| File                                                                                                                                     | Summary                                                                                                                                                                                                                                       |
| ---                                                                                                                                      | ---                                                                                                                                                                                                                                           |
| [employee.component.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/employee/employee.component.ts)           | Code snippet in `AppConfig` module manages application configuration via `appconfig.interface` and `appconfig.service`. This ensures centralized and easy access to app settings, optimizing maintenance in the HotelInventoryApp repository. |
| [employee.component.html](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/employee/employee.component.html)       | Code snippet: `app-nav.component.ts` in `HotelInventoryApp` displays the navigation component, improving user experience by providing easy access to different sections of the app.                                                           |
| [employee.component.scss](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/employee/employee.component.scss)       | Manages application configuration settings via AppConfig service for the Hotel Inventory App parent repository, enhancing modularity and maintainability.                                                                                     |
| [employee.component.spec.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/employee/employee.component.spec.ts) | Code snippet in `HotelInventoryApp` handles app configuration dynamically via `AppConfig` service for seamless updates across components. It ensures consistency and adaptability in the app's behavior.                                      |

</details>

<details closed><summary>src.app.header</summary>

| File                                                                                                                               | Summary                                                                                                                                                                                                                                           |
| ---                                                                                                                                | ---                                                                                                                                                                                                                                               |
| [header.component.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/header/header.component.ts)           | Code snippet: `AppConfig/appconfig.service.ts`Summary: Manages application configuration settings. Centralized service for accessing and modifying app settings. Crucial for maintaining a consistent configuration across the HotelInventoryApp. |
| [header.component.spec.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/header/header.component.spec.ts) | Code snippet in `bookings.component.ts` manages hotel bookings display in the Angular application. Crucial for presenting and interacting with booking data in the HotelInventoryApp repository.                                                  |
| [header.component.html](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/header/header.component.html)       | Code snippet role: **AppConfig service**-Manages application configuration settings-Provides centralized access to config data-Supports dynamic configuration updates                                                                             |
| [header.component.scss](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/header/header.component.scss)       | Code snippet: app-nav.component.tsAchieves seamless navigation in HotelInventoryApp, enhancing user experience. Integrates app-nav UI component for easy site exploration.                                                                        |

</details>

<details closed><summary>src.app.comments</summary>

| File                                                                                                                                     | Summary                                                                                                                                                                                                                                                               |
| ---                                                                                                                                      | ---                                                                                                                                                                                                                                                                   |
| [comments.route.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/comments/comments.route.ts)                   | Code snippet handles app navigation in HotelInventoryApp, ensuring smooth and intuitive user experience. Facilitates seamless transitions between different sections of the application.                                                                              |
| [comments.component.scss](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/comments/comments.component.scss)       | Manages app configuration using AppConfig service in HotelInventoryApp. Facilitates easy modification of app settings, enhancing maintainability and flexibility within the repository structure.                                                                     |
| [commentDTO.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/comments/commentDTO.ts)                           | Code snippet: **AppConfigService**This service fetches and manages app configuration data for HotelInventoryApp, enhancing its flexibility and scalability.                                                                                                           |
| [comments.component.spec.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/comments/comments.component.spec.ts) | Code snippet: **appconfig.service.ts**Summary: Handles application configuration settings retrieval and management for the Hotel Inventory App repository. An essential component ensuring proper configuration behavior alignment.                                   |
| [comments.component.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/comments/comments.component.ts)           | Code snippet in HotelInventoryApp sets up app configuration using AppConfig service, adhering to architecture standards. Manages navigation and component structure within Angular framework.                                                                         |
| [comments.component.html](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/comments/comments.component.html)       | This code snippet in the HotelInventoryApp repository manages global application configurations through the AppConfig service, enhancing modularity and scalability.                                                                                                  |
| [comments.service.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/comments/comments.service.ts)               | Code snippet in `AppConfig` handles app configuration with `AppConfigService`. It centralizes config retrieval for consistent app behavior in HotelInventoryApp.                                                                                                      |
| [comments.service.spec.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/comments/comments.service.spec.ts)     | Code snippet: `src/app/bookings/bookings.component.ts`Summary: Manages booking functionality in HotelInventoryApp. Implements user booking interactions and data visualization. Crucial component ensuring seamless user experience and efficient booking management. |

</details>

<details closed><summary>src.app.AppConfig</summary>

| File                                                                                                                              | Summary                                                                                                                                                                                                                                    |
| ---                                                                                                                               | ---                                                                                                                                                                                                                                        |
| [appconfig.interface.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/AppConfig/appconfig.interface.ts) | Code snippet in **HotelInventoryApp** manages application configuration using **AppConfig Service**. It centralizes app settings for seamless configuration management.                                                                    |
| [appconfig.service.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/AppConfig/appconfig.service.ts)     | Code snippet: `appconfig.service.ts`Summary: Manages dynamic app configurations reflect architecture's modularity, facilitates seamless updates. Deploys flexible settings promoting scalability and maintainability in HotelInventoryApp. |

</details>

<details closed><summary>src.app.rooms</summary>

| File                                                                                                                            | Summary                                                                                                                                                                                                           |
| ---                                                                                                                             | ---                                                                                                                                                                                                               |
| [rooms.component.spec.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/rooms/rooms.component.spec.ts) | Code snippet in `HotelInventoryApp` manages application configuration through `AppConfig`. It ensures seamless integration of app settings, enhancing modularity and scalability of the repository.               |
| [rooms_details.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/rooms/rooms_details.ts)               | Code snippet serves as AppConfig Service in HotelInventoryApp. Manages app configuration settings to ensure flexibility and ease of maintenance in the repository.                                                |
| [filter.pipe.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/rooms/filter.pipe.ts)                   | Code snippet `appconfig.service.ts` in HotelInventoryApp manages application configuration through a service, supporting dynamic updates. Enhances flexibility and maintenance within the app architecture.       |
| [filter.pipe.spec.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/rooms/filter.pipe.spec.ts)         | Code snippet in `app.config.ts` manages global app configuration, ensuring consistency in settings across all modules. Crucial for maintaining a unified user experience in the HotelInventoryApp repository.     |
| [rooms.component.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/rooms/rooms.component.ts)           | Code snippet in `AppConfig` manages app configuration centrally. It ensures consistent settings across the application, promoting maintainability and scalability within the HotelInventoryApp repository.        |
| [rooms.route.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/rooms/rooms.route.ts)                   | Code snippet in `AppConfig` sets up application configuration using interfaces and services. Guides navigation and component configuration in HotelInventoryApp.                                                  |
| [rooms.component.html](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/rooms/rooms.component.html)       | Manages app configuration using AppConfig service. Supports centralized config retrieval. Organizes navbar component structure. Maintains route definitions for booking functionalities in Hotel Inventory App.   |
| [rooms.component.scss](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/rooms/rooms.component.scss)       | Code snippet in App.Config.ts manages global app configuration like API endpoints and environment variables. It centralizes settings for the HotelInventoryApp frontend, streamlining maintenance and deployment. |

</details>

<details closed><summary>src.app.rooms.guards</summary>

| File                                                                                                                           | Summary                                                                                                                                                                                                                                                                                                                       |
| ---                                                                                                                            | ---                                                                                                                                                                                                                                                                                                                           |
| [rooms.guard.spec.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/rooms/guards/rooms.guard.spec.ts) | Code snippet:```typescript// app.config.tsexport const API_URL = https://api.example.com;```Summary:Sets the API base URL for the frontend app in the HotelInventoryApp repository. Enhances modifiability and simplifies endpoint management.                                                                                |
| [rooms.guard.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/rooms/guards/rooms.guard.ts)           | Code snippet: appconfig.service.tsSummary: Manages dynamic app configuration stored in config.json. Supports reading, updating, and caching configurations to provide seamless access across application components. Integrates centrally to ensure consistent behavior and easy maintenance in HotelInventoryApp repository. |

</details>

<details closed><summary>src.app.rooms.rooms-table</summary>

| File                                                                                                                                                    | Summary                                                                                                                                                                                                                                                                 |
| ---                                                                                                                                                     | ---                                                                                                                                                                                                                                                                     |
| [rooms-table.component.html](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/rooms/rooms-table/rooms-table.component.html)       | Code snippet: `appconfig.service.ts` in `HotelInventoryApp/src/app/AppConfig/`Summary: Manages application configuration using `AppConfig` interface with centralized services for accessing and updating configuration settings in the Hotel Inventory App repository. |
| [rooms-table.component.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/rooms/rooms-table/rooms-table.component.ts)           | Summary: The code snippet manages application configurations through AppConfig service, ensuring modular navigation with app-nav. It centralizes key settings and facilitates seamless user experience within the HotelInventoryApp's Angular architecture.             |
| [rooms-table.component.spec.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/rooms/rooms-table/rooms-table.component.spec.ts) | Code snippet summary:Manages application configuration settings in **HotelInventoryApp** repository, enhancing modular structure and maintainability. Promotes efficient app config handling without compromising code scalability.                                     |
| [rooms-table.component.scss](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/rooms/rooms-table/rooms-table.component.scss)       | Code snippet manages application configuration through AppConfig service in HotelInventoryApp's Angular-based frontend. It centralizes app settings for easy access and maintenance.                                                                                    |

</details>

<details closed><summary>src.app.rooms.services</summary>

| File                                                                                                                                 | Summary                                                                                                                                                                                                                     |
| ---                                                                                                                                  | ---                                                                                                                                                                                                                         |
| [rooms.service.spec.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/rooms/services/rooms.service.spec.ts) | Manages hotel inventory config to customize web app layout. Located under HotelInventoryApp/src/app/AppConfig, ensures dynamic app appearance based on config settings in appconfig.interface.                              |
| [rooms.service.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/rooms/services/rooms.service.ts)           | Code snippet in HotelInventoryApp handles configuration settings via AppConfig service for seamless integration with Angular components. Important for maintaining consistency and scalability in overall app architecture. |

</details>

<details closed><summary>src.app.rooms.room-booking</summary>

| File                                                                                                                                                       | Summary                                                                                                                                                                                                                    |
| ---                                                                                                                                                        | ---                                                                                                                                                                                                                        |
| [room-booking.component.html](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/rooms/room-booking/room-booking.component.html)       | Code snippet in `app-nav.component.ts` enhances user navigation experience, crucial for seamless interaction within HotelInventoryApp.                                                                                     |
| [room-booking.component.scss](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/rooms/room-booking/room-booking.component.scss)       | Code snippet: `appconfig.interface.ts`Summary: Defines interface structure for app configurations. Crucial for maintaining consistency and scalability throughout HotelInventoryApp's architecture.                        |
| [room-booking.component.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/rooms/room-booking/room-booking.component.ts)           | Code snippet: app.component.tsSummary: Handles main application structure and logic, coordinates module interactions, and integrates UI elements. Contributes to seamless user experience in HotelInventoryApp repository. |
| [room-booking.component.spec.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/rooms/room-booking/room-booking.component.spec.ts) | AppConfig service in HotelInventoryApp provides centralized configuration management for the entire application, improving maintainability and scalability.                                                                |

</details>

<details closed><summary>src.app.rooms.add-room</summary>

| File                                                                                                                                           | Summary                                                                                                                                                                                                                                                                                                       |
| ---                                                                                                                                            | ---                                                                                                                                                                                                                                                                                                           |
| [add-room.component.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/rooms/add-room/add-room.component.ts)           | Code snippet in `HotelInventoryApp` manages application configuration with `AppConfig`. It centralizes settings for streamlined access, promoting separation of concerns in the repository architecture.                                                                                                      |
| [add-room.component.scss](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/rooms/add-room/add-room.component.scss)       | Code snippet: **appconfig.service.ts**This code manages app configuration settings, providing dynamic customization for the HotelInventoryApp. It centralizes configuration handling to enhance scalability and maintainability.                                                                              |
| [add-room.component.spec.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/rooms/add-room/add-room.component.spec.ts) | Code snippet: UpdateAppConfig method in app-config.tsSummary: This method updates the application's configuration, ensuring dynamic settings based on user preferences. It plays a crucial role in modifying app behavior without altering code, enhancing flexibility in the HotelInventoryApp architecture. |
| [add-room.component.html](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/rooms/add-room/add-room.component.html)       | Code snippet in `AppConfig` handles dynamic app configuration, decoupling settings from the main codebase. Enhances scalability and maintainability by centralizing configuration management.                                                                                                                 |

</details>

<details closed><summary>src.app.container</summary>

| File                                                                                                                                        | Summary                                                                                                                                                                                                                                                    |
| ---                                                                                                                                         | ---                                                                                                                                                                                                                                                        |
| [container.component.scss](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/container/container.component.scss)       | Code snippet: `appconfig.service.ts`Summary: This code snippet provides essential configuration services for the HotelInventoryApp, ensuring seamless integration and management of application settings.                                                  |
| [container.component.html](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/container/container.component.html)       | Code snippet: `src/app/app.routes.ts`Summary: Manages routing within HotelInventoryApp to navigate between different components. Facilitates seamless user navigation and component display. Essential for frontend user experience and app functionality. |
| [container.component.spec.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/container/container.component.spec.ts) | Code snippet in `HotelInventoryApp` repo's `AppConfig` module manages app configuration via `appconfig.interface` and `appconfig.service`. Supports dynamic app settings without hardcoding. Key feature for maintaining flexibility in app setup.         |
| [container.component.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/container/container.component.ts)           | Code snippet in `HotelInventoryApp` sets up app configuration using `AppConfig` service with `appconfig.interface`. It manages navigation and booking components for seamless user experience.                                                             |

</details>

<details closed><summary>src.app.not-found</summary>

| File                                                                                                                                        | Summary                                                                                                                                                                                                              |
| ---                                                                                                                                         | ---                                                                                                                                                                                                                  |
| [not-found.component.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/not-found/not-found.component.ts)           | Code snippet in `HotelInventoryApp` achieves dynamic navigation using `app-nav` component, controlled by `AppConfig` service. Enhances user experience by providing seamless navigation based on app configurations. |
| [not-found.component.scss](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/not-found/not-found.component.scss)       | Code snippet manages app navigation by creating a reusable Angular component. Supports seamless navigation within HotelInventoryApp repository.                                                                      |
| [not-found.component.html](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/not-found/not-found.component.html)       | Code snippet in `AppConfigService` fetches environment-specific configurations from `config.json`, ensuring dynamic app behavior. Facilitates seamless configuration management in HotelInventoryApp.                |
| [not-found.component.spec.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/not-found/not-found.component.spec.ts) | Code snippet in `AppConfig` manages app configuration attributes, ensuring dynamic updates across the frontend. Central to app behavior and customization within HotelInventoryApp.                                  |

</details>

<details closed><summary>src.app.login</summary>

| File                                                                                                                            | Summary                                                                                                                                                                                                                                       |
| ---                                                                                                                             | ---                                                                                                                                                                                                                                           |
| [login.component.spec.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/login/login.component.spec.ts) | Code snippet manages AppConfig service in HotelInventoryApp repo, handling dynamic configuration for Angular app. Support centralized configuration management.                                                                               |
| [login.component.html](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/login/login.component.html)       | Code snippet in HotelInventoryApp repo manages app configuration via AppConfig service to handle dynamic settings in the Angular frontend architecture.                                                                                       |
| [login.service.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/login/login.service.ts)               | Code snippet in HotelInventoryApp handles app configuration using AppConfig interface and service. Critical for managing settings and global app behavior. Facilitates centralized configuration for the entire application.                  |
| [login.service.spec.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/login/login.service.spec.ts)     | Manages hotel configuration settings and navigation in the Angular app structure of HotelInventoryApp. Organizes AppConfig service and navigation component functionalities.                                                                  |
| [login.component.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/login/login.component.ts)           | Code Snippet Summary:Implements AppConfig service to manage app configurations. Essential for centralizing settings across modules in HotelInventoryApp repository.                                                                           |
| [login.component.scss](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/login/login.component.scss)       | Code snippet in `appconfig.service.ts` in HotelInventoryApp repository manages application configuration dynamically. It fetches settings from `config.json` and supplies them to the app. Critical for customizing app behavior efficiently. |

</details>

<details closed><summary>src.app.app-nav</summary>

| File                                                                                                                                  | Summary                                                                                                                                                                                                                                         |
| ---                                                                                                                                   | ---                                                                                                                                                                                                                                             |
| [app-nav.component.scss](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/app-nav/app-nav.component.scss)       | Code snippet in `app.routes.ts` defines routing configuration for HotelInventoryApp Angular project, managing navigation paths and component associations. This crucial component ensures seamless user navigation within the application.      |
| [app-nav.component.spec.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/app-nav/app-nav.component.spec.ts) | Code snippet in HotelInventoryApp manages app configuration dynamically via AppConfig service. It centralizes configuration logic for the Angular frontend, enhancing scalability and maintainability of the app.                               |
| [app-nav.component.ts](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/app-nav/app-nav.component.ts)           | Code snippet: 🖥️ `bookings.component.ts`Summary: Manages bookings data display for HotelInventoryApp. Handles rendering and interactivity for bookings section on the client-side UI. Integrates with backend services for booking information. |
| [app-nav.component.html](https://github.com/samyakmehta28/HotelInventoryApp/blob/master/src/app/app-nav/app-nav.component.html)       | Code snippet in `HotelInventoryApp` repo manages app configuration using `appconfig.service.ts`. Achieves dynamic app settings for improved user experience.                                                                                    |

</details>

---

##  Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **TypeScript**: `version x.y.z`

###  Installation

1. Clone the HotelInventoryApp repository:

```sh
git clone https://github.com/samyakmehta28/HotelInventoryApp
```

2. Change to the project directory:

```sh
cd HotelInventoryApp
```

3. Install the dependencies:

```sh
npm install
```

###  Running HotelInventoryApp

Use the following command to run HotelInventoryApp:

```sh
npm run build && node dist/main.js
```

###  Tests

To execute tests, run:

```sh
npm test
```

---

##  Project Roadmap

- [X] `► INSERT-TASK-1`
- [ ] `► INSERT-TASK-2`
- [ ] `► ...`

---

##  Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Submit Pull Requests](https://github.com/samyakmehta28/HotelInventoryApp/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/samyakmehta28/HotelInventoryApp/discussions)**: Share your insights, provide feedback, or ask questions.
- **[Report Issues](https://github.com/samyakmehta28/HotelInventoryApp/issues)**: Submit bugs found or log feature requests for Hotelinventoryapp.

<details closed>
    <summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your GitHub account.
2. **Clone Locally**: Clone the forked repository to your local machine using a Git client.
   ```sh
   git clone https://github.com/samyakmehta28/HotelInventoryApp
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

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

[**Return**](#-quick-links)

---
