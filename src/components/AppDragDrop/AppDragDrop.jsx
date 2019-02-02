import React, {	Component } from 'react';
import '../../App.css'



export default class AppDragAndDrop extends Component {
	 state = {
	 	 	objects: [],
	 	 	index: 0,
	 	 	toolName:''
	 	 }
	 onDragStart = (ev) => {
	 	
	 	let draggedObj = ev.currentTarget.getAttribute("name") 
	 	ev.dataTransfer.setData('obj', draggedObj)
	 
	 }
     dragOver = (ev) => {
     	ev.preventDefault();

     }

     onDrop = (ev) => {
     		let obj = ev.dataTransfer.getData('obj')
     		let index = this.state.index++
     		let objClass = null
     		let objSrc = null
     		let objText = null
     		switch(obj){
     			case "start":
     			objText = "初始点"
     			objClass = "start"
     			objSrc = require('./images/start.png')
     			break

     			case "head":
     			objText = "节点 "
     			objClass = "head"
     			objSrc = require('./images/head.png')
     			break

     			case "share":
     			objText= "节点 "
     			objClass = "share"
     			objSrc = require('./images/share.png')
     			break

     			case "share2":
     			objText= "节点 "
     			objClass = "share2"
     			objSrc = require('./images/share2.png')
     			break


     		}
     		var rect = ev.target.getBoundingClientRect();
     		let objHorizontal = (ev.clientX - rect.left) + 40; //x position within the element.
     		let objVertical =   (ev.clientY - rect.top)  + 10;  //y position within the element.
            console.log("x: " , objHorizontal, "y: ", objVertical)
            this.state.objects.push({id: index,  title: objText, class:objClass, imgsrc:objSrc, horizontal: objHorizontal, vertical:objVertical})
            this.state.toolName = obj
     		this.setState({
     			...this.state
     			
     		})

     }
     
      dragOver = (ev) => {
     	ev.preventDefault();

     }


	 render(){
	 	 
	 	 let objects = this.state.objects;

	 	 return (

	 	 		<div className="App">
	 	 			<nav className="navbar navbar-expand-lg navbar-light bg-light">
  						<a className="navbar-brand" href="#">协同设计</a>
					</nav>
					<div className="container">
		 	 			<div className="row">
			 	 			<div className="col-8 left-conatiner">
			 	 				<div className='tool-panel' onDragOver={(e) => this.dragOver(e)}>
			 	 						<a href="#" 
			 	 						   name="start"
			 	 						   className="tool"  
			 	 						   onDragStart = { (e) => this.onDragStart(e)}>
			 	 							<img className="start-img" src={require('./images/start.png')}/>
			 	 						</a>
			 	 						<a href="#" 
			 	 						   name="head"
			 	 						   className="tool"  
			 	 						   onDragStart = { (e) => this.onDragStart(e)}
			 	 						   >
			 	 							<img className="head-img" src={require('./images/head.png')}/>
			 	 						</a>
			 	 						<a href="#"
			 	 						   name="share"
			 	 						   className="tool"  
			 	 						   onDragStart = { (e) => this.onDragStart(e)}>
			 	 							<img className="share-img" src={require('./images/share.png')}/>
			 	 						</a>
			 	 						<a href="#" 
			 	 						   name="share2"
			 	 						   className="tool"  
			 	 						   onDragStart = { (e) => this.onDragStart(e)}>
			 	 							<img className="share-img" src={require('./images/share2.png')}/>
			 	 						</a>
			 	 						
			 	 				</div>

			 	 				<div className="paint-board" 
			 	 				     onDragOver={(e) => this.dragOver(e)}
			 	 				     onDrop={ (e) => this.onDrop(e) }>
			 	 					{objects.map((obj) =>
                						<div key={obj.id} className={obj.class} style={{left: obj.horizontal, top: obj.vertical, position:'absolute' }}>
                							<img  src={obj.imgsrc} />
                							{ obj.title + obj.id}
                						</div> 
             							 )
              						}
			 	 				</div>
			 	 			</div>
			 	 			<div className="col-4 right-container">
			 	 				<div className='properties'>
			 	 					<span>{this.state.toolName + " "}</span> 性能
			 	 				</div>
			 	 				
			 	 			</div>
		 	 			</div>
	 	 			</div>
	 	 		</div>

	 	 	)
	 }
}