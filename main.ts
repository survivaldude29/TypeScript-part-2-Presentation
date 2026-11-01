
type UserRole = {role: string} & { active: boolean};

function Status(user: UserRole) {
  if (user.role === 'ADMIN' && user.active === true) 
    {console.log("Administrator, log-in complete.");} 
    //Semicolon and curly braces
    
  if (user.role === 'USER' && user.active === true) 
    console.log("User in Code Spotted!")
    //No semicolon, one line after 'if' statement
  
  if (user.role === 'GUEST' && user.active === true) 
  {
    console.log("Welcome Guest!")
  } //No semicolon, curly braces

}

Status({role: 'ADMIN', active: true}); 
Status({role: 'USER', active: true});  
Status({role: 'GUEST', active: false}); 
//Both must be true to output to console.

function testGlobal() {
  // Missing let, const, or var
  var secretGlobal = "I will crash the program"; 
}

testGlobal();