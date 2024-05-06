
interface User {
    name: string;
    surname: string;
    email: string;
    password: string;
  }
  
  function createOrUpdateUser(initialValues: Partial<User>):User {
    return {...initialValues };
  }
  
 

  
