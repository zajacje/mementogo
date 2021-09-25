import http from "../http-common";

class TextpostDataService {
    getAll() {
      return http.get("/textposts");
    }
  
    get(id) {
      return http.get(`/textposts/${id}`);
    }
  
    create(data) {
      return http.post("/textposts", data);
    }
  
    update(id, data) {
      return http.put(`/textposts/${id}`, data);
    }
/*  
    delete(id) {
      return http.delete(`/textposts/${id}`);
    }
  
    deleteAll() {
      return http.delete(`/textposts`);
    }
  
    findByTitle(death) {
      return http.get(`/textposts?death=${death}`);
    }
    */
  }
  
  export default new TextpostDataService();