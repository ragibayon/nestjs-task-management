try {
  // Attempt to create the 'task' database
  db = db.getSiblingDB('task');
  print('Creating task database...');
  db.createCollection('test'); // Creating a dummy collection just to trigger the database creation
  print('Task database created successfully.');
} catch (e) {
  // Print any errors that occur during database creation
  print('Error creating task database:', e);
}
