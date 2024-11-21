# Standard-JS Package

The `standard-js` package provides common types and constants for HTTP methods, status codes, mathematical constants, and date/time formats. It is designed to simplify development in your applications by offering predefined values that can be easily imported and used.

## Installation

To install this module, you can use npm, Yarn, Bun, or pnpm:

```bash
npm install @brahimemo/standard-js
```

```bash
yarn add @brahimemo/standard-js
```

```bash
bun install @brahimemo/standard-js
```

```bash
pnpm add @brahimemo/standard-js
```

## Usage

### Importing HTTP Methods

You can import the HTTP methods and use them in your application:

```typescript
import { HTTPMethods } from "@brahimemo/standard-js/http";

console.log(HTTPMethods.Get); // "GET"
console.log(HTTPMethods.Post); // "POST"
```

### Importing HTTP Status Codes

You can also import the HTTP status codes:

```typescript
import { StatusCodes } from "@brahimemo/standard-js/http";

console.log(StatusCodes.StatusOK); // 200
console.log(StatusCodes.StatusNotFound); // 404
```

### Available HTTP Methods

- `GET`
- `HEAD`
- `POST`
- `PUT`
- `PATCH`
- `DELETE`
- `CONNECT`
- `OPTIONS`
- `TRACE`

### Available HTTP Status Codes

- **1xx Informational**

  - `StatusContinue` (100)
  - `StatusSwitchingProtocols` (101)
  - `StatusProcessing` (102)
  - `StatusEarlyHints` (103)

- **2xx Success**

  - `StatusOK` (200)
  - `StatusCreated` (201)
  - `StatusAccepted` (202)
  - `StatusNoContent` (204)

- **3xx Redirection**

  - `StatusMovedPermanently` (301)
  - `StatusFound` (302)
  - `StatusNotModified` (304)

- **4xx Client Errors**

  - `StatusBadRequest` (400)
  - `StatusUnauthorized` (401)
  - `StatusNotFound` (404)

- **5xx Server Errors**
  - `StatusInternalServerError` (500)
  - `StatusNotImplemented` (501)

### Importing Mathematical Constants

You can import mathematical constants like this:

```typescript
import { Math } from "@brahimemo/standard-js/math";

console.log(Math.Pi); // 3.141592653589793
console.log(Math.Expo); // 2.718281828459045
```

### Available Mathematical Constants

- `Math.Expo`
- `Math.Pi`
- `Math.Phi`
- `Math.Sqrt2`
- `Math.SlfE`
- `Math.Ln2`
- And more...

### Importing Date/Time Formats

You can import date and time formats as follows:

```typescript
import { Formats } from "@brahimemo/standard-js/time";

console.log(Formats.RFC3339); // "yyyy-MM-ddTHH:mm:ssZ"
console.log(Formats.Kitchen); // "h:mma"
```

### Available Date/Time Formats

- `Formats.Layout`
- `Formats.ANSIC`
- `Formats.RFC3339`
- `Formats.Kitchen`
- And more...

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
