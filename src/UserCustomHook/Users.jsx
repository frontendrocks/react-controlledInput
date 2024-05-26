import useFetchData from "./FetchData";

const Users = () => {

    const url = "https://api.github.com/users/kevinclark";
    const {isError, isLoading, data} = useFetchData(url)

    if (isError) {
        return <h3>There was an error...</h3>
    }

    if (isLoading) {
        return <h3>Loading...</h3>
    }
  const { avatar_url, login, name } = data;
    return (
        <>
          <div>
          <h3>{name}</h3>
            <section>
            <img src={avatar_url} style={{width:'150px', borderRadius:'25px'}} alt={login} />  
            </section>
          </div>
        </>
     
  )
}

export default Users
