import { app } from './server.js';

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`auth svc running at port ${PORT}`);
});