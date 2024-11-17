# HTTP Module

This module provides common HTTP methods and status codes as TypeScript types and constants. It is designed to simplify the handling of HTTP operations in your applications.

## Installation

To install this module, you can use npm or yarn:

```bash
npm install standard-js
```

or

```bash
yarn add standard-js
```

or

```bash
bun install standard-js
```

## Usage

### Importing HTTP Methods

You can import the HTTP methods and use them in your application:

```typescript
import { HTTPMethods } from 'standard-js/http';

console.log(HTTPMethods.Get); // "GET"
console.log(HTTPMethods.Post); // "POST"
```

### Importing HTTP Status Codes

You can also import the HTTP status codes:

```typescript
import { StatusCodes } from 'standard-js/http';

console.log(StatusCodes.StatusOK); // 200
console.log(StatusCodes.StatusNotFound); // 404
```

### Available HTTP Methods

The following HTTP methods are available:

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

The following HTTP status codes are available:

- **1xx Informational**
  - `StatusContinue` (100)
  - `StatusSwitchingProtocols` (101)
  - `StatusProcessing` (102)
  - `StatusEarlyHints` (103)
  
- **2xx Success**
  - `StatusOK` (200)
  - `StatusCreated` (201)
  - `StatusAccepted` (202)
  - `StatusNonAuthoritativeInfo` (203)
  - `StatusNoContent` (204)
  - `StatusResetContent` (205)
  - `StatusPartialContent` (206)
  - `StatusMultiStatus` (207)
  - `StatusAlreadyReported` (208)
  - `StatusIMUsed` (226)

- **3xx Redirection**
  - `StatusMultipleChoices` (300)
  - `StatusMovedPermanently` (301)
  - `StatusFound` (302)
  - `StatusSeeOther` (303)
  - `StatusNotModified` (304)
  - `StatusUseProxy` (305)
  - `StatusTemporaryRedirect` (307)
  - `StatusPermanentRedirect` (308)

- **4xx Client Errors**
  - `StatusBadRequest` (400)
  - `StatusUnauthorized` (401)
  - `StatusPaymentRequired` (402)
  - `StatusForbidden` (403)
  - `StatusNotFound` (404)
  - `StatusMethodNotAllowed` (405)
  - `StatusNotAcceptable` (406)
  - `StatusProxyAuthRequired` (407)
  - `StatusRequestTimeout` (408)
  - `StatusConflict` (409)
  - `StatusGone` (410)
  - `StatusLengthRequired` (411)
  - `StatusPreconditionFailed` (412)
  - `StatusRequestEntityTooLarge` (413)
  - `StatusRequestURITooLong` (414)
  - `StatusUnsupportedMediaType` (415)
  - `StatusRequestedRangeNotSatisfiable` (416)
  - `StatusExpectationFailed` (417)
  - `StatusTeapot` (418)
  - `StatusMisdirectedRequest` (421)
  - `StatusUnprocessableEntity` (422)
  - `StatusLocked` (423)
  - `StatusFailedDependency` (424)
  - `StatusTooEarly` (425)
  - `StatusUpgradeRequired` (426)
  - `StatusPreconditionRequired` (428)
  - `StatusTooManyRequests` (429)
  - `StatusRequestHeaderFieldsTooLarge` (431)
  - `StatusUnavailableForLegalReasons` (451)

- **5xx Server Errors**
  - `StatusInternalServerError` (500)
  - `StatusNotImplemented` (501)
  - `StatusBadGateway` (502)
  - `StatusServiceUnavailable` (503)
  - `StatusGatewayTimeout` (504)
  - `StatusHTTPVersionNotSupported` (505)
  - `StatusVariantAlsoNegotiates` (506)
  - `StatusInsufficientStorage` (507)
  - `StatusLoopDetected` (508)
  - `StatusNotExtended` (510)
  - `StatusNetworkAuthenticationRequired` (511)

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
