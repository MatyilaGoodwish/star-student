class Dashboard
{
    constructor()
    {

    }
}
class Logout extends Dashboard{

    static SignOut()
    {
        firebase.auth().signOut();
        Logout.SignOutComfirm();
    }
    static SignOutComfirm()
    {
        firebase.auth().onAuthStateChanged((user)=>{
            if(!user){
                Router.resetToPage('welcome.html');
            }else{
                Logout.SignOut();
            }
        });
    }
}

class Task extends Dashboard{
    static Create()
    {
        Task.SavePrevious();
        Router.pushPage('main.html');
    }
    static Remove(id)
    {
        firebase.auth().onAuthStateChanged(function(user){
            firebase.firestore().collection(user.uid).doc(id)
            .delete()
            .then(next=>{
                Task.Pull();
            })
            .catch(function(error){
                console.log(error.message);
            })
        })
       
    }
    static Pull()
    {
        firebase.auth().onAuthStateChanged((user)=>{
            if(user)
            {
                firebase.firestore().collection(user.uid).get().then(function(querySnapshot) {
                    let tasksView = document.getElementById('tasks');

                    tasksView.innerHTML = '';
                    querySnapshot.forEach(function(doc) {
                        // doc.data() is never undefined for query doc snapshots
                        //console.log(doc.id, " => ", doc.data());

                        tasksView.innerHTML += `
                            <ons-card>
                            <h5>${doc.data().studentSubject }</h5>
                            <p>Due: ${doc.data().projectDue.split('_').join('-')}</p>
                            <p>Activity: ${doc.data().schoolActivity}</p>
                            <ons-button onclick="Task.Remove('${doc.id}')" >Remove</ons-button>
                            </ons-card>
                        `;

                    });
                    
                });
            }
        })
    }
    static SavePrevious()
    {
        try{
            firebase.auth().onAuthStateChanged((user)=>{
                if(user)
                {
                    firebase.firestore().collection(user.uid)
                    .add({
                       projectDue: DB.get('projectDue').split("-").join("_").toString(),
                       schoolActivity: DB.get('schoolActivity'),
                       studentSubject:DB.get('studentSubject'),
                       taskStatus: DB.get('taskStatus')
                    })
                    .then(function(docRef) {
                        //console.log("Document written with ID: ", docRef.id);

                        

                        Task.Pull();
                    })
                    .catch(function(error) {
                        //console.error("Error adding document: ", error);
                    });
                }
            })
        }catch(error){

        }
        
    }
}

Task.Pull();
