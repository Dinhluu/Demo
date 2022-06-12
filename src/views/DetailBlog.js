import { useParams, useHistory } from "react-router-dom";
import useFetch from "../customize/fetch";
import "./Blog.scss";

const DetaiBlog = () => {
    let { id } = useParams();
    let history = useHistory();

    const { data: dataBlogDetail, isLoading, isError }
        = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`, false)

    const handleButtonBack = () => {
        history.push("/blog");
    }
    return (
        <>
            <div className="blog-detail">
                Blog ID: {id} {isLoading === true ? 'Loading data...' : dataBlogDetail.title}
                <>
                    {/* <div className="title">{dataBlogDetail.title}</div> */}
                    <div className="content">{dataBlogDetail.body}</div>
                </>

            </div>
            <button onClick={handleButtonBack}>
                &lt;&lt;Back
            </button>

        </>
    )
}


export default DetaiBlog;