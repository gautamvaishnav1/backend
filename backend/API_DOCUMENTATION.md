# API Routes Documentation

This document outlines the API routes available in the backend application, including their endpoints, HTTP methods, authentication requirements, and brief descriptions.

## Base URL
All routes are prefixed with `/api`.

## Authentication Routes (`/api/auth`)

These routes handle user and food partner authentication.

### User Authentication
- **POST** `/api/auth/user/register`  
  Registers a new user.  
  - Middleware: User registration validator  
  - Controller: `postRegisterUser`

- **POST** `/api/auth/user/login`  
  Logs in a user.  
  - Middleware: User login validator  
  - Controller: `postLoginUser`

- **POST** `/api/auth/user/logout`  
  Logs out a user.  
  - Controller: `postLogoutUser`

### Food Partner Authentication
- **POST** `/api/auth/foodPartner/register`  
  Registers a new food partner.  
  - Middleware: Food partner registration validator  
  - Controller: `postRegisterFoodPartner`

- **POST** `/api/auth/foodPartner/login`  
  Logs in a food partner.  
  - Middleware: Food partner login validator  
  - Controller: `postLoginFoodPartner`

- **POST** `/api/auth/foodPartner/logout`  
  Logs out a food partner.  
  - Controller: `postLogoutFoodPartner`

## Food Routes (`/api/food`)

These routes manage food items.

- **POST** `/api/food/`  
  Creates a new food item (requires food partner authentication).  
  - Middleware: Food partner auth, file upload (video)  
  - Controller: `createFood`

- **GET** `/api/food/`  
  Retrieves all food items (requires user authentication).  
  - Middleware: User auth  
  - Controller: `getAllFoodItems`

## User Info Routes (`/api/found`)

These routes provide information about users and food partners.

- **GET** `/api/found/user`  
  Retrieves user information (requires user authentication).  
  - Middleware: User auth  
  - Controller: `userFindController`

- **GET** `/api/found/foodPartner/:id`  
  Retrieves food partner information by ID (requires user authentication).  
  - Middleware: User auth  
  - Controller: `FoodPartnerFoundByUserFindController`

- **GET** `/api/found/foodPartner`  
  Retrieves food partner information (requires food partner authentication).  
  - Middleware: Food partner auth  
  - Controller: `FoodPartnerFindController`

## Like Routes (`/api`)

These routes handle user likes on content.

- **POST** `/api/user/like`  
  Posts a like by a user (requires user authentication).  
  - Middleware: User auth  
  - Controller: `postLikeByUser`

- **GET** `/api/user/like/:id`  
  Retrieves liked reels by a user (requires user authentication).  
  - Middleware: User auth  
  - Controller: `getLikeReelsByUser`

## Save Routes (`/api`)

These routes handle user saves on content.

- **POST** `/api/user/save`  
  Saves content by a user (requires user authentication).  
  - Middleware: User auth  
  - Controller: `postSave`

- **GET** `/api/user/save/:id`  
  Retrieves saved reels by a user (requires user authentication).  
  - Middleware: User auth  
  - Controller: `getSaveReel`

## Authentication Middleware

- `authUserMiddleware`: Verifies user authentication
- `authFoodPartnerMiddleware`: Verifies food partner authentication

## Validators

- `authUserRegisterValidator`: Validates user registration data
- `authUserLoginValidator`: Validates user login data
- `authFoodPartnerRegisterValidator`: Validates food partner registration data
- `authFoodPartnerLoginValidator`: Validates food partner login data

## Notes

- All routes requiring authentication will return appropriate error responses if not authenticated.
- File uploads are handled via multer with memory storage for video files in food creation.
- CORS is configured to allow requests from `https://ominous-space-guacamole-g47j9p9jjq653wjvg-5173.app.github.dev` with credentials.