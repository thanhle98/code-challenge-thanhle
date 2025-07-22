# Resources Server

A backend REST API server built with NestJS and TypeScript that provides CRUD operations for managing resources.

- **CRUD Operations**: Create, Read, Update, and Delete resources
- **Filtering & Pagination**: List resources with search, sorting, and pagination
- **Data Validation**: Input validation using class-validator with Full TypeScript support
- **API Documentation**: Auto-generated Swagger documentation
- **Database**: MongoDB integration with Mongoose ODM

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (version 18.x or higher)
- **npm** (comes with Node.js)

## 🛠️ Installation

1. **Clone the repository** (if applicable):

   ```bash
   git clone https://github.com/thanhle98/code-challenge-thanhle
   cd src/problem5
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the root directory:

   ```bash
   # Database Configuration for demo purpose (free mongo atlas cloud)
   MONGO_URL=mongodb+srv://thanhlx1298:OAfs5y4rKit12KRl@cluster-test-99tech.xxy3ayc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-Test-99Tech

   # Application Configuration
   PORT=3000
   ```

## 🚀 Running the Application

```bash
# Start with hot reload
npm run start:dev
```

The server will be available at `http://localhost:3000`

## 📚 API Documentation

Once the application is running, you can access the Swagger API documentation at:

```
http://localhost:3000/api
```

| Method   | Endpoint        | Description                     |
| -------- | --------------- | ------------------------------- |
| `POST`   | `/resource`     | Create a new resource           |
| `GET`    | `/resource`     | List all resources with filters |
| `GET`    | `/resource/:id` | Get a specific resource by ID   |
| `PATCH`  | `/resource/:id` | Update a resource               |
| `DELETE` | `/resource/:id` | Delete a resource               |

### Resource Schema

```typescript
{
  name: string; // Required
  url: string; // Required
  description: string; // Required
  createdAt: Date; // Auto-generated
  updatedAt: Date; // Auto-generated
}
```
