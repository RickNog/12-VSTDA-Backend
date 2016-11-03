# 12-VSTDA-Backend

In this project, I revisited the Very Simple Todo App to store Todo items in a SQL database via a REST API.

##Mockup:
<img src="http://i.imgur.com/vhMYF1s.png" />

## Tasks
1. Installed Sql Server 2016 and Server Management Studio.
2. Created a new Visual Studio solution called `VSTDA`.
3. Created an ASP.NET Web API 2 Project
4. Created and added properties to a class called `Todo.cs` in my Models folder.
5. Added a new `Infrastructure` folder in my API project.
6. Created and setup Entity Framework DataContext class in a new `TodoDataContext.cs` stored in the `Infrastructure` folder.
7. Opended Package Manager and run the migration commands to initialize my SQL database via C#
8. Created a `TodoController.cs` file in my API project, following the wizard to generate an Entity Framework controller.
9. Integrated this API with my existing Angular application.

## Requirements
- Must be able to Create new Todo items (Which are ultimately stored in a database)
- Must be able to Read Todo items from the Database via the REST API you created.
- Must be able to Update Todo items (Changes must be saved to the database)
- Must be able to Delete Todo items (Items must be deleted from the database)
