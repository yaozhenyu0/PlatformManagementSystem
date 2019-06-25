import React from 'react';

class Images extends Component {
    constructor(props) {
        super()
        this.state({

        })
    }
    files() {
        console.log(1)
    }
    runder() {
        return (
            <div className="content" >
                <h2 style={{ marginTop: "10px" }}>图片上传</h2>
                <input onChange={this.files} type="file" value="" />
            </div>
        );

    }
}
export default Images