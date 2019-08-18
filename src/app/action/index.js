module.exports =(actionsRepository) =>{
	return {
		GetActions: require('./GetActions')({actionsRepository}),
		CreateAction: require('./CreateAction')({actionsRepository}),
		DeleteAction: require('./DeleteAction')({actionsRepository})
		
	}
}