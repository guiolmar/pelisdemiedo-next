<p align="center">
  <img src="https://bhha0khdarsj44ad.public.blob.vercel-storage.com/Screenshot_2024-09-14_at_13.04.16-removebg-preview-k6VNriT8SbDdQlc8f49iCOnC6XrCKI.png" width="60%" alt="PELISDEMIEDO-NEXT-logo">
</p>
<p align="center">
    <em>Pelisdemiedo-Next: Streamline Your Frights, Style Your Scares"**This slogan highlights the dual nature of the project—its focus on both the thematic elements of horror (frights and scares) and its robust technical framework (streamlining and styling). It succinctly conveys the projects value proposition of offering a well-organized, visually consistent platform for horror movie enthusiasts and developers alike.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/guiolmar/pelisdemiedo-next?style=flat&logo=opensourceinitiative&logoColor=white&color=ff0004" alt="license">
	<img src="https://img.shields.io/github/last-commit/guiolmar/pelisdemiedo-next?style=flat&logo=git&logoColor=white&color=ff0004" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/guiolmar/pelisdemiedo-next?style=flat&color=ff0004" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/guiolmar/pelisdemiedo-next?style=flat&color=ff0004" alt="repo-language-count">
</p>
<p align="center">
		<em>Built with the tools and technologies:</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
</p>

<br>

