/**
 * App Default Configurations
 * @dbRecordsPrefetch
 * @dbContenxtCollections
 * @populateAppRecords
 */


class AppConfig extends AppBase
{
    constructor()
    {
        super();
    }
    static async UpdateRecordsFromDB()
    {
        try{
            firebase.auth().onAuthStateChanged((user)=>{
                if(!user)
                {
                    ons.notification.alert('Remember not to share your username/password');
                }
                else{
                    ons.notification.alert('Welcome to Star Student');
                    Router.resetToPage('dashboard.html');
                }
            })
        }catch(error){
            ons.notification.alert(error.message);
        }
    }
}
