// importing Components
import homeComponent from "./component/home/home.component";

// importing services
import TodoService from "./services/todo.service";

const app = angular.module('app', []);

//configs

//constants

//values

//components
app.component('homeComponent', homeComponent);

//services
app.service('TodoService', TodoService);



