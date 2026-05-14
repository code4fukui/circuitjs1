# CircuitJS1

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

CircuitJS1 is an electronic circuit simulator that runs in the browser. It was originally written by Paul Falstad as a Java Applet and was later adapted by Iain Sharp to run in the browser using GWT.

## Demo

For a hosted version of the application, see:

- **Paul's Page:** [http://www.falstad.com/circuit/](http://www.falstad.com/circuit/)
- **Iain's Page:** [http://lushprojects.com/circuitjs/](http://lushprojects.com/circuitjs/)

## Features

- **Browser-Based:** Runs in any modern browser with no installation required.
- **Wide Component Library:** Includes a diverse range of passive components, active components, digital chips, and custom building blocks.
- **Custom Logic & Subcircuits:** Design and reuse custom logic devices or create "black box" subcircuits from existing schematics.
- **Shareable Circuits:** Easily create and share links to your custom circuits.
- **Learning Examples:** Comes with a large collection of pre-built example circuits for educational purposes.
- **WebSocket Interface:** Remotely control and automate simulations, read component values, and export schematics.
- **Desktop Application:** A cross-platform desktop version is available, built with Electron.
- **Internationalization:** Supports multiple languages, with instructions for adding new translations.

## Development Setup

The project can be built locally or within a cloud-based development environment.

### Cloud Development (Recommended)

The easiest way to get started is with a cloud development environment, which is pre-configured for this project.

1.  Open this repository in [GitHub Codespaces](https://github.com/features/codespaces) or [Gitpod](https://www.gitpod.io/).
2.  The environment will be set up automatically by the `dev.sh setup` script.
3.  Once setup is complete, the development server will start via `dev.sh start`.

### Local Development

**Prerequisites:**
*   Java Development Kit (OpenJDK 8 is recommended)
*   Apache Ant
*   Google Web Toolkit (GWT) version 2.8.2

**Steps:**

1.  Clone the repository.
2.  Run the setup script to download GWT and configure the build environment. This script will attempt to install Java and Ant on Debian-based systems if they are not found.
    ```bash
    ./dev.sh setup
    ```
3.  Start the GWT code server and a local web server:
    ```bash
    ./dev.sh start
    ```
    The application will be available at `http://127.0.0.1:8000`.

## Usage

The `dev.sh` script provides several commands for managing the project:

-   `./dev.sh setup`: Installs dependencies and sets up the build configuration.
-   `./dev.sh start`: Starts the GWT code server and a local web server for development.
-   `./dev.sh compile`: Compiles the Java source code into JavaScript.
-   `./dev.sh package`: Compiles the project and creates a `circuitjs1.tar.gz` archive in the root directory.

## Advanced Features

### WebSocket Interface

CircuitJS1 supports a WebSocket interface for remote control and automation. This allows you to start/stop the simulation, read node voltages, set external voltage sources, and export the circuit from any programming language.

For detailed documentation and examples, see the [WebSocket Interface README](websocket/README.md).

### Desktop Application

A desktop version is available in the `app/` directory. To run it:

```bash
cd app
# Install dependencies (run once)
# npm install
# Start the application
npm start
```

### Embedding

The simulator can be embedded into other web pages using an `<iframe>`. The `jsinterface.html` file provides a detailed example of how to interact with the simulator from a parent page using JavaScript.

### Contributing Translations

We welcome contributions for new translations. Please see the instructions in the [lang directory README](lang/README.md) to get started.

## License

MIT License — see [LICENSE](LICENSE).