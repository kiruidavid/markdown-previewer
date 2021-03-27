import React, {Component} from 'react'
import './App.css'; 
import marked from 'marked'

class App extends Component{ 
  constructor(props){
    super(props)
      this.state = {
        markdown: ''
      }  
      

    
  }  
  updateMarkdown(markdown){
    this.setState({markdown})
  }

  render(){
    return(
      <div className="App"> 
        <div className="container"> 
          <div className="row mt-4">  
            <div className="col text-center"> 
            <h1><span className="badge bg-secondary text-align-center" 
            variant="light">Markdown Previewer</span>
            </h1>
 


              </div>     
           
           
           
           </div> 
           <div className="row mt-4 "> 
             <div className="col-md-6">  
               <div className="col text-center"> 
               <h4><span class="badge bg-secondary text-align-center" variant="secondary">Markdown Input</span></h4>
                <div className="mark-input">
                  <textarea className="input" value={this.state.markdown} onChange={(e) => {
                    this.updateMarkdown(e.target.value)}}>
                    {console.log(this.state.markdown)}
                    </textarea>
                </div>

               </div>

             </div> 
            <div className="col-md-6"> 
              <div className="col text-center"> 
              <h4><span className="badge bg-secondary text-align-center" 
              variant="secondary">Preview</span></h4> 
              <div className="output-preview" dangerouslySetInnerHTML={{
                __html:marked(this.state.markdown)
              }}> 
                

              </div>
 

              </div>

            </div>
           </div>

        </div>

      </div>
    )
  }

} 
export default App



