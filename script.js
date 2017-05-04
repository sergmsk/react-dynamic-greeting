var name = "stranger";
var Hello = React.createClass({
	getInitialState:function(){
		return {
			displayedName:name
		};
	},
    handleInput:function(event){
    	//console.log(event.target.value);
		  var inputName = event.target.value;
		  this.setState({
			  displayedName:inputName
		  })
    },
    render:function() {
    	return (
    		        <div >
    		        	<input type="text"  onChange={this.handleInput}/>
    		        	<ul >Hello { this.state.displayedName }!</ul>
    		        </div>
    			);
    },
 });

ReactDOM.render(
	<Hello />, //передаем, что отобразить
	document.getElementById("content") //передаем, куда нужно отобразить
);
