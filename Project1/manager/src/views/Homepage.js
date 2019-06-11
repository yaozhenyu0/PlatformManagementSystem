import React from 'react';
import { connect } from 'dva';
import styles from './Homepage.css';
import 'antd/dist/antd.css';

function Homepage() {
    return (
        <div className={styles.wrap_y}>
            <div className={styles.top_y}>
                {/* <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt=""> */}
                <div className={styles.right_y}></div>
            </div>
        </div>
    );
}

Homepage.propTypes = {
};

export default connect()(Homepage);