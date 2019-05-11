

class Welcome extends AppBase
{
    constructor()
    {
        super();
    }
    static Add()
    {
        Router.pushPage('main.html');  
    }
    static AddSubject()
    {
        
        try{
            let subject = document.getElementById('subject');
            let subjectDueDate = document.getElementById('date');

            DB.set("studentSubject", Utils.FirstUpperCase(subject.value));

            DB.set("projectDue", Utils.FirstUpperCase(subjectDueDate.value));
            
            if(DB.get("studentSubject")){
                Router.pushPage('notes.html');
            }
        }catch(error){
            ons.notification.alert("Kindly Complete All Required fields");
        }
         
    }
    static async AddProject()
    {

        let schoolActivity = document.getElementById('schoolActivity');
        let taskStatus = document.getElementById('taskStatus');

        let studentResponse = ons.notification.confirm("You are about to add a school project to your tasks");

        //initialization
        const onError = (error) =>{
           // ons.notification.alert(error.toString());
        }
        const onSuccess = (userResponse) => {
         

            DB.set("schoolActivity", Utils.FirstUpperCase(schoolActivity.value));

            DB.set("taskStatus", Utils.FirstUpperCase(taskStatus.value));

            const onSuccessLogin = (user) =>{
                if(user)
                {
                    Router.resetToPage('dashboard.html');

                    Task.SavePrevious();

                    Task.Pull();
                }else{
                    ons.notification.alert("Kindly proceed to login");
                    Router.pushPage('login.html');
                }
            }
            const onLoginError = (error) =>{
                ons.notification.alert(error.message);
            }

            firebase.auth().onAuthStateChanged(onSuccessLogin)
            .catch(onLoginError);


            Router.pushPage('login.html');
        
        }
        studentResponse.then(onSuccess).catch(onError);
 
    }       
}