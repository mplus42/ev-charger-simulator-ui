# EV Charger Simulator UI

A simple React application to simulate and manage Electric Vehicle (EV) charger simulators.  
This project provides a user interface to create, update, and remove EV charger simulators with different operational states.

---

## Features

- Add new EV charger simulators (default state: `offline`)
- Remove existing chargers
- Change charger state with commands:
  - **Turn On** → `online`
  - **Start Charging** → `charging`
  - **Stop Charging** → `ready`
  - **Simulate Fault** → `fault`
- State management with React hooks and unique IDs generated using `uuid`
- Styled using Tailwind CSS with custom button styles
- Data stored in browser memory (local state), no backend or persistence

---

## Technologies Used

- React (v18+)
- Tailwind CSS for styling
- UUID for unique charger IDs
- React Scripts (Create React App)

---

## Getting Started

### Prerequisites

- Node.js (v16+ recommended)
- npm or yarn package manager

### Installation

1. Clone the repo:

```bash
git clone https://github.com/mplus42/ev-charger-simulator-ui.git
cd ev-charger-simulator-ui
