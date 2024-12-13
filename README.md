# LMS_Project
This is learning managing project on which user can enroll in courses according their need and check in how many courses they are enrolled . It have admin panel on which use can add new course ,delete course ,update course,
# Steps to install 

## 1.Clone both repository
 ``` 
  frontend-: git clone https://github.com/niteshsainicoder/lms_frontend.git
  Backend-:git clone https://github.com/niteshsainicoder/lms_backend.git
```

## 2.Install dependencies ( in both repository)
 ```
      npm i     
```

## 3. .env file (in both repositroy)
``` 
NEXT_PUBLIC_SERVER_URL = http://localhost:3000 
//change it according to you backend port, this is for frontend

//(in backend)
PORT = 3000 
MONGO_URI = mongodb://localhost:27017/lms_project
 ```

## 4. Run Project (both)
```
backend:- npm run test //(make sure 3000 port will be free )
frontend npm run dev
```
Note:- admin password are hardcoded according to their specification  so please use
``` 
email : acadmically@gmail.com 
and
password: 'password'
```
and for DataBase: you have should have need add DB_URI in Backend env file for creating new user please go to this url 

```
signup route:- http://locahost:3000/users/signup
```
change port according to you project on which port it is running and  
make a resquest on this url from postman with these body details 
{ Name, Email, Password}

and after it login  on the project and use it 

Thanks#   l m s _ f r o n t e n d 
 
 