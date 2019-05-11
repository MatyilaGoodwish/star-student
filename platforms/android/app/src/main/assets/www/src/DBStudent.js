/***
 * Student DBContext
 * Extends @AppBase
 */

 

class DBStudent extends AppBase
{
    constructor()
    {
        super();
    }
    static Save()
    {
        ons.notification.alert(this.studentFullnames + " will or has been saved");
    }
}
