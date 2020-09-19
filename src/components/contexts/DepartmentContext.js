import React, { createContext, useState ,useContext,useEffect} from 'react';
import { getDepartments } from '../../util/APIUtils';
export const DepartmentContext = createContext();
export function useDepartments () {
	return useContext(DepartmentContext)
  }
export const DepartmentProvider = (props) => {
    const [ departments, setDepartments ] = useState([]);
    const [ isLoading, setLoading ] = useState(true);

    const fetchDepartments = async () => {
        const res = await  getDepartments()
        const data = res.data
        setDepartments(data)
        setLoading(false)
    }
    useEffect(() => {
    fetchDepartments()
    }, [])

	return (
		<DepartmentContext.Provider value={{  departments, setDepartments,isLoading,setLoading }}>
			{props.children}
		</DepartmentContext.Provider>
	);
};
