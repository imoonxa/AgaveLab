// JavaScript Document
var Collection = function() {
		this.Data = Array();
		var Count = 0;
		this.add = function(value) {  
			this.Data[Count] = value; 
			indice = Count;
			Count++;
			console.log("agregado el id: "+indice+" con el valor: "+value);
			return indice;
		};
		this.getValue = function(index){
			return this.Data[index];	
		}
		this.edit = function(index,value){
			this.Data[index] = value;	
		}
		this.remove = function(index){
			valor = this.getValue(index);
			delete this.Data[index];
			console.log("eliminado el id: "+index+" con el valor: "+valor);
			return valor;	
		}
		this.removeLargest = function(){
			var largest = Math.max.apply(Math, this.Data);	
			index = this.Data.indexOf(largest);
			this.remove(index);
			return largest;
		}
		
		
};
