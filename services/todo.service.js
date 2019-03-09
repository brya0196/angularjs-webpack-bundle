class TodoService {
  constructor($http, $log) {
    this.http = $http;
    this.log = $log;
  }

  async getAll() {
    return await this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}

export default TodoService;