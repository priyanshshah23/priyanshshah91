import React, { Component } from 'react'
import {Tabs,Tab} from 'react-mdl'
import { Grid, Cell, Card, CardTitle, CardActions, Button } from 'react-mdl';


class project extends Component {
    constructor(props) {
        super(props)
        this.state = { activeTab: 0 , color:"",color1:"" };
    }
    handler = () => {
        this.setState({
            color: "#2C5364"
        })
    }

    down = () => {
        this.setState({
            color: ""
        })
    }

    handler1 = () => {
        this.setState({
            color1: "#2C5364"
        })
    }

    down1 = () => {
        this.setState({
            color1: ""
        })
    }


    
    toggleCategories() {

        if(this.state.activeTab === 0){
          return(
            <div className="projects-grid" style={{paddingTop: "40px"}}>
             

          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '230px', paddingLeft:"100px",background: 'url(https://www.android.com/static/2016/img/share/andy-lg.png) center / cover'}} >Swachh Bin</CardTitle>
            {/* <CardText>
            <b style={{paddingLeft:"105px"}}>Swachh Bin</b>            </CardText> */}
            <CardActions style={{backgroundColor:"#bdc3c7"}} border>
              <Button href="https://github.com/priyanshshah23/Swachh_bin" style={{display: "block", margin: "auto"}} colored>GitHub</Button>
            </CardActions>
          </Card>

          
            </div>
          )}
        
          
         else if(this.state.activeTab === 1) {
          return (
            <div className="projects-grid" style={{paddingTop: "40px"}}>
             <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '230px',paddingLeft:"118px", background: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTd-fLhCl5J8VE9xRzn5WaKa_dTyYOV6vU9u229RzjwccHQNWEo) center / cover'}} >Portfolio</CardTitle>
            <CardActions style={{backgroundColor:"#bdc3c7"}} border>
              <Button href="https://github.com/priyanshshah23/priyanshshah91" style={{display: "block", margin: "auto"}} colored>GitHub</Button>
            
            </CardActions>
          </Card>

        
          
          <div className="projects-grid" style={{paddingTop: "40px"}}>
             <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', height: '230px',paddingLeft:"30px"}} >Card_Memory_Game</CardTitle>
            <CardActions style={{backgroundColor:"#bdc3c7"}} border>
              <Button href="https://github.com/priyanshshah23/Card_memory_game" style={{display: "block", margin: "auto"}} colored>GitHub</Button>
            
            </CardActions>
          </Card>

        
          </div>
          </div>
          )
        }
    
      }
    
    render() {
        return (
            <div className="demo-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab style={{backgroundColor: this.state.color,color: "white"}} onMouseEnter={this.handler} onMouseLeave={this.down}>Android Projects</Tab>
                    <Tab style={{backgroundColor: this.state.color1,color: "white"}} onMouseEnter={this.handler1} onMouseLeave={this.down1}>React Projects</Tab>
                </Tabs>
               
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


            </div>    
        )
    }
}

export default project
