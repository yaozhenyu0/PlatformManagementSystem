import React from 'react';
import { connect } from 'dva';
import styles from './Homepage.css';
import 'antd/dist/antd.css';

function Homepage() {
    return (
        <div className={styles.wrap_y}>
            <div className={styles.top_y}>
                <div className={styles.right_y}></div>

                <div>

                </div>
            </div>
            <div className={styles.right_y}></div>
        </div>
    );
}

Homepage.propTypes = {
};

export default connect()(Homepage);