class HomeController {
  constructor($scope, $log, TodoService) {
    this.scope = $scope;
    this.log = $log;
    this.todoService = TodoService;

    this.title = "Todo App"
  }

  async $onInit() {
    let p = await this.todoService.getAll();
    this.items = p.data;
    this.scope.$digest();
  }
}

export default {
  templateUrl: './component/home/home.html',
  controller: HomeController,
  controllerAs: 'vm'
};