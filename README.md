# Connection-frontend-and-backend

# FRONTEND
## STEPS:

1. npm create vite@latest
2. npm i
3. For API handeling:- npm i axios
4. install cors: npm i cors
5. updata vite.config.js wiht
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: "http://localhost:8005",
        changeOrigin: true,
        secure: false
      }
    }
  }
})

```


# BACKEND
## STEPS:

1. initialize:- npm init. 
    change script to `"start": "node server.js"` and add `"type": "module",` after "main"
2. install express:- npm i express
3. create server.js
 

 and continue with Learnings😊😊...


# Proxy
-A proxy server acts as an intermediary between your computer and the internet. 
-When you make a request to access a website, the proxy server processes this request on your behalf, retrieves the data from the website, and then sends it back to you. 
-This adds a layer of security and anonymity to your browsing.

[Click here To know about vite proxy](https://vitejs.dev/config/server-options)

# CORS
When a web page makes a request to a different domain, the browser sends an HTTP request to that domain. If the requested domain has CORS enabled, it will include specific HTTP headers in its response to indicate whether the requesting domain is allowed to access the requested resource.

[Click here To know about CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)
