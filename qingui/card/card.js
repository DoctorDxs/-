module.exports = {
	getVip(e) {
		const url ="http://127.0.0.1:3050/1.0/class/api/table/card_detail";
		const card_num=this.creat_num();
		const dataset = e.currentTarget.dataset;
		const data={
			card_num:card_num,
			user_id:1,
			card_id:dataset.id
		}


		wx.BaaS.fetch(url,{method:"POST",data:data}).then(res=>{
			console.log(res);
			console.log(this.data);
			const components=this.data.components;
			components[dataset.index]['card'][0].is_used=1;
			components[dataset.index]['card'][0].card_num=res.data.data.card_num;
			this.setData({
				components:components
			})
		});
	    	
	},
	creat_num(){
		const num = ["0","1", "2", "3", "4", "5", "6", "7", "8", "9"];
		let ids = "";
		for (let x = 0; x < 12; x++) {
			const i = Math.ceil(Math.random() * 10) - 1;
			ids += num[i];
		}
		return ids;
	}

};
