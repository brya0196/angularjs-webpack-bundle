const homeComponent = {
  templateUrl: './component/home/home.html',
  controller: HomeController,
  controllerAs: 'vm'
}

HomeController.$inject = ['$log', '$http'];

function HomeController($log, $http) {
  const vm = this;
  vm.title = "Hello World";

  const promesa = async () => {
    let result = await $http.get('https://jsonplaceholder.typicode.com/todos/1');
    return result;
  }

  vm.$onInit = async () => {
    let p = await promesa();
    $log.info(p.data);
  }

}

export default homeComponent;