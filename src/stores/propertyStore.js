import {create} from 'zustand'
import { getProperties } from '../api/propertyApi'

const usePropertyStore = create((set) =>({
    properties:[],
    loading:false,
    error:null,
    fetchProperties: async () => {
        set({loading:true , error:false});
        try{
            const data = await getProperties();
            set({properties:data, loading:false})
        }catch(error){
            set({error:error, loading:false})
        }
    }
}))

export default usePropertyStore