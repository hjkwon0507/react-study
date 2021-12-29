import './App.css';
import youtubeData from './data/youtubeData.json';

function App() {
  console.log('youtubeData : ', youtubeData.data[0].id + ' -> 영상의 링크 주소');
  console.log('youtubeData : ', youtubeData.data[0].title + ' -> 영상의 제목');
  console.log('youtubeData : ', youtubeData.data[0].date + ' -> 영상의 날짜');
  console.log('youtubeData : ', youtubeData.data[0].thumbnail + ' -> 영상의 썸네일');
  console.log('youtubeData : ', youtubeData.data[0].description + ' -> 영상의 설명');
  console.log('youtubeData : ', youtubeData.data[0].category + ' -> 영상의 카테고리');
  console.log('youtubeData : ', youtubeData.data[0].viewCount + ' -> 영상의 조회수');
  console.log('youtubeData : ', youtubeData.data[0].likeCount + ' -> 영상의 좋아요수');
  console.log('youtubeData : ', youtubeData.data[0].channelUrl + ' -> 채널의 url');
  console.log('youtubeData : ', youtubeData.data[0].channelId + ' -> 채널의 링크 주소');
  console.log('youtubeData : ', youtubeData.data[0].channelThumbnail + ' -> 채널의 썸네일');
  console.log('youtubeData : ', youtubeData.data[0].channelTitle + ' -> 채널의 제목');
  return <div>리액트로 데이터 불러오기</div>;
}

export default App;