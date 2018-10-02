# matman-showcase
showcase for matman


## 1. 开发

### 1.1 启动命令

执行如下命令即可启动开发调试，启动之后会自动打开 `http://localhost:3000/`。

```
npm start
```

### 1.2 代理设置

whistle 代理

```
now.qq.com/cgi-bin 127.0.0.1:9527
```

为了便于处理，在 `middlewares/api.js` 中，我们将 CGI 中 `retcode !== 0` 作为 CGI 请求失败。