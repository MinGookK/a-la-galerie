import { createApi } from "unsplash-js";

class UnsplashService {
  /**
   * Unsplash.js 의 인스턴스
   */
  #instance;

  constructor() {
    // init instance
    // 각자 unsplash 에 접속해서 자신의 앱을 등록하세요.
    if (!process.env.REACT_APP_UNSPLASH_ACCESS_KEY) {
      throw new Error("No Access Key exists!");
    }
    this.#instance = createApi({
      accessKey: process.env.REACT_APP_UNSPLASH_ACCESS_KEY,
    });

    if (!this.#instance) {
      throw new Error("no instance created!!");
    }
  }

  /**
   * https://unsplash.com/documentation#search-photos
   * query 로 검색해서 사진들을 가져옴
   * @param {string} query 찾을 사진들의 키워드 e.g. "office", "dog", "foods"
   * @param {number} page 가져온 페이지들 중 현재 페이지 인덱스
   * @returns 사진들의 url array
   */
  async get7Photos(query, page = 1) {
    if (typeof query !== "string") {
      throw new Error("Query is supposed to be the type of string!");
    }

    try {
      const { response, status } = await this.#instance.search.getPhotos({
        query,
        page,
        perPage: 7,
      });

      // 10000 / 7 = 1429

      console.log(response);
      console.log("Get Photo URLs status code : ", status, response);
      return response;
    } catch (err) {
      console.error(err);
    }
  }
}

// export 로 instantiate -> 단 한 번만 instance 가 만들어지고, 이걸 계속 사용하게 된다.
export default new UnsplashService();
