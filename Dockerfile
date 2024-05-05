# 建立Image

# 使用何種nodejs
FROM node:18.18.2-alpine
# 建立資料夾路徑，容器內運行時的目錄
WORKDIR /app
  
# 運行nodejs
COPY package.json* ./
# 把當前目錄複製到Docker環境下的目錄，不要複製的路徑，放在.dockerignore
COPY .dockerignore .dockerignore
# 正式運行前的 環境建立(Images構建時執行的指令)
RUN npm install -g create-vite &&  \
    npm install http-server &&  \
    npm install
COPY . .
RUN npm run build
# 暴露port接口 與 vite.config.js的 server那一段呼應,對外暴露的port，這只是container的port，還必須設定本機的port
EXPOSE 8080
# 容器啟動的默認指令
# CMD ["npm", "run", "dev"]

# 預設會用8080
# CMD ["npx", "http-server", "dist"]
# 開啟 dist 用8080當port,然後EXPOSE 8080
# CMD ["npx", "http-server", "dist", "-p", "8080"]

# CMD ["/bin/sh"]  
# CMD ["tail", "-f", "/dev/null"]
# CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
# npm run dev -- --host 192.168.42.78

# docker run -p 8080:3000 -v /app/dist psplover16/initvue-20240504

# 安裝Docker若遇到WSL2的問題，可在powershell
# bcdedit /set hypervisorlaunchtype off
# bcdedit /set hypervisorlaunchtype auto



# 在終端機的指令
# docker build -t psplover16/initvue-20240504 .                把當前目錄的檔案(.) 建立一個名稱為 initvue-20240504 的DockerImage 標籤(-t)=>>>>>>>>建立

# docker run -p 5173:3000 initvue-20240504          運行 initvue-20240504 鏡像，把該鏡像變成"容器"，本機端port為3005，要運行容器的port為3000

# docker run -p 5173:3000 -d initvue-20240504       與上述相比，在背景執行

# docker images                                     秀出全部鏡像
# docker rmi ImageID                                刪除 ImageID 的 鏡像，運行狀態下的(容器化的) Images無法刪除
# docker ps                                         秀出運行中的鏡像 (成功的才會秀出來)
# docker ps -a                                      秀出運行中的鏡像 (包含運行失敗的)
# docker rm containerID                             刪除 容器

# docker exec -it 03a116ccaab3 ls /                 看容器內的目錄


# docker exec -it 03a116ccaab3 /bin/bash            運行容器內的東西
