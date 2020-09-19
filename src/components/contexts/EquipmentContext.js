import React, { createContext, useState ,useContext,useEffect} from 'react';
import { getEquipments } from '../../util/APIUtils';
export const EquipmentContext = createContext();
export function useEquipments () {
	return useContext(EquipmentContext)
  }
export const EquipmentProvider = (props) => {
    const [ equipments, setEquipments ] = useState([]);
    const [ isLoading, setLoading ] = useState(true);

    const fetchEquipments = async () => {
        const res = await  getEquipments()
        const data = res.data
        setEquipments(data)
        setLoading(false)
    }
    useEffect(() => {
    fetchEquipments()
    }, [])

	return (
		<EquipmentContext.Provider value={{  equipments, setEquipments,isLoading,setLoading }}>
			{props.children}
		</EquipmentContext.Provider>
	);
};
