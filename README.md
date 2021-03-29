## Development environment
IDE - vsCode@1.54.3

MySQL Community Server@8.0.23

xcode@12.4

cocoapods@1.10.1

node@12.16.1


## Database(MYSQL)
## please update .env DB_NAME and DB_PASSWORD to your own setting

-please run the following command for creating database in mysql-

```create database consultation_project;```

**please be aware nodeJs only support mysql native password**

----
## Backend(NodeJs)
>please check if yarn is installed, if not, running this command

>```npm install --global yarn```

-please run the following command for config backend server-


```cd backend```


```yarn```

```yarn knex migrate:up```

```yarn knex seed:run```

```yarn ts-node-dev main.ts```

----
## App(React-Native)
>please make sure xcode and cocoapods was installed.

```cd App```

```yarn```

```cd ios```

```pod install```

```cd ..```

```yarn run ios```



------------------------------

# Operation

## Clinic(NodeJs API)
**Demo with postman**
>An API for creating account as a clinic user, you may create account by calling this api or using React-Native App

http://locaohost:8000/client_create_account

method: 
```POST```

required param as ```express.Response.body```

```email```

```password```

```clinic_name```

```phone_number```(min-length of 8 digital)

```address```

----
>An API for authenticating logins

http://locaohost:8000/login

method: 
```POST```

required param as ```express.Response.body```

```email```

```password```

----
>An API for a clinic to create a consultation record

**Please be aware this API has no login protected due to no clinic login ui**

required param as ```express.Response.body```

http://locaohost:8000/create_consultation_record

method: 
```POST```

```client_email```

```clinic```
                
```doctor_name```

```patient_name```

```diagnosis```

```medication```

```consultation_fee```

```follow_up_consultation```

```consultation_date_and_time```

----
>An API for getting a list of consultation records for a clinic

**Please be aware this API has no login protected due to no clinic login ui**

http://locaohost:8000/all_record

method: 
```GET```

----
## Client(React-Native)
Please click 
```Create account``` for account creation, phone number has min-length of 8 digital.

after account creation, back to home page and ```Login```

clicking on ```Daily```, ```Weekly``` and ```Monthly``` will show the related records.