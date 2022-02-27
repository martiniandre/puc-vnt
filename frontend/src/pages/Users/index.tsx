import { useQuery } from "@apollo/client";

import { useEffect, useState } from "react";
import Layout from "../../containers"
import { LOAD_USERS } from "../../graphql/Queries";
import { User } from "../../types/user";
import { UserTable } from "./Table";

const Users = () => {
    const { data, loading, error} = useQuery(LOAD_USERS);
    const [users,setUsers] = useState<User[]>([])

    useEffect(() => {
        if(data){
            setUsers(data.getAllUser)
        }
    }, [data])
    

    if(loading){
        return <h1>Loading...</h1>
    }

   if(error){
       return <h1>{error.message}</h1>
   }

    return (
        <Layout>
            <UserTable users={users}/>
        </Layout>
    )
}

export default Users