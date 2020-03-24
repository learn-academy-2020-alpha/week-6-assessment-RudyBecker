# ASSESSMENT 6: Interview Practice Questions
Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.

1. In a model called Animal that has_many Sightings, what is the name of the foreign key? Would the foreign key be part of the Animal model or the Sightings model?

  Your answer: Sightings would have the foreign key. An example foreign key would be sightings_id.

  Researched answer:
  To create the association between the Animal and the Sightings table we have to assign a foreign key to Sightings. The foreign key always goes on the belongs_to side. By convention the foreign key should always be the modelname_id and the data type should be integer. In this case it will be sighting_id. The has_many model is singular, the belongs_to model is plural. An Animals (singular) has_many sightings (plural).



2. Which routes must always be passed params and why?

  Your answer: Routes which contain input user information so that they can be acted upon and displayed. 

  Researched answer:



3. Write a rails route for a controller called "main" and a page called "game" that takes in a parameter called "guess".

  Your answer:
  
  get '/game' =>'main#guess'



4. Name three rails generator commands. What is created by each?

  Your answer: rails generate Model - creates a database Model, rails generate app - creates a rails app, rails db:migrate - updates database based on used inputs

  Researched answer:
  
  rails new app_name: generates a new folder with the entire Rails directory structure with all the code you need 
  
  rails new app_app -d postgresql -T: Rails comes with a default SQL database called SQLite, passing the flags -d postgresql -T will replace the default database with postgres
  
  rails db:create: sets up an empty database
  
  rails generate model : The generate command takes the name of the table, the name of each column, and the datatype of each column as arguments. The name of the table is uppercase and singular by convention.

  rails db:migrate :The migration command creates a timestamped file in db/migrate with the changes made to the database. 
  
  rails generate migration: A new file is added to the migrate directory with the starter code for the migration

5. Consider the Rails routes below. Describe the responsibility of each route.

/users        method="GET"   - This will perform the CRUD opertation Read and will show a database of all users. 

/users/1      method="GET"- This will perform the CRUD operation Read and will show the user information for the user with primary key #1.

/users/new    method="GET" - This will perform the CRUD operation Read and will show a page where a new user can be created. 

/users/       method="POST" - This will perform the CRUD operation Create and will create a new user in the database.

/users/1      method="PUT" - This will perform the CRUD operation Update and will allow the user to update user with the primary id of 1. 

/users/1      method="DELETE" - This will perform the CRUD operation Delete and will allow the user to delete the user with the primary id of 1. 
