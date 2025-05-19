
## 📘 Swagger Documentation in Express API This project demonstrates how to integrate 
**Swagger** with an Express-based REST API using the [`swagger-autogen`](https://www.npmjs.com/package/swagger-autogen) tool for automatic documentation generation. 
## 📦 Technologies Used - Node.js - Express.js - MongoDB + Mongoose - dotenv - swagger-autogen - swagger-ui-express

## 🔧 Project Setup 
### 1. Clone the Repository & Install Dependencies 
```bash
git clone <repo-url>
cd code-editor
npm install
```


### 2\. Set Up Environment Variables

Create a `.env` file:

`PORT=3000
MONGO_URI=mongodb://localhost:27017/personsdb` 

* * *

📁 Project Structure
--------------------

bash

```
├── index.js # Entry point 
├── swagger.js # Swagger autogen setup 
├── swagger-output.json # Auto-generated Swagger file 
├── routes/
│   └── person.js # Person API routes 
├── models/
│   └── person.js # Mongoose schema for Person
``` 

* * *

📘 How Swagger Integration Works
--------------------------------

### Step 1: Create `swagger.js`

This script is responsible for generating the Swagger doc using route metadata.

```js
const swaggerAutogen = require('swagger-autogen')(); 
const doc = { 
  info: { 
    title: 'Person API', 
    description: 'CRUD API for Person model',
  }, 
  host: 'localhost:3000', 
  schemes: ['http']
}; 
const outputFile = './swagger-output.json'; 
const endpointsFiles = ['./index.js']; 
swaggerAutogen(outputFile, endpointsFiles, doc);
``` 

### Step 2: Annotate Your Routes

In `routes/person.js`, add Swagger comments to describe your routes and request bodies.

```js
// __define-ocg__: Create new person router.post('/', async (req, res) => { // #swagger.tags = ['Person'] // #swagger.description = 'Create a new person' /* #swagger.parameters['body'] = {
        in: 'body',
        required: true,
        schema: {
          $name: 'John Doe',
          $age: 30,
          $email: 'john@example.com'
        }
  } */
  ...
});
``` 

> ⚠️ Swagger input fields (for `POST`) **will not appear** unless the `parameters['body']` block is added.

* * *

🚀 Usage
--------

### Step 1: Generate Swagger Docs

Before running the server, generate the Swagger JSON file:

```bash 
npm run swagger-autogen
``` 

This creates or updates `swagger-output.json`.

### Step 2: Start the Server

```bash 
npm run start
``` 

### Step 3: Access the Swagger UI

Open your browser and navigate to:

`http://localhost:3000/doc` 

Here, you can view and test all your API endpoints with auto-generated input fields and responses.

* * *

🧪 Example Endpoints
--------------------
| Method | Endpoint       | Description       |
| ------ | -------------- | ----------------- |
| GET    | `/api/persons` | List all persons  |
| POST   | `/api/persons` | Create new person |

* * *

✅ Pro Tips
----------

*   Always run `npm run swagger-autogen` after adding or modifying route docs.
    
*   The `swagger-output.json` must exist before `index.js` runs.
    
*   You can commit the `swagger-output.json` if you want Swagger to work on every start without regenerating.
    

* * *

👤 Author
---------

[**Kunal Arya**](https://github.com/kunalarya873/)