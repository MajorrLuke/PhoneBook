# PhoneBook
A phonebook reader, written in ExpressJS, NextJS, SQLite, and CSS.

Development was made on Windows, some steps and command syntaxes may differ.

# Instalation

1. Unzip the files in the desired folder.
2. Navigate to "phonebook-api" and Install the necessary dependencies with "npm install".
3. build the database using "npx prisma db push".
4. Start the database service with "node index.js"
5. The database will be running in oort 3000, you can change it in "phonebook-api\.env"

6. Navigate to "phonebook-ui" and Install the necessary dependencies with "npm install".
7. Start the server with "npm run dev"
8. The web interface can be accessed in port 8080.
