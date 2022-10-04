<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]




<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">KartRider</h3>
  <p align="center">전적 검색과 성향 테스트 결과에 따른 카트 추천</p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

[![Page][product-screenshot]](https://2019110627.osschatbot.ga:23023/)

카트라이더는 넥슨에서 서비스 하는 레이싱 비디오 게임이다. 2004년 부터 서비스를 하고 있지만 lol과 다르게 전적 검색 사이트가 많이 존재하지 않는다.

카트라이더의 홍보와 경쟁전(개인전)에서 전적이 궁금한 사람들을 위해 개발한 웹 서비스이다.

이 웹 사이트는 다음과 같은 서비스를 제공하고 있다.
* 닉네임을 통한 전적 검색(개인전, 그랑프리, 개인 무한부스터에 대한 결과 제공)
* 7가지 질문을 통한 카트바디 추천
* 그랑프리 랭킹
* 카이라이더 공지 사항 및 업데이트



<p align="right">(<a href="#top">back to top</a>)</p>



### Built With

List frameworks/libraries in my project.

* [Node.js](https://nodejs.org/)
* [Express.js](https://expressjs.com/)
* [Sweetalert2](https://sweetalert2.github.io/)
* [JQuery](https://jquery.com)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation


1. Get a free API Key at [https://developers.nexon.com/kart](https://developers.nexon.com/kart)
2. Clone the repo
   ```sh
   git clone http://khuhub.khu.ac.kr/2019110627/kartrider.git
   ```
3. Install NPM packages
   ```sh
   npm install 
   ```
4. Enter your API in `search.js`
   ```js
   //require("dotenv").config({path: ".env"}); 
   const key = 'ENTER YOUR API';
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

main.js

``` JS
/* AWS */
const fs = require('fs');
const path = require('path');
const HTTPS = require('https');
const domain = "DOMAIN";
const sslport = "SSLPORT";

try {
    const option = {
      ca: fs.readFileSync('/etc/letsencrypt/live/' + domain +'/fullchain.pem'),
      key: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/' + domain +'/privkey.pem'), 'utf8').toString(),
      cert: fs.readFileSync(path.resolve(process.cwd(), '/etc/letsencrypt/live/' + domain +'/cert.pem'), 'utf8').toString(),
    };
  
    HTTPS.createServer(option, app).listen(sslport, () => {
      console.log(`[HTTPS] Server is started on port ${sslport}`);
    });
  } catch (error) {
    console.log('[HTTPS] HTTPS 오류가 발생하였습니다. HTTPS 서버는 실행되지 않습니다.');
    console.log(error);
  }
  
/* local server
app.listen("8080",function(req,res){
    console.log('server listening at port no. 8080');
});
*/
```

HOME PAGE
![homepage][homepage]


TEST PAGE
![testpage][test]
![resultpage][test_r]


SEARCH PAGE
![testpage][search]
![resultpage][search_r]
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [x] Add back to top links
- [x] Add AWS version
- [x] Add Home page
- [x] Add Additional Templates
- [x] Add "components" document to easily copy & paste sections of the readme
- [ ] Multi-language Support
    - [x] Korean
    - [ ] Chinese
    - [ ] Spanish

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch 
3. Commit your Changes 
4. Push to the Branch
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- LICENSE -->
## License

METADATA : It's owned by Nexon(Kartrider)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

김명주 - [@naver_blog](https://blog.naver.com/mjoo1106) - mjoo1106@naver.com


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Use kartrider api](https://developers.nexon.com/kart/guides)
* [How to use Ajax](https://api.jquery.com/jquery.ajax/)


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/kart.png
[homepage]:images/homepage.png
[search]:images/search.png
[search_r]:images/search_r.png
[test]:images/test.png
[test_r]:images/test_r.png

