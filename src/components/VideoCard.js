import React from 'react'
const VideoCard = ({video}) => {

  return (
    <div className={`flex flex-col m-3 rounded-xl`}>
        <img
            className={`rounded-xl`} 
            alt="thumbnail" 
            src={video?.snippet?.thumbnails?.maxres?.url}/>
            <h1 className='text-clip'>{video?.snippet?.title}</h1>
    </div>
  )
}

export default VideoCard

// {
//     "kind": "youtube#video",
//     "etag": "GLp_TnmV6TJGLCWkZSxZcbzXK44",
//     "id": "kuZ-6jd82Go",
//     "snippet": {
//       "publishedAt": "2025-03-18T11:37:50Z",
//       "channelId": "UCAEv0ANkT221wXsTnxFnBsQ",
//       "title": "OG SAMBAVAM Lyrical Video | Good Bad Ugly | Ajith | Trisha | G V Prakash | Adhik Ravichandran",
//       "description": "T-Series Tamil presents OG Sambavam Lyrical Video Song from Good Bad Ugly New Tamil Movie starring Ajith Kumar,Trisha Krishnan Music Directed by G.V. Prakash Kumar & Lyricist by Vishnu Edavan.\n\nGulshan Kumar, Bhushan Kumar & T Series Films Presents\n\n#OgSambavam #goodbadugly #ajithkumar #gvprakashkumar \n---------------------------------\nConnect with T-Series Tamil: 👉 http://bit.ly/SubscribeToTseriesTamil\n---------------------------------\n🎶 Music Slate 🎶\nSong Name: OG Sambavam\nMovie Name : Good Bad Ugly\nArtist: Ajith Kumar\nSinger : GV Prakash Kumar, Adhik Ravichandran\nLyricist: Vishnu Edavan\nMusic Directed by G.V. Prakash Kumar\nProgrammed by Smith Asher \nGuitars : Dan Kristen Pandian \nChorus : Sugandh Shekar, Shibi Srinivasan, Aravind Annest, Govind Prasad, Abhijith Rao, Velu\nRecorded by Aswin George John at Sounds Right studios, Chennai \nMusic Supervised by Jehovahson Alghar\nPre-Mixed by Roopash Tiwari \nMixed and Mastered by Jehovahson Alghar, Divine labs \nAssistant Sound Engineer : Roopash Tiwari, Manu Ravichandran, Divine labs \nDivine labs Musicians Assistant : P Rajamurugan\n\nCast & Crew Details:-\nCast: Ajith Kumar, Trisha Krishnan & Others\n\nTechnical Crew :\nWriter & Director : ADHIK RAVICHANDRAN\nProducers : NAVEEN YERNENI - Y RAVI SHANKAR\nCo-Producer : Shiv Chanana\nPresident (T-Series) : Neeraj Kalyan\nCEO : Cherry \nChief Executive Producer : Dinesh Narasimhan\nMusic : GV Prakash Kumar\nDOP : Abinandhan Ramanujam\nEditor : Vijay Velukutty\nProduction Designer : G M Sekhar \nStunts : Supreme Sundar, Kaloian Vodenicharov\nStylist : Anu Vardhan / Rajesh Kamarsu\nPRO : Suresh Chandra \nPRO (Telugu) : Vamsi Shekar\nMarketing : First Show\nMarketing (Tamil) : D'one\nSound design : Suren \nStills : G Anand Kumar \nPublicity designs : ADFX Studio\nMusic Supervisor: Jehovahson Alghar\nHead of VFX - Narendra Logisa\n\nDIRECTION TEAM:\nCo-Directors: Ravi Kandasamy, Harish Manikandan\nAssociate Directors: K Raja, V G Balasubramanian\nAsst Directors: S Vijai prabu, Rishabh Ravindhar\n\nDOP TEAM: Arvi, Arun Damodaran, Jackson, Ajay\nEDITING TEAM: Hariharan V, Danachezhian S\n\nMusic Label: T-Series\n------------------------------\nEnjoy & stay connected with us!!\n\n👉Subscribe to T-Series Tamil: http://bit.ly/SubscribeToTseriesTamil\n👉Like us on Facebook: https://www.facebook.com/TseriesTamil\n👉Follow us on Instagram: http://bit.ly/InstagramT-SeriesSouthOffical\n👉Follow us on Twitter: http://bit.ly/TwitterT-SeriesSouthOffical\n👉Follow us on Whatsapp: https://whatsapp.com/channel/0029VaYvKJUGehEWUOwOio0q\n\nThanks Everyone for Watching Our Latest Tamil Song 2025. If you like the song than Please SUBSCRIBE Our Channel With Bell Icon to get notification of all of our newest releases. Will Make Sure to provide best Tamil songs of all time.",
//       "thumbnails": {
//         "default": {
//           "url": "https://i.ytimg.com/vi/kuZ-6jd82Go/default.jpg",
//           "width": 120,
//           "height": 90
//         },
//         "medium": {
//           "url": "https://i.ytimg.com/vi/kuZ-6jd82Go/mqdefault.jpg",
//           "width": 320,
//           "height": 180
//         },
//         "high": {
//           "url": "https://i.ytimg.com/vi/kuZ-6jd82Go/hqdefault.jpg",
//           "width": 480,
//           "height": 360
//         },
//         "standard": {
//           "url": "https://i.ytimg.com/vi/kuZ-6jd82Go/sddefault.jpg",
//           "width": 640,
//           "height": 480
//         },
//         "maxres": {
//           "url": "https://i.ytimg.com/vi/kuZ-6jd82Go/maxresdefault.jpg",
//           "width": 1280,
//           "height": 720
//         }
//       },
//       "channelTitle": "T-Series Tamil",
//       "tags": [
//         "Tamil Songs",
//         "Latest Tamil Songs",
//         "Tamil New Release",
//         "T-Series",
//         "OG Sambavam Song Promo",
//         "OG Sambavam Lyrical Video Song",
//         "OG Sambavam Good Bad Ugly",
//         "OG Sambavam Latest Song",
//         "OG Sambavam G V Prakash Kumar",
//         "OG Sambavam Vishnu Edavan",
//         "OG Sambavam Adhik Ravichandran",
//         "OG Sambavam Ajith Kumar",
//         "OG Sambavam Trisha Krishnan",
//         "Ajith Kumar New Song",
//         "Ajith OG Sambavam",
//         "Good Bad Ugly New Song",
//         "Og Sambavam New Song",
//         "ajith kumar motiovational song",
//         "new ajith Movie song",
//         "thala Ajith Video Song"
//       ],
//       "categoryId": "10",
//       "liveBroadcastContent": "none",
//       "localized": {
//         "title": "OG SAMBAVAM Lyrical Video | Good Bad Ugly | Ajith | Trisha | G V Prakash | Adhik Ravichandran",
//         "description": "T-Series Tamil presents OG Sambavam Lyrical Video Song from Good Bad Ugly New Tamil Movie starring Ajith Kumar,Trisha Krishnan Music Directed by G.V. Prakash Kumar & Lyricist by Vishnu Edavan.\n\nGulshan Kumar, Bhushan Kumar & T Series Films Presents\n\n#OgSambavam #goodbadugly #ajithkumar #gvprakashkumar \n---------------------------------\nConnect with T-Series Tamil: 👉 http://bit.ly/SubscribeToTseriesTamil\n---------------------------------\n🎶 Music Slate 🎶\nSong Name: OG Sambavam\nMovie Name : Good Bad Ugly\nArtist: Ajith Kumar\nSinger : GV Prakash Kumar, Adhik Ravichandran\nLyricist: Vishnu Edavan\nMusic Directed by G.V. Prakash Kumar\nProgrammed by Smith Asher \nGuitars : Dan Kristen Pandian \nChorus : Sugandh Shekar, Shibi Srinivasan, Aravind Annest, Govind Prasad, Abhijith Rao, Velu\nRecorded by Aswin George John at Sounds Right studios, Chennai \nMusic Supervised by Jehovahson Alghar\nPre-Mixed by Roopash Tiwari \nMixed and Mastered by Jehovahson Alghar, Divine labs \nAssistant Sound Engineer : Roopash Tiwari, Manu Ravichandran, Divine labs \nDivine labs Musicians Assistant : P Rajamurugan\n\nCast & Crew Details:-\nCast: Ajith Kumar, Trisha Krishnan & Others\n\nTechnical Crew :\nWriter & Director : ADHIK RAVICHANDRAN\nProducers : NAVEEN YERNENI - Y RAVI SHANKAR\nCo-Producer : Shiv Chanana\nPresident (T-Series) : Neeraj Kalyan\nCEO : Cherry \nChief Executive Producer : Dinesh Narasimhan\nMusic : GV Prakash Kumar\nDOP : Abinandhan Ramanujam\nEditor : Vijay Velukutty\nProduction Designer : G M Sekhar \nStunts : Supreme Sundar, Kaloian Vodenicharov\nStylist : Anu Vardhan / Rajesh Kamarsu\nPRO : Suresh Chandra \nPRO (Telugu) : Vamsi Shekar\nMarketing : First Show\nMarketing (Tamil) : D'one\nSound design : Suren \nStills : G Anand Kumar \nPublicity designs : ADFX Studio\nMusic Supervisor: Jehovahson Alghar\nHead of VFX - Narendra Logisa\n\nDIRECTION TEAM:\nCo-Directors: Ravi Kandasamy, Harish Manikandan\nAssociate Directors: K Raja, V G Balasubramanian\nAsst Directors: S Vijai prabu, Rishabh Ravindhar\n\nDOP TEAM: Arvi, Arun Damodaran, Jackson, Ajay\nEDITING TEAM: Hariharan V, Danachezhian S\n\nMusic Label: T-Series\n------------------------------\nEnjoy & stay connected with us!!\n\n👉Subscribe to T-Series Tamil: http://bit.ly/SubscribeToTseriesTamil\n👉Like us on Facebook: https://www.facebook.com/TseriesTamil\n👉Follow us on Instagram: http://bit.ly/InstagramT-SeriesSouthOffical\n👉Follow us on Twitter: http://bit.ly/TwitterT-SeriesSouthOffical\n👉Follow us on Whatsapp: https://whatsapp.com/channel/0029VaYvKJUGehEWUOwOio0q\n\nThanks Everyone for Watching Our Latest Tamil Song 2025. If you like the song than Please SUBSCRIBE Our Channel With Bell Icon to get notification of all of our newest releases. Will Make Sure to provide best Tamil songs of all time."
//       },
//       "defaultAudioLanguage": "ta"
//     },
//     "contentDetails": {
//       "duration": "PT3M16S",
//       "dimension": "2d",
//       "definition": "hd",
//       "caption": "false",
//       "licensedContent": true,
//       "contentRating": {},
//       "projection": "rectangular"
//     },
//     "statistics": {
//       "viewCount": "17408994",
//       "likeCount": "549816",
//       "favoriteCount": "0",
//       "commentCount": "20403"
//     }
//   }