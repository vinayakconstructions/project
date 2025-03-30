import { useEffect } from "react";


export default function KeepAlive() {
    useEffect(() => {
      const pingSupabase = () => {
        fetch("/api/getProjects")
          .then(() => console.log("Supabase pinged"))
          .catch((err) => console.error("Ping failed", err));
      };
      // Run immediately on load
      pingSupabase();
  
      // Then ping every 1 minute
      console.log("Jeeeeeeeeeeeeeee")
      const interval = setInterval(pingSupabase, 60 * 1000); // 60 seconds
  
      return () => clearInterval(interval); // Cleanup on unmount
    }, []);
  
    return null; // This component runs in the background
  }
