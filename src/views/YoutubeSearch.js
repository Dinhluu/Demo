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
//           "title": "#0 KH??A H???C REACT &quot;n??ng h??i CAO&quot; -  H???C &amp; L??M CH??? HO??N TO??N REACT.JS",
//           "description": "V??? kh??a h???c c???a H???i D??n IT, c??c b???n xem t???i ????y: https://haryphamdev.github.io/hoidanit-udemy/ Link Udemy: ...",
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
//           "channelTitle": "H???i D??n IT",
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
//           "title": "#N H??? Version React 18 Xu???ng 17 | React.JS C?? B???n T??? Z ?????n A Cho Ng?????i M???i B???t ?????u - H???i D??n IT",
//           "description": "????? tr??nh c??c bugs kh??ng c???n thi???t do React n??ng l??n version 18 (v??o th??ng 4/2022), c??c b???n c?? th??? h??? version 18 xu???ng 17 nh??.",
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
//           "channelTitle": "H???i D??n IT",
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
//           "title": "#01 React Super Fast V???i Vite | Kh??a H???c React Advanced Guides",
//           "description": "Trong video n??y, ch??ng ta s??? c??ng nhau: ??? T???o ???ng D???ng React.JS V???i Vite (c??ng c??? d???ch code si??u nhanh, ?????i th??? c???nh tranh ...",
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
//           "channelTitle": "H???i D??n IT",
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
//           "title": "#0 Kh??a H???c &quot;L??m Th???t&quot; B??i Test Fresher React | H???C &amp; TH???C H??NH REACT.JS",
//           "description": "Link Udemy: https://www.udemy.com/course/hoidanit-test-fresher-react/ Gi??o ??n kh??a h???c n??y: ...",
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
//           "channelTitle": "H???i D??n IT",
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
//           "title": "#22 React Routers - ??i???u H?????ng Trang V???i React | React C?? B???n Cho Beginners T??? A ?????n Z",
//           "description": "????? chuy???n h?????ng trang, c??ng nh?? cung c???p nhi???u th??ng tin cho ng?????i d??ng, th?? vi???c PH???I D??NG routers l?? ??i???u kh??ng tr??nh ...",
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
//           "channelTitle": "H???i D??n IT",
//           "liveBroadcastContent": "none",
//           "publishTime": "2021-09-13T07:00:15Z"
//         }
//       }
//     ]
//   }
