# Haenu Planner Client
새롭게 시작하는 해누플래너 Client Source (Web)
- Current Link : [https://dev-study.haenu.com](https://dev-study.haenu.com)

## Tech Stacks
- React.js
- React Router
- Babel
- Webpack
- AWS S3
- Cloudflare
- Jenkins

## Other Project
- Backend Server : [haenu-planner-server](https://github.com/dokdo2013/haenu-planner-server)

## HOWTO
### Install & Start Dev Server
```bash
npm install
yarn start
```

### Deploy
1. 로컬에서 선 빌드
```bash
yarn build
```
2. 작업 중인 브랜치를 Main으로 Merge
3. Jenkins에서 자동으로 빌드된 파일을 받아 S3에 업로드
