// default version -1

const migrations = {  
    0: (state) => {    
        return { ...
			state,      
			tyre: { ...
				state.tyre,        
				owner: { ...
					state.tyre.owner,          
					details: {
                        state.tyre.owner.details,
                        address: "CA" //New Key added for migration
                    }
				}      
			}    
		}  
    }
}

export const persistConfig = {  
    key: 'testApp',  
    version: 0, //New version 0, default or previous version -1  
    storage,  
    debug: true,  
    stateReconciler: autoMergeLevel2,  
    migrate: createMigrate(migrations, { debug: true })
}

//É importante atualizar a versão para 0, para que ela migre nosso 
//armazenamento de -1 para 0.