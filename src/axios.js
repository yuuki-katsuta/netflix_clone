import axios from 'axios'

//共通URL部分をインスタンスで設定
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  //外部APIの共通部分のURL
})

export default instance
