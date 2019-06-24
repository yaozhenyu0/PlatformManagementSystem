import dva from 'dva';
import './index.css';

//全局antd样式
import 'antd/dist/antd.css';
// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/user').default);
app.model(require('./models/add').default);
app.model(require('./models/classify').default);
app.model(require('./models/exam').default);
app.model(require('./models/userdisp').default);
app.model(require('./models/usermanagement').default);
app.model(require('./models/Classmanagement').default);
app.model(require('./models/Studentmanagement').default);

// 4. Router 
app.router(require('./router').default);

// 5. Start
app.start('#root');
