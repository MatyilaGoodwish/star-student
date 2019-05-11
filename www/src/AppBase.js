/**
 * Onsen UI Router/Navigator
 * @defaultPage
 * @appBootstrap
 */

const Router = document.getElementById('navigator');
        


/**
 * Initial Page
 * @routeInitPage
 */

Router.pushPage('welcome.html');




/**
 * Kendo Observables
 * @setupMVVM
 * @databaseViewModel
 * @userViewModel
 */


let { observable } = kendo;

const DB = new observable({
        currentYear: new Date().getFullYear(),
        nextYear: new Date().getFullYear() + 1,
        previousYear: new Date().getFullYear() - 1,
});

const User = new observable({
    currentYear: new Date().getFullYear(),
    nextYear: new Date().getFullYear() + 1,
    previousYear: new Date().getFullYear() - 1,
});


/**
 * Base Class
 * @base
 */
class AppBase {}