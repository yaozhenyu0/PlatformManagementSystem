import { useEffect } from 'react';

function SiderDemo(props) {

    useEffect(() => {
        // console.log(1111, props)
    }, [props])

    return <div>
          <h4 style={{padding:'28px 25px',fontSize:'18px'}}>查看试题</h4>
    </div>
}

export default SiderDemo;
