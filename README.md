# Dontire Sneakers

Dontire Sneakers is a full-stack e-commerce platform designed to help sneaker businesses move their sales online. The project provides a foundation for presenting products professionally, reaching more customers, managing inventory, and turning sneaker interest into completed orders.

## Project goals

The platform is being built to help sneaker retailers:

- Create an online storefront without having to build an e-commerce system from scratch.
- Showcase sneaker collections with product images, descriptions, prices, sizes, and availability.
- Give customers a simple way to discover products and place orders.
- Centralize product, inventory, and order management as the business grows.
- Establish a flexible foundation for future payments, delivery, promotions, and analytics.

## Planned functionality

The application is intended to support the following experiences:

- Responsive storefront for desktop and mobile customers.
- Product catalogue with categories, search, and filtering.
- Product detail pages with sizing, pricing, stock, and imagery.
- Shopping cart and checkout flow.
- Customer accounts and order history.
- Business dashboard for managing products, inventory, and orders.
- REST API for communication between the React client and Laravel backend.

## Technology stack

- **Frontend:** React with TypeScript and Vite
- **Styling:** Tailwind CSS
- **Backend:** Laravel/PHP
- **Data layer:** Laravel-compatible relational database such as MySQL or PostgreSQL
- **API communication:** HTTP/JSON between the client and backend

## Project structure

```text
DontireSneakers/
├── client/    # React storefront and customer-facing application
├── server/    # Laravel backend, API, authentication, and business logic
└── README.md
```

## Getting started

### Frontend

Make sure Node.js and npm are installed, then run:

```bash
cd client
npm install
npm run dev
```

Vite will display the local development URL in the terminal.

Useful frontend commands:

```bash
npm run build    # Type-check and create a production build
npm run lint     # Run ESLint
npm run preview  # Preview the production build locally
```

### Backend

The backend is intended to run as a Laravel application inside `server/`. After the Laravel application has been initialized, install its dependencies and configure the environment:

```bash
cd server
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

Configure the database connection and any client API URL in the relevant environment files before using backend-dependent features.

## Development workflow

Run the frontend and backend development servers separately while working locally. The React client should consume the Laravel API rather than connecting directly to the database. Keep business rules, authentication, validation, and data access in the backend, and keep presentation and user interaction in the client.

Before opening a pull request, run the frontend lint and production build commands and verify the main customer flows on both desktop and mobile screen sizes.

## Roadmap

- Complete the Laravel API and database models.
- Connect the product catalogue to live backend data.
- Add authentication and role-based business administration.
- Implement cart, checkout, order processing, and order status updates.
- Add payment and delivery integrations.
- Add stock alerts, sales reporting, and promotional tools.

## Contributing

Contributions are welcome. Create a focused branch, make the smallest change that solves the problem, test the affected functionality, and open a pull request with a clear description of the change.

## License

No license has been selected for this project yet.
