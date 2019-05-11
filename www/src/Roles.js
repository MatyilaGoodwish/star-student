/**
 * App Roles Class
 * @user
 * @permissions
 * @activities
 * @update
 */

class Roles extends AppBase
{
    constructor()
    {
        super();
    }
    static Choose()
    {
        Router.pushPage('roles.html');
    }
    static Activities()
    {
        try{
            if(!User.get("studentFullnames"))
            {
                throw new Error("Profile not updated");
            }else{
             
                Router.pushPage('login.html');
           }
        }catch(error){
            ons.notification.alert('Kindly update profile and come back.');
        }
    }
    static Update()
    {
        try
        {

            let fullnames = document.getElementById('role-full-names');

            if(!fullnames.value){
                throw error;
            }else{
                let roles = document.getElementById('role-current-role'); 
          
                User.set("studentFullnames", Utils.FirstUpperCase(fullnames.value));
    
                User.set("studentRole", Utils.FirstUpperCase(roles.value))
    
                ons.notification.alert("Updated role for " + User.get("studentFullnames"));

                Router.pushPage('login.html');
            }
        }
        catch(error)
        {
            ons.notification.alert('Check all fields and fill in where necessary');
        }
    }
}
