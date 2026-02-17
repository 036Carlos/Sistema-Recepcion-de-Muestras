import {createContext,useContext,useEffect,useState  } from "react";
import {supabase} from "../index"
import { Session } from "node:inspector";
import { eventNames } from "node:process";
const AuthContext = createContext();

export const AuthContextProvider =({childre})=>{
    const[user, setUser] = useState([]);
    useEffect(()=>{
        const {data:authListener} = supabase.auth.onaAuthStateChange
        ((event, session) => {
           async (event, session)=>{
            console.log(event, session)
            if(session?.user==null){
                setUser(null)
            }else{
                setUser(session?.user)
            }
           }
        })
        return ()=>{
            authListener.subscription;
        }
    },[])
}
