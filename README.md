
# coffee-api 🚀

  
  **Start**
  
`docker-compose up --force-recreate --build`


 - - - - - - - - - - - - 
**API coverage:** 🍵

> we have generic api for any model, just create a model and we will have:

 - **GET** `api/model/` with query filter and pagination
 -  **POST** `api/model/`
 - **GET** `api/model/find-one`with query filter and pagination
 -  **POST** `api/model/create-many` which do bulk create
 - **GET** `api/model/:id` get by Id
 - **DELETE**`api/model/:id` delete by Id
 - **PUT**`api/model/:id` edit by Id
 - 
  
   - - - - - - - - - - - - 

  **Cases**
 - all large machines: http://localhost:3001/api/machines?type=COFFEE_MACHINE_LARGE
 - all large pods: http://localhost:3001/api/pods?type=COFFEE_POD_LARGE
 - all espresso vanilla pods:http://localhost:3001/api/pods?flavor=COFFEE_FLAVOR_VANILLA
 - all espresso machines:http://localhost:3001/api/machines?type=ESPRESSO_MACHINE  
 - all pods sold in 7 dozen packs: http://localhost:3001/api/pods?flavor=COFFEE_FLAVOR_VANILLA






