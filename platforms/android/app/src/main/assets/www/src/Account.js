/**
 * App Accounts
 * @create
 * @register
 * @auth
 */


 
class Account extends AppBase
{
    static Login()
    {
        User.set("loginEmail", document.getElementById('email').value); 
        User.set("loginPassword", document.getElementById('password').value);

        function LoginSuccess(accounts)
        {
            Router.resetToPage('dashboard.html');
           // CreateUser();
        }
        function onError(error)
        {
            ons.notification.alert(error.message);
        }
       

        firebase.auth().signInWithEmailAndPassword(User.get('loginEmail'), User.get('loginPassword'))
        .then(LoginSuccess).catch(onError);

        
    }

    static Registrations()
    {
        Router.pushPage('register.html');
    }
    static Register()
    {
        User.set("regEmail", document.getElementById('r-email').value); 
        User.set("regPassword", document.getElementById('r-password').value);

        function LoginSuccess(accounts)
        {
            Router.resetToPage('dashboard.html');
           // CreateUser();
        }
        function onError(error)
        {
            ons.notification.alert(error.message);
        }
        

        firebase.auth().createUserWithEmailAndPassword(User.get('regEmail'), User.get('regPassword'))
        .then(LoginSuccess).catch(onError);
 
    }
}
