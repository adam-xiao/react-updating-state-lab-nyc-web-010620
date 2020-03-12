import React, {Component} from "react"

export default class YouTubeDebugger extends Component{

    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
    }

    setBitrate =()=>{
        this.setState({settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    setResolution =()=>{
        this.setState({settings: {
            ...this.state.settings,
            video: {
                // ...this.state.settings.video,
                resolution: '720p'
            }
          }})

    }

    render(){
        return(
            <div>
                <button className="bitrate" onClick={this.setBitrate}></button>
                <button className="resolution" onClick={this.setResolution}></button>
            </div>
            )
    }
}