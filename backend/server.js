import express from 'express';import path from 'node:path';import {fileURLToPath} from 'node:url';
const root=path.join(path.dirname(fileURLToPath(import.meta.url)),'..');const app=express();app.use(express.static(root));
app.listen(process.env.PORT||8080,()=>console.log('Serving on :'+(process.env.PORT||8080)));