##### 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [🧩 Modules](#-modules)
- [🚀 Getting Started](#-getting-started)
    - [🔖 Prerequisites](#-prerequisites)
    - [📦 Installation](#-installation)
    - [🤖 Usage](#-usage)
    - [🧪 Tests](#-tests)
- [📌 Project Roadmap](#-project-roadmap)
- [🤝 Contributing](#-contributing)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

The `pelisdemiedo-next` project is a modern web application tailored for showcasing a collection of horror movies, utilizing the robust Next.js framework to optimize server-side rendering for enhanced performance and better SEO practices. The codebase is thoughtfully configured to ensure developer efficiency and maintainability. Key configurations include `jsconfig.json` which simplifies module resolution and the `next.config.mjs` which fine-tunes the Next.js behavior. Visual consistency and rapid UI development are achieved through the integration of Tailwind CSS, managed via `postcss.config.mjs` and streamlined component configurations in `components.json`. SEO optimization is tactically addressed with `next-sitemap.config.js`, facilitating automated sitemap and robots.txt generation. Furthermore, `package.json` describes essential dependencies and scripts that bolster the project’s modular architecture, ensuring it remains both scalable and robust. Overall, this project not only delivers a seamless user experience but also provides a scalable architecture that can adapt to future enhancements or changes in web trends.

---

## 👾 Features

|    |   Feature         | Description |
|----|-------------------|---------------------------------------------------------------|
| ⚙️  | **Architecture**  | Utilizes Next.js, enhancing SSR capabilities and optimal client-side rendering. Focuses on modularity with clear separation within components and utility configurations. |
| 🔩 | **Code Quality**  | Code follows modern JavaScript practices with modular JS and React components. Usage of jsconfig for clean path resolutions. |
| 📄 | **Documentation** | Limited to config files and component descriptions. Needs more comprehensive documentation covering setup, usage, and contribution. |
| 🔌 | **Integrations**  | Integrates Tailwind CSS for styling, Next.js for the framework, and various Radix UI components for UI functionality. |
| 🧩 | **Modularity**    | High modularity with components and utilities managed via JSON configuration, promoting reusability across the project. |
| 🧪 | **Testing**       | No explicit listing or discussion of testing frameworks within the provided details, suggesting a potential area for enhancement. |
| ⚡️  | **Performance**   | Leveraging Next.js potentially improves performance through efficient data fetching and rendering strategies. |
| 🛡️ | **Security**      | No explicit mention of security measures. Standard Next.js features may apply, but specific security strategies are not detailed. |
| 📦 | **Dependencies**  | Uses several key dependencies like React, Next.js, Tailwind CSS, Axios for HTTP requests, and various Radix UI libraries for enhanced UI components. |
| 🚀 | **Scalability**   | Built with Next.js, supporting scalability through SSR and efficient client-side rendering, though specific scalability strategies aren't detailed. |

---

## 📂 Repository Structure

```sh
└── pelisdemiedo-next/
    ├── README.md
    ├── components.json
    ├── jsconfig.json
    ├── next-sitemap.config.js
    ├── next.config.mjs
    ├── package-lock.json
    ├── package.json
    ├── pages
    │   └── api
    ├── postcss.config.mjs
    ├── public
    │   └── assets
    ├── src
    │   ├── app
    │   ├── components
    │   └── lib
    └── tailwind.config.js
```

---

## 🧩 Modules

<details closed><summary>.</summary>

| File | Summary |
| --- | --- |
| [jsconfig.json](https://github.com/guiolmar/pelisdemiedo-next/blob/main/jsconfig.json) | Streamlines module resolution within the `pelisdemiedo-next` repository by configuring custom paths, enhancing developer efficiency by simplifying imports from the `src` directory. This setup is crucial for maintaining a clean and manageable codebase as the project scales. |
| [postcss.config.mjs](https://github.com/guiolmar/pelisdemiedo-next/blob/main/postcss.config.mjs) | PostCSS configuration in the `pelisdemiedo-next` repository integrates Tailwind CSS, enhancing the projects styling capabilities. It facilitates the use of utility-first CSS workflows across the application, directly impacting the developmental speed and consistency of UI components. |
| [components.json](https://github.com/guiolmar/pelisdemiedo-next/blob/main/components.json) | Defines configuration for UI component schemas, styling, and aliasing within the pelisdemiedo-next repository, ensuring consistency and streamlined referencing across the project's architecture, notably integrating Tailwind CSS for design consistency and setting up shortcuts for efficient module access. |
| [next-sitemap.config.js](https://github.com/guiolmar/pelisdemiedo-next/blob/main/next-sitemap.config.js) | Pelisdemiedo.com and enabling the automatic creation of a robots.txt file. This enhances SEO by ensuring that search engines can efficiently index the sites pages. |
| [package.json](https://github.com/guiolmar/pelisdemiedo-next/blob/main/package.json) | Defines the configuration and dependencies for the pelisdemiedo-next project, managing environment scripts for development, building, and deployment. It integrates various UI components, analytics, and optimization tools within its dependencies, ensuring the application is modular, maintainable, and performance-optimized. |
| [next.config.mjs](https://github.com/guiolmar/pelisdemiedo-next/blob/main/next.config.mjs) | Configures the behavior of the Next.js framework used in the pelisdemiedo-next project, setting essential application-wide configurations that dictate how the project operates in development and production environments. It serves as a central point to manage performance optimizations and feature toggles. |
| [tailwind.config.js](https://github.com/guiolmar/pelisdemiedo-next/blob/main/tailwind.config.js) | Tailwind.config.js configures TailwindCSS for the pelisdemiedo-next project, enabling dark mode and specifying content paths for style inclusion. It customizes the theme with extended color schemes and border-radius settings, and incorporates animation utilities through plugins, enhancing UI consistency and interactivity across the application. |
| [package-lock.json](https://github.com/guiolmar/pelisdemiedo-next/blob/main/package-lock.json) | The `package-lock.json` file in the `pelisdemiedo-next` repository plays a crucial role in ensuring consistent installations and exact versions of all node modules and their dependencies across different environments. Located at the root of the repository, it locks down the versions of each package that the application depends on, which includes specific details about where each package should be sourced and its dependencies.This file is instrumental in maintaining the integrity and reliability of the application's runtime environment, providing a stable, predictable foundation for development, testing, and production. It directly supports the repository’s infrastructure by ensuring that upgrades and installations are repeatable, thus preventing discrepancies between environments that could lead to unexpected behavior or bugs.The presence of this file in the root alongside configuration files like `next.config.mjs`, `tailwind.config.js`, and `postcss.config.mjs` indicates a well-structured approach to project dependency management, essential for the application built using the Next.js framework, as suggested by the repository structure. It interacts specifically with `package.json` to maintain a harmonized ecosystem of project dependencies essential for the ongoing development and maintenance phases of the project lifecycle. |

</details>

<details closed><summary>pages.api</summary>

| File | Summary |
| --- | --- |
| [tmdb.js](https://github.com/guiolmar/pelisdemiedo-next/blob/main/pages/api/tmdb.js) | Handles API requests to TMDb (The Movie Database) by intercepting queries, normalizing parameters, and making secure HTTP requests using environment-specific API keys, thereby facilitating the seamless retrieval and transmission of movie data within the broader Pelisdemiedo-next project architecture. |

</details>

<details closed><summary>src.components</summary>

| File | Summary |
| --- | --- |
| [LoadingComponent.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/components/LoadingComponent.jsx) | The `LoadingComponent.jsx` located within the `src/components` directory of the `pelisdemiedo-next` repository plays a pivotal role as a modular element of the user interface. This component is designed to provide visual feedback to users during data loading or asynchronous operations, enhancing the user experience by indicating that processing is taking place in the background.As part of the repository's broader architecture, which employs a React-based framework (Next.js), this component aligns with modern web development practices focused on user interaction and performance. It likely interacts seamlessly with other elements and services defined in the repository to support a responsive and dynamic web application centered around horror-themed content.The placement of `LoadingComponent` in the `components` folder signifies its role as a reusable UI element, which adheres to the principles of component-driven development. This approach boosts the maintainability and scalability of the project by encouraging modular, reusable code across different parts of the application.Overall, the `LoadingComponent` is essential for maintaining a smooth and engaging user experience by managing the interactivity during periods where data fetching or other processing tasks are being completed. Its integration within the React and Next.js ecosystem of the `pelisdemiedo-next` repository underscores its significance in frontend development practices. |
| [SkeletonMoviePage.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/components/SkeletonMoviePage.jsx) | SkeletonMoviePage component provides a loading placeholder for movie detail pages, using skeleton screens for various sections like hero visuals, movie information, and cast details to enhance user experience by indicating content loading states within the Pelisdemiedo-next repositorys frontend architecture. |
| [SkeletonTVPage.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/components/SkeletonTVPage.jsx) | SkeletonTVPage.jsx serves as a placeholder component in the pelisdemiedo-next repository, providing a visual mock-up during data loading phases on TV-related pages. It enhances user experience by displaying animated skeletons, ensuring smooth visual transitions as content loads dynamically within the applications architecture. |
| [ErrorPage.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/components/ErrorPage.jsx) | ErrorPage.jsx provides a user-friendly error interface within the Pelisdemiedo-next application. It incorporates a thematic Skull icon and customizable message functionality, enhancing user experience by guiding users back to the homepage after encountering an error. |
| [MovieList.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/components/MovieList.jsx) | MovieList.jsx is a component that dynamically displays movies or TV series as clickable cards with relevant details like title, release date, and ratings. It leverages external resources for localized date formats and UI components, ensuring an engaging and informative user experience. |
| [SkeletonMovieList.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/components/SkeletonMovieList.jsx) | SkeletonMovieList acts as a visual placeholder within the pelisdemiedo-next repository, enhancing user experience by providing temporary loading states for movie list elements as data loads, integrating seamlessly with the UI components and contributing to a fluid, intuitive interface design. |
| [SkeletonMovieCard.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/components/SkeletonMovieCard.jsx) | SkeletonMovieCard.jsx provides a placeholder representation for movie information while data is loading. It utilizes skeleton screens within a card layout to enhance perceived performance and improve user experience during content fetching phases in the pelisdemiedo-next web applications user interface. |
| [ClientLayout.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/components/ClientLayout.jsx) | This file establishes a standardized layout for client-facing pages, facilitating uniformity and reusability in the design across different sections of the application.**Critical Features:**1. **Dynamic NavigationUtilizes Next.js's `Link` for optimized client-side routing, enabling smooth in-app navigation without full page refreshes.2. **Interactive ElementsIt integrates interactive UI components such as buttons and sheets from a custom UI library located under `src/components/ui`, enhancing the interactivity and responsiveness of the user interface.3. **State Management for UI ControlsManages states like sidebar visibility and scroll position to adapt the UI dynamically based on user interactions and browsing context.4. **Theme CustomizationIncorporates theme management using `next-themes`, allowing for theme switching and better personalization according to user preferences.In the broader context of the repository, `ClientLayout.jsx` acts as a foundational building block in the `src/components` directory. It interacts with other custom UI components and utilities, promoting a modular and scalable architecture that supports high maintainability and efficient development of the applications frontend. |
| [MovieCard.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/components/MovieCard.jsx) | Displaying movie details such as title, ratings, and release date, enhancing user experience with easily accessible movie information.-Utilizing a popover feature that activates on mouse hover, which likely provides additional movie details or interactive elements, thereby enriching the interactive experience without overwhelming the main interface.-Integration with the `moment` library to manage and format date information based on locale settings, ensuring that date displays are culturally relevant to the user.-Leveraging other custom UI components like `Card` and `Popover` from the `./ui` folder, indicating a modular and reusable architecture that promotes consistency across the user interface.This component plays a vital role in the repository by encapsulating movie data presentation in a single, maintainable unit, and fits into the larger architecture by interacting with other components and utilities within the `src/components` and `src/lib` folders. This modularity and clarity in responsibilities are indicative of a well-structured front-end framework in a modern web application. |

</details>

<details closed><summary>src.components.ui</summary>

| File | Summary |
| --- | --- |
| [popover.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/components/ui/popover.jsx) | Integrates dynamic and customizable popover components within the pelisdemiedo-next repository, utilizing Radix UI for robust interactivity in UI elements. Enhances user interface modularity and style consistency across the web application, facilitating engaging and responsive user interactions with various UI elements. |
| [alert-dialog.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/components/ui/alert-dialog.jsx) | AlertDialogServes as the root container for the alert dialog, handling the structure and integration of its sub-components.-**AlertDialogTriggerActs as a triggering element, which users can interact with to open the dialog.-**AlertDialogPortalEnsures that the dialog is rendered in a separate part of the DOM to maintain accessibility standards and avoid disruptions in the UI flow.-**AlertDialogOverlayA styled overlay component that appears behind the dialog, enhancing the focus on the dialog by darkening the background and applying appropriate animations based on the dialog's state.These components are styled and animated to provide a visually appealing and functional user interaction model. The use of utility functions like `cn` from the repository’s `lib/utils` module for class name manipulation further suggests an emphasis on clean, maintainable styling practices.In the context of the repositorys architecture, `alert-dialog.jsx` plays a crucial role in the UI component library, likely being reusable across different parts of the application wherever alert dialogs are needed. This aligns with modern web development practices focusing on component reusability and modularity, essential for maintaining large-scale projects such as `pelisdemiedo-next`. This file's functionality enhances the user experience by providing a consistent and effective way to handle alerts and |
| [table.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/components/ui/table.jsx) | Provides a suite of reusable table components for the pelisdemiedo-next repository, enabling structured data display within the application. Utilizes React for component structure and offers flexibility in customization with conditional styling and forwarding refs for enhanced component accessibility and manipulation. |
| [tabs.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/components/ui/tabs.jsx) | Provides a flexible and styled tab system using Radix UI components, integrating seamlessly with the broader UI framework within the repository. It ensures accessibility and stylistic consistency across the application, enhancing interactive elements with focus-visible features for user navigation. |
| [scroll-area.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/components/ui/scroll-area.jsx) | ScrollArea component enhances user interface by providing customizable scrolling containers with both vertical and horizontal options, utilizing the Radix UI toolkit. Key functionalities include adaptable scroll bars and clean integration into the wider projects component-based architecture, ensuring seamless user interactions and visual consistency. |
| [input.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/components/ui/input.jsx) | Integrates a customizable input component within the `pelisdemiedo-next` project, enhancing user interaction across various UI forms. Utilizes utility functions for dynamic styling and is adaptable via props, promoting consistent design and accessibility features within the applications frontend architecture. |
| [separator.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/components/ui/separator.jsx) | The Separator component in the pelisdemiedo-next repository serves as a customizable UI divider, supporting both horizontal and vertical orientations. It enhances user interface design flexibility within the project's architecture by utilizing utility classes for consistent styling across web elements. |
| [skeleton.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/components/ui/skeleton.jsx) | Skeleton component enhances user interface responsiveness by providing a loading placeholder, using animation and background modifications to indicate pending content loading. Integrated within the UI component library in `src/components`, it aids in improving the perceived performance of the web application. |
| [badge.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/components/ui/badge.jsx) | Badge.jsx defines a reusable UI component, Badge, that enhances the visual organization of tags or labels across the Pelisdemiedo-next application. It leverages CSS class utilities for customizable styles and interactive state changes, ensuring consistent and adaptable visual cues within the UI framework. |
| [sheet.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/components/ui/sheet.jsx) | Sheet`: Acts as the main container for the modal content, initializing the dialogue control.2. `SheetTrigger`: Used to control the opening mechanism for the sheet, allowing components elsewhere in the application to trigger the visibility of the `Sheet`.3. `SheetClose`: Provides a built-in method to close the sheet, enhancing user interaction by offering an intuitive way to dismiss the modal.4. `SheetPortal`: Ensures that the modal content is rendered in a consistent part of the DOM to manage stacking and positioning context correctly, important for maintaining a clean overlay presentation.5. `SheetOverlay`: Represents a semi-transparent background that sits behind the modal content, implementing additional UI features such as dimming the background and capturing click-to-close interactions.This file is integral to the repository’s architecture by supplying reusable UI components that conform to modern web standards and accessibility guidelines. These components are essential for delivering a consistent user experience across the platform, especially in contexts requiring interaction beyond the standard page flow, such as confirmation dialogs, informative tooltips, or interactive forms. This setup not only supports scalability and maintainability but also aligns with modern frontend development practices by modularizing UI elements and enhancing them with animation and state management capabilities. |
| [avatar.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/components/ui/avatar.jsx) | Enhances user interface interactivity within the Pelisdemiedo-next project by implementing customizable avatar components using the Radix UI toolkit. It provides structured avatar elements including root, image, and fallback configurations, ensuring visual consistency and adaptability across the applications user-facing features. |
| [card.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/components/ui/card.jsx) | Defines a suite of reusable UI components for constructing card layouts, including main containers and specific sections such as headers, titles, descriptions, content, and footers. These components are styled with utility classes for consistency and modularity within the larger web applications interface design. |
| [dropdown-menu.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/components/ui/dropdown-menu.jsx) | Hierarchical Menu Structure:** The structure comprises different elements like DropdownMenu, DropdownMenuTrigger, and DropdownMenuSub, which facilitate the creation of multi-level dropdown menus.2. **Customization and Utility:** Utilizes utility functions, such as `cn` from @/lib/utils, for classname manipulations thus enhancing the flexibility in styling and behavior customization.3. **Accessibility and UX Focus:** Incorporation of accessibility-friendly elements (React components from Radix UI) ensuring that the dropdown menu adheres to modern usability standards and is accessible to all users.This component is essential within the repositorys architecture as it provides the foundational UI functionality needed for user navigation and interaction within the `pelisdemiedo-next` project. It exemplifies the project’s commitment to building a scalable and maintainable codebase. |
| [button.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/components/ui/button.jsx) | Introduces a customizable `Button` component within the Pelisdemiedo-next project, supporting multiple variants and sizes. Utilizes class composition for styling flexibility, enhancing the user interface across the application. Offers extensible design options, such as default, destructive, and ghost button styles for diverse UX requirements. |

</details>

<details closed><summary>src.lib</summary>

| File | Summary |
| --- | --- |
| [utils.js](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/lib/utils.js) | Enhances the development experience within the pelisdemiedo-next repository by providing a utility function `cn` that efficiently merges CSS class names using `clsx` and `tailwind-merge`. This function streamlines the process of dynamically generating Tailwind CSS classes in React components. |

</details>

<details closed><summary>src.app</summary>

| File | Summary |
| --- | --- |
| [layout.js](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/app/layout.js) | RootLayout in src/app/layout.js provides a foundational HTML structure for the PelisDeMiedo platform, integrating Google Analytics and third-party ads. It employs custom, variable fonts for visual consistency across the application and embeds SEO-friendly metadata to enhance discoverability. |
| [page.js](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/app/page.js) | Dynamic Content FetchingUtilizes `axios` for fetching data asynchronously, which likely ties into displaying movie information on the homepage. This asynchronous data fetching is a critical feature for user interactivity and engagement.2. **UI ComponentsEmploys both custom and imported UI components such as `Input`, `Card`, and `ScrollArea` from a centralized `components` directory. This not only aids in maintaining a consistent look and feel across the application but also encapsulates UI logic for reuse and modularity.3. **Search FunctionalityImplements a search feature (indicated by the use of `Search` component and `searchQuery` state), essential for users to filter or find specific content within the site.4. **Rich Media and FormattingIncorporates `next/image` for optimized image handling and uses `moment` for date formatting, enhancing the overall aesthetic and user experience. Localizing `moment` to Spanish suggests a localized interface for Spanish-speaking users.5. **Navigation HandlingIntegrates `next/navigation` possibly for routing purposes, which is crucial for SPA (Single Page Application) navigation within the Next.js framework.6. **Performance OptimizationThe usage of placeholders like `SkeletonMovieCard` during data fetching operations enhances perceived performance, providing users with a smooth and responsive interaction.In summary, `src/app/page.js` is |
| [globals.css](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/app/globals.css) | The file located at `src/app/globals.css` within the `pelisdemiedo-next` repository serves as a foundational CSS stylesheet for the entire web application. This file incorporates the Tailwind CSS framework directives to include base styles, component-driven styles, and utility classes that are essential for building a consistent and responsive user interface across the application. By defining custom CSS properties such as `--background` and `--foreground`, it also provides a mechanism to maintain a cohesive color scheme throughout the app. This setup ensures that styles are scalable and maintainable, aligning with modern web development practices that enhance the apps overall architecture and user experience design. |

</details>

<details closed><summary>src.app.movie.[id]</summary>

| File | Summary |
| --- | --- |
| [page.js](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/app/movie/[id]/page.js) | Generates dynamic metadata and serves a movie detail page by fetching data from an external API, handling errors gracefully, and introducing a loading state via a skeleton component, ensuring a smooth user experience and enhancing SEO for individual movie pages within the PelisDeMiedo.com architecture. |
| [ClientMoviePage.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/app/movie/[id]/ClientMoviePage.jsx) | This component enables a dynamic and interactive experience for users accessing movie details on a client's browser. It handles the presentation of movie data with a range of user interface elements.**Critical Features:**1. **Dynamic Data Handling:** Utilizes React's `useState` for managing state, facilitating interactivity and responsiveness.2. **UI Components:** Employs various custom UI components such as:-`AlertDialog` for displaying contextual alerts.-`Card` and `CardContent` for structured and aesthetic presentation.-`Badge` and `Button` for interactive elements.-`ScrollArea` and `ScrollBar` for enhanced navigation within overflow content.-`Skeleton` for loading states, improving UX during data fetching.3. **Custom Movie Component:** Uses `MovieCard`, a specialized component for displaying movie-related information, ensuring consistency and reusability across the platform.Through these features, `ClientMoviePage.jsx` significantly contributes to the overall user experience by presenting movie details in a structured, interactive, and visually appealing manner. This aligns with the repositorys broader architecture, which appears to focus on providing an efficient and scalable Next.js application tailored for a movie information platform. |
| [MoviePage.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/app/movie/[id]/MoviePage.jsx) | MoviePage.jsx manages the display logic for individual movie details, leveraging dynamic loading indicators via a skeleton component during data fetch operations. It seamlessly transitions to a full content view with movie and cast information once data is loaded, enhancing user experience in the Pelisdemiedo-next project. |

</details>

<details closed><summary>src.app.tv.[id]</summary>

| File | Summary |
| --- | --- |
| [page.js](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/app/tv/[id]/page.js) | Manages the dynamic rendering of TV show details pages in the PelisDeMiedo.com web application, fetching data from an external API based on the TV show ID, and gracefully handling errors with fallback error pages. Incorporates metadata generation and pre-loading visual cues via a skeleton screen. |
| [TVPage.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/app/tv/[id]/TVPage.jsx) | TVPage.jsx dynamically renders detailed television show content, beginning with a skeleton loading screen for better user experience. Upon data readiness, it transitions to display full show details, leveraging client-side rendering for personalized, interactive viewing experiences in the pelisdemiedo-next repository's frontend architecture. |
| [ClientTVPage.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/app/tv/[id]/ClientTVPage.jsx) | Dynamic Content Rendering:** Utilizing client-side JavaScript functionality, indicated by the directive use client", which optimizes the interaction and rendering based on the user's actions and preferences.-**UI Components Integration:** Incorporates a variety of reusable UI components such as dialog alerts, cards, badges, buttons, and scroll areas from the project's custom component library housed under `src/components/ui`. This ensures consistent styling and behavior across the application.-**Interactive Elements:** Features like `AlertDialog` for alerts, `Card` for structured layouts, `Badge` for status indicators, and `Button` for user interactions enhance the interactive and visual appeal.-**Icons Integration:** Uses iconography like calendars, clocks, etc., from `lucide-react` to visually represent different types of metadata associated with TV shows, improving the user experience through intuitive design.-**Skeleton Screens:** Implements skeleton screens for loading states, providing a smoother visual experience during data fetching operations.Overall, `ClientTVPage.jsx` enhances the user interface by providing a detailed and interactive view of TV show content, leveraging the modular architecture of the repository to maintain clean and manageable code. It exemplifies integration with other components and configurations within the repository to maintain a seamless and scalable application structure. |

</details>

<details closed><summary>src.app.search</summary>

| File | Summary |
| --- | --- |
| [SearchResults.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/app/search/SearchResults.jsx) | SearchResults.jsx enables dynamic searching within the pelisdemiedo-next repository by fetching and displaying movie and TV search results from an external API. It efficiently handles loading states and user feedback, utilizing both populated and skeleton components for an optimized user experience. |
| [page.js](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/app/search/page.js) | SearchPage in `src/app/search/page.js` manages search functionality within the pelisdemiedo-next repository, utilizing lazy loading to enhance user experience by displaying results or prompts dynamically based on search parameters, leveraging Next.js navigation hooks for parameter handling. |
| [Loading.jsx](https://github.com/guiolmar/pelisdemiedo-next/blob/main/src/app/search/Loading.jsx) | Loading.jsx provides an animated loading interface, featuring a series of placeholder components that visually represent movies in loading state. It enhances user experience by displaying six skeleton screens during data fetching, ensuring a smooth visual transition before movie data is fully loaded. |

</details>

---

## 🚀 Getting Started

### 🔖 Prerequisites

**JavaScript**: `version x.y.z`

### 📦 Installation

Build the project from source:

1. Clone the pelisdemiedo-next repository:
```sh
❯ git clone https://github.com/guiolmar/pelisdemiedo-next
```

2. Navigate to the project directory:
```sh
❯ cd pelisdemiedo-next
```

3. Install the required dependencies:
```sh
❯ npm install
```

### 🤖 Usage

To run the project, execute the following command:

```sh
❯ node app.js
```

### 🧪 Tests

Execute the test suite using the following command:

```sh
❯ npm test
```

---

## 🤝 Contributing

Contributions are welcome! Here are several ways you can contribute:

- **[Report Issues](https://github.com/guiolmar/pelisdemiedo-next/issues)**: Submit bugs found or log feature requests for the `pelisdemiedo-next` project.
- **[Submit Pull Requests](https://github.com/guiolmar/pelisdemiedo-next/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.
- **[Join the Discussions](https://github.com/guiolmar/pelisdemiedo-next/discussions)**: Share your insights, provide feedback, or ask questions.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/guiolmar/pelisdemiedo-next
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
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/guiolmar/pelisdemiedo-next/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=guiolmar/pelisdemiedo-next">
   </a>
</p>
</details>

---

## 🎗 License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---