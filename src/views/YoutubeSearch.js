import './Blog.scss';
import axios from 'axios';
import { useState, useEffect } from 'react';
import moment from 'moment';

const YoutubeSearch = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearchYoutube = async () => {
    let res = await axios({
      "method": "GET",
      "url": 'https://www.googleapis.com/youtube/v3/search',
      "params": {
        'part': 'snippet',
        'maxResults': '20',
        'key': 'AIzaSyDAZU7SWEa_iBo7IcdZVhDGnNa3a-AG9Ck',
        'type': 'video',
        'q': query
      }
    })
    if (res && res.data && res.data.items) {
      let raw = res.data.items;
      let result = [];
      if (raw && raw.length > 0) {
        raw.map(item => {
          let object = {};
          object.id = item.id.videoId;
          object.title = item.snippet.title;
          object.createdAt = item.snippet.publishedAt;
          object.author = item.snippet.channelTitle;
          object.description = item.snippet.description;

          result.push(object)
        })
      }

      setVideos(result)
    }

  }

  return (
    <div className="youtube-search-container" >
      <div className="yt-search">
        <input type="text" placeholder='Search'
          value={query}
          onChange={(event) => setQuery(event.target.value)} />
        <button type="button" onClick={handleSearchYoutube}>Search</button>
      </div>
      {videos && videos.length > 0 &&

        videos.map(item => {
          return (
            <div className="yt-result" key={item.id}>
              <div className="left">
                <iframe className="yt-iframe"
                  src={`https://www.youtube.com/embed/${item.id}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen>

                </iframe>
              </div>
              <div className="right">
                <div className="title">
                  {item.title}
                </div>
                <div className="created-at">
                  Created At: {moment(item.createdAt).format('DD-MM-YYYY HH:mm:ss A')}
                </div>
                <div className="author">
                  Author: {item.author}
                </div>
                <div className="description">
                  {item.description}
                </div>
              </div>
            </div>

          )
        })

      }
    </div>
  )
}

export default YoutubeSearch;

// {
//     "kind": "youtube#searchListResponse",
//     "etag": "l8yRNhAqadaqxC4avZbqc5laQhc",
//     "nextPageToken": "CAUQAA",
//     "regionCode": "VN",
//     "pageInfo": {
//       "totalResults": 499,
//       "resultsPerPage": 5
//     },
//     "items": [
//       {
//         "kind": "youtube#searchResult",
//         "etag": "1-KlUzcWMZtOAJwmG1jWy5RyC9k",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "HictdSIdeqY"
//         },
//         "snippet": {
//           "publishedAt": "2022-02-22T11:00:30Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "#0 KHÓA HỌC REACT &quot;nâng hơi CAO&quot; -  HỌC &amp; LÀM CHỦ HOÀN TOÀN REACT.JS",
//           "description": "Về khóa học của Hỏi Dân IT, các bạn xem tại đây: https://haryphamdev.github.io/hoidanit-udemy/ Link Udemy: ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/HictdSIdeqY/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/HictdSIdeqY/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/HictdSIdeqY/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Hỏi Dân IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-02-22T11:00:30Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "BDHXaMvFyt4ja4Dl3aoUtJqOax0",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "rKOEjUqBbX8"
//         },
//         "snippet": {
//           "publishedAt": "2022-04-23T12:45:13Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "#N Hạ Version React 18 Xuống 17 | React.JS Cơ Bản Từ Z đến A Cho Người Mới Bắt Đầu - Hỏi Dân IT",
//           "description": "Để tránh các bugs không cần thiết do React nâng lên version 18 (vào tháng 4/2022), các bạn có thể hạ version 18 xuống 17 nhé.",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/rKOEjUqBbX8/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/rKOEjUqBbX8/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/rKOEjUqBbX8/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Hỏi Dân IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-04-23T12:45:13Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "w7OMeBD2KeTtLf5NHizECkWmgmE",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "V1JONxue4fA"
//         },
//         "snippet": {
//           "publishedAt": "2022-02-20T12:30:12Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "#01 React Super Fast Với Vite | Khóa Học React Advanced Guides",
//           "description": "Trong video này, chúng ta sẽ cùng nhau: ✓ Tạo Ứng Dụng React.JS Với Vite (công cụ dịch code siêu nhanh, đối thủ cạnh tranh ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/V1JONxue4fA/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/V1JONxue4fA/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/V1JONxue4fA/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Hỏi Dân IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-02-20T12:30:12Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "6CMXIIMcsnQAwt6_5XzmFIoMro0",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "cCNAueqo9Kw"
//         },
//         "snippet": {
//           "publishedAt": "2022-05-02T11:00:43Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "#0 Khóa Học &quot;Làm Thịt&quot; Bài Test Fresher React | HỌC &amp; THỰC HÀNH REACT.JS",
//           "description": "Link Udemy: https://www.udemy.com/course/hoidanit-test-fresher-react/ Giáo án khóa học này: ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/cCNAueqo9Kw/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/cCNAueqo9Kw/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/cCNAueqo9Kw/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Hỏi Dân IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2022-05-02T11:00:43Z"
//         }
//       },
//       {
//         "kind": "youtube#searchResult",
//         "etag": "DdDNlU_6dy4iZHmNgJaJDqjewuw",
//         "id": {
//           "kind": "youtube#video",
//           "videoId": "YoQ4-qTclIs"
//         },
//         "snippet": {
//           "publishedAt": "2021-09-13T07:00:15Z",
//           "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//           "title": "#22 React Routers - Điều Hướng Trang Với React | React Cơ Bản Cho Beginners Từ A đến Z",
//           "description": "Để chuyển hướng trang, cũng như cung cấp nhiều thông tin cho người dùng, thì việc PHẢI DÙNG routers là điều không tránh ...",
//           "thumbnails": {
//             "default": {
//               "url": "https://i.ytimg.com/vi/YoQ4-qTclIs/default.jpg",
//               "width": 120,
//               "height": 90
//             },
//             "medium": {
//               "url": "https://i.ytimg.com/vi/YoQ4-qTclIs/mqdefault.jpg",
//               "width": 320,
//               "height": 180
//             },
//             "high": {
//               "url": "https://i.ytimg.com/vi/YoQ4-qTclIs/hqdefault.jpg",
//               "width": 480,
//               "height": 360
//             }
//           },
//           "channelTitle": "Hỏi Dân IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-09-13T07:00:15Z"
//         }
//       }
//     ]
//   }
