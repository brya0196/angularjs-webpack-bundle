var homeComponent = {
  templateUrl: './component/home/home.html',
  controller: HomeController,
  controllerAs: 'vm'
}

HomeController.$inject = [];

function HomeController() {
  var vm = this;
  vm.title = "Hello World";
}

export default homeComponent;